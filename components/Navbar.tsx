
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const methodologyLinks = [
    { name: 'Elite Recruitment', path: '/services/elite-recruitment' },
    { name: 'Strategic Recruitment', path: '/services/strategic-recruitment' },
    { name: 'Growth Partnerships', path: '/services/growth-partnerships' },
  ];

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Methodology', path: '/services', hasDropdown: true },
    { name: 'About Us', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-navy-deep/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-500">
      <div className="max-w-screen-xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col group py-2" onClick={() => setIsOpen(false)}>
          <div className="flex items-center gap-0">
            <span className="font-display font-black text-3xl tracking-tighter uppercase text-white">P</span>
            <span className="material-symbols-outlined text-primary font-black text-3xl -mx-0.5 group-hover:rotate-12 transition-transform">power_settings_new</span>
            <span className="font-display font-black text-3xl tracking-tighter uppercase text-white">WER-UP TALENT</span>
          </div>
          <span className="text-[9px] tracking-[0.15em] text-primary font-bold uppercase leading-none mt-1">
            RECRUITMENT AND HEADHUNTING SPECIALISTS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map(link => (
            <div key={link.path} className="relative" onMouseEnter={() => link.hasDropdown && setIsMethodologyOpen(true)} onMouseLeave={() => link.hasDropdown && setIsMethodologyOpen(false)}>
              <Link 
                to={link.path} 
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:translate-y-[-1px] ${location.pathname === link.path ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
              {link.hasDropdown && isMethodologyOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-navy-deep border border-white/10 shadow-2xl py-2">
                  {methodologyLinks.map(subLink => (
                    <Link key={subLink.path} to={subLink.path} className="block px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-slate-400 hover:text-white hover:bg-white/5">
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="bg-primary text-navy-deep px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg">
            Consult a Specialist
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            <span className="material-symbols-outlined text-4xl">{isOpen ? 'close' : 'menu_open'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-navy-deep border-b border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out">
          <div className="flex flex-col p-8 gap-6">
            {links.map(link => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-base uppercase tracking-[0.2em] font-bold py-2 border-b border-white/5 ${location.pathname === link.path ? 'text-primary' : 'text-slate-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="bg-primary text-navy-deep px-8 py-4 rounded-sm font-bold text-center text-xs uppercase tracking-[0.2em] mt-4 hover:bg-white transition-all shadow-lg"
            >
              Consult a Specialist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
