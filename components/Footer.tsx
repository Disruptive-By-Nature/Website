import React from "react";
import { Link } from "react-router-dom";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Logo = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  const textSize = size === "lg" ? "text-3xl" : "text-2xl";
  const tagSize = size === "lg" ? "text-[8px]" : "text-[7px]";
  return (
    <Link to="/" className="flex flex-col group w-fit">
      <div className="flex items-center gap-0">
        <span className={`font-display font-black ${textSize} tracking-tight uppercase text-white`}>P</span>
        <span className={`material-symbols-outlined text-primary font-black ${textSize} -mx-0.5 group-hover:rotate-12 transition-transform duration-300`}>power_settings_new</span>
        <span className={`font-display font-black ${textSize} tracking-tight uppercase text-white`}>WER-UP TALENT</span>
      </div>
      <span className={`${tagSize} tracking-[0.1em] text-primary/80 font-semibold uppercase leading-none mt-1`}>Electrical Wholesale Headhunters</span>
    </Link>
  );
};

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h6 className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mb-5 flex items-center gap-2">
    <span className="w-3 h-px bg-primary"></span>{children}
  </h6>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-slate-400 hover:text-white text-sm font-light transition-all duration-200 hover:translate-x-1 block py-1"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark">
      {/* ─── PRE-FOOTER CTA ─── */}
      <div className="bg-navy-deep border-t border-b border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* CTA Text & Buttons */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-display font-black text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight">
              Ready To Hire The Best —{" "}
              <span className="text-primary">Or Become One?</span>
            </h3>
            <p className="text-slate-400 text-sm font-light mt-3 max-w-lg">
              Whether you're a business looking for exceptional talent or a professional ready for your next career move, we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-primary text-background-dark px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-[0.15em] hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20 text-center"
              >
                Hire Top Talent
              </Link>
              <Link
                to="/upload-cv"
                className="border border-white/30 text-white px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-all duration-300 text-center"
              >
                Find Your Next Role
              </Link>
            </div>
          </div>

          {/* CTA Logo / Visual */}
          <div className="hidden lg:flex flex-col items-end shrink-0">
            <div className="flex items-center gap-0">
              <span className="font-display font-black text-5xl tracking-tight uppercase text-white/10">P</span>
              <span className="material-symbols-outlined text-primary/20 font-black text-5xl -mx-0.5">power_settings_new</span>
              <span className="font-display font-black text-5xl tracking-tight uppercase text-white/10">WER-UP</span>
            </div>
            <span className="text-[9px] tracking-[0.15em] text-primary/30 font-semibold uppercase leading-none mt-1">Elite Headhunters</span>
          </div>
        </div>
      </div>

      {/* ─── MAIN FOOTER ─── */}
      <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo size="lg" />
            <p className="text-slate-500 text-sm font-light leading-relaxed max-w-sm">
              The UK's #1 Headhunters and recruitment specialists for the electrical wholesale industry.
            </p>

            {/* LinkedIn */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.linkedin.com/company/power-up-talent"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — For Clients */}
          <div className="lg:col-span-2">
            <FooterHeading>For Clients</FooterHeading>
            <nav className="flex flex-col gap-0.5">
              <FooterLink to="/services/elite-recruitment">Hire Top Talent</FooterLink>
              <FooterLink to="/services/strategic-recruitment">Executive Search</FooterLink>
              <FooterLink to="/services/growth-partnerships">Headhunting</FooterLink>
              <FooterLink to="/services">Our Process</FooterLink>
            </nav>
          </div>

          {/* Column 3 — For Candidates */}
          <div className="lg:col-span-2">
            <FooterHeading>For Candidates</FooterHeading>
            <nav className="flex flex-col gap-0.5">
              <FooterLink to="/services">Available Jobs</FooterLink>
              <FooterLink to="/insights">Career Advice</FooterLink>
              <FooterLink to="/upload-cv">Register Your CV</FooterLink>
            </nav>
          </div>

          {/* Column 4 — Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <nav className="flex flex-col gap-0.5">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/insights">Case Studies</FooterLink>
              <FooterLink to="/?scroll=testimonials">Testimonials</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Column 5 — Get In Touch */}
          <div className="lg:col-span-2">
            <FooterHeading>Get In Touch</FooterHeading>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+441onal"
                className="flex items-start gap-2.5 text-slate-400 hover:text-white text-sm font-light transition-all duration-200 group"
              >
                <span className="material-symbols-outlined text-primary/60 text-[18px] mt-0.5 group-hover:text-primary transition-colors">phone</span>
                <span>01onal 01onal</span>
              </a>
              <a
                href="mailto:hello@power-up-talent.co.uk"
                className="flex items-start gap-2.5 text-slate-400 hover:text-white text-sm font-light transition-all duration-200 group break-all"
              >
                <span className="material-symbols-outlined text-primary/60 text-[18px] mt-0.5 group-hover:text-primary transition-colors">mail</span>
                <span>hello@power-up-talent.co.uk</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 text-sm font-light">
                <span className="material-symbols-outlined text-primary/60 text-[18px] mt-0.5">location_on</span>
                <span>Lancashire, UK</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400 text-sm font-light">
                <span className="material-symbols-outlined text-primary/60 text-[18px] mt-0.5">public</span>
                <span>UK Wide Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Registered company info */}
        <div className="text-[11px] text-slate-600 font-light mb-8">
          Power-Up Talent Ltd · 128 City Road, London, EC1V 2NX · Registered in England &amp; Wales · Company No. 14590332
        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Power-Up Talent. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-600 text-xs">
            <Link className="hover:text-primary transition-all duration-200" to="/privacy">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link className="hover:text-primary transition-all duration-200" to="/terms">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
