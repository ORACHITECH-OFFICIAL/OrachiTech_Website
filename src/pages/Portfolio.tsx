import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import InteriorHero from '@/components/InteriorHero';
import EditorialCTA from '@/components/EditorialCTA';
import { usePublishedCollection } from '@/lib/cms';
import { starterPortfolioProjects } from '@/data/portfolioProjects';
import type { CmsPortfolioProject } from '@/types/cms';

const Portfolio = () => {
  const { items } = usePublishedCollection<CmsPortfolioProject>('portfolioProjects', starterPortfolioProjects);
  const projects = items.filter((project) => project && String(project.title || '').trim()).map((project) => ({
    ...project,
    title: String(project.title || 'Untitled project'),
    category: String(project.category || 'Digital product'),
    description: String(project.description || ''),
    image: String(project.image || (Array.isArray(project.gallery) ? project.gallery[0] : '') || '/placeholder.svg'),
    imageAlt: String(project.imageAlt || project.title || 'ORACHITECH portfolio project'),
    technologies: Array.isArray(project.technologies) ? project.technologies.filter((item): item is string => typeof item === 'string' && Boolean(item.trim())) : [],
    projectUrl: typeof project.projectUrl === 'string' ? project.projectUrl : '',
  }));

  return (
  <div className="min-h-screen bg-[#f3f1eb]">
    <SEO title="ORACHITECH Portfolio | Digital Product Work" description="Explore selected ORACHITECH work across web platforms, mobile products, operational software, commerce, healthcare, fintech, and analytics." path="/portfolio" keywords="ORACHITECH portfolio, digital products Pakistan, software projects, web and mobile work" />
    <Navbar />
    <WhatsAppButton />
    <main>
      <InteriorHero eyebrow="Portfolio" title="Digital products with a point of view." description="A selection of platforms, tools, and experiences shaped around meaningful business outcomes—not just feature lists." imagePosition="78% center" />

      <section className="px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 border-b border-slate-950/20 pb-14 lg:grid-cols-[.62fr_1.38fr]">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">Selected engagements</p>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.06] tracking-[-.045em] sm:text-6xl">Different industries. The same insistence on clarity.</h2>
          </motion.div>
          <div className="space-y-20 pt-14 lg:space-y-32 lg:pt-20">
            {projects.map((project, index) => <motion.article key={project.id || project.slug || `${project.title}-${index}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }} className={`group grid gap-8 lg:grid-cols-12 lg:items-end ${index % 2 ? '' : ''}`}>
              <div className={`relative overflow-hidden bg-slate-900 lg:col-span-7 ${index % 2 ? 'lg:order-2' : ''}`}>
                <img src={project.image} alt={project.imageAlt} className="aspect-[4/3] w-full object-cover saturate-[.72] transition-all duration-1000 group-hover:scale-[1.035] group-hover:saturate-100" onError={(event) => { event.currentTarget.src = '/placeholder.svg'; }} />
                <div className="absolute inset-0 bg-slate-950/10 transition-opacity group-hover:opacity-0" />
                <span className="absolute left-5 top-5 rounded-full bg-slate-950/80 px-4 py-2 font-mono text-[10px] tracking-[.16em] text-white backdrop-blur">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className={`border-t border-slate-950/20 pt-6 lg:col-span-5 lg:pb-6 ${index % 2 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[.18em] text-teal-700">{project.category}</p>{project.projectUrl ? <a href={project.projectUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowDownRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-45deg]" /></a> : <ArrowDownRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-45deg]" />}</div>
                <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-.04em] sm:text-5xl">{project.title}</h2>
                <p className="mt-6 max-w-lg leading-relaxed text-slate-600">{project.description}</p>
                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">{project.technologies.map((technology) => <li key={technology} className="text-[10px] font-semibold uppercase tracking-[.14em] text-slate-500">{technology}</li>)}</ul>
              </div>
            </motion.article>)}
          </div>
        </div>
      </section>
      <EditorialCTA eyebrow="Your challenge could be next" title="Let’s create work worth selecting." />
    </main>
    <Footer />
  </div>
  );
};

export default Portfolio;
