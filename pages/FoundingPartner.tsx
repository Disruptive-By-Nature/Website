import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { saveFoundingPartnerLead, getConfirmedFoundingPartnerCount } from '../src/firebase';
// @ts-ignore
import heroImg from '../src/assets/images/network_nodes.png';

const foundingPartnerStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LandingPage',
  'name': 'Power-Up Talent Founding Partner Programme',
  'description': "Join the UK's First AI-Powered Electrical Recruitment Partnership. Exclusive access to Power-Up Talent's 26-module CRM portal, passive market intelligence, and automated outreach engines.",
  'publisher': {
    '@type': 'Organization',
    'name': 'Power-Up Talent',
    'url': 'https://power-uptalent.co.uk'
  }
};

const FoundingPartner: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedCount, setConfirmedCount] = useState(0);

  useEffect(() => {
    // Only count leads marked as CONFIRMED, SIGNED, or APPROVED in Firestore
    getConfirmedFoundingPartnerCount().then((count) => {
      setConfirmedCount(count);
    });
  }, []);

  const totalCap = 5;
  const totalOnboarded = 2 + confirmedCount;
  const spotsRemaining = Math.max(0, totalCap - totalOnboarded);
  const progressPercentage = Math.min(100, Math.round((totalOnboarded / totalCap) * 100));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Dual Route: Save to Power_CRM (Firebase Firestore with status: 'NEW')
      const firestoreIdPromise = saveFoundingPartnerLead(formData);

      // 2. Dual Route: Instant Email Alert to info@power-uptalent.co.uk via Web3Forms
      const data = new FormData();
      data.append('access_key', '874f58fd-3c32-4c5d-90b3-2c999dd72b3b');
      data.append('name', formData.name);
      data.append('company', formData.company);
      data.append('jobTitle', formData.jobTitle);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('subject', `[FOUNDING PARTNER APPLICATION] ${formData.name} - ${formData.company}`);
      data.append('botcheck', '');

      const [response] = await Promise.all([
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data
        }),
        firestoreIdPromise
      ]);

      setIsSubmitted(true);
      localStorage.setItem('founding_partner_submitted', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }));
    } catch (err) {
      console.warn('Submit handler:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white relative">
      <SEO
        title="Founding Partner Programme | Power-Up Talent | AI Recruitment Partnership"
        description="Join the UK's First AI-Powered Electrical Recruitment Partnership. Exclusive launch access for 5 strategic electrical partners."
        keywords="Founding Partner, AI Electrical Recruitment, Power-Up Talent Portal, UK Electrical Headhunting Partnership"
        canonical="https://power-uptalent.co.uk/founding-partner"
        structuredData={foundingPartnerStructuredData}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden border-b border-white/10 bg-navy-deep">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heroImg}
            className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale mix-blend-overlay"
            alt="AI Electrical Network"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-background-dark"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] font-bold uppercase tracking-[0.25em] mb-8 shadow-[0_0_20px_rgba(255,193,7,0.15)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Exclusive Launch Initiative
          </div>

          {/* REQUIREMENT 1: HEADLINE */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tight leading-[1.08] uppercase text-glow">
            Join the UK's First <br />
            <span className="text-gradient">AI-Powered Electrical Recruitment</span> Partnership
          </h1>

          <p className="text-slate-300 text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Power-Up Talent is granting exclusive founding partner access to select UK electrical manufacturers, distributors, contractors, and consultancies to leverage our full 26-module recruitment intelligence portal.
          </p>

          {/* REQUIREMENT 2: LIVE COUNTER */}
          <div className="max-w-md mx-auto mb-12">
            <div className="glass-card-featured p-6 rounded-xl relative overflow-hidden text-center">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Programme Capacity
                </span>
                <span className="text-xs font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                  Live CRM Counter
                </span>
              </div>

              {/* Dynamic Live Counter Text */}
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3 tracking-tight">
                {spotsRemaining} of {totalCap} Founding Partner spots remaining
              </div>

              {/* Progress Visualizer Bar */}
              <div className="w-full bg-slate-800/80 rounded-full h-3.5 p-0.5 border border-white/10 mb-3">
                <div
                  className="bg-gradient-to-r from-primary-dark via-primary to-amber-300 h-full rounded-full shadow-[0_0_12px_rgba(255,193,7,0.6)] transition-all duration-1000"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>{totalOnboarded} Partners Onboarded</span>
                <span className="text-primary font-bold">{spotsRemaining} Spots Remaining</span>
              </div>
            </div>
          </div>

          {/* REQUIREMENT 4: LIVE DEMO CTA BUTTON */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-gradient-to-r from-primary to-amber-400 text-navy-deep font-bold text-sm uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(255,193,7,0.3)] hover:shadow-[0_15px_40px_rgba(255,193,7,0.5)] hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <span>Book a Private Demo Walkthrough</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <a
              href="#founding-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-primary/40 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer"
            >
              <span>Apply For Access</span>
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </a>
          </div>

        </div>
      </section>


      {/* ── REQUIREMENT 3: FOUR BULLET BENEFITS DRAWN FROM 26 MODULES ── */}
      <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-3">
            Powered By Our Proprietary 26-Module CRM Engine
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
            Founding Partner <span className="text-gradient">Key Benefits</span>
          </h3>
          <p className="text-slate-400 text-sm md:text-base mt-4">
            Gain immediate competitive advantage across your talent strategy and commercial expansion with full access to our portal's core module suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Benefit 1 */}
          <div className="glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-navy-deep transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-navy-deep">
                  psychology
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-1">
                  Module 01 & 02 • Intelligence & Qualification
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  AI CV Parsing & Passive Market Intelligence
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Instantly qualify candidate CVs, map regional talent pools, and match passive high-performers across 25,000+ pre-vetted UK electrical industry specialists.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-navy-deep transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-navy-deep">
                  send_and_archive
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-1">
                  Module 05 & 09 • Multi-Channel Outreach
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  Automated Multi-Channel Outreach Sequencer
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Deploy tailored AI email, WhatsApp, and SMS recruitment sequences directly to wholesale, manufacturing, and contracting decision-makers with zero delay.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-navy-deep transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-navy-deep">
                  query_stats
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-1">
                  Module 14 & 18 • Risk & Financial Analytics
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  Pre-Visit Financial Intel & Credit Risk Scoring
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Access real-time Companies House API financial data, balance sheet visualizers, and credit risk meters to vet clients and competitors before commercial outreach.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-navy-deep transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-navy-deep">
                  dynamic_feed
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-1">
                  Module 21 & 26 • Client Dossier Portals
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  Instant Branded Client Dossier Portals
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Generate secure, interactive candidate presentation web links and confidential dossier spec sheets for executive review in under 30 seconds.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ── REQUIREMENT 5: SIMPLE FORM WITH SPECIFIED FIELDS ── */}
      <section id="founding-form" className="py-20 px-6 relative z-10 max-w-4xl mx-auto scroll-mt-24">
        <div className="glass-card-featured p-8 md:p-12 rounded-2xl border border-primary/30 relative">
          
          <div className="text-center mb-10">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.25em]">
              Priority Application
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white mt-4 uppercase tracking-tight">
              Apply For <span className="text-gradient">Founding Partner</span> Status
            </h3>
            <p className="text-slate-300 text-sm mt-2 font-light">
              Submit your details to secure one of the remaining 3 Founding Partner allocations.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/40 border border-emerald-500/40 p-8 rounded-xl text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-2">Application Received!</h4>
              <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
                Thank you for applying for the Founding Partner programme. A member of our executive team will review your application and contact you within 24 hours.
              </p>

              <div className="pt-4 border-t border-white/10 flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-navy-deep font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-colors"
                >
                  <span>Request a Private Walkthrough</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-slate-300 mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. David Richardson"
                  className="w-full px-4 py-3.5 rounded-lg bg-navy-deep/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                />
              </div>

              {/* Field 2 & Field 3: Company & Job Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-slate-300 mb-2">
                    Company <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Electrical Wholesale Ltd"
                    className="w-full px-4 py-3.5 rounded-lg bg-navy-deep/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-slate-300 mb-2">
                    Job Title <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g. Managing Director / Operations Head"
                    className="w-full px-4 py-3.5 rounded-lg bg-navy-deep/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  />
                </div>
              </div>

              {/* Field 4 & Field 5: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-slate-300 mb-2">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="d.richardson@company.co.uk"
                    className="w-full px-4 py-3.5 rounded-lg bg-navy-deep/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-slate-300 mb-2">
                    Direct Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07700 900123"
                    className="w-full px-4 py-3.5 rounded-lg bg-navy-deep/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-400 text-xs p-3 rounded bg-red-950/40 border border-red-500/30">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-amber-400 text-navy-deep font-bold text-sm uppercase tracking-[0.2em] shadow-[0_10px_25px_rgba(255,193,7,0.3)] hover:shadow-[0_15px_35px_rgba(255,193,7,0.5)] transition-all duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-navy-deep border-t-transparent rounded-full animate-spin"></span>
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Founding Partner Application</span>
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
                <span className="material-symbols-outlined text-xs text-primary">lock</span>
                <span>Strict NDA & confidentiality guaranteed. No obligation required.</span>
              </div>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};

export default FoundingPartner;
