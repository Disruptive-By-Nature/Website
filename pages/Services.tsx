import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SERVICES, TESTIMONIALS, FAQ_ITEMS, PROCESS_STEPS, GUARANTEES, ROLES_PLACED } from "../constants";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
// @ts-ignore
import heroImg from "../src/assets/images/services_hero_1780507411826.png";

const Services: React.FC = () => {
  const whyUs = [
    { icon: "handyman", title: "Technical Grit", desc: "We have worked in the industry. We understand trade counter operations, branch P&L, and what high-performance looks like at every level from depot manager to group director." },
    { icon: "ads_click", title: "Tailored Solutions", desc: "No two mandates are the same. We build bespoke search campaigns around your specific brief — the role, the culture, the commercial outcome you need to achieve." },
    { icon: "group", title: "Network & Trust", desc: "25,000+ professionals mapped. Relationships built over a decade. When we approach a candidate, they answer — because we have a reputation for representing only the best roles." },
  ];

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

      {/* Why Power-Up */}
      <section className="py-24 md:py-32 px-6 bg-navy-deep border-b border-white/5">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Our Edge</span>
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight leading-none mb-4">Why Power-Up Talent?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="border border-white/8 rounded-sm p-10 hover:bg-white/5 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-display font-black uppercase tracking-tight mb-4 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 md:py-32 px-6 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">How We Work</span>
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight leading-none mb-4">Our Process.</h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">A precise, five-stage methodology that finds the passive high-performers no one else can reach.</p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:grid grid-cols-5 gap-6 relative">
            <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/80 via-primary/40 to-primary/80"></div>
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-20 h-20 bg-navy-deep rounded-full flex items-center justify-center border-4 border-primary shadow-[0_0_30px_rgba(255,193,7,0.2)] relative z-10 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
                </div>
                <span className="text-primary font-display font-black text-3xl mb-2">{step.step}</span>
                <h3 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight mb-3">{step.title}</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-navy-deep rounded-full flex items-center justify-center border-2 border-primary shadow-[0_0_20px_rgba(255,193,7,0.15)] shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                </div>
                <div className="pt-1">
                  <span className="text-primary font-black text-lg font-display block mb-1">{step.step}</span>
                  <h3 className="font-display font-black text-slate-900 uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 md:py-32 px-6 bg-background-dark border-b border-white/5">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Service Lines</span>
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">Our Services.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div key={service.id} whileHover={{ y: -4 }} className="bg-navy-deep border border-white/8 rounded-sm p-10 hover:border-primary/30 transition-all duration-300 flex flex-col">
                <span className="text-primary font-black text-5xl font-display mb-6 opacity-25">0{i + 1}</span>
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-2">{service.name}</h3>
                <p className="text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4">{service.tagline}</p>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-grow">{service.description}</p>
                <ul className="space-y-2 border-t border-white/8 pt-6">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles We Cover */}
      <section className="py-24 md:py-32 px-6 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Scope</span>
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight leading-none mb-4">Roles We Cover.</h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">If your role exists in UK electrical wholesale at a management level or above, we can find the right person for it.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ROLES_PLACED.map((role, i) => (
              <div key={i} className="border border-slate-200 rounded-sm px-6 py-5 hover:border-primary hover:bg-primary/5 transition-all duration-200 group">
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary text-lg block mb-2 transition-colors">verified</span>
                <span className="text-slate-700 group-hover:text-slate-900 font-semibold text-sm leading-tight">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24 md:py-32 px-6 bg-navy-deep border-b border-white/5">
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
      <section className="py-24 md:py-32 px-6 bg-background-dark border-b border-white/5">
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
