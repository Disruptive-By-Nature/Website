import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/ev_charging_station.png';

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Part L & Net-Zero EV Infrastructure Skills Scarcity in Distribution",
  "author": {
    "@type": "Organization",
    "name": "Power-Up Talent"
  },
  "url": "https://power-uptalent.co.uk/insights/ev-skills-scarcity"
};

const EVSkillsScarcityReport: React.FC = () => {
  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white">
      <SEO
        title="EV Infrastructure Skills Scarcity in Distribution"
        description="Technical analysis of EV charging infrastructure, solar PV distribution, renewable electrical products, and technical sales talent scarcity."
        keywords="EV infrastructure skills, renewable electrical products, technical sales talent scarcity"
        canonical="https://power-uptalent.co.uk/insights/ev-skills-scarcity"
        structuredData={reportSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="EV Infrastructure Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-navy-deep/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Compliance & Net-Zero</span>
          <h1 className="text-4xl md:text-5xl font-display font-black mb-6">Part L & Net-Zero EV Infrastructure Skills Scarcity in Distribution</h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 max-w-3xl mx-auto px-6 space-y-8 text-slate-300 font-light text-lg leading-relaxed">
        <p>
          As the UK accelerates towards Net-Zero and Part L compliance becomes stricter, electrical distributors face a critical shortage of technical sales talent equipped to navigate EV charging infrastructure and solar PV distribution.
        </p>
        <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">The Shift to Renewable Electrical Products</h2>
        <p>
          The wholesale market is pivoting rapidly from traditional lighting and cable to complex renewable solutions. Technical salespeople who can consultively sell commercial EV chargers, battery storage, and smart grid components are now the most sought-after talent in the sector.
        </p>
        <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Navigating the Talent Scarcity</h2>
        <p>
          With a limited pool of candidates possessing both deep electrical wholesale experience and renewable energy expertise, forward-thinking distributors must look to adjacent markets or invest in targeted headhunting to acquire adaptable, technically astute leaders.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-display font-bold text-white mb-6">Secure Technical Sales Talent</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">Learn how we map and acquire the rare individuals driving the renewable transition in wholesale.</p>
        <Link to="/contact" className="bg-primary text-navy-deep px-8 py-4 font-bold uppercase text-sm rounded hover:bg-white transition-colors">Start Your Search</Link>
      </section>
    </div>
  );
};

export default EVSkillsScarcityReport;
