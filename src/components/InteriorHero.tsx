import { motion } from 'framer-motion';

type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imagePosition?: string;
};

const InteriorHero = ({ eyebrow, title, description, imagePosition = 'center' }: InteriorHeroProps) => (
  <section className="relative flex min-h-[72svh] overflow-hidden bg-slate-950 pt-28 text-white lg:min-h-[78svh]">
    <motion.img
      src="/assets/hero-editorial-v2.png"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover opacity-55"
      style={{ objectPosition: imagePosition }}
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,9,17,.96)_0%,rgba(2,9,17,.82)_45%,rgba(2,9,17,.35)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,9,17,.25),rgba(2,9,17,.76))]" />
    <div className="absolute inset-0 hero-grain opacity-25" />

    <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-end px-6 pb-14 lg:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="max-w-5xl"
      >
        <div>
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.3rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg lg:text-xl">{description}</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InteriorHero;
