import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { operationsDashboardCaseStudy } from '@/data/content';
import { usePublishedDocument } from '@/lib/cms';
import type { CmsCaseStudy } from '@/types/cms';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const fallback = slug === operationsDashboardCaseStudy.slug
    ? operationsDashboardCaseStudy as CmsCaseStudy
    : undefined;
  const { item: caseStudy, loading } = usePublishedDocument<CmsCaseStudy>('caseStudies', slug, fallback);

  if (loading) return <div className="min-h-screen grid place-items-center text-muted-foreground">Loading case study…</div>;
  if (!caseStudy || slug?.includes('school')) return <Navigate to="/case-studies" replace />;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.summary,
    author: { '@type': 'Organization', name: 'ORACHITECH' },
    url: `https://www.orachitech.com/case-studies/${caseStudy.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${caseStudy.title} Case Study | ORACHITECH`}
        description={caseStudy.summary}
        path={`/case-studies/${caseStudy.slug}`}
        keywords="custom software case study, operations dashboard, business automation, digital product studio"
        schema={schema}
      />
      <Navbar />
      <WhatsAppButton />

      <main>
        <section className="relative overflow-hidden bg-[#061412] pb-16 pt-36 text-white lg:pb-24">
          <div className="container relative z-10 mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-5xl"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">{caseStudy.category} · Case study</span>
              <h1 className="mt-6 font-display text-4xl font-medium tracking-[-0.045em] md:text-7xl">{caseStudy.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/60">{caseStudy.summary}</p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          {caseStudy.heroImage && <img src={caseStudy.heroImage} alt={`${caseStudy.title} product interface`} className="h-[48vw] max-h-[680px] min-h-[320px] w-full object-cover" onError={(event) => { event.currentTarget.style.display = 'none'; }} />}
          <div className="container mx-auto px-6">
            <div className="grid border-b border-slate-900/15 py-10 md:grid-cols-3">
              {(Array.isArray(caseStudy.metrics) ? caseStudy.metrics : []).filter(Boolean).map((metric, index) => (
                <div key={`${metric?.label || 'metric'}-${index}`} className="py-4 md:border-r md:border-slate-900/15 md:px-8 first:md:pl-0 last:md:border-r-0">
                  <div className="font-display text-4xl font-medium">{metric.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The challenge</p>
                <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The response</p>
                <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="grid gap-12 border-t border-slate-900/15 pt-16 lg:grid-cols-[1fr_0.45fr]">
              <section>
                <h2 className="font-display text-3xl font-medium tracking-[-0.03em] md:text-5xl">What we delivered</h2>
                <div className="mt-8 grid sm:grid-cols-2">
                  {(Array.isArray(caseStudy.modules) ? caseStudy.modules : []).filter(Boolean).map((module) => (
                    <div key={module} className="flex gap-3 border-b border-slate-900/15 py-5 sm:mr-8">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </section>
              <aside>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Technology</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(Array.isArray(caseStudy.stack) ? caseStudy.stack : []).filter(Boolean).map((item) => (
                    <span key={item} className="rounded-full border border-slate-900/15 px-4 py-2 text-sm text-muted-foreground">{item}</span>
                  ))}
                </div>
                <Link to="/start-project" className="group mt-10 inline-flex items-center gap-2 font-semibold text-primary">
                  Discuss a similar challenge
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
