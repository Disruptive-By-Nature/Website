import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/hero_main.png';
import heroServicesImg from '../src/assets/images/hero_services.png';

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
        title="Elite Headhunters for UK Electrical Wholesale | Power-Up Talent"
        description="The UK's #1 headhunters for electrical wholesale. We connect elite sales, leadership and technical talent with the UK's most ambitious electrical wholesale businesses."
        keywords="electrical wholesale headhunter, uk recruitment, branch manager recruiter, executive search electrical wholesale, headhunting"
        canonical="https://power-up-talent-web.web.app/"
      />

      {/* ══════════════════════════════════════════════════════════
          1. HERO SECTION — Full-width with image overlay
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
        {/* Background image */}
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
              The UK's #1 Recruitment Partner For Electrical Wholesale
            </p>

            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Elite Headhunters.<br/>
              <span className="text-gradient">Powerful</span> Placements.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              We connect the best sales, leadership and technical talent with the UK's most ambitious electrical wholesale businesses.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://powercrm-daa67.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-navy-deep px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Hire Top Talent
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
              <Link
                to="/upload-cv"
                className="border border-white/20 text-white px-7 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
              >
                Find Your Next Role
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">verified</span>
              <span className="text-slate-400 font-light">Trusted by leading UK electrical wholesalers</span>
              <div className="flex gap-0.5 ml-2">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="text-slate-500 text-xs font-light">4.9/5 from 150+ reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. STATS BAR — Credibility metrics
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep border-y border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "workspace_premium", value: "20+", label: "Years Industry Experience" },
              { icon: "handshake", value: "500+", label: "Successful Placements" },
              { icon: "verified_user", value: "Trusted", label: "by Leading Electrical Wholesalers" },
              { icon: "public", value: "UK-Wide", label: "Coverage" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                <div className="font-display font-black text-2xl md:text-3xl text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 font-light mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. WHY US — Industry expertise section
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-background-dark py-24" id="why-us">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>
                Why Power-Up Talent?
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-6">
                We Know The Industry.<br/>That's Why We're <span className="text-gradient">#1</span>.
              </h2>
              <p className="text-slate-400 font-light leading-relaxed text-base max-w-xl">
                We don't just recruit for electrical wholesale — we live and breathe it. Our deep industry knowledge, network and proven process deliver exceptional results for our clients and life-changing opportunities for our candidates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "electric_bolt",
                  title: "Industry Specialists",
                  description: "We only recruit in electrical wholesale. No distractions. No generalists."
                },
                {
                  icon: "person_search",
                  title: "Headhunting Experts",
                  description: "We proactively find and attract top performers your competitors can't reach."
                },
                {
                  icon: "trending_up",
                  title: "Revenue Focused",
                  description: "We place proven sales and leadership talent who drive revenue and growth."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass-card rounded-sm p-6 text-center"
                >
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {feature.icon}
                  </span>
                  <h3 className="font-display font-bold text-base text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. OUR SERVICES — Service cards grid
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep py-24" id="services">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div {...fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>
                Our Services
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
                Recruitment Solutions<br/>Built For <span className="text-gradient">Electrical Wholesale</span>
              </h2>
            </motion.div>
            <motion.p
              {...fadeInUp}
              className="text-slate-400 font-light leading-relaxed text-base lg:pt-12"
            >
              From branch to boardroom, we deliver talent that makes a real impact. Our tailored recruitment solutions are designed around your business goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "search",
                title: "Executive Search",
                description: "We recruit senior leaders and directors who set the vision and drive long-term success.",
                link: "/services/elite-recruitment"
              },
              {
                icon: "groups",
                title: "Sales & Leadership Recruitment",
                description: "We find top-performing sales professionals and leaders who consistently exceed targets.",
                link: "/services/strategic-recruitment"
              },
              {
                icon: "apartment",
                title: "Branch & Regional Management",
                description: "We place experienced managers who build strong teams and deliver outstanding results.",
                link: "/services/growth-partnerships"
              },
              {
                icon: "visibility_off",
                title: "Confidential Headhunting",
                description: "Discreet, professional and targeted headhunting for your most critical roles.",
                link: "/services/elite-recruitment"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="glass-card rounded-sm p-8 block h-full group"
                >
                  <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. FULL-WIDTH IMAGE BREAK
      ══════════════════════════════════════════════════════════ */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={heroServicesImg} alt="Recruitment strategy meeting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-screen-xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-lg"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-3">Deep Industry Knowledge</p>
              <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
                The Best Talent Isn't Applying.<br/><span className="text-gradient">We Find Them.</span>
              </h2>
              <p className="text-slate-300 font-light text-sm leading-relaxed">
                80% of the best performers in electrical wholesale never apply for jobs. Our headhunting methodology reaches the passive talent your competitors can't find.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. PROVEN RESULTS — Impact metrics
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-background-dark py-20" id="results">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4">Proven Results That Power Growth</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "£50M+", label: "Revenue impact via placements", icon: "payments" },
              { value: "90%", label: "Retention rate after 12 months", icon: "thumb_up" },
              { value: "14", label: "Average days to successful placement", icon: "schedule" },
              { value: "500+", label: "Businesses helped power their teams", icon: "corporate_fare" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="material-symbols-outlined text-primary/60 text-2xl mb-3 block">{metric.icon}</span>
                <div className="font-display font-black text-3xl md:text-4xl text-white mb-2">{metric.value}</div>
                <div className="text-sm text-slate-400 font-light">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. TESTIMONIALS — What our clients say
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep py-24 border-y border-white/5" id="testimonials">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
            <motion.div {...fadeInUp}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>
                Trusted By Leading Wholesalers
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white">What Our Clients Say</h2>
            </motion.div>
            <Link
              to="/insights"
              className="border border-white/15 text-white px-6 py-3 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              View Case Studies
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "\"Power-Up Talent delivered a top-performing Branch Manager within 10 days. Game changer.\"",
                name: "Andy Harrison",
                role: "Managing Director",
                company: "Leading Electrical Wholesaler",
                stars: 5
              },
              {
                quote: "\"Their industry knowledge and proactive approach set them apart from any other recruitment agency.\"",
                name: "Sarah Lloyd",
                role: "HR Director",
                company: "National Distributor",
                stars: 5
              },
              {
                quote: "\"They don't send CVs, they send the right people. Every time.\"",
                name: "Paul Anderson",
                role: "Sales Director",
                company: "Electrical Wholesaler",
                stars: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-sm p-8"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: testimonial.stars }).map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-white font-light text-base leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-slate-500 text-xs font-light">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. CTA — Final call to action
      ══════════════════════════════════════════════════════════ */}
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
                  Ready To Hire <span className="text-gradient">The Best</span><br/>
                  — Or Become One?
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
                <Link
                  to="/upload-cv"
                  className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold text-[11px] uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  Find Your Next Role
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
