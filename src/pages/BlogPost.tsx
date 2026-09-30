import { motion } from 'framer-motion';
import { CheckCircle2, Clock, MessageCircle } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/content';
import { usePublishedDocument } from '@/lib/cms';
import type { CmsPost } from '@/types/cms';

const BlogPost = () => {
  const { slug } = useParams();
  const fallback = blogPosts.find((item) => item.slug === slug) as CmsPost | undefined;
  const { item: post, loading } = usePublishedDocument<CmsPost>('posts', slug, fallback);

  if (loading) return <div className="min-h-screen grid place-items-center text-muted-foreground">Loading article…</div>;
  if (!post || slug?.includes('school')) {
    return <Navigate to="/blog" replace />;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'ORACHITECH',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ORACHITECH',
    },
    url: `https://www.orachitech.com/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | ORACHITECH`}
        description={post.summary}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
        schema={schema}
      />
      <Navbar />
      <WhatsAppButton />

      <main>
        <article>
          <section className="relative pt-32 pb-12 overflow-hidden">
            <div className="absolute inset-0 hexagon-pattern opacity-60" />
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl"
              >
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-5">
                  <span className="text-primary font-semibold">{post.category}</span>
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">{post.summary}</p>
              </motion.div>
            </div>
          </section>

          <section className="pb-20">
            <div className="container mx-auto px-6">
              {post.heroImage && <img
                src={post.heroImage}
                alt={post.heroAlt || post.title}
                className="w-full max-h-[480px] object-cover rounded-2xl mb-12"
                onError={(event) => { event.currentTarget.style.display = 'none'; }}
              />}
              <div className="grid lg:grid-cols-[1fr_280px] gap-12">
                <div className="space-y-10 text-muted-foreground text-lg leading-8">
                  <p>{post.intro}</p>
                  {(Array.isArray(post.sections) ? post.sections : []).filter((section) => section && (section.title || section.body)).map((section) => (
                    <section key={section.title}>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                      <p>{section.body}</p>
                    </section>
                  ))}
                </div>
                <aside className="glass-card rounded-2xl p-6 h-fit sticky top-28">
                  <h3 className="font-display text-xl font-bold mb-5">Best fit for</h3>
                  <ul className="space-y-4 mb-6">
                    {(Array.isArray(post.bestFit) ? post.bestFit : []).filter(Boolean).map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {post.ctaLabel || 'Start a conversation'}
                  </Link>
                </aside>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
