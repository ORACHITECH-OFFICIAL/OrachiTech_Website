import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import InteriorHero from '@/components/InteriorHero';
import EditorialCTA from '@/components/EditorialCTA';
import { usePublishedCollection } from '@/lib/cms';

const principles = [
  ['01', 'Useful before impressive', 'We begin with the real decision, behavior, or operational change the product needs to create.'],
  ['02', 'Clarity is a feature', 'Good software should reduce cognitive load, make the next action obvious, and feel calm under pressure.'],
  ['03', 'Senior people stay close', 'The people shaping the strategy remain involved through design, engineering, and release.'],
  ['04', 'Built to keep moving', 'We favor resilient systems, honest trade-offs, and foundations that make the next release easier.'],
];

const defaultLeaders = [
  { name: 'Muneeb Shahid', role: 'CEO & Founder', bio: 'Shapes product direction and partnerships, connecting business ambition with focused digital execution.', image: '/assets/profile.png', linkedin: 'https://www.linkedin.com/in/muneebshahid6550', email: 'muneeb6550@gmail.com' },
  { name: 'Ghulam Fareed', role: 'CTO & Director', bio: 'Leads technology strategy and delivery, with a focus on dependable systems and long-term product value.', image: '/assets/Web_Photo_Editor.jpg', linkedin: 'https://www.linkedin.com/in/ghulam-fareed-b9a900236', email: 'fareedzubair125@gmail.com' },
];

type Leader = { title?: string; name?: string; role: string; bio: string; image: string; linkedin: string; email: string; order?: number };

const About = () => {
  const { items: leaders } = usePublishedCollection<Leader>('team', defaultLeaders);
  return (
    <div className="min-h-screen bg-[#f3f1eb]">
      <SEO title="About ORACHITECH | Digital Product Studio" description="Meet ORACHITECH, an independent digital product design and software engineering studio in Lahore working with ambitious teams worldwide." path="/about" keywords="about ORACHITECH, digital product studio Pakistan, software company Lahore" />
      <Navbar />
      <WhatsAppButton />
      <main>
        <InteriorHero eyebrow="About Orachi Tech" title="Small enough to care. Experienced enough to lead." description="We are an independent product studio for organizations that need sharper thinking, stronger execution, and software made for the real world." imagePosition="56% center" />

        <section className="px-6 py-20 lg:py-32">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[.6fr_1.4fr]">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">Why we exist</motion.p>
            <motion.div initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .75 }}>
              <h2 className="max-w-5xl font-display text-4xl leading-[1.06] tracking-[-.045em] sm:text-6xl">Technology is most valuable when it makes a business feel simpler, faster, and more capable.</h2>
              <div className="mt-10 grid gap-7 border-t border-slate-950/20 pt-8 text-slate-600 sm:grid-cols-2">
                <p className="leading-relaxed">That belief guides how we frame problems, design interactions, choose technology, and measure whether the work is actually successful.</p>
                <p className="leading-relaxed">We collaborate directly with founders and product leaders, bringing the discipline of a mature studio without the layers that slow good work down.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white lg:py-28">
          <div className="container mx-auto">
            <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">Working principles</p><h2 className="mt-5 font-display text-4xl tracking-[-.04em] sm:text-6xl">The standards behind the work.</h2></div><p className="max-w-xl text-lg leading-relaxed text-white/55 lg:justify-self-end">A few principles keep the studio honest when projects become complex and decisions get consequential.</p></div>
            <div className="divide-y divide-white/15">
              {principles.map(([number, title, description], index) => <motion.article key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .07 }} className="group grid gap-5 py-8 md:grid-cols-[90px_.8fr_1fr] md:py-10"><span className="font-mono text-xs text-teal-300">{number}</span><h3 className="font-display text-2xl transition-transform group-hover:translate-x-2 sm:text-3xl">{title}</h3><p className="max-w-xl leading-relaxed text-white/55">{description}</p></motion.article>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="grid gap-8 border-b border-slate-950/20 pb-12 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">Leadership</p><h2 className="mt-5 font-display text-4xl tracking-[-.04em] sm:text-6xl">Accountable from the top.</h2></div><p className="max-w-xl self-end text-slate-600 lg:justify-self-end">A senior-led studio means faster decisions, direct communication, and less lost in translation.</p></div>
            <div className="grid gap-px bg-slate-950/15 md:grid-cols-2">
              {leaders.map((leader, index) => <motion.article key={leader.title || leader.name} initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }} className="group grid bg-[#f3f1eb] sm:grid-cols-[210px_1fr]">
                <div className="overflow-hidden"><img src={leader.image} alt={leader.title || leader.name || ''} className="h-full min-h-72 w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" /></div>
                <div className="flex flex-col justify-between p-7"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-teal-700">{leader.role}</p><h3 className="mt-3 font-display text-3xl">{leader.title || leader.name}</h3><p className="mt-5 leading-relaxed text-slate-600">{leader.bio}</p></div><div className="mt-8 flex gap-3"><a href={leader.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-950/20 p-3 transition-colors hover:bg-slate-950 hover:text-white"><Linkedin className="h-4 w-4" /></a><a href={`mailto:${leader.email}`} aria-label="Email" className="rounded-full border border-slate-950/20 p-3 transition-colors hover:bg-slate-950 hover:text-white"><Mail className="h-4 w-4" /></a><ArrowUpRight className="ml-auto h-5 w-5 text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div>
              </motion.article>)}
            </div>
          </div>
        </section>
        <EditorialCTA eyebrow="A studio, not a vendor" title="Work with people who stay close to the problem." />
      </main>
      <Footer />
    </div>
  );
};

export default About;
