import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAws, FaDocker, FaFigma, FaLaravel, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiOpenai,
  SiPostgresql,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si';

const rows = [
  [
    { name: 'React', icon: FaReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Laravel', icon: FaLaravel },
  ],
  [
    { name: 'OpenAI', icon: SiOpenai },
    { name: 'Python', icon: FaPython },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
  ],
  [
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: FaDocker },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Figma', icon: FaFigma },
  ],
];

const TechStackSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech-stack" ref={ref} className="overflow-hidden bg-[#061412] py-24 text-white lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[0.9fr_1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Technology practice</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              The right technology, chosen with intent.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/55 lg:justify-self-end">
            We stay fluent across modern product engineering, cloud, data, and AI—but the stack follows the problem. Every choice must earn its place through speed, resilience, and long-term clarity.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 space-y-3">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="technology-marquee border-y border-white/10 py-4">
            <div className={`technology-marquee-track ${rowIndex === 1 ? 'technology-marquee-reverse' : ''}`}>
              {[...row, ...row].map((technology, index) => (
                <div key={`${technology.name}-${index}`} className="flex shrink-0 items-center gap-4 px-8 sm:px-12">
                  <technology.icon className="h-6 w-6 text-teal-300/80" aria-hidden="true" />
                  <span className="font-display text-2xl font-medium tracking-[-0.02em] text-white/85 sm:text-3xl">
                    {technology.name}
                  </span>
                  <span className="ml-4 h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="mt-14 grid gap-8 text-sm text-white/45 sm:grid-cols-3">
          <p><span className="mr-3 text-teal-300">01</span>Product engineering</p>
          <p><span className="mr-3 text-teal-300">02</span>Cloud & data systems</p>
          <p><span className="mr-3 text-teal-300">03</span>Applied AI & automation</p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
