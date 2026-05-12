
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const methodologyLinks = [
    { name: 'Elite Executive Search', path: '/services#elite-recruitment' },
    { name: 'Strategic Leadership Recruitment', path: '/services#strategic-recruitment' },
    { name: 'Growth Partnerships', path: '/services#growth-partnerships' },
  ];

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Methodology', path: '/services', hasDropdown: true },
    { name: 'About Us', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-navy-deep/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-0' : 'bg-transparent py-4'}`}
    >
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
            <div key={link.path} className="relative h-full flex items-center" onMouseEnter={() => link.hasDropdown && setIsMethodologyOpen(true)} onMouseLeave={() => link.hasDropdown && setIsMethodologyOpen(false)}>
              <Link 
                to={link.path} 
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:translate-y-[-1px] ${location.pathname === link.path ? 'text-primary' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
              <AnimatePresence>
                {link.hasDropdown && isMethodologyOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 mt-2 w-64 bg-navy-deep/95 backdrop-blur-xl border border-white/10 shadow-2xl py-2 rounded-sm"
                  >
                    {methodologyLinks.map(subLink => (
                      <Link key={subLink.path} to={subLink.path} className="block px-6 py-3 text-[10px] uppercase tracking-[0.1em] text-slate-300 hover:text-primary hover:bg-white/5 transition-colors">
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/contact" className="bg-primary text-navy-deep px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-primary/40">
            Consult a Specialist
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none">
            <span className="material-symbols-outlined text-4xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-deep/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {links.map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg uppercase tracking-[0.3em] font-bold ${location.pathname === link.path ? 'text-primary' : 'text-slate-300 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-primary text-navy-deep px-8 py-5 rounded-sm font-bold text-center text-sm uppercase tracking-[0.2em]">
                Consult a Specialist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
