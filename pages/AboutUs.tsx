import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MILESTONES, GUARANTEES } from '../constants';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/about_us_hero_1780507427486.png';

const VALUES = [
  { icon: 'verified_user', title: 'Integrity', description: 'We operate with absolute transparency. No inflated pipelines, no wasted briefings — only honest, expert counsel.' },
  { icon: 'handshake', title: 'Partnerships', description: 'We are long-term partners to the clients and candidates we work with. Your success is our success.' },
  { icon: 'workspace_premium', title: 'Excellence', description: 'We never settle for good enough. We present only the top 1% of passive talent — because mediocrity costs you more in the long run.' },
  { icon: 'data_object', title: 'Innovation', description: 'Our AI-driven mapping platform gives us intelligence no traditional recruiter can match. We use technology to find the unfindable.' },
  { icon: 'bolt', title: 'Sector Grit', description: 'We have lived the trade counter life. We understand the pressures, the politics, and the talent dynamics of electrical wholesale from the inside.' },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Power-Up Talent"
        description="Built by the industry, for the industry. The story behind Power-Up Talent — the UK's most specialist headhunting consultancy for electrical wholesale."
        keywords="about power-up talent, electrical wholesale recruiter, uk recruitment consultancy"
        canonical="https://www.poweruptalent.co.uk/about"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end bg-navy-deep overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="About Us Hero" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-primary border border-primary/40 rounded-full bg-primary/10">
              Our Story
            </span>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-none tracking-tighter mb-4 max-w-4xl">
              Built by the Industry.{' '}
              <span className="text-primary">For the Industry.</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-xl">
              The story behind Power-Up Talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Story</span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep mt-2 mb-6">
                Why We Exist.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Power-Up Talent was founded with one mission: to fix how electrical wholesale recruits its leaders.
                  We have worked inside the industry — at the trade counter, in branch management, and at regional director level.
                  We know exactly what it takes to build high-performing teams in this sector.
                </p>
                <p>
                  Today we are recognised as the UK's most trusted specialist headhunting consultancy for electrical wholesale.
                  Our methodology is built on market intelligence, absolute discretion, and a relentless focus on finding the top 1%
                  of passive talent — the people currently delivering results for your competitors who don't know they should be
                  working for you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <img src={heroImg} alt="Our Story" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-sm p-5 shadow-xl">
                <div className="font-display font-black text-3xl text-navy-deep">25,000+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy-deep/70">Professionals Mapped</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="bg-background-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Leadership</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2">Meet the Founder.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card-dark border border-border-dark rounded-sm overflow-hidden grid md:grid-cols-[280px_1fr]">
              {/* Founder image placeholder */}
              <div className="bg-navy-deep flex flex-col items-center justify-center p-10 min-h-64">
                <div className="w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4">
                  <span className="font-display font-black text-4xl text-primary">JP</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl text-center">James Power</h3>
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mt-1 text-center">
                  Founder & Managing Director
                </p>
                <div className="flex gap-3 mt-5">
                  <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-white text-sm">link</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">"</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  With over a decade embedded in electrical wholesale operations and executive search,
                  James founded Power-Up Talent after seeing too many wholesalers staffed by mediocre placements
                  from generalist agencies who couldn't tell a busbar from a breaker. His vision was simple: build
                  the UK's most specialist headhunting service for the industry he knows best.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Electrical Wholesale', 'Executive Search', 'Market Mapping', 'AI Recruitment'].map((tag) => (
                    <span key={tag} className="px-3 py-1 border border-primary/30 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="bg-navy-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Journey</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2">Key Milestones.</h2>
          </motion.div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:flex items-start gap-0 relative">
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-white/10" />
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex-1 flex flex-col items-center text-center px-4 relative"
              >
                <div className="w-20 h-20 rounded-full bg-navy-deep border-2 border-primary flex items-center justify-center mb-5 z-10 relative">
                  <span className="material-symbols-outlined text-primary text-2xl">{m.icon}</span>
                </div>
                <span className="font-display font-black text-primary text-xl mb-1">{m.year}</span>
                <h3 className="font-display font-bold text-white text-base mb-2">{m.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-8">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-navy-deep border-2 border-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{m.icon}</span>
                  </div>
                  {i < MILESTONES.length - 1 && <div className="w-px flex-1 bg-white/10 my-2" />}
                </div>
                <div className="pt-2">
                  <span className="font-display font-black text-primary text-xl block mb-1">{m.year}</span>
                  <h3 className="font-display font-bold text-white text-base mb-1">{m.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR GUARANTEES ── */}
      <section className="bg-background-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Promise</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2">Our Guarantee.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card-dark border border-border-dark rounded-sm p-6 hover:border-primary/40 transition-colors group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">{g.icon}</span>
                </div>
                <h3 className="font-display font-bold text-white mb-2">{g.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Culture</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep mt-2">Our Values.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-slate-100 rounded-sm p-6 text-center hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">{v.icon}</span>
                </div>
                <h3 className="font-display font-bold text-navy-deep text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-3xl md:text-5xl text-navy-deep mb-4">
              Work With the Industry Experts.
            </h2>
            <p className="text-navy-deep/70 mb-8 text-lg">
              Whether you are hiring or exploring your next move, let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                id="about-cta-brief"
                className="inline-block px-10 py-4 bg-navy-deep text-white font-bold font-display uppercase tracking-widest text-sm rounded-sm hover:bg-navy-deep/80 transition-all duration-300 hover:scale-105"
              >
                Brief Us
              </Link>
              <Link
                to="/upload-cv"
                id="about-cta-cv"
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

export default AboutUs;
