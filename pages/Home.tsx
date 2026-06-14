import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { METRICS, TESTIMONIALS, SERVICES, ROLES_PLACED } from '../constants';
import Counter from '../components/Counter';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/uk_electrical_wholesale_hero_1780507084507.png';

const comparisonRows = [
  { feature: 'Sourcing Method', left: 'Job boards & adverts', right: 'Direct headhunting only' },
  { feature: 'Specialism', left: 'Any sector, any role', right: 'Electrical wholesale only' },
  { feature: 'Consultants', left: 'Junior generalist recruiters', right: 'Sector veterans & specialists' },
  { feature: 'Vetting', left: 'CV sifting from applicants', right: 'Rigorous technical vetting' },
  { feature: 'Approach', left: 'Reactive — wait for applications', right: 'Proactive passive talent mapping' },
  { feature: 'Delivery', left: 'Unpredictable timelines', right: '28-day average placement' },
];

const transformItems = [
  { icon: 'schedule', title: 'Accelerated Hiring', stat: '50% Lead Time Reduction', desc: 'Secure critical leaders quickly before buying group windows shift.' },
  { icon: 'person_search', title: 'Precision Hires', stat: 'Predictive Success', desc: 'Operational modelling ensures candidates align with branch margin protection goals.' },
  { icon: 'currency_pound', title: 'Operational ROI', stat: '30% Cost-Per-Hire Lower', desc: 'Efficiency through technical headhunting rather than generic CV skimming.' },
  { icon: 'diversity_3', title: 'Balanced Teams', stat: 'Unbiased Sourcing', desc: 'Building inclusive, high-performing cultures across national branch networks.' },
  { icon: 'trending_up', title: 'Scalability', stat: 'Hybrid Deployment', desc: 'Agile support for rapid branch rollouts and regional restructuring.' },
  { icon: 'analytics', title: 'Sector Intel', stat: 'Real-Time Mapping', desc: 'Live data on competitor procurement leads and regional salary benchmarks.' },
];

const Home: React.FC = () => {
  const doubled = [...ROLES_PLACED, ...ROLES_PLACED];
  const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <>
      <SEO
        title="Power-Up Talent | The UK's Only Electrical Wholesale Headhunters"
        description="We find the elite leaders working for your competitors and bring them to you. No job boards. No adverts. Pure headhunting for UK electrical wholesale."
        keywords="electrical wholesale headhunter, uk recruitment, wholesale talent, power-up talent"
        canonical="https://power-up-talent.app/"
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

      {/* SECTION 3.5: WHY US (Operational Intelligence & Commitment) */}
      <section className="bg-navy-deep py-24 text-white border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,193,7,0.04)_0%,transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sector Intelligence</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">Why Us.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We understand the reality of the trade counter and the commercial demands of board-level wholesale leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
            <motion.div 
              className="p-10 bg-card-dark border border-white/5 rounded-sm flex flex-col justify-between"
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
              className="p-10 bg-card-dark border border-white/5 rounded-sm flex flex-col justify-between"
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
            className="bg-card-dark p-10 rounded-sm border border-white/5 text-center max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h4 className="font-display font-bold text-lg text-primary uppercase tracking-wider mb-4">Our Commitment to Talent</h4>
            <p className="text-slate-300 font-light leading-relaxed max-w-3xl mx-auto text-sm">
              We don't just source talent; we actively bring in top performers from both inside and outside the industry. Once they join, we support them with comprehensive, career-long training at all levels, ensuring they have the tools to excel and protect margins.
            </p>
          </motion.div>
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
                className="group border border-slate-100 rounded-sm p-8 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col bg-slate-50/50"
              >
                <div className="text-4xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-navy-deep mb-1">{service.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{service.tagline}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-navy-deep font-bold text-xs uppercase tracking-wider mb-6 hover:text-primary transition-colors w-fit"
                >
                  View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>

                <ul className="space-y-2 border-t border-slate-200/60 pt-4">
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

      {/* SECTION 4.5: HYBRID ADVANCED SOURCING */}
      <section className="py-24 bg-background-dark text-white border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sourcing Method</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">
              The Hybrid Advantage.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We blend the precision of AI-driven market mapping with the irreplaceable technical instinct of industry veterans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'manage_search', title: 'Market Intelligence', desc: 'We map the UK market to understand competitor margin strategies and leadership DNA.' },
              { icon: 'data_object', title: 'Proprietary Sourcing', desc: 'Our AI models scan passive high-performers, bypassing job boards to find leaders who deliver results.' },
              { icon: 'person_search', title: 'Operational Vetting', desc: 'Our consultants vet every candidate for trade counter literacy and commercial sharp-mindedness.' },
              { icon: 'target', title: 'Cultural & ROI Fit', desc: 'We ensure candidates align with your organizational culture and drive immediate operational ROI.' }
            ].map((step, i) => (
              <div key={i} className="bg-card-dark border border-white/5 rounded-sm p-8 text-center flex flex-col group hover:border-primary/50 transition-all duration-500 min-h-[300px]">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">{step.icon}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight mb-4">{step.title}</h3>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE STRATEGIC DIFFERENCE (with Comparison Table) */}
      <section className="bg-navy-deep py-24 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Methodology Difference</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">The Strategic Difference.</h2>
            <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
              Power-Up Talent is not a traditional recruitment agency. We are a specialist consultancy focused exclusively on identifying the passive high-performers that standard job boards cannot reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="p-8 bg-card-dark border border-white/5 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-display font-bold text-primary uppercase mb-4">Headhunting-First</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Operating on a methodology of market mapping and absolute discretion. We understand that the elite 1% of the workforce is rarely &quot;looking&quot; for work; they are busy delivering results for your competitors.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 bg-card-dark border border-white/5 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-display font-bold text-primary uppercase mb-4">Trade Literacy</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Our consultants are sector specialists with deep operational backgrounds. We speak the language of technical procurement and branch management, ensuring a peer-level vetting process.
              </p>
            </motion.div>
          </div>

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
                <div className="col-span-1 px-4 py-4 flex items-center text-slate-400 font-bold text-xs uppercase tracking-wider border-r border-white/5 bg-black/10">
                  {row.feature}
                </div>
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

      {/* SECTION 5.5: HOW WE TRANSFORM BUSINESS */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Commercial Value</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep mt-2 mb-4">
              How We Transform Your Business.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Measurable results that drive profitability, margin protection, and sustainable growth for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-sm p-8 hover:shadow-xl transition-all duration-300 flex gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy-deep uppercase tracking-tight mb-1">{item.title}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">{item.stat}</p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5.8: INDUSTRY EXPERT (SECTOR EXPERTISE) */}
      <section className="py-24 bg-background-dark text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sector Leadership</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">
              Industry Experts.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Our consultants have worked in the electrical wholesale industry for decades. We speak your language.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png', title: 'Electrical Wholesale', desc: 'Specialised Branch and Regional leadership sourcing for national distributors and independent buying groups.' },
              { img: 'https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg', title: 'Fire & Security', desc: 'Technical experts and management for life-safety systems, fire protection, and secure infrastructure.' },
              { img: 'https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png', title: 'Lighting & Design', desc: 'Creative and technical procurement leads for high-specification industrial and commercial lighting.' }
            ].map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-card-dark border border-white/5 rounded-sm overflow-hidden group hover:border-primary/50 transition-all duration-500"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={sector.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    alt={sector.title}
                  />
                  <div className="absolute inset-0 bg-navy-deep/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </motion.div>
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
