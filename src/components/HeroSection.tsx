import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePublishedPage } from '@/lib/cms';

const proofPoints = ['Strategy', 'Experience design', 'Engineering'];

const HeroSection = () => {
  const page = usePublishedPage('home', {
    eyebrow: 'Independent digital product studio · Lahore / Worldwide',
    heading: 'Software, designed for momentum.',
    description:
      'We partner with ambitious teams to shape, build, and evolve digital products that perform in the real world.',
    heroImage: '/assets/hero-editorial-v2.png',
    proofPoints,
    primaryCtaLabel: 'Start a conversation',
    primaryCtaUrl: '/start-project',
    secondaryCtaLabel: 'View selected work',
    secondaryCtaUrl: '/portfolio',
  });

  const heroImage = page.heroImage === '/assets/tech-hero.png'
    ? '/assets/hero-editorial-v2.png'
    : page.heroImage || '/assets/hero-editorial-v2.png';

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-white">
      <motion.img
        src={heroImage}
        alt="Cinematic design and engineering studio with an integrated digital product wall"
        className="absolute inset-0 h-full w-full object-cover object-[64%_center] sm:object-center"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,18,0.92)_0%,rgba(3,11,18,0.74)_38%,rgba(3,11,18,0.22)_72%,rgba(3,11,18,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,11,18,0.38)_0%,transparent_28%,rgba(3,11,18,0.66)_100%)]" />
      <div className="absolute inset-0 hero-grain opacity-30" />

      <div className="container relative z-10 mx-auto flex min-h-[100svh] flex-col justify-end px-6 pb-8 pt-32 sm:pb-10 lg:pb-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200/90 sm:text-sm"
          >
            {page.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-[clamp(3rem,8vw,7.4rem)] font-medium leading-[0.88] tracking-[-0.065em] text-white"
          >
            {page.heading}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48 }}
            className="mt-8 grid items-end gap-8 border-t border-white/20 pt-6 md:grid-cols-[1fr_auto]"
          >
            <p className="max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg lg:text-xl">
              {page.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to={page.primaryCtaUrl || '/start-project'}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-teal-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-white"
              >
                {page.primaryCtaLabel || 'Start a conversation'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={page.secondaryCtaUrl || '/portfolio'}
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-950"
              >
                {page.secondaryCtaLabel || 'View selected work'}
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 flex items-end justify-between gap-6"
        >
          <div className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:flex">
            {(page.proofPoints || proofPoints).map((point) => <span key={point}>{point}</span>)}
          </div>
          <a href="#about" className="ml-auto hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white sm:flex">
            Scroll to explore
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25">
              <ArrowDown className="h-4 w-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
