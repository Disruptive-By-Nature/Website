
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleGenAI, Type } from "@google/genai";
import SEO from '../components/SEO';
// @ts-ignore
import heroImg from '../src/assets/images/news_hero_1780507443923.png';

interface NewsItem {
  title: string;
  category: string;
  snippet: string;
  url: string;
  source: string;
  date: string;
  tags: string[];
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Search for and provide 10 UNIQUE and CURRENT UK news articles (from late 2024 to 2025) specifically related to the UK electrical wholesale, fire safety, and lighting industry. 
        Focus on regulatory updates (e.g., Part L, Part P, fire safety legislation), market mergers, or technical product shifts.
        
        Required JSON fields:
        1. title: The full professional headline (Uppercase).
        2. source: The news source name.
        3. snippet: A 25-word summary.
        4. url: The direct link to the article.
        5. category: Primary category (e.g., LEGISLATION, PRODUCTS).
        6. tags: 3 technical tags.
        7. date: The publication date.`,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                source: { type: Type.STRING },
                snippet: { type: Type.STRING },
                url: { type: Type.STRING },
                category: { type: Type.STRING },
                tags: { type: Type.ARRAY, items: { type: Type.STRING } },
                date: { type: Type.STRING }
              },
              required: ["title", "source", "snippet", "url", "category", "tags"]
            }
          }
        },
      });

      const jsonStr = response.text.trim();
      let parsedNews: any[] = JSON.parse(jsonStr);

      setNews(parsedNews.map((item) => ({
        ...item,
        date: item.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      })));
    } catch (err) {
      console.error("News Fetch Error:", err);
      setError("Unable to sync with live UK industry feeds. Please check back shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Industry News | UK Electrical Wholesale News | Power-Up Talent"
        description="Stay updated with the latest UK electrical wholesale industry news, regulatory updates, and market trends."
        keywords="Electrical Wholesale News, UK Electrical Industry Updates, Fire Safety Legislation News, Electrical Wholesale Market Trends"
        canonical="https://poweruptalent.co.uk/news"
      />
      <section className="bg-navy-deep py-24 md:py-48 border-b border-white/5 relative overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={heroImg}
            className="absolute inset-0 w-full h-full object-cover opacity-[0.24] grayscale mix-blend-overlay object-center"
            referrerPolicy="no-referrer"
            alt="UK Electrical Wholesale Industry News & Regulatory Updates"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/20 to-navy-deep/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,193,7,0.1)_0%,transparent_70%)] opacity-30"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
            UK Sector Intelligence
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-4 tracking-tighter uppercase">
            The Industry <span className="text-primary italic">Live.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Real-time UK regulatory shifts, product launches, and market technical updates.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-screen-xl mx-auto bg-white">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-6">
            <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em]">Compiling Latest Briefings...</p>
          </div>
        ) : error ? (
          <div className="text-center py-40 bg-slate-50 border border-slate-100 rounded-lg">
            <span className="material-symbols-outlined text-4xl text-slate-300 mb-4">error_outline</span>
            <p className="text-slate-600 mb-8 font-medium">{error}</p>
            <button onClick={fetchNews} className="bg-black text-white px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest">Retry Connection</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {news.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col space-y-4 p-8 border border-slate-50 hover:border-slate-100 hover:shadow-xl transition-all rounded-sm bg-white"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-[#E31E24] text-white text-[8px] font-black uppercase tracking-[0.15em] px-2.5 py-1.5">News</span>
                    <span className="bg-black text-white text-[8px] font-black uppercase tracking-[0.15em] px-2 py-1.5">{item.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary leading-[1.1] tracking-tight uppercase min-h-[3.3em] flex items-start">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-2 border-t border-slate-50">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#E31E24] text-[14px] font-bold">person</span>
                      {item.source}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#E31E24] text-[14px] font-bold">calendar_today</span>
                      {item.date}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal line-clamp-3">
                    {item.snippet}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default News;
