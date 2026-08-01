import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical = 'https://power-uptalent.co.uk/',
  ogTitle,
  ogDescription,
  ogImage = 'https://power-uptalent.co.uk/src/assets/images/logo.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDesc = ogDescription || description;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* AEO & GEO Search Signals */}
      <meta name="author" content="Power-Up Talent" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      <meta name="language" content="English" />
      <meta name="rating" content="general" />

      {/* OpenGraph (Facebook, LinkedIn, WhatsApp, Slack) */}
      <meta property="og:site_name" content="Power-Up Talent" />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (Schema.org JSON-LD for Search Engines, Perplexity & AI Overviews) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
