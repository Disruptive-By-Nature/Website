import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/fuse_board.png';

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "UK Electrical Wholesale Salary & Margin Preservation Report 2026",
  "author": {
    "@type": "Organization",
    "name": "Power-Up Talent"
  },
  "url": "https://power-uptalent.co.uk/insights/wholesale-salary-report"
};

const WholesaleSalaryReport: React.FC = () => {
  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white">
      <SEO
        title="UK Electrical Wholesale Salary Report 2026"
        description="Deep-dive technical article on salary benchmarks, trade counter margin protection, bonus structures, and executive retention across the UK electrical wholesale sector."
        keywords="electrical wholesale salary, trade counter margin, executive retention"
        canonical="https://power-uptalent.co.uk/insights/wholesale-salary-report"
        structuredData={reportSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Report Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-navy-deep/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Market Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-display font-black mb-6">UK Electrical Wholesale Salary & Margin Preservation Report 2026</h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 max-w-3xl mx-auto px-6 space-y-8 text-slate-300 font-light text-lg leading-relaxed">
        <p>
          The electrical wholesale sector is experiencing unprecedented shifts in salary expectations, driven by demand for leaders capable of driving margin protection and branch profitability in a volatile market.
        </p>
        <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Salary Benchmarks Across Major Distributors</h2>
        <p>
          Across networks such as Rexel, Edmundson, CEF, and prominent independents, base salaries for branch managers have increased by an average of 12% over the last two years. However, the true differentiator lies in the structure of profit-share and margin-protection bonuses.
        </p>
        <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Bonus Structures & Executive Retention</h2>
        <p>
          Retention strategies are shifting away from flat uncapped bonuses toward highly structured profit-share models tied to margin preservation. Top-performing branch directors are increasingly expecting equity options or long-term incentive plans (LTIPs).
        </p>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-display font-bold text-white mb-6">Discuss Your Hiring Strategy</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">Get in touch to benchmark your team's salaries against the market and attract top wholesale talent.</p>
        <Link to="/contact" className="bg-primary text-navy-deep px-8 py-4 font-bold uppercase text-sm rounded hover:bg-white transition-colors">Contact Our Specialists</Link>
      </section>
    </div>
  );
};

export default WholesaleSalaryReport;
