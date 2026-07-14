
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { INSIGHTS } from '../constants';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = INSIGHTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 pb-20 bg-background-dark min-h-screen text-center">
        <h1 className="text-4xl text-white font-display font-bold uppercase mb-8">Post Not Found</h1>
        <Link to="/insights" className="text-primary hover:underline uppercase tracking-widest font-bold">Back to Insights</Link>
      </div>
    );
  }

  const blogPostStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://power-uptalent.co.uk/insights/${post.id}#blogpost`,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": "2026-06-21",
    "dateModified": "2026-06-23",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://power-uptalent.co.uk/#organization",
      "name": "Power-Up Talent",
      "url": "https://power-uptalent.co.uk"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://power-uptalent.co.uk/insights/${post.id}`
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-background-dark min-h-screen">
      <SEO 
        title={`${post.title} | Power-Up Talent Insights`}
        description={post.excerpt}
        keywords={`${post.category}, electrical sector, recruitment, talent strategy, ${post.title}`}
        canonical={`https://power-uptalent.co.uk/insights/${post.id}`}
        structuredData={blogPostStructuredData}
      />
      <div className="max-w-screen-xl mx-auto px-6">
        <Link to="/insights" className="inline-flex items-center gap-4 text-slate-400 hover:text-primary transition-colors uppercase tracking-widest font-bold text-xs mb-12 group">
          <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
          Back to Insights
        </Link>

        <div className="mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter uppercase leading-[0.9] mb-12">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-slate-400 text-sm uppercase tracking-widest font-bold">

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              {post.date}
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">schedule</span>
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="aspect-video rounded-sm overflow-hidden mb-20 shadow-2xl border border-white/10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-slate max-w-none prose-base md:prose-lg lg:prose-xl prose-headings:font-display prose-headings:tracking-tighter prose-headings:uppercase prose-headings:text-primary prose-p:leading-relaxed prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-blockquote:border-primary prose-blockquote:text-slate-200">
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => (
                  <img 
                    {...props} 
                    loading="lazy" 
                    className="rounded-sm border border-white/10 shadow-xl my-12" 
                    referrerPolicy="no-referrer"
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
