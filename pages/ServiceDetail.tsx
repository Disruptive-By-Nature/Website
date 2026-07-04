import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';
import manufacturingImg from '../src/assets/images/fuse_board.png';
import distributionImg from '../src/assets/images/warehouse_forklift.jpg';
import designImg from '../src/assets/images/building_compliance_docs.png';
import installationImg from '../src/assets/images/ev_charging_station.png';
import forgedInIndustryImg from '../src/assets/images/forged_in_industry.jpg';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const transformItems = [
    { icon: 'schedule', title: 'Accelerated Hiring', stat: '50% Lead Time Reduction', desc: 'Secure critical leadership and engineering talent before project or supply windows shift.' },
    { icon: 'person_search', title: 'Precision Hires', stat: 'Predictive Success', desc: 'Operational vetting ensures candidates align with performance, engineering, or distribution margin goals.' },
    { icon: 'currency_pound', title: 'Operational ROI', stat: '30% Cost-Per-Hire Lower', desc: 'Sustained profitability through technical headhunting rather than generic CV skimming.' },
    { icon: 'diversity_3', title: 'Balanced Teams', stat: 'Unbiased Sourcing', desc: 'Building inclusive, high-performing cultures across engineering, manufacturing, and distribution sites.' },
    { icon: 'trending_up', title: 'Scalability', stat: 'Hybrid Deployment', desc: 'Agile support for rapid site scale-ups, branch rollouts, and project mobilisations.' },
    { icon: 'analytics', title: 'Sector Intel', stat: 'Real-Time Mapping', desc: 'Live data on competitor procurement leads and regional salary benchmarks.' },
  ];

  const expertSectors = [
    { img: manufacturingImg, title: 'Manufacturing', desc: 'Sourcing leaders, technical specialists, R&D engineers, and commercial heads for electrical manufacturers (OEMs, switchgear, controls, lighting, cables).' },
    { img: distributionImg, title: 'Distribution & Wholesale', desc: 'Specialised leadership, buying group management, regional directorships, and branch development for electrical wholesalers and distributors.' },
    { img: designImg, title: 'Design & Specification', desc: 'Sourcing lighting designers, electrical design engineers, specification managers, and estimating specialists for consultancies and specification houses.' },
    { img: installationImg, title: 'Installation & Contracting', desc: 'Project managers, contract managers, estimating engineers, and operations directors for small-to-large-scale electrical contractors.' }
  ];

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://poweruptalent.co.uk/services/${service.id}#service`,
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "@id": "https://poweruptalent.co.uk/#organization",
      "name": "Power-Up Talent",
      "url": "https://poweruptalent.co.uk"
    },
    "areaServed": "GB",
    "serviceType": "Recruitment"
  };

  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white overflow-x-hidden">
      <SEO
        title={`${service.name} | Specialist Electrical Wholesale Headhunting`}
        description={`${service.description} Discover why Power-Up Talent is the UK's leading talent partner for the electrical wholesale sector.`}
        keywords={`electrical wholesale, headhunting, executive search, recruitment, ${service.name.toLowerCase()}`}
        canonical={`https://poweruptalent.co.uk/services/${service.id}`}
        structuredData={serviceStructuredData}
      />

      {/* SECTION 1: HERO HEADER */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/40 to-background-dark" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(255,193,7,0.3)]">
                <span className="material-symbols-outlined text-[3rem] font-bold drop-shadow-md">{service.icon}</span>
              </div>
            </div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/10">
              Strategic Service Pillar
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white leading-none tracking-tight mb-6">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light italic tracking-wide max-w-3xl mx-auto">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICE DETAILS */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
            
            {/* Description & Detail */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-display font-black text-3xl md:text-4xl text-navy-deep uppercase tracking-tight">
                Operational Scope
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {service.operationalScope || service.description}
              </p>
              <div className="border-l-4 border-primary pl-6 space-y-4">
                <p className="text-navy-deep font-bold text-lg uppercase tracking-wide">Methodology & Insight</p>
                <p className="text-slate-500 font-light leading-relaxed">
                  {service.methodologyInsight || 'We map the entire UK electrical wholesale market to understand which talent is actively delivering results, protecting inventory value, and managing complex branch networks.'}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-navy-deep text-white px-8 py-4 rounded-sm font-bold font-display uppercase tracking-widest text-xs hover:bg-primary hover:text-navy-deep transition-all duration-300"
                >
                  Consult a Specialist
                </Link>
              </div>
            </div>

            {/* Deliverables Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-sm p-8 md:p-10 shadow-sm">
              <h3 className="font-display font-bold text-xl text-navy-deep uppercase tracking-wider mb-6 pb-4 border-b border-slate-200">
                Key Features & Deliverables
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl font-bold shrink-0">check_circle</span>
                    <div>
                      <h4 className="font-bold text-navy-deep text-sm uppercase tracking-wide">{feature}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Industry-certified delivery model ensuring compliance, efficiency, and sector-leading success rates.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Interactive Pillars Deep Dive Tabs */}
          <div className="border-t border-slate-200 pt-16">
            <ServiceDeepDive serviceId={service.id} />
          </div>

        </div>
      </section>

      {/* SECTION 2b: THE STRATEGIC DIFFERENCE */}
      <section className="bg-white py-20 text-navy-deep border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep uppercase tracking-tight mb-4">
              THE STRATEGIC <span className="text-primary">DIFFERENCE.</span>
            </h2>
            <p className="text-slate-500 text-base font-light max-w-2xl mx-auto leading-relaxed">
              Power-Up Talent is not a traditional recruitment agency. We are a specialist consultancy focused exclusively on identifying the passive high-performers that standard job boards cannot reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'HEADHUNTING-FIRST',
                desc: 'Operating on a methodology of market mapping and absolute discretion. We understand that the elite 1% of the workforce is rarely "looking" for work; they are busy delivering results for your competitors.'
              },
              {
                title: 'TRADE LITERACY',
                desc: 'Our consultants are sector specialists with deep operational backgrounds. We speak the language of technical procurement and branch management, ensuring a peer-level vetting process standard recruiters cannot match.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-lg p-10 hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-display font-black text-sm text-navy-deep uppercase tracking-wider mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FORGED IN THE INDUSTRY */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep mb-4">
              Forged in the Industry
            </h2>
            <p className="text-slate-500 text-base font-light max-w-2xl mx-auto leading-relaxed">
              Our story isn't one of chance, but of passion and expertise. We aren't just recruiters; we are industry veterans dedicated to powering the electrical wholesale sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5 text-slate-600 font-light leading-relaxed text-base"
            >
              <p>
                Founded on a mission to transform how talent is sourced and developed, Power-Up Talent was born from a belief that exceptional hires are key to shaping the future of the electrical wholesale industry.
              </p>
              <p>
                We believe that the right leadership can transform organisations, drive sustainable growth, and create lasting value. Our mission extends beyond simple placement — we're dedicated to building long-term partnerships that foster career advancement and raise standards across the sector.
              </p>
              <p>
                Today, we're recognised as one of the UK's most trusted names in electrical wholesale executive search. Our success lies in our deep sector knowledge, extensive relationships, and commitment to ethical, personalised service.
              </p>
              <p>
                We don't just place candidates — we nurture careers, strengthen businesses, and contribute to raising standards across the profession. Every role we fill is an opportunity to make a lasting impact on team morale and business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-lg overflow-hidden border border-slate-200 shadow-md"
            >
              <img
                src={forgedInIndustryImg}
                alt="Electrical wholesale professional in a branch"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE TRANSFORM BUSINESS */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Operational Impact</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep mt-2 mb-4">
              How We Transform Your Business
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
                className="bg-white border border-slate-200 rounded-sm p-8 hover:shadow-xl transition-all duration-300 flex gap-6"
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

      {/* SECTION 4: INDUSTRY EXPERT (SECTOR EXPERTISE) */}
      <section className="py-24 bg-navy-deep text-white border-b border-white/5">
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
              Our consultants have worked across the electrical industry supply chain for decades. We speak your language.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertSectors.map((sector, i) => (
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

      {/* SECTION 5: FINAL CTA */}
      <section className="bg-primary py-20 text-navy-deep text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter mb-4">
              Brief Us on {service.name}
            </h2>
            <p className="text-navy-deep/80 mb-8 text-lg font-light max-w-2xl mx-auto">
              Discuss your specific hiring mandate or growth plans confidentially with our lead sector specialists.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-navy-deep text-white font-bold font-display uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-navy-deep transition-all duration-300 shadow-xl"
            >
              Consult Our Specialists
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface ServiceDeepDiveProps {
  serviceId: string;
}

const ServiceDeepDive: React.FC<ServiceDeepDiveProps> = ({ serviceId }) => {
  const [activeTab, setActiveTab] = useState(0);

  const getTabs = () => {
    switch (serviceId) {
      case 'elite-recruitment':
        return [
          {
            title: 'Passive Talent Mapping',
            icon: 'person_search',
            content: 'We do not rely on job board traffic or generic keyword searches. We map the local market, identify who is genuinely performing in comparable environments, and discreetly approach high-calibre candidates who are rarely active but often open to the right opportunity.'
          },
          {
            title: 'Confidential Outreach',
            icon: 'lock',
            content: 'Confidentiality is the foundation of our headhunting model. We conduct direct, discreet outreach to passive candidates without exposing your business, your vacancy, or your commercial strategy. No names or company associations are shared until mutual interest is clearly established.'
          },
          {
            title: 'Reputation-Led Shortlisting',
            icon: 'verified',
            content: 'We do not shortlist based on CVs alone. Our process is built around local reputation, sector credibility, and track record. If a candidate is known for delivering results in your market, we know about them — and we know how to approach them.'
          },
          {
            title: 'Technical & Commercial Vetting',
            icon: 'analytics',
            content: 'Every candidate we introduce has been assessed for technical knowledge, commercial capability, and cultural alignment. We assess margin protection capability, procurement cycle knowledge, local distributor dynamics, and branch management experience before any introduction is made.'
          }
        ];
      case 'strategic-recruitment':
        return [
          {
            title: 'Local Market & Competitor Mapping',
            icon: 'hub',
            content: 'We map the local talent landscape, analyse competitor teams, and identify where the strongest candidates are already delivering results. This intelligence forms the foundation of every search we run — ensuring we are targeting the right people in the right locations.'
          },
          {
            title: 'Co-Designed Hiring Strategy',
            icon: 'groups',
            content: 'We co-design the search with you. We take time to understand your business, define the real brief behind the vacancy, and build a tailored hiring strategy around your growth plans, operational pressure points, and local market conditions.'
          },
          {
            title: 'All-Tier Search Capability',
            icon: 'leaderboard',
            content: 'Unlike executive-only search firms, we apply our elite, insight-led model across all role tiers — from senior leadership and branch management through to business development, internal sales, technical, and trade counter positions.'
          },
          {
            title: 'Insight-Led Qualification',
            icon: 'verified',
            content: 'Every candidate we present has been rigorously qualified against the brief. We assess not just skills and experience, but local market fit, commercial alignment, and genuine motivation — so your shortlist is precise, relevant, and ready to progress.'
          }
        ];
      case 'growth-partnerships':
        return [
          {
            title: 'End-to-End Recruitment Delivery',
            icon: 'dynamic_feed',
            content: 'We manage the entire permanent hiring lifecycle on your behalf — from attraction and sourcing through to screening, interview coordination, offer management, and onboarding. You stay focused on the business; we handle the recruitment process from start to finish.'
          },
          {
            title: 'Embedded Recruitment Partner',
            icon: 'groups',
            content: 'We act as a genuine extension of your internal team. This means operating to your standards, your timelines, and your processes — not a detached agency relationship, but a fully embedded recruitment function that understands your business from the inside.'
          },
          {
            title: 'White-Label or Branded Delivery',
            icon: 'campaign',
            content: 'We can operate as a visible extension of your brand, giving you a seamless outsourced recruitment partner that reflects your standards, messaging, and market identity. Candidates experience your brand throughout — not ours.'
          },
          {
            title: 'Scale Support for Growth & Change',
            icon: 'trending_up',
            content: 'This model is ideal for branch rollouts, multi-hire growth phases, restructuring programmes, or businesses that need consistent recruitment delivery without building a full in-house talent team. We scale up or down to match your requirements at any stage.'
          }
        ];
      default:
        return [];
    }
  };

  const tabs = getTabs();

  if (tabs.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="font-display font-black text-2xl text-navy-deep uppercase tracking-tight mb-8 text-center md:text-left">
        Service Deep Dive
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Tab Buttons */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-4 px-6 py-4 rounded-sm font-display font-bold text-xs uppercase tracking-wider text-left transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-navy-deep text-white border-l-4 border-primary shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-lg ${activeTab === idx ? 'text-primary' : 'text-slate-400'}`}>
                {tab.icon}
              </span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-sm p-8 min-h-[220px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-2xl font-bold">
                {tabs[activeTab].icon}
              </span>
              <h4 className="font-display font-black text-lg text-navy-deep uppercase tracking-wide">
                {tabs[activeTab].title}
              </h4>
            </div>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              {tabs[activeTab].content}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
