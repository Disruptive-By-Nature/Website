
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

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
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 via-background-dark/80 to-background-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.15)_0%,transparent_50%)]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-xl mx-auto relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-[0.5em] mb-12">
            UK Sector Coverage
          </div>
          <h1 className="text-6xl md:text-[10rem] font-display font-bold mb-8 tracking-tighter leading-none text-white uppercase text-glow">
            Connect <br/><span className="text-primary italic">Strategy.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Strategic briefing for clients and elite submissions for sector professionals.
          </p>
        </motion.div>
      </div>

      <section className="max-w-screen-xl mx-auto px-6 -mt-20 md:-mt-32 relative z-20 pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 shadow-2xl overflow-hidden border border-white/5"
        >
          
          {/* Left: Strategic Briefing (Clients) */}
          <div className="lg:col-span-6 bg-card-dark p-8 md:p-16 lg:p-20 relative overflow-hidden border-r border-white/5">
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-sm shadow-2xl">
                  <span className="material-symbols-outlined text-navy-deep font-bold text-4xl">business_center</span>
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Strategic Briefing</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-1">Client Consultation</p>
                </div>
              </div>
              
              <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); if (validateClientForm()) { /* Submit logic */ } }}>
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
                <button type="submit" className="w-full bg-primary text-navy-deep font-bold py-8 rounded-sm text-xs uppercase tracking-[0.5em] hover:bg-white hover:text-navy-deep transition-all flex items-center justify-center gap-4 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-primary/40 group">
                  Request Sync <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">send</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right: Executive Submission (Candidates) */}
          <div className="lg:col-span-6 bg-black/40 backdrop-blur-3xl p-8 md:p-16 lg:p-20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
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
                    className={`relative border-2 border-dashed rounded-sm p-12 flex flex-col items-center justify-center transition-all cursor-pointer group ${isDragging ? 'border-primary bg-primary/10' : 'border-white/10 bg-black/20 hover:border-primary/30'}`}
                  >
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform">cloud_upload</span>
                    <p className="text-sm font-display font-bold text-white uppercase tracking-tight">Drop your <span className="text-primary italic">CV Here</span></p>
                  </div>
                </div>

                <button type="submit" className="w-full border border-white/20 text-white font-bold py-8 rounded-sm text-xs uppercase tracking-[0.5em] hover:bg-white hover:text-navy-deep transition-all flex items-center justify-center gap-4 group">
                  Submit to Hub <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">bolt</span>
                </button>
              </form>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 space-y-8">
               <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-navy-deep transition-all">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Global Hub</p>
                  <a href="mailto:poweruptalent@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">poweruptalent@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
