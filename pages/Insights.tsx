
import React from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../constants';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
// @ts-ignore
import heroImg from '../src/assets/images/insights_hero_1780507487336.png';

const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(INSIGHTS.map(post => post.category)))];

  const filteredInsights = selectedCategory === 'All' 
    ? INSIGHTS 
    : INSIGHTS.filter(post => post.category === selectedCategory);

  return (
    <div className="pb-20 bg-background-dark min-h-screen">
      <SEO 
        title="Industry Insights | Elite Executive Search & Electrical Wholesale Trends | Power-Up Talent"
        description="Expert executive search opinions, electrical wholesale market trends, and talent strategies for the UK sector. Stay informed with Power-Up Talent."
        keywords="Electrical Wholesale Talent Insights, UK Electrical Sector Market Trends, Executive Search Electrical Wholesale, Talent Strategies Electrical Wholesale, Electrical Wholesale Market Intelligence"
        canonical="https://poweruptalent.co.uk/insights"
      />
      
      {/* Header section with Custom background image */}
      <div className="relative py-40 md:py-60 px-6 border-b border-white/5 overflow-hidden bg-navy-deep mb-20">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={heroImg}
            className="absolute inset-0 w-full h-full object-cover opacity-[0.24] grayscale mix-blend-overlay object-center"
            referrerPolicy="no-referrer"
            alt="UK Electrical Wholesale Recruitment Insights & Market Intelligence"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/20 to-navy-deep/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.05)_0%,transparent_100%)]"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto relative z-10 text-center animate-slide-up">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Industry Intelligence
          </div>
          <h1 className="text-6xl md:text-[10rem] font-display font-bold text-white tracking-tighter uppercase leading-none mb-8">
            Industry <span className="text-primary italic">Insights.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mx-auto">
            Expert opinions, market trends, and talent strategies for the UK electrical wholesale sector.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-20">
          {/* Filter Mechanism */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-navy-deep'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredInsights.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/insights/${post.id}`} className="block h-full bg-navy-deep border border-white/5 rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={`Article: ${post.title} - ${post.category} - Power-Up Talent Insights`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-navy-deep text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest mb-6">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-6 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-white font-bold text-[10px] uppercase tracking-widest">Read Article</span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
