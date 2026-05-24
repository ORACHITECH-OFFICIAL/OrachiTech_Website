import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_URL = 'https://www.orachitech.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const setMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const SEO = ({ title, description, path = '/', keywords, schema }: SEOProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="keywords"]', 'content', keywords ?? '');
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', DEFAULT_IMAGE);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', DEFAULT_IMAGE);

    document.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => node.remove());

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, path, keywords, schema]);

  return null;
};

export default SEO;
