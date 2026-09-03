import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/platform", label: "Platform" },
    { to: "/crm", label: "CRM" },
    { to: "/intelligence", label: "Intelligence" },
    { to: "/recruitment", label: "Recruitment" },
    { to: "/agents", label: "Agents" },
    { to: "/demo", label: "Dashboard" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white font-sans">
      <div className="bg-primary text-black text-center text-xs py-1 font-medium">
        ⚠ DEMO MODE — NOT LIVE · All data is mock · Not connected to production
      </div>
      
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur border-b border-border-dark">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-1 text-white">
            <span className="material-symbols-outlined text-primary">bolt</span>
            <span className="font-display font-bold text-xl">CorePlatform</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <NavLink 
                key={link.to} 
                to={link.to}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-400 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        
        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-4 border-t border-border-dark bg-background-dark">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <NavLink 
                  key={link.to} 
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-4 pb-16">
        <Outlet />
      </main>

      <footer className="border-t border-border-dark py-6 text-center text-gray-600 text-sm">
        <p>CorePlatform Demo · Local Mock Site · Not for production use</p>
      </footer>
    </div>
  );
}
