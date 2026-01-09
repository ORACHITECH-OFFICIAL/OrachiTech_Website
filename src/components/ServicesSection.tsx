import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  BarChart3,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies for optimal performance and scalability.',
    features: ['React / Next.js', 'Node.js Backend', 'API Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: ['iOS & Android', 'Flutter / React Native', 'App Store Ready'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and deployment solutions for your growing business.',
    features: ['AWS / Azure / GCP', 'DevOps', 'CI/CD Pipelines'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive designs that engage users and drive conversions.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with our comprehensive security solutions.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance'],
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description:
      'Turn your data into actionable insights with our analytics solutions.',
    features: ['Data Pipelines', 'Dashboards', 'Machine Learning'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-dark/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider animated-text">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Solutions That{' '}
            <span className="shimmer-text">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end technology services
            tailored to your unique business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="tech-card group glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-teal-dark/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
