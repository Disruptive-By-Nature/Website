
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const AboutUs: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" as const }
  };

  return (
    <div className="pt-20 md:pt-24 pb-0 overflow-x-hidden bg-background-dark text-white">
      <SEO 
        title="About Us | UK Electrical Wholesale Recruitment Specialists | Power-Up Talent"
        description="Learn about Power-Up Talent, the UK's premier strategic talent partner for electrical wholesale. Discover our story, methodology, and commitment to quality."
        keywords="About Power-Up Talent, Electrical Wholesale Recruitment Agency, UK Electrical Sector Consultancy, Recruitment Specialists Electrical Wholesale"
        canonical="https://poweruptalent.co.uk/about"
      />
      
      {/* 1. Header */}
      <section className="relative max-w-screen-xl mx-auto px-6 mb-32 text-center py-20 md:py-40">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1)_0%,transparent_100%)]"></div>
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-12 animate-fade-in">
            UK Sector Intelligence Partners
          </div>
          <h1 className="text-5xl md:text-[10rem] font-display font-bold tracking-tighter mb-10 leading-[0.9] text-white uppercase text-center animate-slide-up">
            Quality Over <br/><span className="text-primary italic">Volume.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
            The Story Behind Power-Up Talent
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-32 md:py-48 px-6 bg-white text-slate-900 border-y border-slate-200">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            className="lg:w-1/2 space-y-10"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-8xl font-display font-bold text-slate-900 tracking-tight uppercase leading-none">
              Our <span className="text-primary">Story.</span>
            </h2>
            <div className="space-y-6 text-slate-600 font-light text-lg md:text-xl leading-relaxed">
              <p>
                Founded on a mission to specialise in how electrical wholesale talent is sourced and developed, <span className="font-bold text-navy-deep">Power-Up Talent</span> was born from a belief that exceptional hires are the irreplaceable core of UK infrastructure. We don't just source talent; we bring in top performers from inside and outside the industry and support them with comprehensive training at all levels throughout their careers—a commitment that has earned us an excellent reputation in the sector.
              </p>
              <p>
                We believe that the right leadership can transform organisations, drive sustainable growth, and protect margins throughout the electrical distribution community. Our mission extends beyond simple placement—we're dedicated to building long-term partnerships that foster career advancement and improved operational standards across the UK.
              </p>
              <p>
                Today, we're recognised as the UK's most trusted consultative partner for electrical executive search. Our success lies in our deep sector grit, extensive relationships with national buying groups, and commitment to ethical, personalised service.
              </p>
              <p>
                We don't just place candidates—we nurture careers, strengthen branch networks, and contribute to raising standards across the profession. Every role we fill is an opportunity to make a lasting impact on operational efficiency and team morale.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916341/530b2ac7-e334-4b7e-b4b4-6c3c996cda80_x6fcac.jpg"
                referrerPolicy="no-referrer"
                loading="lazy"
                alt="UK Electrical Sector Consultancy Team" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Strategic Difference */}
      <section className="py-32 md:py-48 px-6 bg-slate-50 text-slate-900 border-b border-slate-200">
        <motion.div 
          className="max-w-screen-xl mx-auto text-center mb-24"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-8xl font-display font-bold text-slate-900 tracking-tight uppercase mb-8">
            The Strategic <span className="text-primary">Difference.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            Power-Up Talent is not a traditional recruitment agency. We are a specialist consultancy focused exclusively on identifying the passive high-performers that standard job boards cannot reach.
          </p>
        </motion.div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
           <motion.div 
             className="p-12 bg-white border border-slate-200 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
           >
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1773133031/Gemini_Generated_Image_9k1c5e9k1c5e9k1c_1_ovnor8.png"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                alt="Headhunting-First"
              />
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold text-navy-deep uppercase mb-6">Headhunting-First</h3>
                <p className="text-slate-500 font-light text-xl leading-relaxed">
                  Operating on a methodology of market mapping and absolute discretion. We understand that the elite 1% of the workforce is rarely "looking" for work; they are busy delivering results for your competitors.
                </p>
              </div>
           </motion.div>
           <motion.div 
             className="p-12 bg-white border border-slate-200 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
              <img 
                src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1773133010/Gemini_Generated_Image_xjon5bxjon5bxjon_1_xtzsqm.png"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                alt="Trade Literacy"
              />
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold text-navy-deep uppercase mb-6">Trade Literacy</h3>
                <p className="text-slate-500 font-light text-xl leading-relaxed">
                  Our consultants are sector specialists with deep operational backgrounds. We speak the language of technical procurement and branch management, ensuring a peer-level vetting process standard recruiters cannot match.
                </p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 4. Our Commitment */}
      <section className="py-32 md:py-48 px-6 bg-navy-deep text-white border-y border-white/5 relative overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1773133006/Gemini_Generated_Image_5h80k15h80k15h80_1_tzolog.png"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          alt="Commitment to Talent Background"
        />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight uppercase leading-none mb-12">
              Our <span className="text-primary">Commitment to Talent.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
              We don't just source talent; we actively bring in top performers from both inside and outside the industry. Once they join, we support them with comprehensive, career-long training at all levels, ensuring they have the tools to excel and grow with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div 
              className="bg-white/5 p-10 rounded-sm border border-white/10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-6">Development Pathways</h3>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                From technical product certifications to leadership coaching, we partner with industry-leading training providers to offer structured development pathways for all placed candidates.
              </p>
              <ul className="space-y-3 text-slate-200 font-medium">
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Technical Product Certification</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Branch Management Leadership Training</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Commercial Strategy & Margin Protection</li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white/5 p-10 rounded-sm border border-white/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-6">Candidate Success Story</h3>
              <p className="text-slate-300 font-light leading-relaxed italic mb-6">
                "The training support I received after being placed as a Branch Manager was unparalleled. It wasn't just about the role; it was about my long-term career trajectory."
              </p>
              <p className="font-bold text-white">— Sarah Jenkins, Regional Director</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 pt-20">
            {[
              { icon: 'visibility', title: 'Transparency', desc: 'Clear communication about how AI modelling is used in our process.' },
              { icon: 'verified_user', title: 'Ethics', desc: 'Ensuring our tools are fair, unbiased, and compliant with UK employment laws.' },
              { icon: 'bolt', title: 'Innovation', desc: 'Continuously improving our sector intelligence and headhunting strategies.' },
              { icon: 'ads_click', title: 'Impact', desc: 'Helping wholesalers grow by connecting them with talent that protects margins.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="space-y-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="material-symbols-outlined text-primary text-4xl font-bold group-hover:scale-110 transition-transform">{item.icon}</span>
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-light text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Purpose */}
      <section className="py-32 md:py-48 px-6 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
          <motion.div 
            className="lg:w-1/2 space-y-12"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold text-primary tracking-tight uppercase leading-none">
              Our Purpose: To <br/>Specialise <br/>Recruitment.
            </h2>
            <div className="space-y-8">
              <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed">
                Our purpose is to specialised recruitment by combining the precision of AI with the irreplaceable nuance of sector grit. We believe that hiring should be fast, fair, and focused on identifying the elite high-performers.
              </p>
              <div className="pl-8 border-l-4 border-primary">
                 <p className="text-2xl font-display font-bold text-navy-deep italic uppercase">
                   "We don't just find you talent—we equip your organisation with the intelligence to outperform the competition."
                 </p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <img 
               src="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg"
               referrerPolicy="no-referrer"
               loading="lazy"
               alt="Technical Sector Intelligence" 
               className="w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </section>

      {/* 6. Our Values */}
      <section className="py-32 md:py-48 px-6 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-[8rem] font-display font-bold text-navy-deep tracking-tighter uppercase mb-24"
            {...fadeInUp}
          >
            Our <span className="text-primary">Values.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: 'verified', title: 'Integrity', desc: 'We conduct all our consultancy with honesty, transparency, and ethical standards, building trust with every brief.' },
              { icon: 'groups', title: 'Partnerships', desc: 'We invest in building lasting partnerships with both wholesalers and high-performers, fostering success.' },
              { icon: 'stars', title: 'Excellence', desc: 'We maintain the highest standards in everything we do, from market mapping to leadership delivery.' },
              { icon: 'tips_and_updates', title: 'Innovation', desc: 'We combine traditional headhunting methods with modern AI modelling to deliver innovative solutions.' },
              { icon: 'bolt', title: 'Sector Grit', desc: 'Every placement contributes to better operational standards, driving our passion for the electrical community.' },
            ].map((value, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="material-symbols-outlined text-primary text-5xl mb-8 group-hover:scale-110 transition-transform">{value.icon}</span>
                <h3 className="text-2xl font-display font-bold text-navy-deep uppercase mb-6">{value.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed text-center">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Specialist Banner */}
      <section className="py-24 px-6 bg-primary text-navy-deep text-center">
        <div className="max-w-4xl mx-auto">
          <Link to="/contact" className="bg-navy-deep text-white px-16 py-8 rounded-sm font-bold text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-navy-deep transition-all shadow-2xl">
            Consult a Specialist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
