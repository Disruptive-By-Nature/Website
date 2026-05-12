
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white">
      <SEO 
        title="Services | Elite Electrical Wholesale Executive Search & Recruitment | Power-Up Talent"
        description="Discover our elite executive search and recruitment services tailored for the UK electrical wholesale industry. We deliver high-performing branch and regional leaders."
        keywords="Electrical Wholesale Recruitment Services, UK Electrical Executive Search, Branch Manager Recruitment UK, Electrical Sector Talent Acquisition, Elite Headhunters Electrical"
        canonical="https://poweruptalent.co.uk/services"
      />
      {/* 1. Header */}
      <header className="bg-navy-deep py-40 md:py-60 px-6 text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,193,7,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-12">
            Strategic Methodology
          </div>
          <h1 className="text-5xl md:text-[10rem] font-display font-bold text-white mb-10 tracking-tighter leading-none uppercase text-glow">
            Methodology <br/><span className="text-primary italic">Pillars.</span>
          </h1>
        </div>
      </header>

      {/* 2. Why Power-Up */}
      <section className="py-32 md:py-48 px-6 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-3xl md:text-6xl font-display font-bold text-slate-900 tracking-tight uppercase mb-8">
              Why Power-Up Talent?
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl font-light max-w-5xl mx-auto leading-relaxed text-balance">
              What sets us apart is our profound expertise in the UK electrical wholesale landscape. We move beyond generic recruitment to offer specialised talent logic, understanding the irreplaceable importance of margin protection, procurement cycles, and local trade counter management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-navy-deep flex items-center justify-center rounded-2xl mb-10 group-hover:rotate-6 transition-transform shadow-xl">
                <span className="material-symbols-outlined text-white text-4xl">engineering</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 uppercase tracking-tight mb-4">Technical Grit</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Our team consists of seasoned professionals who speak the language of the trade counter. We understand Rexel pricing models, Edmundson structures, and the nuances of independent buying groups.
              </p>
            </div>

            <div className="bg-white p-12 rounded-xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-primary flex items-center justify-center rounded-2xl mb-10 group-hover:rotate-6 transition-transform shadow-xl">
                <span className="material-symbols-outlined text-black text-4xl">hub</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 uppercase tracking-tight mb-4">Tailored Solutions</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                We recognise that a Branch Manager in the M4 corridor faces different pressures than one in the North. Our talent solutions are geographically informed and operationally specific.
              </p>
            </div>

            <div className="bg-white p-12 rounded-xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-navy-deep flex items-center justify-center rounded-2xl mb-10 group-hover:rotate-6 transition-transform shadow-xl">
                <span className="material-symbols-outlined text-white text-4xl">diversity_3</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 uppercase tracking-tight mb-4">Network & Trust</h3>
             <p className="text-slate-500 font-light leading-relaxed">
                Join our elite network of passive high-performers. We act as your trusted consultative partner, ensuring absolute discretion for both clients and leadership candidates. Beyond placement, we are renowned for bringing in top talent from inside and outside the industry and supporting them with comprehensive training at all levels throughout their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Methodology Strategic Pillars */}
      <section className="py-32 md:py-48 px-6 bg-slate-50 text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <span className="text-primary font-bold text-[11px] uppercase tracking-[0.5em] block mb-6">Our Methodology</span>
            <h2 className="text-3xl md:text-8xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none mb-8">
              Strategic <span className="text-primary italic">Pillars.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((pillar, i) => (
              <div id={pillar.id} key={pillar.id} className="bg-white border border-slate-200 rounded-sm hover:shadow-2xl transition-all duration-700 group flex flex-col overflow-hidden shadow-sm scroll-m-32">
                <div className="h-64 overflow-hidden relative">
                   <img 
                    src={pillar.image} 
                    alt={`Power-Up Talent ${pillar.name} and Electrical Wholesale Talent Sourcing`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-navy-deep/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute bottom-6 left-6">
                      <span className="text-white font-bold text-5xl opacity-80 group-hover:text-primary transition-colors">0{i+1}</span>
                   </div>
                </div>
                <div className="p-12 flex flex-col flex-grow group-hover:bg-navy-deep group-hover:text-white transition-colors duration-500">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-slate-500 group-hover:text-slate-400 font-light leading-relaxed mb-10 flex-grow">
                    {pillar.description}
                  </p>
                  <ul className="space-y-3 pt-6 border-t border-slate-100 group-hover:border-white/10">
                    {pillar.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-100">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Sector Expertise */}
      <section className="py-32 md:py-48 px-6 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold text-[11px] uppercase tracking-[0.5em] block mb-6">Expertise Focus</span>
            <h2 className="text-3xl md:text-7xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none">
              Sector <span className="text-primary italic">Expertise.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { img: '/images/electrical_executive_1778586578289.png', title: 'Electrical Wholesale', desc: 'Specialised Branch and Regional leadership sourcing for national distributors and independent buying groups.' },
               { img: '/images/electrical_warehouse_hero_1778586599378.png', title: 'Fire & Security', desc: 'Technical experts and management for life-safety systems, fire protection, and secure infrastructure.' },
               { img: '/images/electrical_trade_counter_1778586696903.png', title: 'Lighting & Design', desc: 'Creative and technical procurement leads for high-specification industrial and commercial lighting.' }
             ].map((item, i) => (
               <div key={i} className="bg-slate-50 border border-slate-100 rounded-sm hover:shadow-2xl transition-all group overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.img} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      alt={`Electrical wholesale ${item.title} recruitment and leadership solutions`}
                    />
                  </div>
                  <div className="p-12">
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Hybrid Advantage */}
      <section className="py-32 md:py-48 px-6 bg-background-dark text-white border-y border-white/5">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-3xl md:text-7xl font-display font-bold text-white tracking-tight leading-none uppercase mb-8">
              The <span className="text-primary italic">Hybrid</span> Advantage
            </h2>
            <div className="max-w-4xl mx-auto space-y-2">
              <p className="text-slate-400 text-lg md:text-2xl font-light leading-relaxed">
                We blend the precision of AI-driven market mapping with the irreplaceable technical instinct of industry veterans.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'manage_search', title: 'Market Intelligence', desc: 'We specialise in mapping the UK market to understand competitor margin strategies and leadership DNA.' },
              { icon: 'data_object', title: 'Proprietary Sourcing', desc: 'Our AI models scan passive high-performers, bypassing job boards to find those delivering real results.' },
              { icon: 'person_search', title: 'Operational Vetting', desc: 'Our consultants vet every candidate for trade counter literacy and commercial sharp-mindedness.' },
              { icon: 'target', title: 'Cultural & ROI Fit', desc: 'We ensure candidates align with your organisational culture and drive immediate operational ROI.' }
            ].map((step, i) => (
              <div key={i} className="bg-card-dark border border-white/5 rounded-sm flex flex-col group hover:border-primary/50 transition-all duration-500 overflow-hidden min-h-[450px]">
                <div className="h-48 relative overflow-hidden flex items-center justify-center bg-black/40 border-b border-white/5">
                   <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all duration-500">
                      <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-500">{step.icon}</span>
                   </div>
                </div>
                <div className="p-8 text-center flex-grow flex flex-col justify-start">
                  <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-tight min-h-[3rem] flex items-center justify-center">{step.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="py-32 bg-slate-50 overflow-hidden text-center border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto px-6 mb-20">
          <h2 className="text-3xl md:text-7xl font-display font-bold text-slate-900 tracking-tighter uppercase leading-none">Industry Voices</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex gap-10 whitespace-nowrap py-10">
            {[...Array(2)].flatMap(() => TESTIMONIALS).map((t, i) => (
              <div key={i} className="w-[350px] md:w-[550px] flex-shrink-0 bg-white border border-slate-100 p-12 md:p-16 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 text-left">
                <div className="flex gap-1 mb-10 text-primary">
                  {[...Array(5)].map((_, starIdx) => (
                    <span key={starIdx} className="material-symbols-outlined text-4xl fill-1">star</span>
                  ))}
                </div>
                <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed mb-12 whitespace-normal italic">"{t.quote}"</p>
                <div className="pt-8 border-t border-slate-200 flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary border border-slate-100">
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

      <section className="py-24 px-6 bg-primary text-navy-deep text-center">
        <div className="max-w-4xl mx-auto">
          <Link to="/contact" className="bg-navy-deep text-white px-16 py-8 rounded-sm font-bold text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-navy-deep transition-all shadow-2xl">
            Consult a Specialist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
