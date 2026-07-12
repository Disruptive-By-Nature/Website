import React from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-background-dark min-h-screen">
      <SEO 
        title="Terms of Service | Power-Up Talent"
        description="Read Power-Up Talent's terms of service."
        keywords="Terms of Service, Power-Up Talent Terms, Legal"
        canonical="https://power-uptalent.co.uk/terms"
      />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 tracking-tight">Terms of <span className="text-primary italic">Service.</span></h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400 font-light text-lg">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptable Use</h2>
            <p>By accessing the Power-Up Talent website, you agree to use our platform solely for professional recruitment purposes. Unauthorized use of our proprietary content or AI-matching framework is strictly prohibited.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Intellectual Property</h2>
            <p>All brand assets, text, and technical methodologies presented on this site are the exclusive property of Power-Up Talent Ltd. Reproduction or redistribution without written consent is forbidden.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Limitation of Liability</h2>
            <p>While we strive for 100% accuracy in our placements, Power-Up Talent acts as a facilitator. Final hiring decisions and employment contracts are between the client and candidate.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the UK courts.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;