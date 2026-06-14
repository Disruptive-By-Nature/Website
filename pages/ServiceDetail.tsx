import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';

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
    { icon: 'schedule', title: 'Accelerated Hiring', stat: '50% Lead Time Reduction', desc: 'Secure critical leaders quickly before buying group windows shift.' },
    { icon: 'person_search', title: 'Precision Hires', stat: 'Predictive Success', desc: 'Operational modelling ensures candidates align with branch margin protection goals.' },
    { icon: 'currency_pound', title: 'Operational ROI', stat: '30% Cost-Per-Hire Lower', desc: 'Efficiency through technical headhunting rather than generic CV skimming.' },
    { icon: 'diversity_3', title: 'Balanced Teams', stat: 'Unbiased Sourcing', desc: 'Building inclusive, high-performing cultures across national branch networks.' },
    { icon: 'trending_up', title: 'Scalability', stat: 'Hybrid Deployment', desc: 'Agile support for rapid branch rollouts and regional restructuring.' },
    { icon: 'analytics', title: 'Sector Intel', stat: 'Real-Time Mapping', desc: 'Live data on competitor procurement leads and regional salary benchmarks.' },
  ];

  const expertSectors = [
    { img: 'https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png', title: 'Electrical Wholesale', desc: 'Specialised Branch and Regional leadership sourcing for national distributors and independent buying groups.' },
    { img: 'https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg', title: 'Fire & Security', desc: 'Technical experts and management for life-safety systems, fire protection, and secure infrastructure.' },
    { img: 'https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png', title: 'Lighting & Design', desc: 'Creative and technical procurement leads for high-specification industrial and commercial lighting.' }
  ];

  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white overflow-x-hidden">
      <SEO
        title={`${service.name} | Specialist Electrical Wholesale Headhunting`}
        description={`${service.description} Discover why Power-Up Talent is the UK's leading talent partner for the electrical wholesale sector.`}
        keywords={`electrical wholesale, headhunting, executive search, recruitment, ${service.name.toLowerCase()}`}
        canonical={`https://power-up-talent.app/services/${service.id}`}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
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
                  We don't search based on simple keyword matches or job titles. We map the entire UK electrical wholesale market to understand which leaders are actively delivering margins, protecting inventory value, and managing complex branch networks.
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

export default ServiceDetail;
