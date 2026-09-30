import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Cloud,
  Code,
  Globe,
  Palette,
  Shield,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePublishedCollection } from '@/lib/cms';

type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon | string;
  order?: number;
};

const defaultServices: ServiceItem[] = [
  {
    icon: Globe,
    title: 'Web platforms',
    description: 'High-performance websites and applications designed around real customer and business workflows.',
    features: ['Product architecture', 'React applications', 'Systems integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile products',
    description: 'Focused mobile experiences that feel native, stay maintainable, and are ready to grow.',
    features: ['iOS and Android', 'Flutter / React Native', 'Launch support'],
  },
  {
    icon: Cloud,
    title: 'Cloud systems',
    description: 'Reliable infrastructure and delivery pipelines that remove friction from operating at scale.',
    features: ['Cloud architecture', 'DevOps', 'CI/CD pipelines'],
  },
  {
    icon: Palette,
    title: 'Product design',
    description: 'Clear interfaces and design systems that make complex products easier to understand and use.',
    features: ['Experience strategy', 'Prototyping', 'Design systems'],
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Practical security work that protects products, infrastructure, and the people who depend on them.',
    features: ['Security reviews', 'Hardening', 'Compliance support'],
  },
  {
    icon: BarChart3,
    title: 'Data and automation',
    description: 'Dashboards, integrations, and automations that turn operational data into useful decisions.',
    features: ['Data pipelines', 'Decision dashboards', 'Workflow automation'],
  },
];

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  BarChart3,
  Code,
};

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { items } = usePublishedCollection<ServiceItem>('services', defaultServices);
  const services = items
    .map((service) => ({
      ...service,
      icon: typeof service.icon === 'string' ? (iconMap[service.icon] || Code) : service.icon,
    }))
    .slice(0, 6);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-[#f3f1eb] py-24 text-slate-950 lg:py-36">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 border-b border-slate-950/15 pb-14 lg:grid-cols-[0.42fr_1fr] lg:gap-20 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">What we do</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
              Senior product thinking and hands-on delivery, assembled around the outcome your business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="max-w-4xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              From first decision to durable digital product.
            </h2>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                We combine strategy, design, engineering, and continuous improvement so good ideas survive contact with the real world.
              </p>
              <Link to="/services" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-700">
                All capabilities
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div>
          {services.map((service, index) => {
            const Icon = service.icon as LucideIcon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.16 + index * 0.07 }}
                className="group grid gap-6 border-b border-slate-950/15 py-9 md:grid-cols-[80px_minmax(180px,0.72fr)_1.1fr_auto] md:items-start md:gap-8 lg:py-12"
              >
                <span className="font-mono text-xs text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl font-medium tracking-[-0.025em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {service.title}
                </h3>
                <div>
                  <p className="max-w-xl leading-relaxed text-slate-600">{service.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {(service.features || []).map((feature) => (
                    <li key={feature} className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {feature}
                    </li>
                  ))}
                  </ul>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/20 transition-colors group-hover:border-teal-700 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
