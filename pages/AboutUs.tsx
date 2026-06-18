import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/hero_about.png';
import heroTeamImg from '../src/assets/images/hero_team.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

const VALUES = [
  {
    icon: 'local_fire_department',
    title: 'Passion',
    description: 'We love what we do.',
  },
  {
    icon: 'emoji_events',
    title: 'Results',
    description: 'We deliver search outcomes that matter.',
  },
  {
    icon: 'handshake',
    title: 'Partnerships',
    description: 'We build relationships, not transactions.',
  },
  {
    icon: 'verified_user',
    title: 'Integrity',
    description: 'We tell our clients and candidates the truth.',
  },
];

const STATS = [
  { icon: 'history', value: '20+', label: 'Years Industry Experience' },
  { icon: 'group_add', value: '500+', label: 'Successful Placements' },
  { icon: 'trending_up', value: '90%+', label: 'Retention Rate after 12 Months' },
  { icon: 'public', value: 'UK-Wide', label: 'Coverage' },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Power-Up Talent"
        description="We are the UK's leading headhunters and recruitment specialists for the electrical wholesale industry. Discover our story, values and team."
        keywords="about power-up talent, electrical wholesale recruiter, uk recruitment consultancy, headhunters electrical"
        canonical="https://www.poweruptalent.co.uk/about"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="About Power-Up Talent"
            className="w-full h-full object-cover"
            style={{ opacity: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/70 to-background-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-6">
              <Link to="/" className="text-slate-400 hover:text-primary transition-colors">
                HOME
              </Link>
              <span className="mx-3 text-slate-600">/</span>
              <span className="text-primary">ABOUT US</span>
            </p>

            <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-none tracking-tight mb-6">
              About <span className="text-primary">Power-Up Talent</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We are the UK's leading headhunters and recruitment specialists for the electrical
              wholesale industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#who-we-are"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background-dark font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-lg">groups</span>
                Meet The Team
              </a>
              <a
                href="#our-story"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <span className="material-symbols-outlined text-lg">auto_stories</span>
                Our Story
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-dark to-transparent" />
      </section>

      {/* ── WHO WE ARE ── */}
      <section id="who-we-are" className="bg-background-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <motion.div {...fadeInUp}>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Who We Are
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-6 leading-tight">
                Who We <span className="text-primary">Are</span>
              </h2>
              <div className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
                <p>
                  Power-Up Talent was founded with one mission – to transform recruitment in the
                  electrical wholesale industry. With over 20 years of combined experience, we
                  understand the people, the market and the challenges businesses face.
                </p>
                <p>
                  We are passionate about connecting exceptional talent with ambitious businesses
                  and building long-term partnerships that deliver real results.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <span className="text-primary font-display font-bold text-sm uppercase tracking-widest">
                  Specialist Headhunters
                </span>
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={heroTeamImg}
                  alt="Power-Up Talent Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent" />
              </div>
              {/* Decorative border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES + OUR STORY ── */}
      <section id="our-story" className="bg-navy-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              What Drives Us
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-3">
              Our <span className="text-primary">Values</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="glass-card p-6 rounded-sm group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {v.icon}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Right — Our Story Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-card-dark border-2 border-primary/40 rounded-sm p-8 md:p-10 relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      auto_stories
                    </span>
                    <h3 className="font-display font-black text-2xl text-white">Our Story</h3>
                  </div>

                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Power-Up Talent was initially founded to meet demand from leading businesses
                      in the electrical wholesale industry who needed a recruitment partner that
                      truly understood their market.
                    </p>
                    <p>
                      We quickly saw a gap — candidates were being underserved by large recruiters
                      that didn't understand their market. Power-Up emerged to fill that gap.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/story"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
                    >
                      <span className="material-symbols-outlined text-lg">groups</span>
                      Meet The Team
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-background-dark/15 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-background-dark text-2xl">
                    {stat.icon}
                  </span>
                </div>
                <div className="font-display font-black text-3xl md:text-4xl text-background-dark leading-none mb-2">
                  {stat.value}
                </div>
                <p className="text-background-dark/80 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
