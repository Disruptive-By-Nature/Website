import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/handshake_hero.jpg';

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://poweruptalent.co.uk/#website",
      "url": "https://poweruptalent.co.uk/",
      "name": "Power-Up Talent",
      "description": "Elite headhunters and recruitment specialists for the UK electrical industry — manufacturing, distribution, design, and installation."
    },
    {
      "@type": "Organization",
      "@id": "https://poweruptalent.co.uk/#organization",
      "name": "Power-Up Talent",
      "url": "https://poweruptalent.co.uk/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://poweruptalent.co.uk/src/assets/images/logo.jpg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/power-up-talent"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "poweruptalent@gmail.com",
        "contactType": "customer service"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://poweruptalent.co.uk/#service",
      "name": "Power-Up Talent",
      "image": "https://poweruptalent.co.uk/src/assets/images/logo.jpg",
      "url": "https://poweruptalent.co.uk/",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      },
      "areaServed": "GB",
      "knowsAbout": [
        "Electrical Industry Sourcing",
        "OEM Manufacturing",
        "Wholesale Distribution",
        "Design & Specification",
        "M&E Contracting & Installation",
        "Headhunting"
      ]
    }
  ]
};

const Home: React.FC = () => {
  const location = useLocation();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollId = params.get('scroll');
    if (scrollId) {
      setTimeout(() => {
        const el = document.getElementById(scrollId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Elite Headhunters for the UK Electrical Sector | Power-Up Talent"
        description="The UK's #1 headhunters for the electrical industry. We connect elite sales, engineering, and leadership talent with ambitious businesses across manufacturing, distribution, design, and installation."
        keywords="electrical industry headhunter, uk electrical recruitment, manufacturing recruitment, specification design engineering, electrical contractor recruiter, headhunting"
        canonical="https://poweruptalent.co.uk/"
        structuredData={homeStructuredData}
      />

      {/* ══════════════════════════════════════════════════════════
          1. HERO SECTION (Dark / Photo Background)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Elite electrical wholesale professionals" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
              Elite Headhunters.<br/>
              <span className="text-gradient">Powerful</span> Placements.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              We connect elite sales, engineering, and leadership talent with the UK's most ambitious manufacturers, distributors, design practices, and contracting firms.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://powercrm-daa67.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-navy-deep px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Hire Top Talent
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. RESULTS SECTION (Dark Navy Background)
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep border-y border-white/5 py-16 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-black text-3xl md:text-4xl text-primary uppercase tracking-tight mb-2 text-glow">Results That Speak For Themselves</h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold mb-12">Our Proven Performance Metrics</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-white/10 divide-x divide-white/10">
            {[
              { value: "25,000+", label: "Market-Mapped Professionals" },
              { value: "98%", label: "Placement Retention Rate" },
              { value: "30+ Years", label: "Combined Sector Leadership" },
              { value: "28 Days", label: "Average Placement" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-10 px-4 flex flex-col items-center justify-center border-b md:border-b-0 border-r border-white/5 md:border-white/10 last:border-b-0 last:border-r-0"
              >
                <div className="font-display font-black text-4xl md:text-5xl text-primary mb-3">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-slate-300 font-bold text-center max-w-[150px] leading-relaxed">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. STRATEGIC PILLARS (Enlarged Stand-out Dark Section)
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#080d1a] py-32 text-white border-b border-white/5 relative overflow-hidden">
        {/* Subtle background glow effect to draw focus to this backbone section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4 flex justify-center items-center gap-2">
              <span className="w-6 h-px bg-primary"></span>
              OUR CORE SYSTEM
              <span className="w-6 h-px bg-primary"></span>
            </p>
            <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight leading-none mb-6">
              STRATEGIC <span className="text-primary italic">PILLARS.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              We operate through three specialised methodologies built to target and secure elite talent. We take the time to listen, offering tailored advice and guidance to ensure both candidates and clients in the electrical sector achieve the best possible outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {[
              {
                num: "01",
                title: "HEADHUNTERS",
                icon: "person_search",
                desc: "Our core headhunting service. We specialise in identifying and securing the top 1% of passive talent currently delivering results for your competitors using AI-driven mapping.",
                bullets: ["Confidential Direct Outreach", "Passive Talent Mapping", "Technical DNA Vetting", "Absolute Discretion Protocols"],
                link: "/services/elite-recruitment"
              },
              {
                num: "02",
                title: "STRATEGIC RECRUITMENT",
                icon: "leaderboard",
                desc: "We co-design a tailored strategy with you, mapping out the local competitor market to hire the absolute best talent. We source for all roles across your network, not just senior executives.",
                bullets: ["Local Competitor Mapping", "All-Tier Active Sourcing", "Co-Designed Hiring Search", "Competency Vetting"],
                link: "/services/strategic-recruitment"
              },
              {
                num: "03",
                title: "GROWTH PARTNERSHIPS (RPO)",
                icon: "handshake",
                desc: "Recruitment Process Outsourcing (RPO). We operate as an extension of your in-house HR team, managing talent attraction, screening, interviewing, and onboarding.",
                bullets: ["End-to-End RPO Lifecycle", "Project-Based Spike Support", "Modular Selective Sourcing", "AI & Analytics Sourcing"],
                link: "/services/growth-partnerships"
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                className="bg-white border-t-4 border-primary p-12 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,193,7,0.15)] transition-all duration-300 flex flex-col justify-between rounded-lg shadow-2xl shadow-black/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div>
                  <div className="flex justify-center items-center mb-8 pt-4">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-navy-deep group-hover:border-primary transition-all duration-300 shadow-[0_0_30px_rgba(255,193,7,0.15)] group-hover:shadow-[0_0_50px_rgba(255,193,7,0.4)]">
                      <span className="material-symbols-outlined text-[3.5rem] font-bold drop-shadow-md">{pillar.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-black text-2xl text-navy-deep mb-6 tracking-wide group-hover:text-primary-dark transition-colors">{pillar.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-10 min-h-[120px] font-light">{pillar.desc}</p>
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <ul className="space-y-4 mb-8">
                    {pillar.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500 font-bold">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={pillar.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-navy-deep transition-colors"
                  >
                    Explore Pillar Details
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. WHY POWER-UP TALENT? (White Background)
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 text-navy-deep">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary-dark font-bold mb-4">Unrivalled Industry Specialism</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep leading-tight mb-6">
              WHY POWER-UP TALENT?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              What sets us apart is our profound expertise across the UK electrical supply chain. We move beyond generic recruitment to offer specialised talent logic, understanding the irreplaceable importance of manufacturing operations, distribution models, design specifications, and site installation pressures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "rocket_launch",
                title: "TECHNICAL GRIT",
                desc: "Our team consists of seasoned professionals who understand manufacturing operations, distribution networks, design specification cycles, and contracting delivery.",
                isFeatured: false
              },
              {
                icon: "settings",
                title: "TAILORED SOLUTIONS",
                desc: "We recognise that a Branch Manager in the M4 corridor faces different pressures than one in the North. Our talent solutions are geographically informed and operationally specific.",
                isFeatured: true
              },
              {
                icon: "groups",
                title: "NETWORK & TRUST",
                desc: "Join our elite network of passive high-performers. We act as your trusted consultative partner, ensuring absolute discretion for both clients and leadership candidates.",
                isFeatured: false
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                className={`rounded-xl p-10 text-center flex flex-col justify-between transition-all duration-300 border ${
                  card.isFeatured 
                    ? 'bg-slate-50 border-primary shadow-lg shadow-primary/10' 
                    : 'bg-white border-slate-100 shadow-xl shadow-slate-100'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div>
                  <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-8 shadow-md ${
                    card.isFeatured ? 'bg-primary text-navy-deep' : 'bg-navy-deep text-white'
                  }`}>
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-navy-deep uppercase tracking-wider mb-4">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. HOW WE TRANSFORM YOUR BUSINESS (Dark Navy Background)
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep py-24 border-y border-white/5">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4">Value Creation Framework</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-4">
              How We Transform Your Business
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto font-light">
              Measurable commercial advantages that drive market share, margin protection, and sustainable leadership growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "schedule", title: "Faster Hiring", highlight: "50% Reduction", desc: "Fill critical leadership and technical roles efficiently to minimise vacancy loss and retain market momentum." },
              { icon: "person_search", title: "Better Hires", highlight: "Predictive Vetting", desc: "Deep technical screening ensures candidates possess commercial grit and industry longevity." },
              { icon: "payments", title: "Cost Savings", highlight: "30% Lower CPH", desc: "Reduce cost-per-hire via proactive headhunting instead of expensive, passive agency search." },
              { icon: "groups", title: "Diverse Teams", highlight: "Inclusive Search", desc: "Remove local bias to identify innovative and highly capable sales talent across UK hubs." },
              { icon: "trending_up", title: "Scalability", highlight: "Hybrid Engagement", desc: "Deploy search logic dynamically, supporting single senior placements or multi-branch rollouts." },
              { icon: "insights", title: "Market Intel", highlight: "Real-Time Mapping", desc: "Gain critical intelligence on competitor salary bands, restructuring patterns, and high-performers." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="glass-card rounded-lg p-8 border border-white/5 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mb-4">{item.highlight}</p>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. THE STRATEGIC DIFFERENCE (White Background)
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 text-navy-deep border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-display font-black text-4xl md:text-6xl text-navy-deep uppercase tracking-tight mb-6">
              THE STRATEGIC <span className="text-primary">DIFFERENCE.</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed font-light">
              Power-Up Talent is not a traditional recruitment agency. We are a specialist consultancy focused exclusively on identifying the passive high-performers that standard job boards cannot reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'HEADHUNTING-FIRST',
                desc: 'Operating on a methodology of market mapping and absolute discretion. We understand that the elite 1% of the workforce is rarely "looking" for work; they are busy delivering results for your competitors.',
              },
              {
                title: 'SECTOR LITERACY',
                desc: 'Our consultants are sector specialists with deep operational backgrounds. We speak the language of engineering design, manufacturing supply chains, distribution networks, and contracting delivery, ensuring a peer-level vetting process.',
              },
              {
                title: 'PASSIVE TALENT NETWORK',
                desc: 'We have spent years building a deeply mapped network of high-performers who are not visible on job boards. Our relationships run deep — enabling us to make discreet approaches that generate genuine results.',
              },
              {
                title: 'TAILORED TO YOUR BRIEF',
                desc: 'No two briefs are the same. We take the time to understand your business, your culture, and your precise requirements before we begin — ensuring every candidate we present is a purposeful, well-considered introduction.',
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-lg p-10 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-display font-black text-base text-navy-deep uppercase tracking-wider mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-background-dark py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-navy-deep border border-white/5 rounded-sm p-12 md:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                  Ready To Hire <span className="text-gradient">The Best</span>?
                </h2>
                <p className="text-slate-400 font-light text-base leading-relaxed max-w-lg">
                  Let's talk about how we can help you build a team that drives real results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a
                  href="https://powercrm-daa67.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-navy-deep px-8 py-4 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] transition-all duration-300 shadow-lg text-center flex items-center justify-center gap-2"
                >
                  Hire Top Talent
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
