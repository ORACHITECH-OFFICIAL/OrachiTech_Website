import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce solution with real-time inventory, secure payments, and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Enterprise Software',
    description: 'Comprehensive healthcare platform for patient management, appointments, and telemedicine integration.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Python', 'MongoDB', 'WebRTC'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'FinTech Mobile App',
    category: 'Mobile Development',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction tracking.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Firebase', 'Plaid API'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'AI-Powered Analytics Dashboard',
    category: 'Data Science',
    description: 'Business intelligence platform with machine learning predictions and automated reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'AWS'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Real Estate Marketplace',
    category: 'Web Development',
    description: 'Property listing platform with virtual tours, mortgage calculator, and agent matching.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Three.js'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Supply Chain Management',
    category: 'Enterprise Software',
    description: 'End-to-end supply chain solution with IoT integration and predictive logistics.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    technologies: ['Angular', 'Java', 'Oracle', 'IoT'],
    link: '#',
    github: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
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
              Our Portfolio
            </motion.span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="animated-text">Showcasing Our</span>
              <br />
              <span className="gradient-text shimmer-text">Best Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of successful projects that demonstrate our expertise
              in building innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group tech-card rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center px-4 py-2 glass-card rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs glass-card rounded-md text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-card rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's collaborate and bring your ideas to life. Our team is ready to help you build something amazing.
              </p>
              <Link to="/start-project">
                <Button variant="hero" size="xl" className="group magnetic-button">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
