import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type EditorialCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

const EditorialCTA = ({
  eyebrow = 'Have a meaningful challenge?',
  title = 'Let’s make the next move count.',
  description = 'Bring us the ambition, the operational knot, or the half-formed idea. We’ll help turn it into a clear product direction.',
}: EditorialCTAProps) => (
  <section className="bg-teal-300 px-6 py-20 text-slate-950 lg:py-28">
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="container mx-auto grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl font-display text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</h2>
        <div className="mt-8 flex flex-col gap-7 border-t border-slate-950/25 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl leading-relaxed text-slate-800">{description}</p>
          <Link to="/start-project" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-1">
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);

export default EditorialCTA;
