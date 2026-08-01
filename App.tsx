
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import UploadCV from './pages/UploadCV';
import News from './pages/News';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Insights from './pages/Insights';
import BlogPostDetail from './pages/BlogPostDetail';
import WholesaleSalaryReport from './pages/insight-wholesale-salary-report';
import BranchLeadershipReport from './pages/insight-branch-leadership';
import EVSkillsScarcityReport from './pages/insight-ev-skills-scarcity';
import SpecialismDetail from './pages/SpecialismDetail';
import FoundingPartner from './pages/FoundingPartner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ChatwootWidget from './components/ChatwootWidget';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/founding-partner" element={<FoundingPartner />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/specialisms/:id" element={<SpecialismDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/upload-cv" element={<UploadCV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/wholesale-salary-report" element={<WholesaleSalaryReport />} />
            <Route path="/insights/branch-leadership" element={<BranchLeadershipReport />} />
            <Route path="/insights/ev-skills-scarcity" element={<EVSkillsScarcityReport />} />
            <Route path="/insights/:id" element={<BlogPostDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Persistent AI Chatbot */}
        <Chatbot />
        
        {/* Omnichannel Customer Support Widget */}
        <ChatwootWidget />
      </div>
    </Router>
  );
};

// Helper to scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
