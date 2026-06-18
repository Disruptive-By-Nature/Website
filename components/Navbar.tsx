
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/* ─── dropdown data ─── */
const clientLinks = [
  { name: "Hire Top Talent", path: "/services/elite-recruitment", desc: "Headhunting passive high-performers" },
  { name: "Executive Search", path: "/services/strategic-recruitment", desc: "Senior & leadership appointments" },
  { name: "Headhunting", path: "/services/growth-partnerships", desc: "Targeted search for key hires" },
  { name: "Our Process", path: "/services", desc: "How we deliver results" },
];

const candidateLinks = [
  { name: "Available Jobs", path: "/services", desc: "Browse current vacancies" },
  { name: "Career Advice", path: "/insights", desc: "Industry insights & tips" },
  { name: "Register Your CV", path: "/upload-cv", desc: "Get on our radar" },
];

/* ─── LinkedIn SVG (inline to avoid CDN dep) ─── */
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ─── reusable desktop dropdown ─── */
const DesktopDropdown: React.FC<{
  label: string;
  items: typeof clientLinks;
  heading: string;
  isActive: boolean;
}> = ({ label, items, heading, isActive }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const show = () => { clearTimeout(timeout.current); setOpen(true); };
  const hide = () => { timeout.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        className={`text-[10px] uppercase tracking-[0.14em] font-semibold transition-all duration-200 flex items-center gap-0.5 py-2 border-b-2 cursor-pointer ${
          isActive
            ? "text-primary border-primary"
            : "text-slate-400 hover:text-white border-transparent hover:border-white/20"
        }`}
      >
        {label}
        <span className="material-symbols-outlined text-[14px] opacity-60">expand_more</span>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-navy-deep border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] py-3 rounded-sm z-50">
          <div className="px-4 py-2 border-b border-white/5 mb-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70 font-bold">{heading}</span>
          </div>
          {items.map((sub, i) => (
            <Link
              key={i}
              to={sub.path}
              className="block px-4 py-3 hover:bg-white/5 group transition-colors"
            >
              <div className="text-[11px] uppercase tracking-[0.08em] text-white font-semibold group-hover:text-primary transition-colors">
                {sub.name}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 font-light">{sub.desc}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── mobile accordion section ─── */
const MobileAccordion: React.FC<{
  label: string;
  items: typeof clientLinks;
  onNavigate: () => void;
}> = ({ label, items, onNavigate }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm uppercase tracking-[0.12em] font-semibold py-3 px-4 rounded-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
      >
        {label}
        <span className={`material-symbols-outlined text-base transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      {open && (
        <div className="pl-6 flex flex-col gap-0.5 pb-1">
          {items.map((sub, i) => (
            <Link
              key={i}
              to={sub.path}
              onClick={onNavigate}
              className="text-[13px] uppercase tracking-[0.08em] text-slate-400 hover:text-primary py-2 px-4 rounded-sm transition-colors"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════ */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /* scroll listener */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close mobile menu on navigate */
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  /* simple nav items (no dropdown) */
  const plainLinks: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/insights" },
    { name: "Jobs", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-navy-deep/[0.98] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/10"
          : "bg-navy-deep/90 backdrop-blur-md border-b border-white/5"
      }`}
    >
      {/* ── top utility strip (email + linkedin) ── */}
      <div className="hidden lg:flex max-w-screen-xl mx-auto px-6 h-7 items-center justify-end gap-4 border-b border-white/5 text-[10px]">
        <a
          href="mailto:poweruptalent@gmail.com"
          className="flex items-center gap-1 text-slate-500 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[13px]">mail</span>
          poweruptalent@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/company/power-up-talent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ── main bar ── */}
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex flex-col group py-2 shrink-0" onClick={() => setIsOpen(false)}>
          <div className="flex items-center gap-0 leading-none">
            <span className="font-display font-black text-[22px] tracking-tight uppercase text-white">P</span>
            <span className="material-symbols-outlined text-primary font-black text-[22px] -mx-0.5 group-hover:rotate-12 transition-transform duration-300">
              power_settings_new
            </span>
            <span className="font-display font-black text-[22px] tracking-tight uppercase text-white">WER-UP</span>
          </div>
          <span className="font-display font-bold text-[11px] tracking-[0.25em] uppercase text-white/70 leading-none -mt-0.5">
            Talent
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Home */}
          <Link
            to="/"
            className={`text-[10px] uppercase tracking-[0.14em] font-semibold py-2 border-b-2 transition-all duration-200 ${
              isActive("/") ? "text-primary border-primary" : "text-slate-400 hover:text-white border-transparent hover:border-white/20"
            }`}
          >
            Home
          </Link>

          {/* For Clients dropdown */}
          <DesktopDropdown
            label="For Clients"
            items={clientLinks}
            heading="Client Services"
            isActive={location.pathname.startsWith("/services")}
          />

          {/* For Candidates dropdown */}
          <DesktopDropdown
            label="For Candidates"
            items={candidateLinks}
            heading="Candidate Resources"
            isActive={location.pathname === "/upload-cv"}
          />

          {/* About Us */}
          <Link
            to="/about"
            className={`text-[10px] uppercase tracking-[0.14em] font-semibold py-2 border-b-2 transition-all duration-200 ${
              isActive("/about") ? "text-primary border-primary" : "text-slate-400 hover:text-white border-transparent hover:border-white/20"
            }`}
          >
            About Us
          </Link>

          {/* Case Studies */}
          <Link
            to="/insights"
            className={`text-[10px] uppercase tracking-[0.14em] font-semibold py-2 border-b-2 transition-all duration-200 ${
              isActive("/insights") ? "text-primary border-primary" : "text-slate-400 hover:text-white border-transparent hover:border-white/20"
            }`}
          >
            Case Studies
          </Link>

          {/* Jobs */}
          <Link
            to="/services"
            className={`text-[10px] uppercase tracking-[0.14em] font-semibold py-2 border-b-2 transition-all duration-200 ${
              isActive("/services") && !location.pathname.includes("/services/")
                ? "text-primary border-primary"
                : "text-slate-400 hover:text-white border-transparent hover:border-white/20"
            }`}
          >
            Jobs
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`text-[10px] uppercase tracking-[0.14em] font-semibold py-2 border-b-2 transition-all duration-200 ${
              isActive("/contact") ? "text-primary border-primary" : "text-slate-400 hover:text-white border-transparent hover:border-white/20"
            }`}
          >
            Contact
          </Link>

          {/* divider */}
          <div className="w-px h-5 bg-white/10" />

          {/* LinkedIn icon */}
          <a
            href="https://www.linkedin.com/company/power-up-talent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          {/* Email icon */}
          <a
            href="mailto:poweruptalent@gmail.com"
            className="text-slate-400 hover:text-primary transition-colors"
            aria-label="Email us"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>

          {/* CTA */}
          <a
            href="https://powercrm-daa67.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-6 py-2.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] transition-all duration-300 shadow-lg whitespace-nowrap"
          >
            Book A Call
          </a>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="https://powercrm-daa67.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-4 py-2 rounded-sm font-bold text-[10px] uppercase tracking-[0.1em] hover:bg-white transition-all"
          >
            Book A Call
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">{isOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-deep border-b border-white/10 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col px-6 py-6 gap-1">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-[0.12em] font-semibold py-3 px-4 rounded-sm transition-all ${
                isActive("/") ? "text-primary bg-primary/10" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            {/* For Clients accordion */}
            <MobileAccordion label="For Clients" items={clientLinks} onNavigate={() => setIsOpen(false)} />

            {/* For Candidates accordion */}
            <MobileAccordion label="For Candidates" items={candidateLinks} onNavigate={() => setIsOpen(false)} />

            {/* remaining plain links */}
            {plainLinks
              .filter((l) => l.name !== "Home")
              .map((link) => (
                <Link
                  key={link.path + link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm uppercase tracking-[0.12em] font-semibold py-3 px-4 rounded-sm transition-all ${
                    isActive(link.path) ? "text-primary bg-primary/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            {/* footer strip */}
            <div className="pt-4 border-t border-white/5 mt-2 flex items-center justify-between">
              <a
                href="mailto:poweruptalent@gmail.com"
                className="text-slate-400 hover:text-primary text-xs transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">mail</span>
                poweruptalent@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/company/power-up-talent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
