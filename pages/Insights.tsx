import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../constants';
import SEO from '../components/SEO';
import heroImg from '../src/assets/images/insights_hero_1780507487336.png';

const CATEGORIES = ['All', 'Market Trends', 'Talent Strategy', 'Leadership', 'Compliance', 'Operational Excellence'];

const CATEGORY_COLORS: Record<string, string> = {
  'Market Trends': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Talent Strategy': 'bg-primary/20 text-primary border-primary/30',
  'Leadership': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Compliance': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Operational Excellence': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
};

const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const filtered = activeCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter((post) => post.category === activeCategory);

  const featured = filtered[0] || null;
  const grid = filtered.slice(1);

  const mailtoNewsletter = `mailto:poweruptalent@gmail.com?subject=Newsletter Signup&body=${encodeURIComponent(`Please add me to the Power-Up Talent newsletter.\n\nEmail: ${newsletterEmail}`)}`;

  return (
    <>
      <SEO
        title="Insights & Analysis | Power-Up Talent"
        description="Expert commentary on UK electrical wholesale trends, talent strategy, and operational leadership from the Power-Up Talent team."
        keywords="electrical wholesale insights, uk talent trends, electrical industry analysis, wholesale recruitment blog"
        canonical="https://www.poweruptalent.co.uk/insights"
      />

      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Insights and analysis" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="material-icons text-primary text-sm">analytics</span>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Insights & Analysis</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Industry Intelligence.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            Expert commentary on UK electrical wholesale trends, talent strategy, and operational leadership.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-navy-deep border-b border-white/10 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-background-dark py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* FEATURED ARTICLE */}
          {featured && (
            <div className="mb-16">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-6">Featured Article</p>
              <Link to={`/insights/${featured.id}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden bg-navy-deep border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-deep/50 lg:bg-gradient-to-l" />
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 w-fit ${CATEGORY_COLORS[featured.category] || 'bg-white/10 text-white/70 border-white/20'}`}>
                        {featured.category}
                      </span>
                      <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-white/60 leading-relaxed mb-6 text-base">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-white/40 text-sm mb-6">
                        <span className="flex items-center gap-1">
                          <span className="material-icons text-xs">person</span>
                          {featured.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-icons text-xs">calendar_today</span>
                          {featured.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-icons text-xs">schedule</span>
                          {featured.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Read full article
                        <span className="material-icons text-sm">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ARTICLES GRID */}
          {grid.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grid.map((post) => (
                <Link key={post.id} to={`/insights/${post.id}`} className="group">
                  <article className="bg-navy-deep/60 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                      <span className={`absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[post.category] || 'bg-white/10 text-white/70 border-white/20'}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-white/35 text-xs pt-4 border-t border-white/10">
                        <span className="flex items-center gap-1">
                          <span className="material-icons text-xs">person</span>
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-icons text-xs">schedule</span>
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <span className="material-icons text-white/20 text-6xl mb-4 block">article</span>
              <p className="text-white/40 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-navy-deep py-24 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="material-icons text-primary text-sm">mail</span>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Newsletter</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Stay ahead of the market.</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Get our latest industry intelligence, talent market updates, and sector analysis delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <a
              href={newsletterEmail ? mailtoNewsletter : '#'}
              onClick={(e) => { if (!newsletterEmail) e.preventDefault(); }}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] whitespace-nowrap inline-flex items-center gap-2"
            >
              <span className="material-icons text-sm">send</span>
              Subscribe
            </a>
          </div>
          <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </>
  );
};

export default Insights;
