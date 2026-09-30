import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart, Cloud, Code, Cpu, Database, Globe, Headphones, Palette, Shield, Smartphone, Users, Zap, type LucideIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import InteriorHero from '@/components/InteriorHero';
import EditorialCTA from '@/components/EditorialCTA';
import { usePublishedCollection } from '@/lib/cms';

const defaultServices = [
  { icon: Code, title: 'Custom software', description: 'Purpose-built systems shaped around the way your business actually works.', features: ['Product architecture', 'API development', 'Systems integration'] },
  { icon: Smartphone, title: 'Mobile products', description: 'Focused iOS and Android experiences designed to feel natural and scale cleanly.', features: ['Product design', 'Flutter / React Native', 'Launch support'] },
  { icon: Globe, title: 'Web platforms', description: 'Fast, accessible digital platforms with a strong product and brand point of view.', features: ['React applications', 'Commerce', 'Content platforms'] },
  { icon: Cloud, title: 'Cloud systems', description: 'Reliable infrastructure, deployment pipelines, and integrations for growing products.', features: ['Cloud architecture', 'DevOps', 'Observability'] },
  { icon: Shield, title: 'Cybersecurity', description: 'Practical protection for applications, infrastructure, data, and customer trust.', features: ['Security review', 'Hardening', 'Compliance support'] },
  { icon: Cpu, title: 'Applied AI', description: 'AI features and automations that solve specific problems instead of chasing novelty.', features: ['AI workflows', 'Knowledge systems', 'Automation'] },
  { icon: Database, title: 'Data products', description: 'Clear dashboards and dependable pipelines that make complex information useful.', features: ['Data pipelines', 'Business intelligence', 'Decision dashboards'] },
  { icon: Palette, title: 'Experience design', description: 'Research, interaction design, and visual systems that make software easier to use.', features: ['UX strategy', 'Prototyping', 'Design systems'] },
  { icon: Zap, title: 'Modernization', description: 'A measured route from aging tools and manual work to resilient digital operations.', features: ['Platform audit', 'Process redesign', 'Migration'] },
  { icon: Users, title: 'Product consulting', description: 'Senior guidance for teams making consequential product and technology decisions.', features: ['Roadmapping', 'Technical direction', 'Team enablement'] },
  { icon: BarChart, title: 'Operational systems', description: 'Connected software that makes everyday business work more visible and efficient.', features: ['Workflow design', 'ERP extensions', 'Reporting'] },
  { icon: Headphones, title: 'Product evolution', description: 'Ongoing improvement, support, and optimization after the first release.', features: ['Managed delivery', 'Performance', 'Continuous improvement'] },
];

type ServiceItem = { title: string; description: string; features: string[]; icon: LucideIcon | string; order?: number };

const Services = () => {
  const { items } = usePublishedCollection<ServiceItem>('services', defaultServices);
  const iconMap: Record<string, LucideIcon> = { Code, Smartphone, Globe, Cloud, Shield, Cpu, Database, Palette, Zap, Users, BarChart, Headphones };
  const services = items.map((service) => ({ ...service, icon: typeof service.icon === 'string' ? (iconMap[service.icon] || Code) : service.icon }));

  return (
    <div className="min-h-screen bg-[#f3f1eb]">
      <SEO title="Software Development Services in Pakistan | ORACHITECH" description="ORACHITECH provides product design, custom software, web, mobile, cloud, data, AI, and technology consulting services." path="/services" keywords="software development services Pakistan, product design, web development, SaaS, mobile apps, cloud, AI" />
      <Navbar />
      <WhatsAppButton />
      <main>
        <InteriorHero eyebrow="How we help" title="Built around the outcome, not the output." description="Strategy, design, engineering, and product evolution brought together as one senior, accountable team." imagePosition="70% center" />
        <section className="px-6 py-20 lg:py-28">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 border-b border-slate-950/20 pb-14 lg:grid-cols-[0.62fr_1.38fr]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">A complete product practice</p>
              <p className="max-w-4xl font-display text-3xl leading-[1.12] tracking-[-0.035em] sm:text-5xl">We assemble the right disciplines around the problem—then stay close enough to carry the thinking all the way into production.</p>
            </motion.div>
            <div>
              {services.map((service, index) => {
                const Icon = service.icon as LucideIcon;
                return <motion.article key={service.title} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, delay: Math.min(index * 0.035, 0.2) }} className="group grid gap-6 border-b border-slate-950/15 py-9 md:grid-cols-[80px_minmax(210px,.8fr)_1.1fr_auto] md:gap-8 lg:py-12">
                  <span className="font-mono text-xs text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="font-display text-3xl font-medium tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2">{service.title}</h2>
                  <div><p className="max-w-xl leading-relaxed text-slate-600">{service.description}</p><ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">{(service.features || []).map((feature) => <li key={feature} className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">{feature}</li>)}</ul></div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-950/20 transition-all duration-300 group-hover:rotate-6 group-hover:border-teal-700 group-hover:bg-teal-700 group-hover:text-white"><Icon className="h-5 w-5" /></span>
                </motion.article>;
              })}
            </div>
          </div>
        </section>
        <section className="bg-slate-950 px-6 py-20 text-white lg:py-28">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">How we work</p><h2 className="mt-5 font-display text-4xl leading-none tracking-[-.04em] sm:text-6xl">Clarity at every handoff.</h2></div>
            <div className="divide-y divide-white/15 border-y border-white/15">{['Frame the real problem', 'Prototype the critical experience', 'Build in focused releases', 'Measure, learn, and evolve'].map((step, index) => <motion.div key={step} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="flex items-center justify-between py-7"><span className="text-lg sm:text-2xl">{step}</span><span className="font-mono text-xs text-teal-300">0{index + 1} <ArrowUpRight className="ml-3 inline h-4 w-4" /></span></motion.div>)}</div>
          </div>
        </section>
        <EditorialCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
