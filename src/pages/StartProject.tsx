import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import InteriorHero from '@/components/InteriorHero';
import { toast } from 'sonner';

const projectTypes = ['Web platform', 'Mobile product', 'Operational software', 'Digital commerce', 'AI and automation', 'Something else'];
const budgetRanges = ['$5K – $15K', '$15K – $50K', '$50K – $100K', '$100K+'];
const timelines = ['1–2 months', '3–4 months', '5–6 months', '6+ months'];
const processSteps = [
  ['01', 'Listen', 'We understand the context, ambition, and constraints.'],
  ['02', 'Frame', 'We identify the sharpest opportunity and define a credible route.'],
  ['03', 'Propose', 'You receive a clear scope, team shape, milestones, and investment.'],
  ['04', 'Begin', 'We start with alignment and move into focused delivery.'],
];

const StartProject = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', projectType: '', budget: '', timeline: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const subject = `New Project Inquiry: ${formData.projectType || 'Digital product'}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject context:\n${formData.description}`;
      window.location.href = `mailto:info@orachitech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      toast.success('Opening your email client…');
      setFormData({ name: '', email: '', company: '', phone: '', projectType: '', budget: '', timeline: '', description: '' });
    } catch (error) {
      console.error('Error opening email client:', error);
      toast.error('Please email info@orachitech.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = 'mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium text-slate-950 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10';

  return (
    <div className="min-h-screen bg-[#f3f1eb]">
      <SEO title="Start a Digital Product Project | ORACHITECH" description="Discuss your web, mobile, SaaS, AI, automation, or custom software project with ORACHITECH." path="/start-project" keywords="start software project, digital product proposal, web app, mobile app, AI automation" />
      <Navbar />
      <WhatsAppButton />
      <main>
        <InteriorHero eyebrow="Start a project" title="Let’s discuss what needs to move." description="Share the challenge, the ambition, and what success should feel like. You do not need a perfect brief—we will help shape one." imagePosition="76% center" />

        <section className="px-6 py-20 lg:py-28">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 border-b border-slate-950/20 pb-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">What happens next</p><h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-.04em] sm:text-5xl">A clear route from idea to first move.</h2></div>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 lg:justify-self-end">Every enquiry is read by the product team. We normally respond within one to two business days with a useful next step.</p>
            </motion.div>

            <div className="grid border-b border-slate-950/15 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map(([number, title, description], index) => <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className="group border-b border-slate-950/15 py-7 sm:px-5 sm:nth-[2n]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0"><span className="font-mono text-xs text-teal-700">{number}</span><h3 className="mt-4 font-display text-xl transition-transform group-hover:translate-x-1">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></motion.div>)}
            </div>

            <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .05 }} transition={{ duration: .75 }} onSubmit={handleSubmit} className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,.10)]">
              <div className="bg-slate-950 px-7 py-8 text-white sm:px-10 lg:px-14"><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">Project enquiry</p><h2 className="mt-3 font-display text-3xl tracking-[-.03em] sm:text-5xl">Tell us enough to begin well.</h2><p className="mt-4 max-w-2xl text-white/55">The useful details, all in one place. If you are unsure about budget or timing, simply leave those selections open.</p></div>

              <div className="px-7 sm:px-10 lg:px-14">
              <section className="border-b border-slate-200 py-10">
                <h3 className="flex items-center gap-4 font-display text-2xl"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 font-mono text-xs text-teal-700">01</span>About you</h3>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-slate-700">Name *<input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className={fieldClass} placeholder="Your name" /></label>
                  <label className="text-xs font-semibold text-slate-700">Work email *<input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className={fieldClass} placeholder="you@company.com" /></label>
                  <label className="text-xs font-semibold text-slate-700">Company<input value={formData.company} onChange={(event) => setFormData({ ...formData, company: event.target.value })} className={fieldClass} placeholder="Company or organization" /></label>
                  <label className="text-xs font-semibold text-slate-700">Phone<input type="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} className={fieldClass} placeholder="Optional" /></label>
                </div>
              </section>

              <section className="border-b border-slate-200 py-10">
                <h3 className="flex items-center gap-4 font-display text-2xl"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 font-mono text-xs text-teal-700">02</span>What are we making?</h3>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {projectTypes.map((type, index) => {
                    const selected = formData.projectType === type;
                    return <button key={type} type="button" aria-pressed={selected} onClick={() => setFormData({ ...formData, projectType: type })} className={`group flex min-h-16 items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${selected ? 'border-teal-700 bg-teal-50 text-teal-900 ring-2 ring-teal-700/10' : 'border-slate-200 bg-slate-50 hover:border-teal-500 hover:bg-white'}`}><span><span className="mr-3 font-mono text-[10px] text-slate-400">{String(index + 1).padStart(2, '0')}</span><span className="font-semibold">{type}</span></span><span className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all ${selected ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300 group-hover:border-teal-700'}`}>{selected ? <Check className="h-3.5 w-3.5" /> : null}</span></button>;
                  })}
                </div>
              </section>

              <section className="border-b border-slate-200 py-10">
                <h3 className="flex items-center gap-4 font-display text-2xl"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 font-mono text-xs text-teal-700">03</span>Scale and timing</h3>
                <p className="mt-7 text-xs font-semibold text-slate-700">Indicative investment</p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">{budgetRanges.map((budget) => <button key={budget} type="button" aria-pressed={formData.budget === budget} onClick={() => setFormData({ ...formData, budget })} className={`min-h-16 rounded-xl border px-3 py-4 text-sm font-semibold transition-all ${formData.budget === budget ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-slate-50 hover:border-teal-600 hover:bg-white'}`}>{budget}</button>)}</div>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[.15em] text-slate-500">Preferred timeline</p>
                <div className="mt-3 flex flex-wrap gap-2">{timelines.map((timeline) => <button key={timeline} type="button" aria-pressed={formData.timeline === timeline} onClick={() => setFormData({ ...formData, timeline })} className={`rounded-full border px-5 py-3 text-sm transition-all hover:-translate-y-0.5 ${formData.timeline === timeline ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-950/20 hover:border-teal-700'}`}>{timeline}</button>)}</div>
              </section>

              <section className="py-10">
                <h3 className="flex items-center gap-4 font-display text-2xl"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 font-mono text-xs text-teal-700">04</span>Describe your project idea</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">Tell us what is happening now, what should be different, and why the project matters.</p>
                <label className="mt-6 block text-xs font-semibold text-slate-700">Project context *<textarea required rows={7} value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} className={`${fieldClass} min-h-48 resize-y`} placeholder="Share the challenge, your idea, the users involved, and what a successful outcome would look like…" /></label>
              </section>

              <div className="flex flex-col gap-5 border-t border-slate-200 py-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-relaxed text-slate-500">Submitting opens your email application so you can review the enquiry before sending.</p>
                <button type="submit" disabled={isSubmitting} className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-teal-700 disabled:opacity-50">{isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Preparing…</> : <>Discuss the project<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}</button>
              </div>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StartProject;
