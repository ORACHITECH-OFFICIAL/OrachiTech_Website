import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import InteriorHero from '@/components/InteriorHero';
import EditorialCTA from '@/components/EditorialCTA';
import { blogPosts } from '@/data/content';
import { usePublishedCollection } from '@/lib/cms';
import type { CmsPost } from '@/types/cms';

const dashboardAutomationPost = {
  title: 'What a Custom Business Dashboard Should Show Before You Automate Operations', slug: 'custom-business-dashboard-workflow-automation', category: 'Business Automation', date: 'June 3, 2026', readTime: '7 min read', summary: 'A practical checklist for teams that want cleaner reporting, fewer spreadsheet handoffs, and workflow automation built around the right KPIs.', heroImage: '/assets/hero-editorial-v2.png',
};

const Blog = () => {
  const { items } = usePublishedCollection<CmsPost>('posts', [dashboardAutomationPost, ...blogPosts] as CmsPost[]);
  const posts = items.filter((post) => !post.slug.includes('school'));
  return (
    <div className="min-h-screen bg-[#f3f1eb]">
      <SEO title="ORACHITECH Insights | Product, Software and Growth" description="Clear thinking from ORACHITECH on digital products, custom software, SaaS, automation, design, and modern operations." path="/blog" keywords="ORACHITECH insights, product strategy, SaaS, automation, custom software" />
      <Navbar />
      <WhatsAppButton />
      <main>
        <InteriorHero eyebrow="Notes from the studio" title="Ideas for building with more intention." description="Perspectives on products, operations, design, technology, and the choices that determine whether software creates momentum." imagePosition="72% center" />
        <section className="px-6 py-20 lg:py-28">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 border-b border-slate-950/20 pb-14 lg:grid-cols-[.6fr_1.4fr]"><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">Latest thinking</p><h2 className="max-w-4xl font-display text-4xl leading-[1.06] tracking-[-.045em] sm:text-6xl">Practical perspective, without the buzzword fog.</h2></motion.div>
            <div className="divide-y divide-slate-950/15">
              {posts.map((post, index) => <motion.article key={post.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: index * .08 }} className="group grid gap-8 py-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:py-16">
                <Link to={`/blog/${post.slug}`} className="relative block overflow-hidden bg-slate-900"><img src={post.heroImage} alt="" className="aspect-[16/10] w-full object-cover saturate-[.65] transition-all duration-1000 group-hover:scale-105 group-hover:saturate-100" /><span className="absolute left-5 top-5 rounded-full bg-slate-950/80 px-3 py-2 font-mono text-[10px] tracking-[.15em] text-white">{String(index + 1).padStart(2, '0')}</span></Link>
                <div><div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[.14em] text-slate-500"><span className="text-teal-700">{post.category}</span><span>{post.date}</span><span>{post.readTime}</span></div><h2 className="mt-5 max-w-4xl font-display text-3xl leading-[1.05] tracking-[-.035em] transition-colors group-hover:text-teal-800 sm:text-5xl">{post.title}</h2><p className="mt-6 max-w-2xl leading-relaxed text-slate-600">{post.summary}</p><Link to={`/blog/${post.slug}`} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold">Read the perspective <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div>
              </motion.article>)}
            </div>
          </div>
        </section>
        <EditorialCTA eyebrow="Turn insight into action" title="A good conversation can change the brief." />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
