import React from 'react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-background-dark min-h-screen">
      <SEO 
        title="Privacy Policy | Power-Up Talent"
        description="Read Power-Up Talent's privacy policy regarding data collection and usage."
        keywords="Privacy Policy, Power-Up Talent Privacy, Data Protection"
        canonical="https://poweruptalent.co.uk/privacy"
      />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 tracking-tight">Privacy <span className="text-primary italic">Policy.</span></h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400 font-light text-lg">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Data Collection</h2>
            <p>Power-Up Talent Ltd collects personal data necessary for recruitment and headhunting services in the UK electrical sector. This includes contact details, employment history, and professional qualifications provided via CV submissions or professional networking platforms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Use of Information</h2>
            <p>We use your information exclusively to match your profile with suitable executive and technical roles within our partner network. Your data is treated with absolute discretion and is never shared with third parties without your explicit prior consent during a specific recruitment process.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Data Retention</h2>
            <p>In accordance with GDPR, we retain your information for as long as it remains relevant to your career goals or until you request its deletion. We conduct regular audits to ensure data accuracy and necessity.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Your Rights</h2>
            <p>You have the right to access, rectify, or erase your personal data at any time. For any data-related enquiries, please contact our data protection lead at <span className="text-primary">poweruptalent@gmail.com</span>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;