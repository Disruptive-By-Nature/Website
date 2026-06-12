import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);


// Configure Google OAuth Provider with core scopes
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
provider.addScope('https://www.googleapis.com/auth/gmail.send');
provider.addScope('https://www.googleapis.com/auth/calendar');

let isSigningIn = false;
let cachedAccessToken: string | null = null;

// Initialize auth state listener. Call this on app load.
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Initiate Google Sign-In pop-up
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to retrieve access token from Google authentication.');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Core Sign-In error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logout = async () => {
  await auth.signOut();
  cachedAccessToken = null;
};

// ==========================================
// Gmail API Integration Services
// ==========================================

export interface GmailMessage {
  id: string;
  snippet: string;
  subject?: string;
  from?: string;
  date?: string;
  body?: string;
}

// Fetch list of recent email messages
export const fetchRecentEmails = async (limit: number = 5): Promise<GmailMessage[]> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Unauthenticated. Access token is missing or expired.');

  const response = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=${limit}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'Failed to list Gmail messages.');
  }

  const data = await response.json();
  if (!data.messages) return [];

  // Parallel fetch individual message details
  const messageDetailPromises = data.messages.map(async (msg: { id: string }) => {
    const detailResponse = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=full`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!detailResponse.ok) return { id: msg.id, snippet: '' };
    const detail = await detailResponse.json();

    const headers = detail.payload?.headers || [];
    const subject = headers.find((h: any) => h.name.toLowerCase() === 'subject')?.value || 'No Subject';
    const from = headers.find((h: any) => h.name.toLowerCase() === 'from')?.value || 'Unknown Sender';
    const date = headers.find((h: any) => h.name.toLowerCase() === 'date')?.value || '';

    return {
      id: detail.id,
      snippet: detail.snippet,
      subject,
      from,
      date,
    };
  });

  return Promise.all(messageDetailPromises);
};

// Send an email (via custom raw MIME base64 encoding as required by Gmail API)
export const sendEmail = async (to: string, subject: string, bodyText: string): Promise<boolean> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Unauthenticated. Access token is missing or expired.');

  // Construct MIME email string
  const utf8Subject = `=?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`;
  const emailLines = [
    `To: ${to}`,
    'Content-Type: text/plain; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    bodyText,
  ];
  const email = emailLines.join('\r\n');

  // Convert MIME email standard to Base64Url Format
  const encodedEmail = btoa(unescape(encodeURIComponent(email)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const response = await fetch(
    'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: encodedEmail }),
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'Failed to send Gmail message.');
  }

  return true;
};

// ==========================================
// Google Calendar API Integration Services
// ==========================================

export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
}

// Fetch calendar events
export const fetchCalendarEvents = async (maxResults: number = 10): Promise<CalendarEvent[]> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Unauthenticated. Access token is missing or expired.');

  // Get events starting from now
  const nowRaw = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(
    nowRaw
  )}&maxResults=${maxResults}&orderBy=startTime&singleEvents=true`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'Failed to list Google Calendar events.');
  }

  const data = await response.json();
  return data.items || [];
};

// Create a new calendar event for consultation booking
export const createConsultationEvent = async (eventData: {
  summary: string;
  description: string;
  startTime: string; // ISO String
  endTime: string; // ISO String
}): Promise<CalendarEvent> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Unauthenticated. Access token is missing or expired.');

  const body = {
    summary: eventData.summary,
    description: eventData.description,
    start: {
      dateTime: eventData.startTime,
      timeZone: 'Europe/London',
    },
    end: {
      dateTime: eventData.endTime,
      timeZone: 'Europe/London',
    },
    reminders: {
      useDefault: true,
    },
  };

  const response = await fetch(
    'https://www.googleapis.com/calendar/v3/calendars/primary/events',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'Failed to create Google Calendar event.');
  }

  return response.json();
};
