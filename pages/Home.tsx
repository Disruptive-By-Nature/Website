import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { METRICS, TESTIMONIALS, SERVICES, ROLES_PLACED } from '../constants';
import Counter from '../components/Counter';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/uk_electrical_wholesale_hero_1780507084507.png';

const comparisonRows = [
  { left: 'Job boards & adverts', right: 'Direct headhunting only' },
  { left: 'Any sector, any role', right: 'Electrical wholesale only' },
  { left: 'Junior generalist recruiters', right: 'Sector veterans & specialists' },
  { left: 'CV sifting from applicants', right: 'Rigorous technical vetting' },
  { left: 'Reactive — wait for applications', right: 'Proactive passive talent mapping' },
  { left: 'Unpredictable timelines', right: '28-day average placement' },
];

const Home: React.FC = () => {
  const doubled = [...ROLES_PLACED, ...ROLES_PLACED];
  const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <>
      <SEO
        title="Power-Up Talent | The UK's Only Electrical Wholesale Headhunters"
        description="We find the elite leaders working for your competitors and bring them to you. No job boards. No adverts. Pure headhunting for UK electrical wholesale."
        keywords="electrical wholesale headhunter, uk recruitment, wholesale talent, power-up talent"
        canonical="https://www.poweruptalent.co.uk/"
      />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-background-dark overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="UK Electrical Wholesale"
            className="w-full h-full object-cover"
            style={{ opacity: 0.24 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-primary border border-primary/40 rounded-full bg-primary/10">
              Specialist Headhunting · UK Electrical Wholesale
            </span>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tighter mb-6 max-w-5xl mx-auto">
              The UK&apos;s Only Electrical Wholesale{' '}
              <span className="text-primary">Headhunters.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              We find the elite leaders working for your competitors — and bring them to you.
              No job boards. No adverts. Pure headhunting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                id="hero-brief-us"
                className="inline-block px-8 py-4 bg-primary text-navy-deep font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
              >
                Brief Us
              </Link>
              <Link
                to="/upload-cv"
                id="hero-submit-cv"
                className="inline-block px-8 py-4 border border-white/30 text-white font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm"
              >
                Submit Your CV
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="material-symbols-outlined text-primary/60 text-3xl">expand_more</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ROLES TICKER */}
      <section className="bg-primary text-navy-deep py-4 overflow-hidden">
        <div className="flex items-center gap-4 mb-1">
          <span className="pl-6 font-display font-black uppercase tracking-widest text-sm whitespace-nowrap shrink-0">
            We Place:
          </span>
          <span className="text-navy-deep/40 font-bold">|</span>
        </div>
        <div className="overflow-hidden">
          <div className="animate-marquee-slow">
            {doubled.map((role, i) => (
              <span key={i} className="flex items-center gap-3 mx-6 font-display font-bold text-sm uppercase tracking-widest whitespace-nowrap">
                <span className="material-symbols-outlined text-base text-navy-deep/70">bolt</span>
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: METRICS */}
      <section className="bg-background-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark border border-border-dark rounded-sm overflow-hidden">
            {METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card-dark p-8 md:p-12 flex flex-col items-center justify-center text-center"
              >
                <div className="font-display font-black text-4xl md:text-5xl text-primary mb-2">
                  <Counter value={metric.value} />
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-widest font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Services</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep mt-2 mb-4">What We Do.</h2>
            <p className="text-slate-500 text-lg max-w-xl">
              Specialist headhunting services for the UK electrical wholesale industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group border border-slate-100 rounded-sm p-8 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="text-4xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-navy-deep mb-1">{service.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{service.tagline}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              id="services-learn-more"
              className="inline-block px-8 py-3 border-2 border-navy-deep text-navy-deep font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:bg-navy-deep hover:text-white transition-all duration-300"
            >
              See Full Services
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY POWER-UP VS GENERIC AGENCIES */}
      <section className="bg-navy-deep py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">The Difference</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2">Why Power-Up Talent?</h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-0 mb-2">
            <div className="col-span-1" />
            <div className="col-span-1 text-center py-3 px-4 bg-white/5 rounded-t-sm border-b border-white/10">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Generic Agency</span>
            </div>
            <div className="col-span-1 text-center py-3 px-4 bg-primary/10 rounded-t-sm border-b border-primary/30">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Power-Up Talent</span>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden border border-white/10">
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-0 border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
              >
                <div className="col-span-1 px-4 py-4 flex items-center" />
                <div className="col-span-1 px-4 py-4 flex items-center gap-2 bg-white/[0.01]">
                  <span className="material-symbols-outlined text-red-400 text-lg flex-shrink-0">close</span>
                  <span className="text-slate-300 text-sm">{row.left}</span>
                </div>
                <div className="col-span-1 px-4 py-4 flex items-center gap-2 bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">check</span>
                  <span className="text-white text-sm font-medium">{row.right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Client Stories</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep mt-2">What Our Clients Say.</h2>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <div className="animate-marquee">
            {doubledTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 md:w-96 bg-slate-50 border border-slate-100 rounded-sm p-6 mx-4"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-navy-deep text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} &middot; {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: DUAL CTA BANNER */}
      <section className="bg-primary py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-3xl md:text-5xl text-navy-deep mb-4">
              Ready to Outperform the Competition?
            </h2>
            <p className="text-navy-deep/70 mb-10 text-lg">
              Whether you&apos;re hiring or looking for your next move &mdash; let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                id="cta-brief-us"
                className="inline-block px-10 py-4 bg-navy-deep text-white font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:bg-navy-deep/80 transition-all duration-300 hover:scale-105"
              >
                Brief Us &mdash; I&apos;m Hiring
              </Link>
              <Link
                to="/upload-cv"
                id="cta-submit-cv"
                className="inline-block px-10 py-4 bg-white text-navy-deep font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              >
                Submit Your CV
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
