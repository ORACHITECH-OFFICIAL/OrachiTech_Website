import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Rocket, MessageSquare, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { toast } from 'sonner';

const projectTypes = [
  { id: 'web', label: 'Web Application', icon: '🌐' },
  { id: 'mobile', label: 'Mobile App', icon: '📱' },
  { id: 'enterprise', label: 'Enterprise Software', icon: '🏢' },
  { id: 'ecommerce', label: 'E-Commerce', icon: '🛒' },
  { id: 'ai', label: 'AI/ML Solution', icon: '🤖' },
  { id: 'other', label: 'Other', icon: '✨' },
];

const budgetRanges = [
  { id: 'small', label: '$5K - $15K', description: 'Small projects' },
  { id: 'medium', label: '$15K - $50K', description: 'Medium projects' },
  { id: 'large', label: '$50K - $100K', description: 'Large projects' },
  { id: 'enterprise', label: '$100K+', description: 'Enterprise solutions' },
];

const timelines = [
  { id: '1-2', label: '1-2 Months' },
  { id: '3-4', label: '3-4 Months' },
  { id: '5-6', label: '5-6 Months' },
  { id: '6+', label: '6+ Months' },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'We discuss your vision, goals, and requirements in detail.',
  },
  {
    icon: Zap,
    title: 'Proposal & Planning',
    description: 'Receive a detailed proposal with timeline and milestones.',
  },
  {
    icon: Rocket,
    title: 'Development',
    description: 'Our team builds your solution with regular updates.',
  },
  {
    icon: CheckCircle2,
    title: 'Launch & Support',
    description: 'We launch your project and provide ongoing support.',
  },
];

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Supabase removed. Using mailto as fallback.
      const subject = `New Project Inquiry: ${formData.projectType}`;
      const messageBody = `
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Company: ${formData.company}
Phone: ${formData.phone}

Description:
${formData.description}
      `.trim();
      
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n${messageBody}`;
      const mailtoLink = `mailto:info@orachitech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;

      toast.success('Opening email client to send your inquiry...');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to open email client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Start a Software Project | ORACHITECH"
        description="Start your web app, SaaS, mobile app, school management system, or custom software project with ORACHITECH."
        path="/start-project"
        keywords="start software project, request software proposal, SaaS project, web app development, school management system proposal"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              className="inline-block px-4 py-2 glass-card rounded-full text-sm text-primary mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let's Build Together
            </motion.span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="animated-text">Start Your</span>
              <br />
              <span className="gradient-text shimmer-text">Dream Project</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll help you bring your vision to life
              with cutting-edge technology and expert development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative tech-card p-6 rounded-2xl text-center group"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs text-primary font-bold mb-2">Step {index + 1}</div>
                <h3 className="font-display font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 lg:p-12"
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 text-center">
                Project Details
              </h2>

              {/* Personal Info */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-foreground mb-2 block">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 890"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-8">
                <Label className="text-foreground mb-4 block">What type of project? *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type.label })}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left hover-lift ${
                        formData.projectType === type.label
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border/50 bg-secondary/30 text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{type.icon}</span>
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-8">
                <Label className="text-foreground mb-4 block">Estimated Budget</Label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {budgetRanges.map((range) => (
                    <button
                      key={range.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: range.label })}
                      className={`p-4 rounded-xl border transition-all duration-300 hover-lift ${
                        formData.budget === range.label
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border/50 bg-secondary/30 text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      <div className="font-bold">{range.label}</div>
                      <div className="text-xs opacity-70">{range.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-8">
                <Label className="text-foreground mb-4 block">Expected Timeline</Label>
                <div className="flex flex-wrap gap-3">
                  {timelines.map((timeline) => (
                    <button
                      key={timeline.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: timeline.label })}
                      className={`px-6 py-3 rounded-full border transition-all duration-300 hover-lift ${
                        formData.timeline === timeline.label
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border/50 bg-secondary/30 text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {timeline.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <Label htmlFor="description" className="text-foreground mb-2 block">
                  Tell us about your project *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your project idea, goals, and any specific requirements..."
                  rows={6}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="group magnetic-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Your Project
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll respond within 24 hours with a free consultation
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default StartProject;
