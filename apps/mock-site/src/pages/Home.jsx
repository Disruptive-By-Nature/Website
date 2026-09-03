import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { serviceAreas } from '../data/mockServices';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero section */}
      <section className="text-center py-24 px-4">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
          The AI Business Operating Platform
        </h1>
        <h2 className="text-primary text-2xl md:text-3xl font-semibold mt-2">
          for Ambitious Teams
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
          One platform. Unified CRM, market intelligence, recruitment tools, AI agents, and analytics — purpose-built for vertical industries.
        </p>
        <div className="mt-10">
          <Link to="/platform" className="bg-primary text-black font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition inline-block">
            Explore the Platform &rarr;
          </Link>
        </div>
      </section>

      {/* What You Get section */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center text-white mb-10">
          Seven Pillars of Your Operating System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceAreas.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Why CorePlatform section */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center text-white mb-10">
          Why CorePlatform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">merge_type</span>
            <h3 className="text-lg font-semibold text-white mb-2">Consolidation</h3>
            <p className="text-sm text-gray-400">
              Replace 15+ disconnected tools with one intelligent platform. Single source of truth.
            </p>
          </div>
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">psychology</span>
            <h3 className="text-lg font-semibold text-white mb-2">AI-Native</h3>
            <p className="text-sm text-gray-400">
              AI isn't bolted on — it's woven into every workflow. Scoring, drafting, coaching, agents.
            </p>
          </div>
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">vertical_distribute</span>
            <h3 className="text-lg font-semibold text-white mb-2">Vertical Depth</h3>
            <p className="text-sm text-gray-400">
              Purpose-built for industries that need more than generic SaaS. Deep domain intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Ready to see it in action?</h2>
        <Link to="/demo" className="bg-primary text-black font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition inline-block">
          Open Dashboard Demo &rarr;
        </Link>
      </section>
    </div>
  );
}
