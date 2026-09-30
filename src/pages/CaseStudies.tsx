import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import InteriorHero from '@/components/InteriorHero';
import EditorialCTA from '@/components/EditorialCTA';
import { operationsDashboardCaseStudy } from '@/data/content';
import { usePublishedCollection } from '@/lib/cms';
import type { CmsCaseStudy } from '@/types/cms';

const CaseStudies = () => {
  const { items } = usePublishedCollection<CmsCaseStudy>('caseStudies', [operationsDashboardCaseStudy] as CmsCaseStudy[]);
  const caseStudies = items.filter((caseStudy) => caseStudy && !String(caseStudy.slug || '').includes('school') && String(caseStudy.title || '').trim());
  return (
    <div className="min-h-screen bg-[#f3f1eb]">
      <SEO title="ORACHITECH Case Studies | Product Outcomes" description="See how ORACHITECH turns complex workflows into clear, dependable digital products." path="/case-studies" keywords="ORACHITECH case studies, software product outcomes, operational software, SaaS case study" />
      <Navbar />
      <WhatsAppButton />
      <main>
        <InteriorHero eyebrow="Case studies" title="The thinking behind the finished product." description="A closer view of the decisions, systems, and measurable shifts that turn software into business progress." imagePosition="62% center" />
        <section className="px-6 py-20 lg:py-28">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 border-b border-slate-950/20 pb-14 lg:grid-cols-[.6fr_1.4fr]"><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">Inside the work</p><h2 className="max-w-4xl font-display text-4xl leading-[1.06] tracking-[-.045em] sm:text-6xl">Less theatre. More evidence of how the work creates value.</h2></motion.div>
            <div className="pt-14 lg:pt-20">
              {caseStudies.map((caseStudy, index) => <motion.article key={caseStudy.id || caseStudy.slug || index} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .8 }} className="group grid overflow-hidden bg-slate-950 text-white lg:grid-cols-[1.15fr_.85fr]">
                <div className="relative min-h-[420px] overflow-hidden">{caseStudy.heroImage && <img src={caseStudy.heroImage} alt={`${caseStudy.title || 'Case study'} cover`} className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" onError={(event) => { event.currentTarget.style.display = 'none'; }} />}<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" /><span className="absolute left-6 top-6 font-mono text-xs text-teal-200">FEATURED / {String(index + 1).padStart(2, '0')}</span></div>
                <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-teal-300">{caseStudy.category}</p><h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-.04em] sm:text-5xl">{caseStudy.title}</h2><p className="mt-7 leading-relaxed text-white/58">{caseStudy.summary}</p></div>
                  <div className="mt-12"><div className="grid grid-cols-3 border-y border-white/15">{(Array.isArray(caseStudy.metrics) ? caseStudy.metrics : []).filter(Boolean).map((metric, metricIndex) => <div key={`${metric?.label || 'metric'}-${metricIndex}`} className="py-5 pr-4"><div className="font-display text-2xl text-teal-300 sm:text-3xl">{metric?.value || '—'}</div><div className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/40">{metric?.label || ''}</div></div>)}</div>{caseStudy.slug && <Link to={`/case-studies/${caseStudy.slug}`} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-teal-300">Read the full story <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>}</div>
                </div>
              </motion.article>)}
            </div>
          </div>
        </section>
        <EditorialCTA eyebrow="Bring us the complicated part" title="We make complexity easier to act on." />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
