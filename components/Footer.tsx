
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-background-dark border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            <Link to="/" className="flex flex-col group">
              <div className="flex items-center gap-0">
                <span className="font-display font-black text-4xl tracking-tighter uppercase text-white">P</span>
                <span className="material-symbols-outlined text-primary font-black text-4xl -mx-0.5 group-hover:rotate-12 transition-transform">power_settings_new</span>
                <span className="font-display font-black text-4xl tracking-tighter uppercase text-white">WER-UP TALENT</span>
              </div>
              <span className="text-[11px] tracking-[0.15em] text-primary font-bold uppercase leading-none mt-2">
                RECRUITMENT AND HEADHUNTING SPECIALISTS
              </span>
            </Link>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-sm">
              Premium executive search for the UK electrical sector. Blending technical grit with data precision and absolute discretion.
            </p>
            <div className="flex gap-4 pt-2">
               <div className="text-[9px] font-bold uppercase tracking-[0.3em] border border-white/10 px-4 py-2 text-slate-500 rounded-sm">REC MEMBER</div>
               <div className="text-[9px] font-bold uppercase tracking-[0.3em] border border-white/10 px-4 py-2 text-slate-500 rounded-sm">ISO CERTIFIED</div>
            </div>
          </div>
          
          {/* Navigation (The Site Map) */}
          <div className="lg:col-span-6">
            <h6 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary"></span> Navigation
            </h6>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-12 text-base font-light">
              <div className="flex flex-col gap-4">
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/">Home</Link>
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/about">About Us</Link>
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/news">Latest News</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/services">Services</Link>
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/contact">Contact</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/upload-cv">CV Hub</Link>
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/privacy">Privacy</Link>
                <Link className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-all" to="/terms">Terms</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
             <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
               © {new Date().getFullYear()} Power-Up Talent. UK Headhunting Specialists.
             </p>
             <div className="flex gap-6">
               <Link className="text-slate-600 hover:text-primary hover:underline underline-offset-4 text-[10px] font-bold uppercase tracking-widest transition-all" to="/privacy">Privacy Policy</Link>
               <Link className="text-slate-600 hover:text-primary hover:underline underline-offset-4 text-[10px] font-bold uppercase tracking-widest transition-all" to="/terms">Terms of Service</Link>
             </div>
          </div>
          <div className="flex gap-4">
            <a href="mailto:poweruptalent@gmail.com" className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-xl group">
               <span className="material-symbols-outlined text-xl group-hover:scale-110">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
