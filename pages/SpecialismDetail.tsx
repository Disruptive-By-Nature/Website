import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import constructionTabImg from '../src/assets/images/construction_tab.jpg';
import engineeringTabImg from '../src/assets/images/engineering_tab.jpg';
import electricalTabImg from '../src/assets/images/electrical_tab.jpg';

interface SpecialismData {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  image: string;
  intro: string;
  lookFor: string[];
  howWeWork: string;
}

const SPECIALISMS_DATA: Record<string, SpecialismData> = {
  construction: {
    id: "construction",
    name: "Construction",
    tagline: "Commercial & operational headhunting for high-pressure building schemes.",
    icon: "construction",
    image: constructionTabImg,
    intro: "We support construction businesses with specialist recruitment and proactive headhunting for commercial, operational, and leadership roles. Our approach focuses on people who can perform in fast-moving, high-pressure environments and contribute from day one.",
    lookFor: [
      "Proven delivery in construction-led environments.",
      "Strong commercial awareness and stakeholder management.",
      "Talent that can support growth, site performance, and operational standards."
    ],
    howWeWork: "We map the market, identify high-performing passive talent, and approach candidates with relevance and credibility. That gives you a focused shortlist, not a pile of CVs."
  },
  engineering: {
    id: "engineering",
    name: "Engineering",
    tagline: "Securing technical depth and strategic leadership across complex environments.",
    icon: "precision_manufacturing",
    image: engineeringTabImg,
    intro: "We help engineering businesses secure high-calibre talent across technical, commercial, and leadership positions. Whether the need is for specialist capability or strategic leadership, we focus on people who bring real impact.",
    lookFor: [
      "Strong technical depth and practical problem-solving.",
      "The ability to operate in complex, quality-driven environments.",
      "Candidates with the right motivation, fit, and long-term value."
    ],
    howWeWork: "We do not rely on volume or generic sourcing. We actively headhunt, qualify carefully, and present only candidates who are commercially relevant and credible for the challenge."
  },
  electrical: {
    id: "electrical",
    name: "Electrical",
    tagline: "Deeply aligned search built around wholesale, manufacturing & contracting networks.",
    icon: "bolt",
    image: electricalTabImg,
    intro: "We are deeply aligned to the electrical sector and understand the nuances of wholesale, distribution, branch management, and commercial performance. Our electrical search work is built around market knowledge, discretion, and access to passive talent.",
    lookFor: [
      "People with sector credibility and a strong local reputation.",
      "Candidates who understand margin, service, and customer relationships.",
      "Talent that can deliver in branch-led, commercial, and leadership roles."
    ],
    howWeWork: "We combine specialist recruitment, proactive headhunting, talent mapping, and advisory support to secure people who can make a measurable difference."
  }
};

const SpecialismDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const specialism = id ? SPECIALISMS_DATA[id.toLowerCase()] : null;

  if (!specialism) {
    return <Navigate to="/" replace />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const specialismStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://power-uptalent.co.uk/specialisms/${specialism.id}#specialism`,
        "name": `${specialism.name} Headhunting & Executive Search`,
        "description": specialism.intro,
        "provider": {
          "@type": "EmploymentAgency",
          "@id": "https://power-uptalent.co.uk/#organization",
          "name": "Power-Up Talent",
          "url": "https://power-uptalent.co.uk"
        },
        "areaServed": "GB",
        "serviceType": "Executive Search & Headhunting"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://power-uptalent.co.uk/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${specialism.name} Specialism`,
            "item": `https://power-uptalent.co.uk/specialisms/${specialism.id}`
          }
        ]
      }
    ]
  };

  return (
    <div className="pt-20 bg-background-dark min-h-screen text-white overflow-x-hidden">
      <SEO
        title={`${specialism.name} Headhunting & Search | Power-Up Talent`}
        description={`${specialism.intro} We work with one organisation per sector at a time. Choosing Power-Up Talent means your competitors cannot.`}
        keywords={`headhunting, executive search, recruitment, ${specialism.name.toLowerCase()} recruitment, uk ${specialism.name.toLowerCase()} talent`}
        canonical={`https://power-uptalent.co.uk/specialisms/${specialism.id}`}
        structuredData={specialismStructuredData}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={specialism.image}
            alt={specialism.name}
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
                <span className="material-symbols-outlined text-[3rem] font-bold drop-shadow-md">{specialism.icon}</span>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <Breadcrumbs items={[
                { label: 'Home', path: '/' },
                { label: 'Specialisms', path: '/#specialisms' },
                { label: specialism.name }
              ]} />
            </div>

            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/10">
              Sector Specialism
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white leading-none tracking-tight mb-6 uppercase">
              {specialism.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              {specialism.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE DETAILS SECTION */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Description & Detail */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-display font-black text-3xl md:text-4xl text-navy-deep uppercase tracking-tight">
                Sector Sourcing Logic
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {specialism.intro}
              </p>
              
              <div className="border-l-4 border-primary pl-6 space-y-4">
                <p className="text-navy-deep font-bold text-lg uppercase tracking-wide">How we work</p>
                <p className="text-slate-500 font-light leading-relaxed">
                  {specialism.howWeWork}
                </p>
              </div>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="https://powercrm-daa67.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-navy-deep px-8 py-4 rounded-sm font-bold font-display uppercase tracking-widest text-xs hover:bg-navy-deep hover:text-white transition-all duration-300 shadow-md"
                >
                  Hire {specialism.name} Talent
                </a>
                <Link
                  to="/contact"
                  className="border border-slate-300 text-navy-deep px-8 py-4 rounded-sm font-bold font-display uppercase tracking-widest text-xs hover:bg-slate-50 transition-all duration-300"
                >
                  Discovery Call
                </Link>
              </div>
            </div>

            {/* Deliverables Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-sm p-8 md:p-10 shadow-sm">
              <h3 className="font-display font-bold text-xl text-navy-deep uppercase tracking-wider mb-6 pb-4 border-b border-slate-200">
                What we look for
              </h3>
              <ul className="space-y-6">
                {specialism.lookFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl font-bold shrink-0">check_circle</span>
                    <div>
                      <p className="text-slate-700 text-sm font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-20 text-navy-deep text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight mb-6">
              Ready to secure high-calibre talent?
            </h2>
            <p className="text-navy-deep/85 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Our market mapping covers active schemes and competitors nationwide. Let's build your focused shortlist today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://powercrm-daa67.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-deep text-white px-8 py-4 rounded-sm font-bold font-display uppercase tracking-widest text-xs hover:bg-white hover:text-navy-deep transition-all duration-300"
              >
                Book Consultation
              </a>
              <Link
                to="/contact"
                className="border border-navy-deep text-navy-deep px-8 py-4 rounded-sm font-bold font-display uppercase tracking-widest text-xs hover:bg-navy-deep hover:text-white transition-all duration-300"
              >
                Enquire Online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpecialismDetail;
