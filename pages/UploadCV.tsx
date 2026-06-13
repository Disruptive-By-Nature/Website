import React, { useState, useRef, DragEvent } from "react";
import SEO from "../components/SEO";
// @ts-ignore
import heroImg from "../src/assets/images/upload_cv_hero_1780507458123.png";

const UploadCV: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [gdprConsent, setGdprConsent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const nextSteps = [
    { step: "01", title: "Your CV is reviewed", desc: "A senior consultant reviews your profile within 48 hours. We assess your experience against our live client briefs and passive talent pool." },
    { step: "02", title: "Confidential consultation", desc: "If there is a match, we arrange a private call to fully understand your career goals, salary expectations, and requirements." },
    { step: "03", title: "Discreet representation", desc: "We represent you exclusively to the right employers — only with your explicit consent. Your current employer will never know." },
  ];

  const advantages = [
    { icon: "lock", label: "Total Discretion — NDAs as standard" },
    { icon: "visibility_off", label: "60%+ of our roles are never advertised" },
    { icon: "support_agent", label: "Career-long support & guidance" },
    { icon: "factory", label: "Deep electrical wholesale sector expertise" },
  ];

  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white">
      <SEO
        title="Submit Your CV | Join the Power-Up Talent Network | Electrical Wholesale"
        description="Join the Power-Up Talent passive candidate network. We represent senior electrical wholesale professionals discreetly to the right employers. 100% confidential."
        keywords="Upload CV Electrical Wholesale, Branch Manager Jobs UK, Regional Director Headhunted, Passive Candidate Network"
        canonical="https://poweruptalent.co.uk/upload-cv"
      />

      {/* Hero */}
      <header className="py-32 md:py-48 px-6 text-center border-b border-white/8 relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={heroImg} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" alt="Join Power-Up Talent Network" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-navy-deep/20 to-navy-deep/80"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold uppercase tracking-[0.4em] mb-10">
            <span className="material-symbols-outlined text-sm">lock</span>
            Strictly Confidential
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tight leading-none uppercase text-glow">
            Join Our Passive<br /><span className="text-gradient">Talent Network.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We never post your details publicly. We represent you discreetly to the right employers, at the right time — and only with your explicit consent.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Expanded Form */}
            <div className="lg:col-span-7">
              <div className="bg-navy-deep border border-white/8 rounded-sm p-8 md:p-12">
                <div className="mb-10">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-3">Candidate Registration</span>
                  <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight mb-2">Tell Us About You.</h2>
                  <div className="h-0.5 w-16 bg-primary mt-4"></div>
                </div>

                <form action="mailto:poweruptalent@gmail.com" method="get" encType="text/plain" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Full Name *</label>
                      <input name="name" type="text" placeholder="Your full name" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Email Address *</label>
                      <input name="email" type="email" placeholder="your@email.com" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Phone Number</label>
                      <input name="phone" type="tel" placeholder="+44 7700 000000" className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Current Job Title *</label>
                      <input name="current_title" type="text" placeholder="e.g. Branch Manager" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Current Employer *</label>
                      <input name="employer" type="text" placeholder="Company name" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Location / Region *</label>
                      <input name="location" type="text" placeholder="e.g. West Midlands" required className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Target Salary Range</label>
                    <select name="salary" className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all appearance-none">
                      <option value="">Select a range</option>
                      <option>Under £30,000</option>
                      <option>£30,000 – £40,000</option>
                      <option>£40,000 – £55,000</option>
                      <option>£55,000 – £70,000</option>
                      <option>£70,000 – £90,000</option>
                      <option>£90,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">What Are You Looking for Next?</label>
                    <textarea name="goals" rows={4} placeholder="Describe your ideal next role, the type of organisation you would like to join, and any specific goals or requirements..." className="w-full bg-black/40 border border-white/8 rounded-sm px-5 py-4 text-sm text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700 resize-none"></textarea>
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em]">Upload Your CV</label>
                    <div
                      className={`border-2 border-dashed rounded-sm p-10 text-center transition-all cursor-pointer ${isDragging ? "border-primary bg-primary/10" : "border-white/15 hover:border-white/30 hover:bg-white/5"}`}
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <span className="material-symbols-outlined text-4xl text-slate-500 block mb-3">upload_file</span>
                      {fileName ? (
                        <p className="text-primary font-semibold text-sm">{fileName}</p>
                      ) : (
                        <>
                          <p className="text-slate-300 font-medium text-sm mb-1">Drag and drop your CV here</p>
                          <p className="text-slate-600 text-xs">or click to browse — PDF, DOC, DOCX accepted</p>
                        </>
                      )}
                      <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) setFileName(f.name); }} />
                    </div>
                    <p className="text-slate-600 text-xs">Your CV is only shared with employers with your explicit consent.</p>
                  </div>

                  {/* GDPR */}
                  <div className="flex items-start gap-4">
                    <input type="checkbox" id="gdpr" checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)} className="mt-1 w-5 h-5 accent-primary cursor-pointer shrink-0" />
                    <label htmlFor="gdpr" className="text-slate-400 text-sm font-light leading-relaxed cursor-pointer">
                      I consent to Power-Up Talent storing my details and contacting me regarding relevant executive opportunities within the electrical wholesale sector.
                      <span className="text-primary"> Privacy Policy.</span>
                    </label>
                  </div>

                  <button type="submit" className="w-full bg-primary text-navy-deep py-4 rounded-sm font-bold text-sm uppercase tracking-[0.2em] shadow-[0_12px_30px_rgba(255,193,7,0.2)] hover:bg-white transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                    Join the Network
                    <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform">bolt</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: What Happens Next */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-navy-deep border border-white/8 rounded-sm p-8">
                <h3 className="text-xl font-display font-black uppercase tracking-tight mb-8">
                  What Happens Next?
                  <div className="h-0.5 w-12 bg-primary mt-3"></div>
                </h3>
                <div className="space-y-8">
                  {nextSteps.map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <span className="text-primary font-black text-2xl font-display shrink-0 w-10 leading-none">{step.step}</span>
                      <div>
                        <h4 className="font-bold text-white text-base mb-2">{step.title}</h4>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div className="bg-primary/10 border border-primary/20 rounded-sm p-8">
                <h3 className="text-lg font-display font-black uppercase tracking-tight mb-6 text-primary">Why Join Our Network?</h3>
                <div className="space-y-4">
                  {advantages.map((adv, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-lg">{adv.icon}</span>
                      </div>
                      <span className="text-slate-200 text-sm font-light">{adv.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-navy-deep border border-white/8 rounded-sm p-8">
                <p className="text-slate-300 text-sm font-light italic leading-relaxed mb-4">
                  "Power-Up found me a role I didn't know existed. The process was completely discreet and they understood exactly what I was looking for."
                </p>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Area Sales Manager — UK Electrical Wholesaler</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadCV;
