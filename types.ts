export interface FAQItem {
  question: string;
  answer: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  operationalScope?: string;
  methodologyInsight?: string;
  features: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}
