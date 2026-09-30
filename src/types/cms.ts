export type CmsStatus = 'draft' | 'published';

export interface CmsDocument {
  id: string;
  title: string;
  slug?: string;
  status: CmsStatus;
  order?: number;
  updatedAt?: unknown;
  createdAt?: unknown;
  [key: string]: unknown;
}

export interface CmsPost extends CmsDocument {
  slug: string;
  category: string;
  date: string;
  publishedAt: string;
  readTime: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  keywords: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
  bestFit: string[];
  ctaLabel: string;
}

export interface CmsCaseStudy extends CmsDocument {
  slug: string;
  category: string;
  summary: string;
  heroImage: string;
  metrics: Array<{ value: string; label: string }>;
  stack: string[];
  challenge?: string;
  solution?: string;
  modules?: string[];
}

export interface CmsPortfolioProject extends CmsDocument {
  slug: string;
  category: string;
  description: string;
  image: string;
  imageAlt?: string;
  gallery?: string[];
  technologies: string[];
  client?: string;
  year?: string;
  projectUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
}
