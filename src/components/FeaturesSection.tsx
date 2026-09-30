import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const commitments = [
  'Senior people stay close to the work',
  'Progress is visible from the first week',
  'Quality and security are built in',
  'Decisions are documented clearly',
  'Systems are designed to evolve',
  'Launch includes practical support',
];

const process = [
  { number: '01', title: 'Frame', body: 'Align the opportunity, users, constraints, and measure of success.' },
  { number: '02', title: 'Shape', body: 'Turn the strategy into a focused experience and technical direction.' },
  { number: '03', title: 'Build', body: 'Deliver in visible increments, test continuously, and make decisions together.' },
  { number: '04', title: 'Evolve', body: 'Launch with confidence, learn from use, and improve what creates value.' },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="bg-[#f4f3ee] py-24 text-slate-950 lg:py-36">
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">How we work</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              A calm, rigorous path from ambiguity to impact.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
              Good delivery is not theatre. It is a shared understanding of the problem, honest trade-offs, visible progress, and software that keeps its promises.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {commitments.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.14 + index * 0.05 }}
                  className="flex gap-3 border-t border-slate-900/15 pt-4 text-sm leading-relaxed text-slate-600"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                  {item}
                </motion.div>
              ))}
            </div>

            <Link to="/start-project" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700">
              Discuss your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="border-t border-slate-900/20">
            {process.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: 22 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 + index * 0.1 }}
                className="grid grid-cols-[56px_1fr] gap-4 border-b border-slate-900/20 py-8 sm:grid-cols-[72px_150px_1fr] sm:items-start lg:py-10"
              >
                <span className="font-mono text-xs text-teal-700">{item.number}</span>
                <h3 className="font-display text-2xl font-medium tracking-[-0.025em]">{item.title}</h3>
                <p className="col-start-2 text-sm leading-relaxed text-slate-600 sm:col-start-auto sm:text-base">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
