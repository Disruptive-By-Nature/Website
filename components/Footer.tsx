import React from "react";
import { Link } from "react-router-dom";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5">
      {/* Pre-footer CTA strip */}
      <div className="bg-navy-deep border-b border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-display font-bold text-xl md:text-2xl tracking-tight">Ready to find your next elite leader?</p>
            <p className="text-slate-400 text-sm font-light mt-1">No job boards. No generic CVs. Pure headhunting.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link to="/contact" className="bg-primary text-navy-deep px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-[0.12em] hover:bg-white transition-all shadow-lg">Brief Us</Link>
            <Link to="/upload-cv" className="border border-white/15 text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition-all">Submit CV</Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex flex-col group w-fit">
              <div className="flex items-center gap-0">
                <span className="font-display font-black text-3xl tracking-tight uppercase text-white">P</span>
                <span className="material-symbols-outlined text-primary font-black text-3xl -mx-0.5 group-hover:rotate-12 transition-transform">power_settings_new</span>
                <span className="font-display font-black text-3xl tracking-tight uppercase text-white">WER-UP TALENT</span>
              </div>
              <span className="text-[8px] tracking-[0.1em] text-primary/80 font-semibold uppercase leading-none mt-1">Electrical Wholesale Headhunters</span>
            </Link>
            <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xs">
              The UK's only specialist headhunting firm focused exclusively on the electrical wholesale industry. We find passive high-performers your competitors don't know are available.
            </p>
            <div className="flex gap-3">
              <div className="text-[8px] font-bold uppercase tracking-[0.15em] border border-white/10 px-3 py-1.5 text-slate-500 rounded-sm">REC Member</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.15em] border border-white/10 px-3 py-1.5 text-slate-500 rounded-sm">ISO Certified</div>
            </div>
          </div>

          {/* For Employers */}
          <div className="lg:col-span-2">
            <h6 className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-primary"></span>For Employers
            </h6>
            <div className="flex flex-col gap-3">
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/services/elite-recruitment">Elite Recruitment</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/services/strategic-recruitment">Strategic Leadership</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/services/growth-partnerships">Growth Partnerships</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/about">About Us</Link>
            </div>
          </div>

          {/* For Candidates */}
          <div className="lg:col-span-2">
            <h6 className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-primary"></span>For Candidates
            </h6>
            <div className="flex flex-col gap-3">
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/upload-cv">Submit Your CV</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/insights">Industry Insights</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/about">Why Power-Up</Link>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h6 className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-primary"></span>Company
            </h6>
            <div className="flex flex-col gap-3">
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/about">Our Story</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/insights">News & Insights</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/privacy">Privacy Policy</Link>
              <Link className="text-slate-400 hover:text-white text-sm font-light transition-all hover:translate-x-1" to="/terms">Terms of Service</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h6 className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-primary"></span>Get In Touch
            </h6>
            <div className="flex flex-col gap-3">
              <a href="mailto:poweruptalent@gmail.com" className="text-slate-400 hover:text-white text-sm font-light transition-all break-all">poweruptalent@gmail.com</a>
              <p className="text-slate-600 text-xs font-light">United Kingdom</p>
              <p className="text-slate-600 text-xs font-light">Electrical Wholesale Specialists</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Power-Up Talent Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-6">
            <Link className="text-slate-600 hover:text-primary text-xs transition-all" to="/privacy">Privacy</Link>
            <Link className="text-slate-600 hover:text-primary text-xs transition-all" to="/terms">Terms</Link>
            <Link className="text-slate-600 hover:text-primary text-xs transition-all" to="/cookies">Cookies</Link>
            <div className="flex gap-3">
              <a href="mailto:poweruptalent@gmail.com" className="w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all group" aria-label="Email">
                <span className="material-symbols-outlined text-lg group-hover:scale-110">mail</span>
              </a>
              <a href="https://www.linkedin.com/company/power-up-talent" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
