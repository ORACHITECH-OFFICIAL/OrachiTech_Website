import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import InteriorHero from '@/components/InteriorHero';
import { usePublishedPage, useSiteSettings } from '@/lib/cms';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const settings = useSiteSettings({ email: 'info@orachitech.com', phone: '+92 323 359 3780', address: 'Lahore, Pakistan', businessHours: 'Mon - Fri: 9:00 AM - 6:00 PM' });
  const page = usePublishedPage('contact', { eyebrow: 'Start a conversation', heading: 'Bring us the challenge.', description: 'Tell us what needs to change, where the friction lives, or what you want to make possible. We’ll respond with a clear next step.' });
  const contactInfo = [
    { icon: Mail, label: 'Email', value: settings.email, href: `mailto:${settings.email}` },
    { icon: Phone, label: 'Phone', value: settings.phone, href: `tel:${settings.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Studio', value: settings.address },
    { icon: Clock, label: 'Working hours', value: settings.businessHours },
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const subject = formData.subject || `New Message from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
      window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      toast({ title: 'Opening your email client', description: 'Review the message, then send it from your email application.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error opening email client:', error);
      toast({ title: 'Unable to open email', description: `Please email us directly at ${settings.email}.`, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'w-full border-0 border-b border-slate-950/20 bg-transparent px-0 py-4 text-lg text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-700';

  return (
    <div className="min-h-screen bg-[#f3f1eb]">
      <SEO title="Contact ORACHITECH | Start a Digital Product Project" description="Talk to ORACHITECH about product design, custom software, web, mobile, AI, automation, and digital modernization." path="/contact" keywords="contact ORACHITECH, software studio Lahore, start software project Pakistan" />
      <Navbar />
      <WhatsAppButton />
      <main>
        <InteriorHero eyebrow={page.eyebrow || 'Start a conversation'} title={page.heading || 'Bring us the challenge.'} description={page.description || 'Tell us what needs to change. We’ll respond with a clear next step.'} imagePosition="82% center" />

        <section className="px-6 py-20 lg:py-28">
          <div className="container mx-auto grid gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <motion.aside initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">Direct lines</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-.04em] sm:text-5xl">No sales maze. Talk to the studio.</h2>
              <div className="mt-10 divide-y divide-slate-950/15 border-y border-slate-950/15">
                {contactInfo.map((info) => <div key={info.label} className="group grid grid-cols-[42px_1fr] gap-4 py-6"><info.icon className="h-5 w-5 text-teal-700 transition-transform group-hover:-translate-y-1" /><div><p className="text-[10px] font-semibold uppercase tracking-[.15em] text-slate-400">{info.label}</p>{info.href ? <a href={info.href} className="mt-1 inline-flex items-center gap-2 font-medium hover:text-teal-700">{info.value}<ArrowUpRight className="h-3.5 w-3.5" /></a> : <p className="mt-1 font-medium">{info.value}</p>}</div></div>)}
              </div>
            </motion.aside>

            <motion.div initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .75 }}>
              <div className="flex items-end justify-between border-b border-slate-950/20 pb-6"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">Project enquiry</p><h2 className="mt-3 font-display text-3xl tracking-[-.03em] sm:text-4xl">Tell us what you’re working on.</h2></div><span className="hidden font-mono text-xs text-slate-400 sm:block">AVG. REPLY / 1–2 DAYS</span></div>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="grid gap-x-8 sm:grid-cols-2"><label className="py-4 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">Your name<input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className={inputClass} placeholder="Name or company" /></label><label className="py-4 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">Email<input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className={inputClass} placeholder="you@company.com" /></label></div>
                <label className="block py-4 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">What should we discuss?<input type="text" required value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} className={inputClass} placeholder="New product, redesign, modernization…" /></label>
                <label className="block py-4 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">A little context<textarea required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className={`${inputClass} resize-none`} placeholder="The challenge, the ambition, and where you are now." /></label>
                <button type="submit" disabled={isSubmitting} className="group mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-teal-700 disabled:opacity-50">{isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Opening email…</> : <>Send the enquiry<Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}</button>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white lg:py-20"><motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="container mx-auto grid gap-8 lg:grid-cols-[.5fr_1.5fr]"><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">Where we work</p><div><h2 className="font-display text-4xl tracking-[-.04em] sm:text-6xl">Based in Lahore. Built for anywhere.</h2><p className="mt-6 max-w-2xl text-white/55">We work with ambitious teams across time zones through a direct, transparent, and highly collaborative process.</p></div></motion.div></section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
