import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe, Zap, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our business dealings.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together with our clients and team members to achieve shared success.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client service.',
  },
];

const milestones = [
  { year: '2018', title: 'Company Founded', description: 'Orachi Tech was established with a vision to transform businesses through technology.' },
  { year: '2019', title: 'First Major Client', description: 'Secured our first enterprise client and expanded our team to 15 members.' },
  { year: '2020', title: 'Global Expansion', description: 'Opened offices in multiple countries and served clients across 20+ nations.' },
  { year: '2021', title: 'Award Recognition', description: 'Received industry recognition for excellence in software development.' },
  { year: '2022', title: '100+ Projects', description: 'Successfully delivered over 100 projects across various industries.' },
  { year: '2023', title: 'AI Integration', description: 'Launched our AI-powered solutions division to meet growing market demands.' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block animated-text">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Building the <span className="shimmer-text">Future of Tech</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We are a team of passionate technologists dedicated to delivering innovative solutions that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age. We are committed to delivering excellence through our expertise, creativity, and unwavering dedication to client success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a global leader in technology innovation, recognized for our commitment to excellence, sustainability, and positive impact on businesses and communities worldwide. We envision a future where technology seamlessly enhances every aspect of life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Core <span className="shimmer-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tech-card glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="shimmer-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card p-6 inline-block">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-foreground font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Award, value: '100+', label: 'Projects Completed' },
                { icon: Users, value: '50+', label: 'Team Members' },
                { icon: Globe, value: '20+', label: 'Countries Served' },
                { icon: CheckCircle, value: '99%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      <Footer />
    </div>
  );
};

export default About;
