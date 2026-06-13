
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const serviceLinks = [
    { name: "Elite Recruitment", path: "/services", desc: "Headhunting passive high-performers" },
    { name: "Strategic Recruitment", path: "/services", desc: "Executive search for senior leaders" },
    { name: "Growth Partnerships", path: "/services", desc: "Support for branch rollouts & scale" },
  ];

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "About", path: "/about" },
    { name: "Insights", path: "/insights" },
    { name: "Candidates", path: "/upload-cv" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const LI = `<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-navy-deep/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/10" : "bg-navy-deep/90 backdrop-blur-md border-b border-white/5"}`}>
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col group py-2 shrink-0" onClick={() => setIsOpen(false)}>
          <div className="flex items-center gap-0">
            <span className="font-display font-black text-2xl tracking-tight uppercase text-white">P</span>
            <span className="material-symbols-outlined text-primary font-black text-2xl -mx-0.5 group-hover:rotate-12 transition-transform duration-300">power_settings_new</span>
            <span className="font-display font-black text-2xl tracking-tight uppercase text-white">WER-UP TALENT</span>
          </div>
          <span className="text-[8px] tracking-[0.1em] text-primary/80 font-semibold uppercase leading-none mt-0.5">Electrical Wholesale Headhunters</span>
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          {links.map(link => (
            <div key={link.path} className="relative" onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)} onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}>
              <Link to={link.path} className={`text-[11px] uppercase tracking-[0.12em] font-semibold transition-all duration-200 flex items-center gap-1 py-2 border-b-2 ${isActive(link.path) ? "text-primary border-primary" : "text-slate-400 hover:text-white border-transparent hover:border-white/20"}`}>
                {link.name}
                {link.hasDropdown && <span className="material-symbols-outlined text-sm opacity-60">expand_more</span>}
              </Link>
              {link.hasDropdown && isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-navy-deep border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] py-3 rounded-sm z-50">
                  <div className="px-4 py-2 border-b border-white/5 mb-2">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70 font-bold">Our Services</span>
                  </div>
                  {serviceLinks.map((subLink, i) => (
                    <Link key={i} to={subLink.path} className="block px-4 py-3 hover:bg-white/5 group transition-colors">
                      <div className="text-[11px] uppercase tracking-[0.08em] text-white font-semibold group-hover:text-primary transition-colors">{subLink.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 font-light">{subLink.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="https://www.linkedin.com/company/power-up-talent" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <Link to="/contact" className="bg-primary text-navy-deep px-6 py-2.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] transition-all duration-300 shadow-lg whitespace-nowrap">Brief Us</Link>
        </div>
        <div className="flex lg:hidden items-center gap-3">
          <Link to="/contact" className="bg-primary text-navy-deep px-4 py-2 rounded-sm font-bold text-[10px] uppercase tracking-[0.1em] hover:bg-white transition-all">Brief Us</Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:text-primary transition-colors" aria-label="Toggle menu">
            <span className="material-symbols-outlined text-3xl">{isOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-navy-deep border-b border-white/10 shadow-2xl">
          <div className="flex flex-col px-6 py-6 gap-1">
            {[...links, { name: "Contact", path: "/contact" }].map(link => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-sm uppercase tracking-[0.12em] font-semibold py-3 px-4 rounded-sm transition-all ${isActive(link.path) ? "text-primary bg-primary/10" : "text-slate-300 hover:text-white hover:bg-white/5"}`}>
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5 mt-2 flex items-center justify-between">
              <a href="mailto:poweruptalent@gmail.com" className="text-slate-400 hover:text-primary text-xs transition-colors">poweruptalent@gmail.com</a>
              <a href="https://www.linkedin.com/company/power-up-talent" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
