import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';
import wholesaleImg from '../src/assets/images/fuse_board.png';
import securityImg from '../src/assets/images/fire_security.png';
import lightingImg from '../src/assets/images/emergency_exit.png';

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
    { icon: 'schedule', title: 'Accelerated Hiring', stat: '50% Lead Time Reduction', desc: 'Secure critical talent quickly before buying group windows shift.' },
    { icon: 'person_search', title: 'Precision Hires', stat: 'Predictive Success', desc: 'Operational modelling ensures candidates align with branch margin protection goals.' },
    { icon: 'currency_pound', title: 'Operational ROI', stat: '30% Cost-Per-Hire Lower', desc: 'Efficiency through technical headhunting rather than generic CV skimming.' },
    { icon: 'diversity_3', title: 'Balanced Teams', stat: 'Unbiased Sourcing', desc: 'Building inclusive, high-performing cultures across national branch networks.' },
    { icon: 'trending_up', title: 'Scalability', stat: 'Hybrid Deployment', desc: 'Agile support for rapid branch rollouts and regional restructuring.' },
    { icon: 'analytics', title: 'Sector Intel', stat: 'Real-Time Mapping', desc: 'Live data on competitor procurement leads and regional salary benchmarks.' },
  ];

  const expertSectors = [
    { img: wholesaleImg, title: 'Electrical Wholesale', desc: 'Specialised Branch and Regional leadership sourcing for national distributors and independent buying groups.' },
    { img: securityImg, title: 'Fire & Security', desc: 'Technical experts and management for life-safety systems, fire protection, and secure infrastructure.' },
    { img: lightingImg, title: 'Lighting & Design', desc: 'Creative and technical procurement leads for high-specification industrial and commercial lighting.' }
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
                {service.description}
              </p>
              <div className="border-l-4 border-primary pl-6 space-y-4">
                <p className="text-navy-deep font-bold text-lg uppercase tracking-wide">Methodology & Insight</p>
                <p className="text-slate-500 font-light leading-relaxed">
                  We don't search based on simple keyword matches or job titles. We map the entire UK electrical wholesale market to understand which talent is actively delivering margins, protecting inventory value, and managing complex branch networks.
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

      {/* SECTION 3: HOW WE TRANSFORM BUSINESS */}
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
              Our consultants have worked in the electrical wholesale industry for decades. We speak your language.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            title: 'Passive Sourcing',
            icon: 'person_search',
            content: 'We specialise in identifying and securing the top 1% of passive talent currently delivering results for your competitors. They aren\'t looking at job boards or replying to standard recruiters—they respond to our consultative, direct headhunting approach.'
          },
          {
            title: 'DNA Qualifying',
            icon: 'verified',
            content: 'Every headhunted professional undergoes our rigorous technical DNA qualifying process. We assess margin protection capability, procurement cycle knowledge, local distributor dynamics, and cultural alignment before any introduction.'
          },
          {
            title: 'Discretion Protocols',
            icon: 'lock',
            content: 'Search integrity is paramount. We operate under strict confidentiality agreements. No names or company associations are shared until mutual interest is established, protecting your brand\'s commercial strategy.'
          }
        ];
      case 'strategic-recruitment':
        return [
          {
            title: 'Local Market Mapping',
            icon: 'hub',
            content: 'We collaborate closely with clients to build a custom hiring strategy. This begins with mapping the local geographic market, identifying competitor branches, mapping out local competition, and evaluating talent availability before beginning our direct recruitment search.'
          },
          {
            title: 'All-Tier Sourcing',
            icon: 'groups',
            content: 'We believe headhunting shouldn\'t be reserved solely for high-level executive suites. We deploy our strategic recruitment mapping methodology to hire for all role tiers across your entire operation—from entry-level trade counters and internal sales to branch leadership.'
          },
          {
            title: 'Target Sourcing',
            icon: 'analytics',
            content: 'By targeting high-performing personnel from direct competitors (national networks like Rexel and Edmundson or independent buying groups), we deliver the absolute best candidates in the market, fully capable of driving trade counter growth.'
          }
        ];
      case 'growth-partnerships':
        return [
          {
            title: 'End-to-End RPO',
            icon: 'dynamic_feed',
            content: 'Our comprehensive model where we completely manage the entire hiring lifecycle. Operating as an extension of your in-house HR and recruitment team, we handle talent attraction, screening, interviewing, and onboarding.'
          },
          {
            title: 'Project RPO',
            icon: 'campaign',
            content: 'Short-to-medium-term support designed to meet sudden hiring spikes, national restructures, or targeted campaigns (such as launching a new branch network or rolling out a new regional territory).'
          },
          {
            title: 'Modular & Selective RPO',
            icon: 'widgets',
            content: 'Support for specific components of the talent acquisition pipeline, such as candidate sourcing, screening, or employer branding, allowing your internal HR team to manage other stages in-house.'
          },
          {
            title: 'Strategic Value & Cost Reduction',
            icon: 'trending_up',
            content: 'Partnering with us on an RPO model allows electrical wholesalers to scale hiring quickly, enhance candidate experience, access advanced AI/analytics tools, and reduce overall talent acquisition costs.'
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
