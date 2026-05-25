import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { schoolSaasBlog } from '@/data/content';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="ORACHITECH Blog | Software, SaaS and Digital Growth"
        description="Read ORACHITECH insights on SaaS products, custom software, school management systems, web apps, and digital transformation for growing businesses."
        path="/blog"
        keywords="ORACHITECH blog, SaaS blog Pakistan, school management software blog, custom software insights"
      />
      <Navbar />
      <WhatsAppButton />

      <main>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 hexagon-pattern opacity-70" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                ORACHITECH Insights
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Practical ideas for building better <span className="shimmer-text">software products</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Notes from our work in SaaS, websites, automation, dashboards, and digital operations.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 tech-card rounded-2xl overflow-hidden"
            >
              <img src={schoolSaasBlog.heroImage} alt="" className="h-full min-h-80 w-full object-cover" />
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-5">
                  <span className="text-primary font-semibold">{schoolSaasBlog.category}</span>
                  <span>{schoolSaasBlog.date}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {schoolSaasBlog.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">{schoolSaasBlog.title}</h2>
                <p className="text-muted-foreground mb-8">{schoolSaasBlog.summary}</p>
                <Link to={`/blog/${schoolSaasBlog.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
