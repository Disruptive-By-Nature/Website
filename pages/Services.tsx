import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/hero_services.png';
import heroMainImg from '../src/assets/images/hero_main.png';
import heroTeamImg from '../src/assets/images/hero_team.png';
import heroContactImg from '../src/assets/images/hero_contact.png';

const Services: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <>
      <SEO
        title="Recruitment Services for Electrical Wholesale | Power-Up Talent"
        description="Elite recruitment, strategic search and growth partnerships for the UK electrical wholesale sector. Specialist headhunting that delivers results."
        keywords="electrical wholesale recruitment, headhunting services, executive search, branch manager recruitment"
        canonical="https://power-up-talent-web.web.app/#/services"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Recruitment strategy meeting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary/70 font-bold mb-3">HOME / OUR SERVICES</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary"></span>Our Services
            </p>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-6">
              <span className="text-gradient italic">Elite</span><br/>Recruitment
            </h1>
            <p className="text-slate-300 font-light text-lg max-w-xl mb-8">
              We headhunt and place exceptional sales, leadership and technical talent that drives real commercial impact for electrical wholesalers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://powercrm-daa67.web.app/" target="_blank" rel="noopener noreferrer"
                className="bg-primary text-navy-deep px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white transition-all shadow-lg flex items-center gap-2">
                Hire Elite Talent <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
              <Link to="/upload-cv"
                className="border border-white/20 text-white px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition-all flex items-center gap-2">
                Find Your Next Role <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE FEATURES BAR ── */}
      <section className="bg-navy-deep border-y border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "person_search", title: "Targeted Headhunting", desc: "We proactively identify and engage high-performing professionals who aren't actively looking." },
              { icon: "electric_bolt", title: "Industry Specialists", desc: "We only recruit in electrical wholesale — we know the market, the people and the businesses." },
              { icon: "verified", title: "Proven Track Record", desc: "Hundreds of successful placements across the UK with outstanding results for our clients." },
              { icon: "visibility_off", title: "Confidential & Discreet", desc: "We operate with complete discretion to protect your business and your opportunities." },
            ].map((f, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }} className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-sm text-white mb-1">{f.title}</h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICE 1 — ELITE RECRUITMENT
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-background-dark py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>Elite Recruitment
              </p>
              <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-6">
                The Best Talent Isn't Applying.<br/><span className="text-gradient">We Find Them.</span>
              </h2>
              <p className="text-slate-400 font-light text-base leading-relaxed mb-8">
                Our Elite Recruitment service is built for businesses that need the very best — high-performing, experienced, exceptional individuals who can transform your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "psychology", title: "Deep Market Intelligence", desc: "We know every top performer in the sector." },
                  { icon: "groups", title: "Access to Passive Candidates", desc: "We connect with elite talent your competitors can't find." },
                  { icon: "assignment_ind", title: "Rigorous Assessment", desc: "We deeply qualify every candidate for ability and cultural fit." },
                  { icon: "trending_up", title: "Long-Term Impact", desc: "We ensure every placement drives growth and measurable results." },
                ].map((feat, i) => (
                  <div key={i} className="glass-card rounded-sm p-5">
                    <span className="material-symbols-outlined text-primary text-xl mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>{feat.icon}</span>
                    <h4 className="font-display font-bold text-sm text-white mb-1">{feat.title}</h4>
                    <p className="text-slate-400 text-xs font-light">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <Link to="/services/elite-recruitment"
                className="bg-primary text-navy-deep px-6 py-3 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white transition-all shadow-lg inline-flex items-center gap-2">
                Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img src={heroMainImg} alt="Elite recruitment professional" className="rounded-sm w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          {/* Roles We Recruit */}
          <motion.div {...fadeInUp} className="mb-8">
            <h3 className="font-display font-bold text-xl text-white mb-6">Roles We Recruit</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {["Branch Managers", "Sales Managers", "Internal Sales Representatives", "Commercial Directors", "Category Managers", "Technical Sales Specialists", "Operations Managers", "Regional Managers"].map((role, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300 font-light">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  {role}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div {...fadeInUp} className="glass-card-featured rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1">Ready to Hire Elite Talent?</h3>
              <p className="text-slate-400 text-sm font-light">Let's talk about how we can help you secure the people who make the biggest impact.</p>
            </div>
            <a href="https://powercrm-daa67.web.app/" target="_blank" rel="noopener noreferrer"
              className="bg-primary text-navy-deep px-6 py-3 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white transition-all shadow-lg shrink-0 flex items-center gap-2">
              Book A Call <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-primary/95">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Years Industry Experience" },
              { value: "500+", label: "Successful Placements" },
              { value: "90%", label: "Retention Rate after 12 Months" },
              { value: "UK-Wide", label: "Coverage" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-black text-2xl md:text-3xl text-navy-deep">{s.value}</div>
                <div className="text-xs text-navy-deep/70 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICE 2 — STRATEGIC RECRUITMENT
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContactImg} alt="Strategic recruitment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/85"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div {...fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4">Our Services</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-6">
                Strategic<br/><span className="text-gradient">Recruitment</span>
              </h2>
              <p className="text-slate-300 font-light text-base max-w-2xl mx-auto mb-8">
                We go beyond filling roles — we build high-performing teams aligned with your business strategy and long-term growth objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://powercrm-daa67.web.app/" target="_blank" rel="noopener noreferrer"
                  className="bg-primary text-navy-deep px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white transition-all shadow-lg flex items-center gap-2">
                  Hire Strategically <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <Link to="/contact"
                  className="border border-white/20 text-white px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition-all flex items-center gap-2">
                  Our Process <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "target", title: "Aligned With Your Goals", desc: "We align every search with your business objectives and growth strategy." },
              { icon: "groups_3", title: "Leadership Focused", desc: "We find exceptional leaders who inspire teams and drive commercial success." },
              { icon: "monitoring", title: "Long-Term Impact", desc: "Every placement is designed to create sustainable value and measurable results." },
            ].map((f, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.15 }} className="glass-card rounded-sm p-8 text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                <h3 className="font-display font-bold text-lg text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICE 3 — GROWTH PARTNERSHIPS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <motion.div {...fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>Our Services
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-6">
                Growth<br/><span className="text-gradient">Partnerships</span>
              </h2>
              <p className="text-slate-300 font-light text-base max-w-2xl mb-8">
                More than recruitment. We partner with electrical wholesalers to attract, develop and retain the people who power your growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://powercrm-daa67.web.app/" target="_blank" rel="noopener noreferrer"
                  className="bg-primary text-navy-deep px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white transition-all shadow-lg flex items-center gap-2">
                  Partner With Us <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <Link to="/upload-cv"
                  className="border border-white/20 text-white px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition-all flex items-center gap-2">
                  Find Your Next Role <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "handshake", title: "Partnership Mindset", desc: "We invest time in understanding your people, culture and growth plans." },
              { icon: "psychology", title: "Talent Strategy", desc: "We help you build talent pipelines that fuel sustained growth." },
              { icon: "groups", title: "Retention Focused", desc: "We place people who stay — because we match culture, not just skills." },
              { icon: "support_agent", title: "Continuous Support", desc: "We provide ongoing support to ensure every placement is a long-term success." },
            ].map((f, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }} className="glass-card rounded-sm p-6">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                <h3 className="font-display font-bold text-base text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* The Power-Up Promise */}
          <motion.div {...fadeInUp} className="glass-card-featured rounded-sm p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">The Power-Up Promise</h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed mb-6">
                  We are committed to being your long-term recruitment partner, helping you build a stronger team, a better business and a brighter future.
                </p>
                <div className="glass-card rounded-sm p-4 border-l-4 border-primary">
                  <p className="text-sm text-slate-300 font-light italic mb-3">
                    "Let's build your growth story together. Get in touch today."
                  </p>
                  <a href="https://powercrm-daa67.web.app/" target="_blank" rel="noopener noreferrer"
                    className="bg-primary text-navy-deep px-5 py-2.5 rounded-sm font-bold text-[10px] uppercase tracking-[0.12em] hover:bg-white transition-all inline-flex items-center gap-2">
                    Book A Call <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div>
                <img src={heroTeamImg} alt="Our team" className="rounded-sm w-full aspect-video object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM STATS BAR ── */}
      <section className="bg-primary/95">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Years Industry Experience" },
              { value: "500+", label: "Successful Placements" },
              { value: "90%", label: "Retention Rate after 12 Months" },
              { value: "UK-Wide", label: "Coverage" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-black text-2xl md:text-3xl text-navy-deep">{s.value}</div>
                <div className="text-xs text-navy-deep/70 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
