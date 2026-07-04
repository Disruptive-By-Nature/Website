import React from 'react';
import SEO from '../components/SEO';

const Cookies: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-background-dark min-h-screen">
      <SEO 
        title="Cookie Policy | Power-Up Talent"
        description="Learn about how Power-Up Talent uses cookies to improve your browsing experience."
        keywords="Cookie Policy, Power-Up Talent Cookies, Privacy"
        canonical="https://poweruptalent.co.uk/cookies"
      />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 tracking-tight">Cookie <span className="text-primary italic">Settings.</span></h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400 font-light text-lg">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. What are Cookies?</h2>
            <p>Cookies are small text files stored on your device to improve your browsing experience. We use them to remember your preferences and analyse site traffic for better service delivery.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Essential Cookies</h2>
            <p>These cookies are necessary for the basic functionality of our Talent Hub and contact forms. They cannot be disabled as they ensure the security and integrity of your data submissions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Performance & Analytics</h2>
            <p>We use aggregated, anonymous data to understand how users interact with our sector-focused content. This helps us refine our digital experience for the UK electrical community.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Managing Preferences</h2>
            <p>You can adjust your browser settings to block or alert you about these cookies, but some parts of the site may not then work as intended. For direct control, please contact us.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;