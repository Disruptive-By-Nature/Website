
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
// @ts-ignore
import heroImg from '../src/assets/images/contact_hero_1780507471862.png';
import { 
  initAuth, 
  googleSignIn, 
  logout, 
  fetchRecentEmails, 
  sendEmail, 
  fetchCalendarEvents, 
  createConsultationEvent,
  GmailMessage,
  CalendarEvent
} from '../src/lib/google';
import { User } from 'firebase/auth';

const Contact: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  // Google Workspace Integration State
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [needsGoogleAuth, setNeedsGoogleAuth] = useState(true);
  const [isGoogleLoggingIn, setIsGoogleLoggingIn] = useState(false);

  // Email state
  const [recentEmails, setRecentEmails] = useState<GmailMessage[]>([]);
  const [emailsLoading, setEmailsLoading] = useState(false);
  const [emailForm, setEmailForm] = useState({ to: '', subject: 'Power-Up Talent Strategic Consultation', body: '' });
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  // Calendar state
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    summary: 'Executive Intake Consultation | Power-Up Talent',
    date: '',
    time: '10:00',
    description: 'Specialist briefing call to align electrical wholesale requirements with high-performing passive talent in the UK.'
  });
  const [isBookingEvent, setIsBookingEvent] = useState(false);

  // Action Confirmation state
  const [confirmModal, setConfirmModal] = useState<{
    show: boolean;
    type: 'email' | 'event' | null;
    title: string;
    message: string;
    actionData: any;
  }>({
    show: false,
    type: null,
    title: '',
    message: '',
    actionData: null
  });

  // Load auth state on mount
  useEffect(() => {
    const unsubscribe = initAuth(
      async (user, token) => {
        setGoogleUser(user);
        setGoogleToken(token);
        setNeedsGoogleAuth(false);
        setTimeout(() => loadWorkspaceData(), 500);
      },
      () => {
        setGoogleUser(null);
        setGoogleToken(null);
        setNeedsGoogleAuth(true);
      }
    );
    return () => unsubscribe();
  }, []);

  const loadWorkspaceData = async () => {
    setEmailsLoading(true);
    setEventsLoading(true);
    try {
      const emailList = await fetchRecentEmails(5);
      setRecentEmails(emailList);
    } catch (e) {
      console.error('Failed to load Gmail messages:', e);
    } finally {
      setEmailsLoading(false);
    }

    try {
      const eventList = await fetchCalendarEvents(5);
      setCalendarEvents(eventList);
    } catch (e) {
      console.error('Failed to load calendar events:', e);
    } finally {
      setEventsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setGoogleUser(result.user);
        setGoogleToken(result.accessToken);
        setNeedsGoogleAuth(false);
        // Load data immediately
        setTimeout(() => loadWorkspaceData(), 500);
      }
    } catch (err) {
      console.error('Google authorization failed:', err);
    } finally {
      setIsGoogleLoggingIn(false);
    }
  };

  const handleGoogleLogout = async () => {
    await logout();
    setGoogleUser(null);
    setGoogleToken(null);
    setNeedsGoogleAuth(true);
    setRecentEmails([]);
    setCalendarEvents([]);
  };

  const showConfirmDialog = (type: 'email' | 'event', title: string, message: string, actionData: any) => {
    setConfirmModal({
      show: true,
      type,
      title,
      message,
      actionData
    });
  };

  const executeConfirmedAction = async () => {
    const { type, actionData } = confirmModal;
    setConfirmModal(prev => ({ ...prev, show: false }));

    if (type === 'email') {
      setIsSendingEmail(true);
      try {
        await sendEmail(actionData.to, actionData.subject, actionData.body);
        alert('Email scheduled & dispatched successfully with permission!');
        setEmailForm({ to: '', subject: 'Power-Up Talent Strategic Consultation', body: '' });
        loadWorkspaceData();
      } catch (err: any) {
        alert('Failed to dispatch email: ' + err.message);
      } finally {
        setIsSendingEmail(false);
      }
    } else if (type === 'event') {
      setIsBookingEvent(true);
      try {
        const startISO = new Date(`${actionData.date}T${actionData.time}:00`).toISOString();
        // Assume 45 minutes duration
        const endUnix = new Date(`${actionData.date}T${actionData.time}:00`).getTime() + 45 * 60 * 1000;
        const endISO = new Date(endUnix).toISOString();

        await createConsultationEvent({
          summary: actionData.summary,
          description: actionData.description,
          startTime: startISO,
          endTime: endISO
        });
        alert('Consultation slots locked in Google Calendar successfully with permission!');
        setBookingForm({
          summary: 'Executive Intake Consultation | Power-Up Talent',
          date: '',
          time: '10:00',
          description: 'Specialist briefing call to align electrical wholesale requirements with high-performing passive talent in the UK.'
        });
        loadWorkspaceData();
      } catch (err: any) {
        alert('Failed to lock calendar slot: ' + err.message);
      } finally {
        setIsBookingEvent(false);
      }
    }
  };

  const [clientForm, setClientForm] = useState({ name: '', email: '', overview: '' });
  const [clientErrors, setClientErrors] = useState({ name: '', email: '', overview: '' });
  const [candidateForm, setCandidateForm] = useState({ name: '', mobile: '' });
  const [candidateErrors, setCandidateErrors] = useState({ name: '', mobile: '' });
  const MAX_OVERVIEW_CHARS = 500;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateClientForm = () => {
    const errors = { name: '', email: '', overview: '' };
    let isValid = true;
    if (!clientForm.name) { errors.name = 'Name is required'; isValid = false; }
    if (!clientForm.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientForm.email)) { errors.email = 'Please enter a valid email'; isValid = false; }
    if (!clientForm.overview) { errors.overview = 'Overview is required'; isValid = false; }
    setClientErrors(errors);
    return isValid;
  };

  const validateCandidateForm = () => {
    const errors = { name: '', mobile: '' };
    let isValid = true;
    if (!candidateForm.name) { errors.name = 'Name is required'; isValid = false; }
    if (!candidateForm.mobile || !/^\d{10,11}$/.test(candidateForm.mobile)) { errors.mobile = 'Please enter a valid mobile number'; isValid = false; }
    setCandidateErrors(errors);
    return isValid;
  };

  return (
    <div className="pt-24 pb-0 bg-background-dark min-h-screen text-white overflow-hidden">
      <SEO 
        title="Contact Us | Strategic Talent Acquisition for Electrical Wholesale | Power-Up Talent"
        description="Get in touch with Power-Up Talent for strategic talent acquisition in the UK electrical wholesale sector. Submit your executive brief or upload your CV."
        keywords="Contact Power-Up Talent, Electrical Wholesale Recruitment Contact, Submit CV Electrical Wholesale, Executive Search Electrical Wholesale"
        canonical="https://poweruptalent.co.uk/contact"
      />
      {/* Header */}
      <div className="relative py-40 md:py-60 px-6 border-b border-white/5 overflow-hidden bg-navy-deep">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={heroImg}
            className="absolute inset-0 w-full h-full object-cover opacity-[0.24] grayscale mix-blend-overlay object-center"
            referrerPolicy="no-referrer"
            alt="Contact Power-Up Talent London Consultancy Offices"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/20 to-navy-deep/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,193,7,0.15)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto relative z-10 text-center animate-slide-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-12">
            UK Sector Coverage
          </div>
          <h1 className="text-6xl md:text-[10rem] font-display font-bold mb-8 tracking-tighter leading-none text-white uppercase text-glow">
            Connect <br/><span className="text-primary italic">Strategy.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Strategic briefing for clients and elite submissions for sector professionals.
          </p>
        </div>
      </div>

      <section className="max-w-screen-xl mx-auto px-6 -mt-20 md:-mt-32 relative z-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 shadow-2xl overflow-hidden border border-white/5">
          
          {/* Left: Strategic Briefing (Clients) */}
          <div className="lg:col-span-6 bg-card-dark p-8 md:p-16 lg:p-20 relative overflow-hidden border-r border-white/5">
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-sm shadow-2xl">
                  <span className="material-symbols-outlined text-black font-bold text-4xl">business_center</span>
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Strategic Briefing</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-1">Client Consultation</p>
                </div>
              </div>
              
              <form id="contact-form" className="space-y-12" onSubmit={(e) => { e.preventDefault(); if (validateClientForm()) { /* Submit logic */ } }}>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Company Lead Name</label>
                  <input type="text" value={clientForm.name} onChange={(e) => setClientForm({...clientForm, name: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-sm p-6 text-base text-white focus:border-primary outline-none transition-all placeholder:text-slate-800" placeholder="e.g. Thomas Wilson" />
                  {clientErrors.name && <p className="text-red-500 text-xs mt-1">{clientErrors.name}</p>}
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Work Email</label>
                  <input type="email" value={clientForm.email} onChange={(e) => setClientForm({...clientForm, email: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-sm p-6 text-base text-white focus:border-primary outline-none transition-all placeholder:text-slate-800" placeholder="t.wilson@wholesale.co.uk" />
                  {clientErrors.email && <p className="text-red-500 text-xs mt-1">{clientErrors.email}</p>}
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Brief Overview</label>
                  <textarea rows={4} maxLength={MAX_OVERVIEW_CHARS} value={clientForm.overview} onChange={(e) => setClientForm({...clientForm, overview: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-sm p-6 text-base text-white focus:border-primary outline-none transition-all placeholder:text-slate-800 resize-none" placeholder="Detail your operational requirements..." />
                  <div className="flex justify-between text-xs text-slate-500">
                    {clientErrors.overview && <p className="text-red-500">{clientErrors.overview}</p>}
                    <span className="ml-auto">{clientForm.overview.length}/{MAX_OVERVIEW_CHARS}</span>
                  </div>
                </div>
                <button type="submit" className="w-full bg-primary text-black font-bold py-8 rounded-sm text-xs uppercase tracking-[0.5em] hover:bg-white transition-all flex items-center justify-center gap-4 shadow-2xl group">
                  Request Sync <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">send</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right: Executive Submission (Candidates) */}
          <div className="lg:col-span-6 bg-black/40 backdrop-blur-3xl p-8 md:p-16 lg:p-20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-sm border border-white/20">
                  <span className="material-symbols-outlined text-primary font-bold text-4xl">person_pin</span>
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Executive Hub</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-1">CV & Profile Submission</p>
                </div>
              </div>

              <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); if (validateCandidateForm()) { /* Submit logic */ } }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Full Name</label>
                    <input type="text" value={candidateForm.name} onChange={(e) => setCandidateForm({...candidateForm, name: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-sm p-6 text-base text-white focus:border-primary outline-none transition-all placeholder:text-slate-800" placeholder="e.g. David Smith" />
                    {candidateErrors.name && <p className="text-red-500 text-xs mt-1">{candidateErrors.name}</p>}
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Mobile No.</label>
                    <input type="tel" value={candidateForm.mobile} onChange={(e) => setCandidateForm({...candidateForm, mobile: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-sm p-6 text-base text-white focus:border-primary outline-none transition-all placeholder:text-slate-800" placeholder="07123 456789" />
                    {candidateErrors.mobile && <p className="text-red-500 text-xs mt-1">{candidateErrors.mobile}</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Professional File (CV)</label>
                  <div 
                    onDragOver={handleDragOver} 
                    onDragLeave={handleDragLeave} 
                    onDrop={handleDrop} 
                    className={`relative border-2 border-dashed rounded-sm p-12 flex flex-col items-center justify-center transition-all cursor-pointer group ${isDragging ? 'border-primary bg-primary/10' : 'border-white/10 bg-black/20 hover:border-primary/50'}`}
                  >
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform">cloud_upload</span>
                    <p className="text-sm font-display font-bold text-white uppercase tracking-tight">Drop your <span className="text-primary italic">CV Here</span></p>
                  </div>
                </div>

                <button type="submit" className="w-full border border-white/20 text-white font-bold py-8 rounded-sm text-xs uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group">
                  Submit to Hub <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">bolt</span>
                </button>
              </form>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 space-y-8">
               <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Global Hub</p>
                  <a href="mailto:poweruptalent@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">poweruptalent@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Google Workspace Integration Suite (Client & Candidate Real-time Portal) */}
      <section id="google-suite-portal" className="max-w-screen-xl mx-auto px-6 pb-40 relative z-20">
        <div className="bg-card-dark border border-white/5 rounded-sm shadow-2xl p-8 md:p-16 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle glow layers */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                Active Workspace Suite
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white">
                Client & Candidate <span className="text-primary italic">Workspace.</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light mt-2 max-w-2xl leading-relaxed">
                Connect your Google Account to access real-time calendar availability and draft instant email consultations directly via our executive portal.
              </p>
            </div>
            
            {googleUser ? (
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-sm">
                <div className="flex items-center gap-3">
                  {googleUser.photoURL ? (
                    <img src={googleUser.photoURL} alt={googleUser.displayName || 'User'} className="w-10 h-10 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">{googleUser.displayName?.[0] || 'U'}</div>
                  )}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Authenticated as</p>
                    <p className="text-sm font-bold text-white">{googleUser.displayName || googleUser.email}</p>
                  </div>
                </div>
                <button 
                  onClick={handleGoogleLogout}
                  className="sm:ml-6 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all"
                >
                  Disconnect
                </button>
              </div>
            ) : null}
          </div>

          {!googleUser ? (
            <div className="flex flex-col items-center justify-center text-center py-20 max-w-2xl mx-auto">
              <span className="material-symbols-outlined text-primary text-6xl mb-8 animate-pulse">lock_person</span>
              <h3 className="text-2xl font-display font-medium text-white mb-6 uppercase tracking-wide">Access Real-time Scheduler & Email Briefs</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-12">
                Gain instant visibility over open recruitment queues and sync your consultations. Submitting a brief automatically places events on your personal Google Calendar and lets you coordinate in seconds.
              </p>
              
              {/* Official Google GSI-Style Button */}
              <button 
                onClick={handleGoogleLogin}
                disabled={isGoogleLoggingIn}
                className="gsi-material-button relative overflow-hidden transition-transform active:scale-95 duration-200"
              >
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                  <div className="gsi-material-button-icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block' }}>
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                  </div>
                  <span className="gsi-material-button-contents font-sans font-bold uppercase tracking-widest text-xs">
                    {isGoogleLoggingIn ? 'Syncing securely...' : 'Connect Workspace with Google'}
                  </span>
                </div>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
              
              {/* Left Column: Google Calendar Booking & Events */}
              <div className="space-y-12">
                <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                  <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
                  <div>
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white">Elite Calendar Sync</h3>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">Google Calendar</p>
                  </div>
                </div>

                {/* Event Creation Form */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!bookingForm.date) {
                      alert('Please select a valid consultation date.');
                      return;
                    }
                    showConfirmDialog(
                      'event',
                      'Confirm Calendar Booking',
                      `Schedule a 45-minute "${bookingForm.summary}" session for ${bookingForm.date} at ${bookingForm.time}? This will add an event to your Google Calendar.`,
                      bookingForm
                    );
                  }}
                  className="space-y-6 bg-white/5 p-6 rounded-sm border border-white/5"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Meeting Title</label>
                    <input 
                      type="text" 
                      value={bookingForm.summary} 
                      onChange={(e) => setBookingForm({ ...bookingForm, summary: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white focus:border-primary outline-none" 
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Target Date</label>
                      <input 
                        type="date" 
                        value={bookingForm.date} 
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white focus:border-primary outline-none" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Slot Time</label>
                      <select 
                        value={bookingForm.time} 
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white focus:border-primary outline-none"
                      >
                        <option value="09:00">09:00 (GMT)</option>
                        <option value="10:00">10:00 (GMT)</option>
                        <option value="11:00">11:00 (GMT)</option>
                        <option value="13:00">13:00 (GMT)</option>
                        <option value="14:00">14:00 (GMT)</option>
                        <option value="15:00">15:00 (GMT)</option>
                        <option value="16:00">16:00 (GMT)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Meeting Detail</label>
                    <textarea 
                      rows={3}
                      value={bookingForm.description} 
                      onChange={(e) => setBookingForm({ ...bookingForm, description: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white focus:border-primary outline-none resize-none" 
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isBookingEvent}
                    className="w-full bg-primary text-black font-bold py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-xl"
                  >
                    {isBookingEvent ? 'Securing Slot...' : 'Request Slot confirmation'}
                    <span className="material-symbols-outlined text-base">check_circle</span>
                  </button>
                </form>

                {/* Upcoming Events List */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.34em] text-slate-400">Scheduled Sessions (Primary Calendar)</h4>
                  {eventsLoading ? (
                    <div className="text-slate-500 text-xs py-4 flex items-center gap-2"><span className="w-4 h-4 border border-t-transparent border-primary/40 rounded-full animate-spin"></span> Syncing calendars...</div>
                  ) : calendarEvents.length === 0 ? (
                    <p className="text-slate-600 text-xs py-4">No future executive conferences found starting from now.</p>
                  ) : (
                    <div className="divide-y divide-white/5 bg-white/5 border border-white/5 p-4 rounded-sm space-y-4">
                      {calendarEvents.map((evt) => (
                        <div key={evt.id} className="pt-3 first:pt-0">
                          <p className="text-xs font-bold text-white uppercase">{evt.summary}</p>
                          <div className="flex gap-4 text-[10px] text-slate-500 font-bold uppercase mt-1">
                            <span>{evt.start?.dateTime ? new Date(evt.start.dateTime).toLocaleDateString() : evt.start?.date}</span>
                            <span>{evt.start?.dateTime ? new Date(evt.start.dateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'All Day'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Gmail Messaging Portal */}
              <div className="space-y-12">
                <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                  <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                  <div>
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white">Gmail Integration</h3>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">Inbox & Dispatch</p>
                  </div>
                </div>

                {/* Send Email Form */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!emailForm.to) {
                      alert('Please specify a recipient email address.');
                      return;
                    }
                    showConfirmDialog(
                      'email',
                      'Confirm Email Dispatch',
                      `Send out this briefing email on your behalf using Gmail? Recipient: "${emailForm.to}" Subject: "${emailForm.subject}".`,
                      emailForm
                    );
                  }}
                  className="space-y-6 bg-white/5 p-6 rounded-sm border border-white/5"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Send Briefing To</label>
                    <input 
                      type="email" 
                      value={emailForm.to} 
                      onChange={(e) => setEmailForm({ ...emailForm, to: e.target.value })}
                      placeholder="e.g. board@electrical-wholesale.co.uk"
                      className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white focus:border-primary outline-none" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Subject Line</label>
                    <input 
                      type="text" 
                      value={emailForm.subject} 
                      onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white focus:border-primary outline-none" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Email Message</label>
                    <textarea 
                      rows={4}
                      value={emailForm.body} 
                      onChange={(e) => setEmailForm({ ...emailForm, body: e.target.value })}
                      placeholder="Write your email consultation message details here..."
                      className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white focus:border-primary outline-none resize-none" 
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSendingEmail}
                    className="w-full border border-white/20 text-white font-bold py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-xl"
                  >
                    {isSendingEmail ? 'Dispatching Message...' : 'Send secure brief'}
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                </form>

                {/* Recent Briefings (Gmail Inbox fetch) */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.34em] text-slate-400">Recent Briefing Messages (Gmail Sync)</h4>
                  {emailsLoading ? (
                    <div className="text-slate-500 text-xs py-4 flex items-center gap-2"><span className="w-4 h-4 border border-t-transparent border-primary/40 rounded-full animate-spin"></span> Fetching communications...</div>
                  ) : recentEmails.length === 0 ? (
                    <p className="text-slate-600 text-xs py-4">No recent briefing communications found.</p>
                  ) : (
                    <div className="divide-y divide-white/5 bg-white/5 border border-white/5 p-4 rounded-sm space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar">
                      {recentEmails.map((msg) => (
                        <div key={msg.id} className="pt-3 first:pt-0">
                          <div className="flex justify-between items-start gap-4">
                            <p className="text-xs font-bold text-white truncate">{msg.subject}</p>
                            <span className="text-[9px] text-slate-500 font-bold shrink-0">{msg.date ? new Date(msg.date).toLocaleDateString([], {month:'short', day:'numeric'}) : ''}</span>
                          </div>
                          <p className="text-[10px] text-primary truncate mt-1">{msg.from}</p>
                          <p className="text-[11px] text-slate-400 font-light line-clamp-1 mt-1">{msg.snippet}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* Structured Confirmation Dialog (Modal) - Prerequisite for Mutating Workspace data */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 z-[200]">
          <div className="bg-navy-deep border border-primary/30 max-w-lg w-full p-8 rounded-sm shadow-2xl relative animate-fade-in text-left">
            <div className="flex items-center gap-4 text-primary mb-6">
              <span className="material-symbols-outlined text-4xl">warning</span>
              <h4 className="text-2xl font-display font-bold uppercase tracking-tight text-white">{confirmModal.title}</h4>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              {confirmModal.message}
            </p>

            <div className="flex justify-end gap-4 font-bold text-xs">
              <button 
                onClick={() => setConfirmModal(prev => ({ ...prev, show: false }))}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-sm uppercase tracking-widest transition-all"
              >
                No, Cancel
              </button>
              <button 
                onClick={executeConfirmedAction}
                className="bg-primary hover:bg-white text-black px-8 py-4 rounded-sm uppercase tracking-widest transition-all flex items-center gap-2"
              >
                Yes, Authorize Action <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
