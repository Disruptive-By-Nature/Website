
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Story: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 pb-0 overflow-x-hidden bg-background-dark text-white">
      <SEO 
        title="Our Story | Power-Up Talent"
        description="Learn about the story behind Power-Up Talent and our mission in the UK electrical sector."
        keywords="Our Story, Power-Up Talent, Electrical Sector Recruitment Story"
        canonical="https://poweruptalent.co.uk/story"
      />
      {/* 1. Hero Header - Clean */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 mb-20 md:mb-32 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-8 md:mb-12">
          UK Sector Experts
        </div>
        <h1 className="text-4xl md:text-9xl font-display font-bold tracking-tighter mb-6 md:mb-10 leading-[1] md:leading-[0.95] text-white text-balance uppercase">
          Technical Grit <br/><span className="text-primary italic">Meets Intelligence.</span>
        </h1>
      </section>

      {/* 2. The Problem Section - Image Removed */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-white text-slate-900 border-y border-slate-200">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
          <div className="space-y-6 md:space-y-10">
            <span className="text-primary font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] block">The Industry Gap</span>
            <h2 className="text-3xl md:text-6xl font-display font-bold text-slate-900 tracking-tight uppercase">The Problem with <br/>"Standard" Recruitment</h2>
            <div className="space-y-6 md:space-y-8 text-slate-600 font-light text-lg md:text-xl leading-relaxed">
              <p>
                Most recruiters treat the electrical sector like any other industry. They skim resumes for keywords and hope for the best. But we know that manufacturing, distribution, design, and installation require deep, specific technical understanding. 
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-slate-100 aspect-video flex items-center justify-center rounded-sm shadow-2xl border border-slate-100 relative overflow-hidden group">
               <img 
                 src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916282/2e3c83cc-60d3-4a9c-ad8e-69e4dcce3985_pfscir.jpg"
                 referrerPolicy="no-referrer"
                 className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700" 
                 alt="The Industry Gap"
               />
               <span className="material-symbols-outlined text-[10rem] text-primary opacity-20 group-hover:opacity-40 transition-opacity relative z-10">warning</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hybrid Model Section - Clean */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-background-dark text-white border-y border-white/5">
        <div className="max-w-screen-xl mx-auto text-center mb-16 md:mb-24">
           <h2 className="text-3xl md:text-7xl font-display font-bold tracking-tight uppercase mb-6 md:mb-10">The Hybrid Model: <span className="text-primary italic">AI + Instinct</span></h2>
        </div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
           <div className="p-8 md:p-12 border border-white/5 bg-card-dark rounded-sm hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1773133018/Gemini_Generated_Image_uv3iocuv3iocuv3i_1_olsuhn.png"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                alt="AI Precision"
              />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-6 md:mb-8 group-hover:scale-110 transition-transform block">psychology</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 uppercase tracking-tight">The AI Precision</h3>
                <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
                  We use proprietary models to map the industry landscape in real-time, identifying high-performers before they even think about moving. Our tech eliminates the 90% of noise to find the 10% of elite results.
                </p>
              </div>
           </div>
           <div className="p-8 md:p-12 border border-white/5 bg-card-dark rounded-sm hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1773133022/Gemini_Generated_Image_lofh2alofh2alofh_1_mjrcsd.png"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                alt="Technical Grit"
              />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-6 md:mb-8 group-hover:scale-110 transition-transform block">bolt</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 uppercase tracking-tight">The Technical Grit</h3>
                <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
                  Our human consultants personally vet every lead. We look for the technical grit—that rare combination of hands-on industry knowledge and commercial sharp-mindedness that others miss.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Branch Launch Support */}
      <section className="py-32 md:py-48 px-6 bg-navy-deep text-white border-y border-white/5 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="lg:w-1/2 space-y-12">
              <span className="text-primary font-bold text-[11px] uppercase tracking-[0.5em] block">Scaling Intelligence</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase leading-none">
                Branch Launch <br/><span className="text-primary italic">Support.</span>
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed">
                 We align talent acquisition with your commercial objectives. From local trade counter staff to regional procurement leads, we provide the leadership required for immediate operational impact.
              </p>
              <div className="space-y-6">
                {[
                  "Specialised Branch Leadership Staffing",
                  "Local Trade Counter Talent Mapping",
                  "Competitor Margin Analysis Intelligence",
                  "Rapid Scale Deployment Across Buying Groups"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-lg font-light text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <Link to="/contact" className="inline-block bg-primary text-navy-deep px-12 py-6 rounded-sm font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl">
                  Request a Market Map
                </Link>
              </div>
           </div>
           <div className="lg:w-1/2 w-full aspect-square border border-white/10 bg-white/5 rounded-sm flex items-center justify-center relative group overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-[2000ms]" 
                alt="Strategic Operational Blueprint"
              />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(255,193,7,0.1)_50%,transparent_55%)] bg-[size:200%_200%] animate-shimmer"></div>
              <span className="material-symbols-outlined text-[15rem] text-primary opacity-10 group-hover:opacity-40 transition-all duration-700 relative z-10">architecture</span>
              <div className="absolute bottom-12 text-center relative z-10">
                 <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Operational Blueprint</p>
              </div>
           </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 md:py-40 px-4 md:px-6 bg-background-dark text-white text-center border-t border-white/5">
         <div className="max-w-5xl mx-auto">
            <span className="material-symbols-outlined text-primary text-5xl md:text-7xl mb-8 md:mb-12 opacity-50">format_quote</span>
            <h2 className="text-2xl md:text-7xl font-display font-bold tracking-tight text-white mb-10 md:mb-16 leading-tight uppercase italic">
              "We do not just find you talent—we equip your team with the tools to <span className="text-primary not-italic">outperform</span> the competition."
            </h2>
            <Link to="/contact" className="bg-primary text-black px-8 md:px-12 py-4 md:py-6 rounded-sm font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-white transition-all shadow-2xl">
              Book a Briefing Call
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Story;
