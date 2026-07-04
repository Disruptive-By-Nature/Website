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
      "description": "We are the UK's leading headhunters and recruitment specialists for the electrical industry, spanning manufacturing, distribution, specification, and installation.",
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
      a: "Unlike generalist agencies, we recruit exclusively within the UK electrical sector. Our consultants speak the language of engineering design, manufacturing supply chains, distribution networks, and contracting delivery, maintaining a deeply mapped network of passive high-performers."
    },
    {
      q: "How do you source passive candidates who aren't active on job boards?",
      a: "80% of top-performing project managers, engineers, and sales executives never apply for jobs. We utilise proprietary AI-driven market mapping and discreet, direct outreach protocols to align executive briefs with industry talent, ensuring absolute confidentiality."
    },
    {
      q: "What specific roles do you recruit for the electrical sector?",
      a: "We recruit across all management and technical tiers: Product Design & Specification Engineers, Manufacturing Operations Directors, Procurement & Estimating Leads, Branch Managers, Project Contracts Managers, and C-suite Executive leadership."
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
        description="We are the UK's leading headhunters and recruitment specialists for the electrical industry, spanning manufacturing, distribution, design, and installation."
        keywords="about power-up talent, electrical industry recruiter, uk recruitment engineering, headhunters electrical"
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
              The UK's #1 Recruitment Partner For The Electrical Sector
            </p>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              About<br/>
              <span className="text-gradient">Power-Up Talent</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              The UK's leading headhunters and recruitment specialists dedicated entirely to the electrical industry.
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

      {/* ── SECTION 2: WHAT WE DO ── */}
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
                Change can be complex, and the search for what you truly want can be demanding. That's why we take the time to listen, offering tailored advice and guidance to ensure both candidates and clients across the electrical sector achieve the best possible outcome.
              </p>
              <p>
                With a longstanding network and extensive experience within the UK electrical industry, we provide all the benefits of a large, international search firm whilst operating with the personal, bespoke service of a local expert.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: OUR APPROACH: THE HYBRID ADVANTAGE ── */}
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

      {/* ── SECTION 5: OUR VALUES ── */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-6xl text-navy-deep uppercase tracking-tight">
              OUR <span className="text-primary">VALUES.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: 'verified',
                title: 'INTEGRITY',
                desc: 'We conduct all our consultancy with honesty, transparency, and ethical standards, building trust with every brief.'
              },
              {
                icon: 'handshake',
                title: 'PARTNERSHIPS',
                desc: 'We invest in building lasting partnerships with both electrical sector clients and high-performers, fostering success.'
              },
              {
                icon: 'star',
                title: 'EXCELLENCE',
                desc: 'We maintain the highest standards in everything we do, from market mapping to leadership delivery.'
              },
              {
                icon: 'lightbulb',
                title: 'INNOVATION',
                desc: 'We combine traditional headhunting methods with modern AI modelling to deliver innovative solutions.'
              },
              {
                icon: 'bolt',
                title: 'SECTOR GRIT',
                desc: 'Every placement contributes to better operational standards, driving our passion for the electrical community.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                  <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                </div>
                <h3 className="font-display font-black text-sm text-navy-deep uppercase tracking-widest mb-3">{value.title}</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed text-center">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: OUR COMMITMENT ── */}
      <section className="bg-navy-deep py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight mb-6">
              OUR <span className="text-primary">COMMITMENT.</span>
            </h2>
            <p className="text-slate-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              We are committed to a transparent, ethical, and innovative approach that delivers measurable operational impact for your organisation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {[
              {
                icon: 'visibility',
                title: 'TRANSPARENCY',
                desc: 'Clear communication about how AI modelling is used in our process.'
              },
              {
                icon: 'security',
                title: 'ETHICS',
                desc: 'Ensuring our tools are fair, unbiased, and compliant with UK employment laws.'
              },
              {
                icon: 'bolt',
                title: 'INNOVATION',
                desc: 'Continuously improving our sector intelligence and headhunting strategies.'
              },
              {
                icon: 'track_changes',
                title: 'IMPACT',
                desc: 'Helping wholesalers grow by connecting them with talent that protects margins.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="flex flex-col gap-3"
              >
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                <h3 className="font-display font-black text-sm text-white uppercase tracking-widest">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: EXPANDED FAQS (Migrated from Home Page) ── */}
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
