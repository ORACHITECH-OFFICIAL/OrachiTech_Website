import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Globe, Cloud, Shield, Cpu, Database, Palette, Zap, Users, BarChart, Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and goals.',
    features: ['Enterprise Applications', 'API Development', 'Legacy Modernization', 'System Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications using cutting-edge technologies.',
    features: ['React/Next.js', 'E-commerce', 'Progressive Web Apps', 'CMS Development'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for optimal performance.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'Serverless Architecture', 'DevOps'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Automation'],
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for informed decision-making.',
    features: ['Business Intelligence', 'Data Visualization', 'Big Data', 'Real-time Analytics'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging and intuitive digital experiences.',
    features: ['User Research', 'Prototyping', 'Visual Design', 'Usability Testing'],
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business.',
    features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Innovation Labs'],
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Expert technology consulting to guide your digital initiatives.',
    features: ['Technology Assessment', 'Strategy Planning', 'Architecture Design', 'Vendor Selection'],
  },
  {
    icon: BarChart,
    title: 'ERP Solutions',
    description: 'Enterprise resource planning systems to streamline business operations.',
    features: ['SAP/Oracle', 'Custom ERP', 'Implementation', 'Training & Support'],
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.',
    features: ['Help Desk', 'System Monitoring', 'Bug Fixes', 'Updates & Patches'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Software Development Services in Pakistan | ORACHITECH"
        description="ORACHITECH provides custom software development, web apps, SaaS development, mobile apps, cloud solutions, UI/UX design, ERP, AI, and IT consulting services."
        path="/services"
        keywords="software development services Pakistan, web development, mobile app development, SaaS development, cloud solutions, UI UX design, ERP software"
      />
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block animated-text">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Comprehensive <span className="shimmer-text">Tech Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From concept to deployment, we offer end-to-end technology services to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="tech-card glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
