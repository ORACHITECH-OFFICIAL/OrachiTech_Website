import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const executives = [
  {
    name: 'Ahmed Khan',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in tech industry. Passionate about innovation and digital transformation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'ahmed@orachitech.com',
  },
  {
    name: 'Sara Ali',
    role: 'Chief Technology Officer',
    bio: 'Tech expert driving cutting-edge solutions. Expert in cloud architecture and AI systems.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'sara@orachitech.com',
  },
  {
    name: 'Hassan Raza',
    role: 'Chief Operating Officer',
    bio: 'Operations mastermind ensuring seamless project delivery and client satisfaction.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'hassan@orachitech.com',
  },
  {
    name: 'Fatima Zahra',
    role: 'Chief Design Officer',
    bio: 'Creative visionary crafting exceptional user experiences and brand identities.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'fatima@orachitech.com',
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hexagon-pattern opacity-5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Meet Our <span className="shimmer-text">Leadership Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced leaders driving innovation and excellence at Orachi Tech
          </p>
        </motion.div>

        {/* Executives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((exec, index) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="tech-card glass-card p-6 text-center h-full">
                {/* Image Container */}
                <div className="relative mb-6 mx-auto w-32 h-32 lg:w-40 lg:h-40">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary to-teal-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/50 transition-all duration-300" />
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="relative w-full h-full object-cover rounded-full border-3 border-dark-600 group-hover:border-primary transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Floating badge */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {exec.role.split(' ')[0]}
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-foreground font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                  {exec.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{exec.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {exec.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    href={exec.linkedin}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={exec.twitter}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${exec.email}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
