import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import TypebotEmbed from "../components/TypebotEmbed";
// @ts-ignore
import heroImg from "../src/assets/images/contact_hero_1780507471862.png";

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [useConversational, setUseConversational] = useState(false);

  const faqs = [
    { q: "How quickly can you start?", a: "We begin market mapping within 48 hours of receiving your brief. You will have an initial shortlist within 28 days." },
    { q: "Do you work on retainer or contingency?", a: "Both. We tailor our commercial model to suit your specific requirement and risk appetite. Retained search is recommended for senior executive roles." },
    { q: "Is my enquiry confidential?", a: "Absolutely. We operate under strict NDA for all client briefs and candidate searches. Discretion is the foundation of everything we do." },
  ];

  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white">
      <SEO
        title="Contact Us | Brief Power-Up Talent | UK Electrical Wholesale Headhunters"
        description="Brief Power-Up Talent on your next executive hire. UK's specialist headhunters for the electrical wholesale industry. Confidential, fast, and precise."
        keywords="Contact Power-Up Talent, Electrical Wholesale Recruitment Brief, Headhunter Enquiry UK"
        canonical="https://poweruptalent.co.uk/contact"
      />

      {/* Hero */}
      <header className="py-32 md:py-48 px-6 text-center border-b border-white/8 relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={heroImg} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" alt="Contact Power-Up Talent" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-navy-deep/20 to-navy-deep/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.04)_0%,transparent_70%)]"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold uppercase tracking-[0.4em] mb-10">
            Confidential Consultation
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tight leading-none uppercase text-glow">
            Start a<br /><span className="text-gradient">Conversation.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Brief us on your requirement or submit your CV. We respond to every enquiry within 24 hours.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Employer Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-navy-deep border border-white/8 rounded-sm p-8 md:p-12">
                <div className="mb-10">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-3">For Employers</span>
                  <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight mb-2">Submit Your Brief.</h2>
                  <div className="h-0.5 w-16 bg-primary mt-4"></div>
                </div>

                <div className="flex gap-4 mb-8 bg-black/40 p-2 rounded-sm border border-white/5">
                  <button 
                    type="button"
                    onClick={() => setUseConversational(false)} 
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all rounded-sm ${!useConversational ? 'bg-primary text-navy-deep' : 'text-slate-400 hover:text-white'}`}
                  >
                    Standard Form
                  </button>
                  <button 
                    type="button"
                    onClick={() => setUseConversational(true)} 
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all rounded-sm ${useConversational ? 'bg-primary text-navy-deep' : 'text-slate-400 hover:text-white'}`}
                  >
                    Conversational AI
                  </button>
                </div>

                {useConversational ? (
                  <TypebotEmbed typebot="powerup-employer-brief" height="500px" />
                ) : (
                  <form
                    action="mailto:poweruptalent@gmail.com"
                    method="get"
                    encType="text/plain"
                    className="space-y-6"
                  >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Full Name *</label>
                      <input name="name" type="text" placeholder="Your full name" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Company Name *</label>
                      <input name="company" type="text" placeholder="Your company" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Role Required *</label>
                      <input name="role" type="text" placeholder="e.g. Branch Manager" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Location / Region *</label>
                      <input name="location" type="text" placeholder="e.g. Greater Manchester" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Brief Description of Requirement</label>
                    <textarea name="brief" rows={5} placeholder="Tell us about the role, your business, and what you're looking for in the ideal candidate..." className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700 resize-none"></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Your Email *</label>
                      <input name="email" type="email" placeholder="your@email.com" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Phone Number</label>
                      <input name="phone" type="tel" placeholder="+44 7700 000000" className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full bg-primary text-navy-deep py-4 rounded-sm font-bold text-sm uppercase tracking-[0.2em] shadow-[0_12px_30px_rgba(255,193,7,0.2)] hover:bg-white transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                      Send Your Brief
                      <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform">bolt</span>
                    </button>
                    <p className="text-slate-600 text-xs font-light text-center mt-4">All enquiries are treated with strict confidentiality. We operate under NDA.</p>
                  </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Info panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Candidates card */}
              <div className="bg-primary/10 border border-primary/20 rounded-sm p-8">
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">For Candidates</span>
                <h3 className="text-xl font-display font-black uppercase tracking-tight mb-3">Looking for Your Next Role?</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  Join our passive talent network. We represent senior electrical wholesale professionals to the right employers — discreetly, and only with your consent.
                </p>
                <Link to="/upload-cv" className="inline-flex items-center gap-2 bg-primary text-navy-deep px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-[0.15em] hover:bg-white transition-all">
                  Submit Your CV
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>

              {/* Contact details */}
              <div className="bg-navy-deep border border-white/8 rounded-sm p-8 space-y-6">
                <h3 className="text-lg font-display font-black uppercase tracking-tight">Direct Contact</h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Email</p>
                    <a href="mailto:poweruptalent@gmail.com" className="text-white text-sm hover:text-primary transition-colors">poweruptalent@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 border border-primary/20">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/company/power-up-talent" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-primary transition-colors">Power-Up Talent</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Response Time</p>
                    <p className="text-white text-sm">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Coverage</p>
                    <p className="text-white text-sm">Nationwide — All UK Regions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ mini section */}
      <section className="py-16 md:py-24 px-6 bg-navy-deep border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/8 rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white text-base">{faq.q}</span>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>expand_more</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-white/5">
                    <p className="text-slate-400 font-light leading-relaxed text-sm pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
