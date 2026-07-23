import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/warehouse_forklift.jpg';

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Scaling Independent Trade Counters: Branch Leadership Acquisition",
  "author": {
    "@type": "Organization",
    "name": "Power-Up Talent"
  },
  "url": "https://power-uptalent.co.uk/insights/branch-leadership"
};

const BranchLeadershipReport: React.FC = () => {
  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white">
      <SEO
        title="Scaling Independent Trade Counters"
        description="Technical analysis of branch manager sourcing, trade customer relationship retention, stock turn management, and headhunting strategies."
        keywords="branch leadership, trade counter scaling, electrical wholesale headhunting"
        canonical="https://power-uptalent.co.uk/insights/branch-leadership"
        structuredData={reportSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Branch Leadership Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-navy-deep/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Operational Excellence</span>
          <h1 className="text-4xl md:text-5xl font-display font-black mb-6">Scaling Independent Trade Counters: Branch Leadership Acquisition</h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 max-w-3xl mx-auto px-6 space-y-8 text-slate-300 font-light text-lg leading-relaxed">
        <p>
          For independent electrical wholesalers, the branch manager is the linchpin of local market dominance. Securing leadership capable of driving both trade counter relationships and sophisticated stock turn management is critical.
        </p>
        <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Trade Customer Relationship Retention</h2>
        <p>
          A highly effective branch manager brings deep local contractor relationships. However, a strategic headhunting approach ensures the hire is based on sustainable margin growth rather than simply discounted volume selling.
        </p>
        <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Stock Turn Management & Headhunting Strategies</h2>
        <p>
          Managing inventory effectively separates average branches from exceptional ones. We target passive leaders who demonstrate proven capability in reducing dead stock, optimising local supply chains, and driving high-margin product sales.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-display font-bold text-white mb-6">Find Your Next Branch Leader</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">Discover how our targeted search methodology can secure elite branch managers for your network.</p>
        <Link to="/contact" className="bg-primary text-navy-deep px-8 py-4 font-bold uppercase text-sm rounded hover:bg-white transition-colors">Speak To An Expert</Link>
      </section>
    </div>
  );
};

export default BranchLeadershipReport;
