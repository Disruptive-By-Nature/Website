
import React, { useState } from 'react';
import SEO from '../components/SEO';
// @ts-ignore
import heroImg from '../src/assets/images/upload_cv_hero_1780507458123.png';

const UploadCV: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="pt-24 pb-0 bg-background-dark min-h-screen text-white">
      <SEO 
        title="Upload Your CV | Join the Elite Electrical Wholesale Hub | Power-Up Talent"
        description="Submit your CV to Power-Up Talent's executive hub. Join our network of elite electrical wholesale professionals and gain access to hidden market roles."
        keywords="Upload CV Electrical Wholesale, Electrical Wholesale Career Hub, Submit CV Power-Up Talent, Electrical Wholesale Executive Jobs"
        canonical="https://poweruptalent.co.uk/upload-cv"
      />
      {/* Header - Custom Background Image */}
      <section className="relative py-32 md:py-48 px-6 text-center overflow-hidden border-b border-white/5 bg-navy-deep">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={heroImg}
            className="absolute inset-0 w-full h-full object-cover opacity-[0.24] grayscale mix-blend-overlay object-center"
            referrerPolicy="no-referrer"
            alt="UK Electrical Wholesale Recruitment Executive Submission Hub"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/20 to-navy-deep/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.05)_0%,transparent_100%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-12">
            Secure Career Hub
          </div>
          <h1 className="text-5xl md:text-[9rem] font-display font-bold mb-8 tracking-tighter leading-none text-white uppercase text-glow">
            Join the <br/><span className="text-primary italic">Elite</span> Hub.
          </h1>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 -mt-20 md:-mt-32 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5 overflow-hidden shadow-2xl">
          
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-card-dark p-8 md:p-16 lg:p-24">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 uppercase tracking-tight">Executive Submission</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>

            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Full Name</label>
                  <input type="text" placeholder="e.g. David Smith" className="w-full bg-black/50 border border-white/10 rounded-sm p-6 text-base text-white focus:border-primary outline-none transition-all placeholder:text-slate-800 focus:bg-black" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Work Email</label>
                  <input type="email" placeholder="david@example.com" className="w-full bg-black/50 border border-white/10 rounded-sm p-6 text-base text-white focus:border-primary outline-none transition-all placeholder:text-slate-800 focus:bg-black" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] ml-1">Your CV (Confidential)</label>
                <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`relative border-2 border-dashed rounded-sm p-12 md:p-20 flex flex-col items-center justify-center transition-all cursor-pointer group ${isDragging ? 'border-primary bg-primary/5' : 'border-white/5 bg-black/30 hover:border-primary/50 hover:bg-white/[0.01]'}`}>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-primary font-bold">upload_file</span>
                  </div>
                  <p className="text-xl font-display font-bold text-white mb-2 uppercase tracking-tight">
                    Drop your <span className="text-primary italic">Professional File</span>
                  </p>
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-black py-8 rounded-sm font-bold text-xs uppercase tracking-[0.5em] shadow-2xl shadow-primary/30 hover:bg-white transition-all flex items-center justify-center gap-4 group active:scale-[0.98]">
                Submit to Hub <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">bolt</span>
              </button>
            </form>
          </div>

          {/* Right: The Advantage */}
          <div className="lg:col-span-5 bg-black/80 p-8 md:p-16 lg:p-24 flex flex-col backdrop-blur-3xl border-l border-white/5 relative overflow-hidden">
            <div className="relative z-10 space-y-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 uppercase tracking-tight text-primary">The Hub Advantage</h3>
                <ul className="space-y-10">
                  {[
                    { icon: 'lock', title: 'Total Discretion', desc: 'Strict NDAs protect your current employment status.' },
                    { icon: 'visibility_off', title: 'Hidden Market Access', desc: 'Over 60% of executive roles are never publicly advertised.' },
                    { icon: 'school', title: 'Career-Long Training', desc: 'We support top performers with comprehensive training at all levels throughout their careers.' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-tight leading-none">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadCV;
