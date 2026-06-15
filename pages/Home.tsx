import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/uk_electrical_wholesale_hero_1780507084507.png';

const Home: React.FC = () => {
  const location = useLocation();

  // Client Lead Magnet Form State
  const [clientForm, setClientForm] = useState({ name: '', company: '', role: '', email: '' });
  const [clientStatus, setClientStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Candidate Lead Magnet Form State
  const [candidateForm, setCandidateForm] = useState({ name: '', role: '', region: '', email: '' });
  const [candidateStatus, setCandidateStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Candidate Talent Network Form State
  const [networkForm, setNetworkForm] = useState({ role: '', employer: '', region: '', ote: '', targetRole: '' });
  const [networkStatus, setNetworkStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  // Scroll to section based on query param ?scroll=section-id
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollId = params.get('scroll');
    if (scrollId) {
      setTimeout(() => {
        const el = document.getElementById(scrollId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClientStatus('submitting');
    setTimeout(() => {
      setClientStatus('success');
      // Trigger simulated TXT/PDF download for the Salary Guide
      const blob = new Blob(["Power-Up Talent 2026 Salary & Compensation Guide\nFor UK Electrical Wholesale Leaders"], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'PowerUp_Talent_Salary_Guide_2026.txt';
      downloadLink.click();
      URL.revokeObjectURL(url);
    }, 1500);
  };

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCandidateStatus('submitting');
    setTimeout(() => {
      setCandidateStatus('success');
      // Trigger simulated TXT/PDF download for candidate earnings guide
      const blob = new Blob(["How Top Branch Managers Maximise Earnings in Electrical Wholesale\nA Strategic Guide by Power-Up Talent"], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'Maximise_Earnings_Guide_PowerUp.txt';
      downloadLink.click();
      URL.revokeObjectURL(url);
    }, 1500);
  };

  const handleNetworkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNetworkStatus('submitting');
    setTimeout(() => {
      setNetworkStatus('success');
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Elite Headhunters for UK Electrical Wholesale | Power-Up Talent"
        description="We discreetly lift top-performing branch managers, area sales and commercial leaders from your competitors – and place them in your business within 4–6 weeks."
        keywords="electrical wholesale headhunter, uk recruitment, branch manager recruiter, executive search electrical wholesale"
        canonical="https://power-up-talent-web.web.app/"
      />

      {/* ── 1. HERO SECTION (Split layout) ── */}
      <section className="relative min-h-screen flex items-center bg-background-dark overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-background-dark" />
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.2)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column (Copy + CTAs) */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" as const }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full bg-primary/10">
                Specialist Headhunting · UK Electrical Wholesale
              </span>
              <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight uppercase">
                Elite Headhunters <br />
                for the UK <br />
                <span className="text-gradient">Electrical Wholesale</span> Market
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                We discreetly lift top‑performing branch managers, area sales and commercial leaders from your competitors – and place them in your business within 4–6 weeks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://calendly.com/power-up-talent/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-book-call"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy-deep font-bold font-display uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  Book a 15‑Minute Hiring Strategy Call
                </a>
                <button
                  onClick={() => scrollToSection('results')}
                  id="hero-scroll-results"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold font-display uppercase tracking-widest text-xs rounded-sm hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm"
                >
                  See Recent Senior Placements
                </button>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 font-medium tracking-wider uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Trusted by national and independent electrical wholesalers across the UK.
                </p>
              </div>
            </motion.div>

            {/* Right Column (Trade branch image) */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" as const }}
            >
              <div className="relative rounded-sm overflow-hidden aspect-[4/3] border border-white/10 group shadow-2xl shadow-black">
                <img
                  src={heroImg}
                  alt="UK Electrical Wholesale Branch"
                  className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.8] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-750 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/5 p-4 rounded-sm">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Industry Focus</p>
                  <p className="text-white text-xs font-light mt-0.5">Direct competitor branch mapping & executive target profiling.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. PROOF & CREDIBILITY STRIP ── */}
      <section className="bg-slate-100 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
            <div className="space-y-1">
              <span className="block font-display font-black text-4xl lg:text-5xl text-navy-deep">14 Days</span>
              <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold font-display">Average time-to-shortlist</span>
            </div>
            <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-200 py-6 md:py-0">
              <span className="block font-display font-black text-4xl lg:text-5xl text-navy-deep">92%</span>
              <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold font-display">Retained searches filled from first shortlist</span>
            </div>
            <div className="space-y-1">
              <span className="block font-display font-black text-4xl lg:text-5xl text-navy-deep">89%</span>
              <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold font-display">Placed managers in role after 12 months</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 text-center">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4">Leading UK Wholesalers We Map</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-30 select-none">
              <span className="font-display font-black tracking-widest text-lg md:text-xl text-navy-deep">EDMUNDSON</span>
              <span className="font-display font-black tracking-widest text-lg md:text-xl text-navy-deep">REXEL</span>
              <span className="font-display font-black tracking-widest text-lg md:text-xl text-navy-deep">CEF</span>
              <span className="font-display font-black tracking-widest text-lg md:text-xl text-navy-deep">YESSS</span>
              <span className="font-display font-black tracking-widest text-lg md:text-xl text-navy-deep">STEWEYS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY ELECTRICAL WHOLESALE NEEDS A SPECIALIST ── */}
      <section className="bg-background-dark py-24 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeInUp}>
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">Niche Specialisation</span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.1]">
                Built Exclusively for Electrical Wholesale
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Generalist recruiters and broad engineering agencies spread their attention across dozens of sectors such as manufacturing, construction, fire & security and wider trades. We operate as a boutique search partner dedicated to the electrical wholesale market, so every mandate benefits from deep sector knowledge and live competitor intelligence.
              </p>
              <div className="h-px bg-white/10 w-24"></div>
            </motion.div>

            {/* Right: Key Bullets (Diverse Box Background Layouts) */}
            <div className="lg:col-span-6 space-y-6">
              {[
                {
                  title: "Exclusively Wholesale & Distribution",
                  desc: "We only partner with electrical wholesalers and specialist distributors across the UK – not generic engineering, not all trades.",
                  style: "glass-card border-l-4 border-primary p-6 rounded-sm flex gap-4"
                },
                {
                  title: "Commercial & Leadership Scope",
                  desc: "We focus on commercial and leadership hires: Branch Managers, Area Sales Managers, Key Account Managers, Regional/Commercial Directors.",
                  style: "bg-gradient-to-br from-[#060B16] to-[#020408] border border-white/5 p-6 rounded-sm flex gap-4 hover:border-primary/20 transition-all duration-300"
                },
                {
                  title: "We Speak Your Language",
                  desc: "We understand the metrics that matter – margins, supplier rebates, stock turn, trade counter flow, project business, and contractor relationships.",
                  style: "dossier-card p-6 rounded-sm flex gap-4"
                }
              ].map((bullet, idx) => (
                <motion.div
                  key={idx}
                  className={bullet.style}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">bolt</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base uppercase text-white tracking-wide mb-1">{bullet.title}</h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed">{bullet.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOW OUR HEADHUNTING PROCESS WORKS (Staggered Wave Layout) ── */}
      <section id="search-process" className="bg-navy-deep py-28 text-white border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-24" {...fadeInUp}>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Our Methodology</span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
              Our 5‑Step Search Method
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto font-light leading-relaxed mt-3">
              We go far beyond standard job ads and databases to map competitor branches and discreetly approach top performers.
            </p>
          </motion.div>

          {/* Staggered wave timeline cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 pt-6">
            {[
              {
                num: "01",
                icon: "rule",
                title: "Define Success Profile",
                desc: "We clarify the commercial outcome first – branch P&L, GP targets, growth expectations – then design the ideal candidate profile around that.",
                style: "glass-card lg:translate-y-4"
              },
              {
                num: "02",
                icon: "map",
                title: "Map Competitor Market",
                desc: "We identify competitor branches, high‑performing territories and adjacent markets, building a longlist of off‑market talent who will never apply to job ads.",
                style: "bg-card-dark border border-white/5 lg:-translate-y-4"
              },
              {
                num: "03",
                icon: "vpn_key",
                title: "Confidential Outreach",
                desc: "We approach top performers discreetly, benchmark track records and test motivation before they ever reach your desk.",
                style: "glass-card lg:translate-y-4"
              },
              {
                num: "04",
                icon: "reviews",
                title: "Shortlist & Interviews",
                desc: "We present 3–5 fully‑qualified candidates with structured scorecards focused on revenue, margin and leadership behaviours.",
                style: "bg-card-dark border border-white/5 lg:-translate-y-4"
              },
              {
                num: "05",
                icon: "handshake",
                title: "Offer & Resignation",
                desc: "We manage delicate resignations, counter‑offers and first‑90‑day expectations to maximise retention and impact.",
                style: "glass-card lg:translate-y-4"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className={`${step.style} p-6 rounded-sm flex flex-col hover:border-primary/50 transition-all duration-300 text-center relative group min-h-[280px] justify-between shadow-lg`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
              >
                <div>
                  <span className="absolute top-4 right-4 text-xs font-display font-black text-white/10 group-hover:text-primary/20 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">{step.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3">{step.title}</h3>
                </div>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RESULTS WE DELIVER (Asymmetric Case Studies) ── */}
      <section id="results" className="bg-background-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Track Record</span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
              Real Results for UK Electrical Wholesalers
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light mt-3">
              Proven commercial impact driven by bespoke, direct competitor headhunting campaigns.
            </p>
          </motion.div>

          {/* Asymmetric Case Studies layout: middle card is featured and larger */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Case Study 1 */}
            <motion.div
              className="glass-card rounded-sm p-8 flex flex-col justify-between hover:shadow-2xl min-h-[440px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 border border-primary/20 rounded-sm">
                    North West
                  </span>
                  <span className="text-slate-600 text-xs font-semibold">National Wholesaler</span>
                </div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mb-4">
                  Branch Manager – £4.5m Turnover Branch
                </h3>
                <div className="space-y-4 text-xs font-light">
                  <div>
                    <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Challenge:</strong>
                    <p className="text-slate-400 leading-relaxed">Flat revenue for 3 years despite strong local demand; previous branch manager weak on external sales.</p>
                  </div>
                  <div>
                    <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Search Brief:</strong>
                    <p className="text-slate-400 leading-relaxed">Market‑mapped 4 competitors, headhunted 18 target profiles, delivered 4‑person shortlist in 21 days.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Quantified Outcome:</strong>
                <p className="text-white font-medium text-sm leading-relaxed">+23% branch revenue and +2.1 pts GP margin within 12 months.</p>
              </div>
            </motion.div>

            {/* Case Study 2 (FEATURED CARD - Glass Card Featured) */}
            <motion.div
              className="glass-card-featured rounded-sm p-10 flex flex-col justify-between lg:scale-105 min-h-[480px] relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="featured-badge">Featured Search</span>
                  <span className="text-primary text-xs font-bold font-display">Midlands</span>
                </div>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-tight mb-4 text-gradient">
                  Area Sales Manager – Key Accounts
                </h3>
                <div className="space-y-4 text-xs font-light">
                  <div>
                    <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Challenge:</strong>
                    <p className="text-slate-300 leading-relaxed">Stagnating sales pipelines and lack of penetration in lucrative industrial contracting segment.</p>
                  </div>
                  <div>
                    <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Search Brief:</strong>
                    <p className="text-slate-300 leading-relaxed">Competitor branch mapping, identified 12 key account managers, engaged 7, presented 3 finalist scorecards.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Quantified Outcome:</strong>
                <p className="text-white font-bold text-base leading-relaxed text-glow">£1.2m new account revenue secured in first 9 months of placement.</p>
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div
              className="glass-card rounded-sm p-8 flex flex-col justify-between hover:shadow-2xl min-h-[440px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 border border-primary/20 rounded-sm">
                    South East
                  </span>
                  <span className="text-slate-600 text-xs font-semibold">National Distributor</span>
                </div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mb-4">
                  Regional Commercial Director
                </h3>
                <div className="space-y-4 text-xs font-light">
                  <div>
                    <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Challenge:</strong>
                    <p className="text-slate-400 leading-relaxed">Restructuring of 14 branch network required a commercially aggressive leader to protect buying group margins.</p>
                  </div>
                  <div>
                    <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Search Brief:</strong>
                    <p className="text-slate-400 leading-relaxed">Direct executive mapping of tier-1 competitors, headhunted 5 regional leaders, placed candidate in 6 weeks.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <strong className="block text-primary uppercase tracking-wider text-[9px] mb-1 font-bold">Quantified Outcome:</strong>
                <p className="text-white font-medium text-sm leading-relaxed">Stabilised regional GP margins at 21.8% and decreased branch staff churn by 18%.</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact?ref=results"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-bold font-display uppercase tracking-widest text-xs rounded-sm hover:bg-primary hover:text-navy-deep transition-all duration-300"
            >
              View More Search Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHO WE WORK WITH (Client segment - Different bk Gradients) ── */}
      <section id="clients" className="bg-navy-deep py-24 text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">Client Partnerships</span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.1]">
                For Branch, Regional and Sales Leaders
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We partner with national and independent electrical wholesalers across the UK who want to upgrade their sales and leadership talent, not just “fill a vacancy”.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy-deep font-bold font-display uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all shadow-lg"
                >
                  Discuss a Live or Upcoming Role
                </Link>
              </div>
            </motion.div>

            {/* Diverse background gradients for client segment cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Branch Managers",
                  desc: "Looking to stabilise local depot teams, improve stock turn, and capture external trade counter GP margin.",
                  gradient: "bg-gradient-to-br from-[#0b1224] to-[#040711] border-l-2 border-primary"
                },
                {
                  title: "Regional / Area Managers",
                  desc: "Tasked with building high-performing territory sales teams, launching new branches, or restructuring logistics hubs.",
                  gradient: "bg-gradient-to-br from-[#0c0d12] to-[#161d2f] border-t-2 border-primary"
                },
                {
                  title: "Sales / Commercial Directors",
                  desc: "Planning group-level strategic hiring programs, mapping regional competitor heads, and negotiating OTE packages.",
                  gradient: "bg-gradient-to-br from-[#030303] to-[#1a233d] border-r-2 border-primary"
                }
              ].map((segment, idx) => (
                <div key={idx} className={`${segment.gradient} p-6 rounded-sm flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 min-h-[220px]`}>
                  <div className="space-y-4">
                    <span className="font-display font-black text-xl text-primary block">0{idx + 1}</span>
                    <h3 className="font-display font-bold text-sm uppercase text-white tracking-wider">{segment.title}</h3>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">{segment.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FOR CANDIDATES (Dossier Layout Style Cards) ── */}
      <section id="candidates" className="bg-background-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Bullet Points (styled as dossier cards with offset corners) */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6 order-2 lg:order-1">
              {[
                {
                  title: "Confidential Introductions",
                  desc: "We present you to leading wholesalers without public job postings, ensuring your search is 100% private.",
                  icon: "security"
                },
                {
                  title: "Increase Responsibility & OTE",
                  desc: "We target mandates offering greater regional autonomy, larger P&L networks, and high-reward profit-share schemes.",
                  icon: "payments"
                },
                {
                  title: "Negotiation & Packages",
                  desc: "Bespoke advice on basic salary structures, car allowances, branch GP overrides, and long-term equity options.",
                  icon: "trending_up"
                }
              ].map((bullet, idx) => (
                <div key={idx} className="dossier-card p-6 rounded-tr-xl rounded-bl-xl flex flex-col justify-between min-h-[240px]">
                  <span className="material-symbols-outlined text-primary text-2xl mb-4">{bullet.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-xs uppercase text-white tracking-wider mb-2">{bullet.title}</h3>
                    <p className="text-slate-400 text-[11px] font-light leading-relaxed">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Pitch & Network Form */}
            <motion.div
              className="lg:col-span-6 space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">Confidential Network</span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.1]">
                For High‑Performing Wholesale Professionals
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We work with experienced professionals in branch management, field sales and commercial leadership who are consistently over‑target and ready for their next challenge.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('lead-magnets')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-navy-deep font-bold font-display uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all shadow-lg"
                >
                  Join Our Confidential Talent Network
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. LEAD MAGNET SECTION (Contrasting guide boxes) ── */}
      <section id="lead-magnets" className="bg-navy-deep py-24 text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Industry Intelligence</span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
              Exclusive Wholesale Industry Guides
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light mt-3">
              Enter your details below to instantly access our strategic guides designed for employers and candidates.
            </p>
          </motion.div>

          {/* Contrasting guide cards: featured gold card vs translucent glass card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: For Clients (Featured Gold/Navy card) */}
            <div className="glass-card-featured p-8 md:p-10 rounded-sm border-primary/30">
              <div className="mb-8">
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">For Employers</span>
                <h3 className="text-xl md:text-2xl font-display font-black uppercase text-white tracking-tight">
                  2026 Salary & Compensation Guide
                </h3>
                <p className="text-slate-300 text-xs font-light leading-relaxed mt-2">
                  UK Electrical Wholesale Sales & Branch Leadership benchmarking report.
                </p>
              </div>

              {clientStatus === 'success' ? (
                <motion.div
                  className="bg-primary/10 border border-primary/20 p-8 rounded-sm text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <span className="material-symbols-outlined text-primary text-5xl">task_alt</span>
                  <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">Salary Guide Downloaded</h4>
                  <p className="text-slate-300 text-xs font-light max-w-xs mx-auto">
                    The text file should have downloaded automatically. Check your downloads directory, or request a secondary email copy.
                  </p>
                  <button
                    onClick={() => setClientStatus('idle')}
                    className="text-xs text-primary font-bold uppercase tracking-wider hover:underline"
                  >
                    Download Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleClientSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={clientForm.name}
                        onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">Company *</label>
                      <input
                        type="text"
                        required
                        value={clientForm.company}
                        onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">Your Role *</label>
                      <input
                        type="text"
                        required
                        value={clientForm.role}
                        onChange={(e) => setClientForm({ ...clientForm, role: e.target.value })}
                        placeholder="e.g. Sales Director"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        placeholder="work@company.co.uk"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={clientStatus === 'submitting'}
                      className="w-full bg-primary text-navy-deep py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {clientStatus === 'submitting' ? 'Generating Guide...' : 'Download Salary Guide'}
                      <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: For Candidates (Translucent glass card) */}
            <div className="glass-card p-8 md:p-10 rounded-sm">
              <div className="mb-8">
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">For Candidates</span>
                <h3 className="text-xl md:text-2xl font-display font-black uppercase text-white tracking-tight">
                  Maximising Wholesale Earnings
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed mt-2">
                  Guide on basic salary negotiation, GP override structures, and commercial bonus agreements.
                </p>
              </div>

              {candidateStatus === 'success' ? (
                <motion.div
                  className="bg-primary/10 border border-primary/20 p-8 rounded-sm text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <span className="material-symbols-outlined text-primary text-5xl">task_alt</span>
                  <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">Earnings Guide Downloaded</h4>
                  <p className="text-slate-300 text-xs font-light max-w-xs mx-auto">
                    The guide download has been triggered. Check your browser folder or request a secondary email copy.
                  </p>
                  <button
                    onClick={() => setCandidateStatus('idle')}
                    className="text-xs text-primary font-bold uppercase tracking-wider hover:underline"
                  >
                    Download Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleCandidateSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={candidateForm.name}
                        onChange={(e) => setCandidateForm({ ...candidateForm, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold">Current Role *</label>
                      <input
                        type="text"
                        required
                        value={candidateForm.role}
                        onChange={(e) => setCandidateForm({ ...candidateForm, role: e.target.value })}
                        placeholder="e.g. Branch Manager"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold">Region *</label>
                      <input
                        type="text"
                        required
                        value={candidateForm.region}
                        onChange={(e) => setCandidateForm({ ...candidateForm, region: e.target.value })}
                        placeholder="e.g. North West"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold">Personal Email *</label>
                      <input
                        type="email"
                        required
                        value={candidateForm.email}
                        onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                        placeholder="personal@email.com"
                        className="w-full bg-black/40 border border-white/8 rounded-sm px-4 py-3 text-xs text-white focus:border-primary focus:bg-black/60 outline-none transition-all placeholder:text-slate-700"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={candidateStatus === 'submitting'}
                      className="w-full bg-primary text-navy-deep py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {candidateStatus === 'submitting' ? 'Generating Guide...' : 'Download Earnings Guide'}
                      <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. ABOUT & CREDIBILITY (Wide glassmorphic card layout) ── */}
      <section className="bg-background-dark py-24 text-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="glass-card-featured p-10 md:p-16 rounded-sm text-center relative overflow-hidden border-primary/20"
            {...fadeInUp}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">About Power-Up Talent</span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mt-2">
              Why Power-Up Talent Exists
            </h2>
            <div className="h-0.5 w-16 bg-primary mx-auto mt-4 mb-8"></div>
            <div className="space-y-6 max-w-3xl mx-auto text-slate-300 text-sm md:text-base font-light leading-relaxed">
              <p>
                Power-Up Talent was built out of frustration with generalist recruitment agencies who lack technical sector grit. When generic trade recruiters are trying to fill positions for contractors, electricians, fire & security installers, and wholesale branch managers all in the same week, their attention is divided. 
              </p>
              <p>
                We operate exclusively as a boutique executive search partner for the UK electrical wholesale sector. Founded by a veteran who has worked at the counter and in regional boardrooms, we speak the literal language of margins, supplier rebates, stock valuation, and buying groups. We connect the elite 1% of passive wholesale leaders directly to national and independent branch networks.
              </p>
            </div>
            <div className="pt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-navy-deep font-bold font-display uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all duration-300"
              >
                Meet Your Headhunter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
