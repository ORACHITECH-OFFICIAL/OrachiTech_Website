import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const principles = [
  ['01', 'Think before building', 'We clarify the opportunity, users, and commercial goal before a single feature enters the roadmap.'],
  ['02', 'Design the whole system', 'Product, brand, technology, and operations are considered together—not handed off in isolation.'],
  ['03', 'Stay for the outcome', 'Launch is a milestone, not the finish line. We learn from real use and keep improving what matters.'],
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative bg-[#f4f3ee] py-24 text-slate-950 lg:py-36" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid gap-10 border-b border-slate-900/15 pb-16 lg:grid-cols-[0.42fr_1fr] lg:gap-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">About Orachi</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
              An independent digital product studio working with founders and established teams across strategy, design, and engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              We make complex ideas feel clear, useful, and inevitable.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                Our work begins with the hard questions: what should exist, why it matters, and what must be true for it to succeed. The result is software with a point of view—beautiful enough to earn attention and robust enough to earn trust.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                More about the studio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3">
          {principles.map(([number, title, description], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 + index * 0.1 }}
              className="border-b border-slate-900/15 py-9 lg:border-b-0 lg:border-r lg:px-9 lg:py-12 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
            >
              <span className="font-mono text-xs text-teal-700">{number}</span>
              <h3 className="mt-8 font-display text-2xl font-medium tracking-[-0.025em]">{title}</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-8 border-t border-slate-900/15 pt-10 md:grid-cols-4">
          {[
            ['100+', 'Products and platforms'],
            ['15+', 'Markets reached'],
            ['5+', 'Years of delivery'],
            ['98%', 'Client satisfaction'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-3xl font-medium tracking-tight lg:text-4xl">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
