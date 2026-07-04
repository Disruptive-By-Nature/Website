import React from "react";
import { Link } from "react-router-dom";
import logoImg from '../src/assets/images/logo.jpg';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Logo = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  const imgHeight = size === "lg" ? "h-12" : "h-8";
  return (
    <Link to="/" className="flex flex-col group w-fit">
      <img src={logoImg} alt="Power-Up Talent" className={`${imgHeight} w-auto`} />
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
    className="text-slate-300 hover:text-primary text-sm font-light transition-all duration-200 hover:translate-x-1 block py-1"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5">
      {/* ─── MAIN FOOTER ─── */}
      <div className="max-w-screen-xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo size="lg" />
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              The UK's #1 Headhunters and recruitment specialists for the electrical industry — spanning manufacturing, distribution, design, and installation.
            </p>

          </div>

          {/* Column 2 — Strategic Pillars */}
          <div className="lg:col-span-2">
            <FooterHeading>Strategic Pillars</FooterHeading>
            <nav className="flex flex-col gap-0.5">
              <FooterLink to="/services/elite-recruitment">Headhunters</FooterLink>
              <FooterLink to="/services/strategic-recruitment">Strategic Recruitment</FooterLink>
              <FooterLink to="/services/growth-partnerships">Growth Partnerships (RPO)</FooterLink>
              <FooterLink to="/services">Our Process</FooterLink>
            </nav>
          </div>

          {/* Column 3 — For Candidates */}
          <div className="lg:col-span-2">
            <FooterHeading>For Candidates</FooterHeading>
            <nav className="flex flex-col gap-0.5">
              <FooterLink to="/upload-cv">Register Your CV</FooterLink>
            </nav>
          </div>

          {/* Column 4 — Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <nav className="flex flex-col gap-0.5">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/insights">Information</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Column 5 — Get In Touch */}
          <div className="lg:col-span-2">
            <FooterHeading>Get In Touch</FooterHeading>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:poweruptalent@gmail.com"
                className="flex items-start gap-2.5 text-slate-300 hover:text-primary text-sm font-light transition-all duration-200 group break-all"
              >
                <span className="material-symbols-outlined text-primary/80 text-[18px] mt-0.5 group-hover:text-primary transition-colors">mail</span>
                <span>poweruptalent@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-300 text-sm font-light">
                <span className="material-symbols-outlined text-primary/80 text-[18px] mt-0.5">schedule</span>
                <span>Response inside 24h</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-300 text-sm font-light">
                <span className="material-symbols-outlined text-primary/80 text-[18px] mt-0.5">public</span>
                <span>Nationwide UK Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Power-Up Talent. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <Link className="hover:text-primary transition-all duration-200" to="/privacy">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link className="hover:text-primary transition-all duration-200" to="/terms">
              Terms &amp; Conditions
            </Link>
            <span className="mx-2">|</span>
            <Link className="hover:text-primary transition-all duration-200" to="/cookies">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
