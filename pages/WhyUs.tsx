
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const WhyUs: React.FC = () => {
  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white">
      <SEO 
        title="Why Choose Power-Up Talent? | UK Electrical Sector Recruitment"
        description="Discover why Power-Up Talent is the UK's premier strategic talent partner for the electrical industry. Our operational grit, sector literacy, and strategic alignment set us apart."
        keywords="Why Choose Power-Up Talent, Electrical Recruitment Advantages, UK Electrical Sector Expertise, Operational Grit Recruitment"
        canonical="https://poweruptalent.co.uk/why-us"
      />
      {/* 1. Hero - Sector Intelligence Focus */}
      <header className="relative py-40 md:py-60 px-6 text-center overflow-hidden border-b border-white/5 bg-navy-deep">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/70 to-background-dark"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto animate-slide-up">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.5em]">Sector Expertise</span>
          </div>

          <h1 className="text-6xl md:text-[10rem] font-display font-bold mb-12 tracking-tighter leading-none text-white uppercase text-glow">
            Operational <br/><span className="text-primary italic">Intelligence.</span>
          </h1>
          
          <p className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto text-balance">
            We understand the operational realities of manufacturing, distribution, design, and site installation, as well as the demands of executive sector leadership.
          </p>
        </div>
      </header>

      {/* 2. Trade Literacy Branding */}
      <section className="py-32 md:py-48 px-6 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <span className="text-primary font-bold text-[11px] uppercase tracking-[0.5em] block">Methodology 1</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none">
                "Trade Literacy" <br/>Consulting
              </h2>
              <div className="space-y-6">
                <p className="text-navy-deep text-lg uppercase tracking-widest font-bold border-l-2 border-primary pl-6">The Power-Up Perspective:</p>
                <p className="text-slate-900 text-2xl font-bold pl-6">
                  "We understand why your Branch Manager needs technical Rexel pricing experience. We don't recruit from a script; we recruit from thirty years of operational grit."
                </p>
              </div>
            </div>
            <div className="rounded-sm aspect-video bg-slate-50 border-8 border-slate-100 flex flex-col items-center justify-center shadow-2xl group overflow-hidden relative">
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700"
                alt="Trade Literacy"
              />
              <span className="material-symbols-outlined text-[12rem] text-primary opacity-5 group-hover:opacity-10 transition-opacity relative z-10">storefront</span>
              <div className="absolute top-4 right-4 px-4 py-2 bg-navy-deep text-white text-[10px] font-black uppercase tracking-widest relative z-10">Operational DNA Only</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Strategic Alignment */}
      <section className="py-32 md:py-48 px-6 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="bg-white aspect-video rounded-sm shadow-2xl border border-slate-200 flex flex-col items-center justify-center group overflow-hidden relative">
                   <img 
                     src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1773133014/Gemini_Generated_Image_vhl7qtvhl7qtvhl7_1_zyshfq.png"
                     referrerPolicy="no-referrer"
                     className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700"
                     alt="Strategic Alignment"
                   />
                   <span className="material-symbols-outlined text-[10rem] text-primary opacity-5 group-hover:opacity-10 transition-opacity relative z-10">query_stats</span>
                   <p className="absolute bottom-8 text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 relative z-10">Market Benchmarking</p>
                </div>
             </div>
             <div className="space-y-12 order-1 lg:order-2">
                <span className="text-primary font-bold text-[11px] uppercase tracking-[0.5em] block">Operational ROI</span>
                <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none">
                   Strategic <br/>Operational <br/><span className="italic">Alignment.</span>
                </h2>
                <p className="text-slate-600 text-xl font-light leading-relaxed">
                   We ensure that every candidate identified aligns with your specific commercial objectives, ensuring a measurable return on your talent investment.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Our Commitment to Talent */}
      <section className="py-32 md:py-48 px-6 bg-white text-slate-900 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none mb-12">
            Our Commitment to <span className="text-primary italic">Talent</span>
          </h2>
          <p className="text-slate-600 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            We don't just source talent; we actively bring in top performers from both inside and outside the industry. Once they join, we support them with comprehensive, career-long training at all levels, ensuring they have the tools to excel and grow with your business.
          </p>
        </div>
        <img 
          src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916348/713aeba2-3f10-4512-95b7-defca1b268a2_vggzr3.jpg"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
          alt="Commitment to Talent Background"
        />
      </section>

      {/* CTA */}
      <section className="py-40 md:py-60 px-6 bg-primary text-navy-deep text-center relative overflow-hidden clip-path-slant">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-[10rem] font-display font-bold tracking-tighter mb-12 leading-none uppercase italic">
            Elite Workforce.
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto bg-navy-deep text-white px-16 py-8 rounded-sm font-bold text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-navy-deep transition-all shadow-2xl">
              Consult Our Specialists
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
