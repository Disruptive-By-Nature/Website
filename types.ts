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
  quote: string;
  avatar?: string;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
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
