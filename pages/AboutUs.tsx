import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/trade_counter.jpg';
import heroTeamImg from '../src/assets/images/hero_team.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};


const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://poweruptalent.co.uk/about#webpage",
      "url": "https://poweruptalent.co.uk/about",
      "name": "About Power-Up Talent",
      "description": "We are the UK's leading headhunters and recruitment specialists for the electrical wholesale industry. Discover our story, values and team.",
      "publisher": {
        "@type": "Organization",
        "@id": "https://poweruptalent.co.uk/#organization",
        "name": "Power-Up Talent",
        "url": "https://poweruptalent.co.uk"
      },
      "about": {
        "@type": "Organization",
        "@id": "https://poweruptalent.co.uk/#organization"
      }
    }
  ]
};

const AboutUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What sets Power-Up Talent apart from other UK recruiters?",
      a: "Unlike generalist agencies, we recruit exclusively within the UK electrical wholesale sector. Our consultants speak the trade counter language, understand margin protection (GP), Edmundson/Rexel structures, and maintain a deeply mapped network of passive high-performers that competitors cannot reach."
    },
    {
      q: "How do you source passive candidates who aren't active on job boards?",
      a: "80% of top-performing branch managers and sales executives never apply for jobs. We utilise proprietary AI-driven market mapping and discreet, direct outreach protocols to align executive briefs with industry talent, ensuring absolute confidentiality."
    },
    {
      q: "What specific roles do you recruit for wholesale distributors?",
      a: "We recruit across all management tiers: Branch Managers, Regional Directors, Procurement and Estimating Specialists, Internal/External Sales Representatives, and C-suite Executive leadership."
    },
    {
      q: "What is your placement retention rate?",
      a: "We are proud of our 98% placement retention rate over 12 months. Because we vet candidates for commercial alignment, regional understanding, and cultural fit, our placements deliver sustained long-term value."
    },
    {
      q: "How long does your search process typically take?",
      a: "Our average time from initial briefing to presenting a high-quality shortlist is 28 days. This speed is driven by our continuous market mapping and AI integration, ensuring key roles don't remain vacant."
    },
    {
      q: "Is candidate engagement confidential?",
      a: "Absolutely. Confidentiality is the foundation of our headhunting model. We operate under strict discretion and NDAs, never disclosing names or sensitive strategic movements without explicit mutual approval."
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Power-Up Talent"
        description="We are the UK's leading headhunters and recruitment specialists for the electrical wholesale industry. Discover our story, values and team."
        keywords="about power-up talent, electrical wholesale recruiter, uk recruitment consultancy, headhunters electrical"
        canonical="https://poweruptalent.co.uk/about"
        structuredData={aboutStructuredData}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="About Power-Up Talent"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-bold mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              The UK's #1 Recruitment Partner For Electrical Wholesale
            </p>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              About<br/>
              <span className="text-gradient">Power-Up Talent</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              The UK's leading headhunters and recruitment specialists dedicated entirely to the electrical wholesale industry.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-primary text-navy-deep px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Explore Our Pillars
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: OUR APPROACH: THE HYBRID ADVANTAGE ── */}
      <section className="bg-background-dark py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Methodology</span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 uppercase tracking-tight">
              Our Approach: The Hybrid Advantage
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
              We blend the speed and reach of AI with the irreplaceable nuance of human expertise. This process ensures we find not just a candidate, but the right leader for your team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <motion.div
              {...fadeInUp}
              className="bg-card-dark border border-white/5 rounded-xl p-8 text-center flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-6 bg-white/5 text-primary border border-white/10 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">search</span>
                </div>
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-4">Discovery & Strategy</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  We partner with you to understand your unique challenges, culture, and the precise requirements for each role. This forms the blueprint for our AI-driven search.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="bg-card-dark border border-white/5 rounded-xl p-8 text-center flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-6 bg-white/5 text-primary border border-white/10 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">psychology</span>
                </div>
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-4">AI-Powered Sourcing</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  Our custom AI models scan the entire market, including passive candidates, to identify a long-list of professionals who match your technical and experiential needs.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="bg-card-dark border border-white/5 rounded-xl p-8 text-center flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-6 bg-white/5 text-primary border border-white/10 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">groups</span>
                </div>
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-4">Human-Led Vetting</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  Our industry experts meticulously vet the AI-generated list. We conduct in-depth interviews to assess skills, experience, and motivation, ensuring only the best proceed.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="bg-card-dark border border-white/5 rounded-xl p-8 text-center flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-6 bg-white/5 text-primary border border-white/10 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">track_changes</span>
                </div>
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-4">Cultural Fit Assessment</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  We present a curated shortlist of elite candidates. Using a combination of our expertise and AI analysis, we provide detailed insights into how each individual aligns with your team.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE DO ── */}
      <section className="bg-white text-slate-900 py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Capabilities
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-navy-deep uppercase tracking-tight">
              What We Do
            </h2>
            <div className="space-y-4 text-slate-500 font-light leading-relaxed text-base">
              <p>
                We know that every career move is more than just a job change. It may be driven by professional progression and growth, a change in personal circumstances, or simply a desire for a new challenge.
              </p>
              <p>
                Change can be complex, and the search for what you truly want can be demanding. That's why we take the time to listen, offering tailored advice and guidance to ensure both candidates and clients in the electrical wholesale sector achieve the best possible outcome.
              </p>
              <p>
                With a longstanding network and extensive experience within the UK electrical wholesale market, we provide all the benefits of a large, international search firm whilst operating with the personal, bespoke service of a local expert.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: OUR PURPOSE: TO REVOLUTIONISE RECRUITMENT ── */}
      <section className="bg-navy-deep text-white py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Purpose
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight">
              Our Purpose: To Revolutionise Recruitment
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              Our purpose is to revolutionise recruitment by combining the precision of AI with the nuance of human expertise. We believe that hiring should be fast, fair, and focused on finding the best talent—not just the most available.
            </p>
            <div className="border-l-4 border-primary pl-6 py-2 mt-8">
              <p className="text-primary italic text-base md:text-lg font-light leading-relaxed">
                "We don't just find you talent—we equip your team with AI tools to outperform the competition."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: WHY POWER-UP TALENT (VALUES & COMMITMENTS) ── */}
      <section className="bg-background-dark py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column - Our Values */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Core Principles</span>
                <h3 className="font-display font-black text-2xl md:text-4xl text-white uppercase mt-2">Our Values</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card-dark p-6 border border-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-2">Passion</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    We love what we do. Our team is passionate about powering the wholesale sector by matching elite talent.
                  </p>
                </div>
                <div className="bg-card-dark p-6 border border-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">emoji_events</span>
                  </div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-2">Results</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    We focus on search outcomes that drive real margin growth, profitability, and operational success.
                  </p>
                </div>
                <div className="bg-card-dark p-6 border border-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">handshake</span>
                  </div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-2">Partnerships</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    We prioritize long-term, trusted advisory connections over simple transaction counts.
                  </p>
                </div>
                <div className="bg-card-dark p-6 border border-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-2">Integrity</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    We maintain absolute transparency, advising both candidates and clients with complete honesty.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Our Commitment */}
            <motion.div {...fadeInUp} className="space-y-8 lg:pl-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Promise</span>
                <h3 className="font-display font-black text-2xl md:text-4xl text-white uppercase mt-2">Our Commitment</h3>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                We commit to introducing only candidate profiles who align with your company's strategic roadmap. We protect your confidential business data with strict security protocols. We also offer a replacement guarantee, ensuring we re-recruit at no additional cost if a match does not work out within the agreed validation period.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider">100% Confidential Sourcing</h5>
                    <p className="text-slate-400 text-xs font-light mt-0.5">Absolute discretion for sensitive hire mandates.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="material-symbols-outlined text-primary text-2xl">published_with_changes</span>
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider">Extended Replacement Guarantee</h5>
                    <p className="text-slate-400 text-xs font-light mt-0.5">Risk-free matching models protecting client investments.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── SECTION 6: EXPANDED FAQS (Migrated from Home Page) ── */}
      <section className="bg-background-dark py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4">Frequently Asked Questions</p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase">Recruitment FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left py-4 text-white hover:text-primary transition-colors focus:outline-none"
                >
                  <span className="font-display font-bold text-base md:text-lg">{faq.q}</span>
                  <span className="material-symbols-outlined text-primary ml-4">
                    {openIndex === i ? 'remove_circle' : 'add_circle'}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === i ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light pb-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
