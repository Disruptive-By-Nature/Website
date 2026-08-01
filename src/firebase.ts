import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjVL_w7Jn-mwxR7NkwTZ9cQEVgjqiAeE4",
  authDomain: "powercrm-daa67.firebaseapp.com",
  projectId: "powercrm-daa67",
  storageBucket: "powercrm-daa67.firebasestorage.app",
  messagingSenderId: "835647141060",
  appId: "1:835647141060:web:fd4cc9b5057def3b6c8591",
  measurementId: "G-XTY5XJ9EZ9"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

export const saveFoundingPartnerLead = async (leadData: {
  name: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'founding_partner_leads'), {
      ...leadData,
      status: 'NEW', // Inquiries start as NEW and do not decrement spots until marked CONFIRMED/SIGNED in CRM
      source: 'Founding Partner Landing Page',
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving lead to Firestore:', error);
    return null;
  }
};

/**
 * Returns count of only confirmed/signed founding partners in Firestore.
 * Raw 'NEW' submissions will NOT decrement available spots.
 */
export const getConfirmedFoundingPartnerCount = async (): Promise<number> => {
  try {
    const q = query(
      collection(db, 'founding_partner_leads'),
      where('status', 'in', ['CONFIRMED', 'SIGNED', 'APPROVED', 'ONBOARDED'])
    );
    const snapshot = await getDocs(q);
    return snapshot.size;
  } catch (error) {
    console.warn('Error fetching confirmed partner count, falling back to 0:', error);
    return 0;
  }
};
