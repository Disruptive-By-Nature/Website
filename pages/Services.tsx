import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { TESTIMONIALS, FAQ_ITEMS, GUARANTEES } from "../constants";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
// @ts-ignore
import heroImg from "../src/assets/images/services_hero_1780507411826.png";

const Services: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white overflow-x-hidden">
      <SEO
        title="Recruitment Services | Power-Up Talent | Electrical Wholesale Headhunters"
        description="Elite headhunting services for the UK electrical wholesale industry. Executive search, strategic recruitment and growth partnerships. Discover our 5-step process."
        keywords="Electrical Wholesale Recruitment Services, Executive Headhunting UK, Branch Manager Search, Regional Director Recruitment"
        canonical="https://poweruptalent.co.uk/services"
      />

      {/* Hero */}
      <header className="py-32 md:py-48 px-6 text-center border-b border-white/8 relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={heroImg} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" alt="Power-Up Talent Recruitment Services" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-navy-deep/20 to-navy-deep/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.04)_0%,transparent_70%)]"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold uppercase tracking-[0.4em] mb-10">
            Specialist Headhunting Services
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tight leading-none uppercase text-glow">
            Recruitment<br /><span className="text-gradient">Services.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Three specialist service lines built exclusively for the UK electrical wholesale sector. No other industry. No compromise.
          </p>
        </div>
      </header>

      {/* DETAILED SERVICES SECTIONS */}
      {/* 1. Elite Recruitment */}
      <section className="py-24 md:py-32 px-6 bg-background-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-navy-deep/30 transform skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div className="flex-1" {...slideInLeft}>
              <span className="text-primary font-black text-6xl font-display mb-4 opacity-20 block">01</span>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white mb-4">Elite Recruitment</h2>
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-8">Executive & Retained Search</p>
              
              <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg mb-10">
                <p>
                  When you are hiring at the board, regional, or director level, generic recruitment methodologies fail. The leaders capable of transforming your P&L are not actively looking for work; they are securely employed and delivering results for your competitors.
                </p>
                <p>
                  Our Elite Recruitment service is a true executive search solution. We conduct comprehensive market mapping, approaching passive candidates with precision and absolute discretion. This retained model guarantees that our resources are fully dedicated to filling your most critical leadership vacuums.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Board-Level Appointments",
                  "Regional Directors",
                  "Head of Procurement",
                  "Operations Directors",
                  "Discrete Market Mapping",
                  "Retained Exclusivity"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-sm font-medium text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="flex-1 w-full" {...slideInRight}>
              <div className="aspect-[4/5] md:aspect-square bg-card-dark rounded-sm border border-white/10 overflow-hidden relative group">
                <img src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png" alt="Elite Recruitment" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <Link to="/services/elite-recruitment" className="inline-flex items-center justify-between w-full p-4 bg-primary text-navy-deep font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white transition-colors">
                    Explore Service <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Strategic Recruitment */}
      <section className="py-24 md:py-32 px-6 bg-navy-deep border-b border-white/5 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-background-dark/30 transform -skew-x-12 -translate-x-32" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <motion.div className="flex-1" {...slideInRight}>
              <span className="text-primary font-black text-6xl font-display mb-4 opacity-20 block">02</span>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white mb-4">Strategic Recruitment</h2>
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-8">Branch & Management Focus</p>
              
              <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg mb-10">
                <p>
                  The branch is the battleground of electrical wholesale. The difference between an average Branch Manager and a great one is measured in millions of pounds of protected margin.
                </p>
                <p>
                  Our Strategic Recruitment service is designed to find management-level professionals who possess technical grit and operational literacy. We dive deep into candidate networks to secure professionals who understand stock profiling, trade counter dynamics, and regional P&L management. We don't just fill seats; we place revenue generators.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Branch Managers",
                  "Profit Centre Managers",
                  "Senior Sales Managers",
                  "Technical Design Leads",
                  "Passive Candidate Sourcing",
                  "Competitor Analysis"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-sm font-medium text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="flex-1 w-full" {...slideInLeft}>
              <div className="aspect-[4/5] md:aspect-square bg-card-dark rounded-sm border border-white/10 overflow-hidden relative group">
                <img src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg" alt="Strategic Recruitment" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <Link to="/services/strategic-recruitment" className="inline-flex items-center justify-between w-full p-4 bg-primary text-navy-deep font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white transition-colors">
                    Explore Service <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Growth Partnerships */}
      <section className="py-24 md:py-32 px-6 bg-background-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-navy-deep/30 transform skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div className="flex-1" {...slideInLeft}>
              <span className="text-primary font-black text-6xl font-display mb-4 opacity-20 block">03</span>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white mb-4">Growth Partnerships</h2>
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-8">Multi-Hire & National Expansion</p>
              
              <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg mb-10">
                <p>
                  Scaling a business rapidly requires a coordinated talent acquisition strategy. Whether you are opening a new region, acquiring a competitor, or rolling out multiple branches nationwide, piecemeal recruitment will stall your momentum.
                </p>
                <p>
                  Our Growth Partnerships operate as an extension of your business. We provide dedicated resource allocation, hybrid deployment models, and embedded talent mapping to execute high-volume, high-quality management placements on strict timelines. We ensure your expansion is powered by the right people from day one.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "New Branch Rollouts",
                  "National Expansion Teams",
                  "Dedicated Account Manager",
                  "Volume Management Placements",
                  "Employer Branding Support",
                  "Embedded Talent Mapping"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-sm font-medium text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="flex-1 w-full" {...slideInRight}>
              <div className="aspect-[4/5] md:aspect-square bg-card-dark rounded-sm border border-white/10 overflow-hidden relative group">
                <img src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png" alt="Growth Partnerships" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <Link to="/services/growth-partnerships" className="inline-flex items-center justify-between w-full p-4 bg-primary text-navy-deep font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white transition-colors">
                    Explore Service <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Power-Up (Moved from Home page: Operational Intelligence & Commitment) */}
      <section className="bg-navy-deep py-24 md:py-32 text-white border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,193,7,0.04)_0%,transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sector Intelligence</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">Why Power-Up Talent?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We understand the reality of the trade counter and the commercial demands of board-level wholesale leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
            <motion.div 
              className="p-10 bg-card-dark border border-white/5 rounded-sm flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-[9px] font-bold uppercase tracking-widest rounded-full mb-6">Operational DNA Only</span>
                <h3 className="text-2xl font-display font-black uppercase text-white mb-4">"Trade Literacy" Consulting</h3>
                <p className="text-slate-300 font-light leading-relaxed text-base">
                  We understand why your Branch Manager needs technical pricing experience. We don't recruit from a generic script; we recruit from decades of operational sector grit.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="p-10 bg-card-dark border border-white/5 rounded-sm flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-[9px] font-bold uppercase tracking-widest rounded-full mb-6">Operational ROI</span>
                <h3 className="text-2xl font-display font-black uppercase text-white mb-4">Strategic Operational Alignment</h3>
                <p className="text-slate-300 font-light leading-relaxed text-base">
                  We ensure that every candidate identified aligns with your specific commercial objectives, securing immediate return on your talent investment.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-card-dark p-10 rounded-sm border border-white/5 text-center max-w-4xl mx-auto hover:border-primary/30 transition-all duration-300"
            {...fadeInUp}
          >
            <h4 className="font-display font-bold text-lg text-primary uppercase tracking-wider mb-4">Our Commitment to Talent</h4>
            <p className="text-slate-300 font-light leading-relaxed max-w-3xl mx-auto text-sm">
              We don't just source talent; we actively bring in top performers from both inside and outside the industry. Once they join, we support them with comprehensive, career-long training at all levels, ensuring they have the tools to excel and protect margins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24 md:py-32 px-6 bg-background-dark border-b border-white/5">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Our Promise</span>
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">Our Guarantee.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-sm p-8 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-2xl">{g.icon}</span>
                </div>
                <h3 className="font-display font-black text-white uppercase text-base tracking-tight mb-3">{g.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 bg-navy-deep border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">FAQ</span>
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">Common Questions.</h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto px-6 mb-16 text-center">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Client Voices</span>
          <h2 className="text-3xl md:text-6xl font-display font-black text-slate-900 uppercase tracking-tight leading-none">What Our Clients Say.</h2>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex gap-8 whitespace-nowrap py-4">
            {[...Array(2)].flatMap(() => TESTIMONIALS).map((t, i) => (
              <div key={i} className="w-[380px] md:w-[500px] flex-shrink-0 bg-white border border-slate-100 p-10 shadow-lg text-left rounded-sm">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  ))}
                </div>
                <p className="text-slate-600 text-base font-light leading-relaxed mb-8 whitespace-normal italic">"{t.quote}"</p>
                <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-deep rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">person</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-display font-black uppercase tracking-tight leading-none">{t.name}</p>
                    <p className="text-primary text-xs font-semibold uppercase tracking-[0.15em] mt-1">{t.role}</p>
                    {t.company && <p className="text-slate-400 text-xs mt-0.5">{t.company}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-primary text-navy-deep">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tight mb-6 leading-[0.9] uppercase">Ready to Brief Us?</h2>
          <p className="text-navy-deep/70 text-lg font-light mb-10 max-w-xl mx-auto">We respond to all enquiries within 24 hours. Market mapping begins within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-navy-deep text-white px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-navy-deep transition-all shadow-2xl">Contact Us Now</Link>
            <Link to="/upload-cv" className="border-2 border-navy-deep text-navy-deep px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-[0.2em] hover:bg-navy-deep hover:text-white transition-all">I'm a Candidate</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
