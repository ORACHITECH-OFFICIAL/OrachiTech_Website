import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { schoolSaasCaseStudy } from '@/data/content';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="ORACHITECH Case Studies | SaaS and Software Projects"
        description="Explore ORACHITECH case studies for SaaS products, school management systems, dashboards, portals, and custom software projects."
        path="/case-studies"
        keywords="ORACHITECH case studies, SaaS case study Pakistan, software project case study, school management system case study"
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
                Case Studies
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Software projects built around real <span className="shimmer-text">business workflows</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                A closer look at how ORACHITECH plans, designs, and builds useful digital systems.
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
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 tech-card rounded-2xl overflow-hidden"
            >
              <img src={schoolSaasCaseStudy.heroImage} alt="" className="h-full min-h-80 w-full object-cover" />
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                  {schoolSaasCaseStudy.category}
                </span>
                <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">{schoolSaasCaseStudy.title}</h2>
                <p className="text-muted-foreground mb-8">{schoolSaasCaseStudy.summary}</p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {schoolSaasCaseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="glass-card rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <Link to={`/case-studies/${schoolSaasCaseStudy.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold">
                  View case study
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

export default CaseStudies;
