
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { METRICS, TESTIMONIALS, SERVICES, INSIGHTS } from '../constants';
import Counter from '../components/Counter';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden pt-16 md:pt-20 bg-background-dark">
      <SEO 
        title="Power-Up Talent | Elite Electrical Wholesale Headhunters & Executive Search"
        description="Power-Up Talent are elite headhunters specializing in the UK electrical wholesale industry. We bridge operational grit with board-level strategy to secure the sector's best leadership talent."
        keywords="Electrical Wholesale Headhunters, Elite Executive Search, UK Electrical Sector Recruitment, Wholesale Branch Manager Recruitment, Electrical Specialist Search, Power-Up Talent"
        canonical="https://poweruptalent.co.uk/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "RecruitmentAgency",
          "name": "Power-Up Talent",
          "url": "https://poweruptalent.co.uk/",
          "description": "Elite headhunters specializing in the UK electrical wholesale industry.",
          "areaServed": "United Kingdom",
          "knowsAbout": [
            "Electrical Wholesale Executive Search",
            "Branch Leadership Recruitment",
            "Regional Director Headhunting",
            "Electrical Sector Talent Mapping"
          ]
        }}
      />
      {/* 1. Hero Header */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-navy-deep">
        {/* Refined Background Layers */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="/images/electrical_warehouse_hero_1778586599378.png"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-screen"
            alt="Professional UK Electrical Wholesale Distribution Centre"
          />
          
          {/* Atmospheric Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/40 to-background-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.08)_0%,transparent_60%)]"></div>
          
          {/* Secondary Glows & Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full"
          ></motion.div>
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full"></div>
        </motion.div>
        
        <div className="relative z-10 px-6 w-full max-w-screen-xl mx-auto py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.4em]">UK Sector Intelligence Hub</span>
            </motion.div>
            
            <div className="overflow-hidden mb-10">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-6xl sm:text-7xl md:text-[9.5rem] font-display font-black leading-[0.82] tracking-tighter text-white uppercase"
              >
                Strategic <br/>
                <span className="text-primary italic font-light">Talent</span> <br/>
                Acquisition.
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl md:text-3xl text-slate-300 mb-16 leading-relaxed font-light max-w-3xl text-balance"
            >
              We find the elite leaders others miss. Bridging the gap between <span className="text-white font-medium">operational grit</span> and board-level strategy for the UK electrical sector.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link to="/contact" className="bg-primary text-navy-deep px-14 py-7 rounded-sm font-bold text-[12px] uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:bg-white hover:shadow-primary/40 transition-all duration-500 flex items-center justify-center gap-4 group text-center">
                Consult Our Specialists
                <span className="material-symbols-outlined text-xl group-hover:rotate-45 transition-transform duration-500">bolt</span>
              </Link>
              <Link to="/contact" className="bg-white/5 border border-white/15 text-white px-14 py-7 rounded-sm font-bold text-[12px] uppercase tracking-[0.3em] hover:bg-white/10 backdrop-blur-md transition-all duration-500 text-center">
                Submit Executive Brief
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="hidden lg:flex flex-col items-center"
          >
             <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute inset-0 border-[2px] border-primary/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                <div className="bg-navy-deep/80 backdrop-blur-3xl border-[3px] border-primary p-12 rounded-full shadow-[0_0_100px_rgba(212,175,55,0.15)] flex flex-col items-center text-center z-10 group hover:scale-105 transition-transform duration-700">
                     <span className="material-symbols-outlined text-primary text-6xl font-black mb-4 group-hover:scale-110 transition-transform">partner_exchange</span>
                     <p className="text-white font-display font-black text-3xl uppercase leading-none">Strategic</p>
                     <p className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mt-3">Partner Status</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Numbers */}
      <section className="bg-background-dark relative overflow-hidden">
        <div className="bg-navy-deep py-28 px-6 text-center border-y border-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_100%)]"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-[5.5rem] font-display font-black text-primary tracking-tighter uppercase mb-6 leading-none">
              RESULTS THAT SPEAK FOR THEMSELVES
            </h2>
            <p className="text-white text-sm md:text-xl font-bold uppercase tracking-[0.5em] opacity-80">
              HERE'S OUR RECORD IN NUMBERS
            </p>
          </motion.div>
        </div>

        <div className="py-24 px-6 border-b border-white/5 relative">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {METRICS.map((metric, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={i} 
                  className="bg-background-dark p-10 md:p-14 text-center group hover:bg-navy-deep transition-all duration-700"
                >
                  <div className="text-primary text-4xl md:text-7xl font-display font-bold mb-4 tracking-tighter">
                    <Counter value={metric.value} />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black leading-tight group-hover:text-white transition-colors">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Methodology Strategic Pillars */}
      <section id="services" className="py-32 md:py-48 px-6 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 md:mb-32"
          >
            <span className="text-primary-dark font-bold text-[11px] uppercase tracking-[0.5em] block mb-6">Our Core Methodology</span>
            <h2 className="text-4xl md:text-8xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none mb-8">
              Strategic <span className="text-primary-dark italic">Pillars.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((pillar, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                key={pillar.id} 
                className="bg-slate-50 p-12 border border-slate-200 rounded-sm hover:bg-navy-deep hover:text-white transition-all duration-700 group flex flex-col min-h-[500px] shadow-sm hover:shadow-2xl overflow-hidden relative"
              >
                <img 
                  src={pillar.image} 
                  alt={pillar.name} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                />
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-primary-dark font-bold text-4xl mb-8 opacity-40 group-hover:opacity-100">0{i+1}</span>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-slate-500 group-hover:text-slate-400 font-light leading-relaxed mb-10 flex-grow">
                    {pillar.description}
                  </p>
                  <ul className="space-y-3">
                    {pillar.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-100">
                        <span className="w-1.5 h-1.5 bg-primary-dark rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. Reviews */}
      <section className="py-32 bg-slate-50 overflow-hidden text-center border-y border-slate-200">
        <div className="max-w-screen-xl mx-auto px-6 mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-900 tracking-tighter uppercase leading-none">Industry Voices</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex gap-10 whitespace-nowrap py-10">
            {[...Array(2)].flatMap(() => TESTIMONIALS).map((t, i) => (
              <div key={i} className="w-[350px] md:w-[550px] flex-shrink-0 bg-white border border-slate-100 p-12 md:p-16 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 text-left">
                <div className="flex gap-1 mb-10 text-primary">
                  {[...Array(5)].map((_, starIdx) => (
                    <span key={starIdx} className="material-symbols-outlined text-4xl fill-1">star</span>
                  ))}
                </div>
                <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed mb-12 whitespace-normal italic">"{t.quote}"</p>
                <div className="pt-8 border-t border-slate-100 flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-primary border border-slate-200">
                    <span className="material-symbols-outlined text-3xl">person</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-display font-bold text-xl uppercase tracking-tight leading-none">{t.name}</p>
                    <p className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mt-2">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Transform Your Business */}
      <section className="py-32 md:py-48 px-6 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none mb-8">
              How We Transform Your Business
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
              Measurable results that drive profitability, margin protection, and sustainable growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-16">
            {[
              { icon: 'schedule', title: 'Accelerated Hiring', stat: '50% Lead Time Reduction', desc: 'Secure critical leaders quickly before buying group windows shift.' },
              { icon: 'person_search', title: 'Precision Hires', stat: 'Predictive Success', desc: 'Operational modelling ensures candidates align with branch margin protection goals.' },
              { icon: 'currency_pound', title: 'Operational ROI', stat: '30% Cost-Per-Hire Lower', desc: 'Efficiency through technical headhunting rather than generic CV skimming.' },
              { icon: 'diversity_3', title: 'Balanced Teams', stat: 'Unbiased Sourcing', desc: 'Building inclusive, high-performing cultures across national branch networks.' },
              { icon: 'trending_up', title: 'Scalability', stat: 'Hybrid Deployment', desc: 'Agile support for rapid branch rollouts and regional restructuring.' },
              { icon: 'analytics', title: 'Sector Intel', stat: 'Real-Time Mapping', desc: 'Live data on competitor procurement leads and regional salary benchmarks.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                  <span className="material-symbols-outlined text-primary group-hover:text-black text-3xl md:text-4xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-primary font-bold text-xs md:text-sm uppercase tracking-wider mb-4">{item.stat}</p>
                  <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Expertise */}
      <section className="py-32 md:py-48 px-6 bg-navy-deep text-white border-y border-white/5 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="lg:w-1/2 space-y-12">
              <span className="text-primary font-bold text-[11px] uppercase tracking-[0.5em] block">Our Expertise</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase leading-none">
                Industry <br/><span className="text-primary italic">Experience.</span>
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed">
                 We have worked in the electrical wholesale industry for decades. We have lived the operational challenges, understood the commercial pressures, and know exactly what it takes to build high-performing teams that drive growth.
              </p>
           </div>
           <div className="lg:w-1/2 w-full aspect-square border border-white/10 bg-white/5 rounded-sm flex items-center justify-center relative group overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1773133031/Gemini_Generated_Image_9k1c5e9k1c5e9k1c_1_ovnor8.png" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-[2000ms]" 
                alt="Industry Experience"
              />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(255,193,7,0.1)_50%,transparent_55%)] bg-[size:200%_200%] animate-shimmer"></div>
              <span className="material-symbols-outlined text-[15rem] text-primary opacity-10 group-hover:opacity-40 transition-all duration-700 relative z-10">engineering</span>
           </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-32 md:py-60 px-6 bg-primary text-navy-deep text-center relative overflow-hidden clip-path-slant">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-[11rem] font-display font-bold tracking-tighter mb-12 leading-[0.85] uppercase italic">
            Elite <br/><span className="not-italic font-black">Leaders.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-navy-deep text-white px-16 py-7 rounded-sm font-bold text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-navy-deep transition-all shadow-2xl">
              Consult Our Specialists
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
