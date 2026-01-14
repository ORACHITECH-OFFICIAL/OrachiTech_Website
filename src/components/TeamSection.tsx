import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const executives = [
  {
    name: 'Muneeb Shahid',
    role: 'CEO & Founder',
    bio: 'Strategic visionary and technology enthusiast with a proven track record in driving innovation and building scalable digital solutions to empower businesses.',
    image: '/assets/profile.png',
    linkedin: 'https://www.linkedin.com/in/muneebshahid6550',
    email: 'muneeb6550@gmail.com',
  },
  {
    name: 'Ghulam Fareed',
    role: 'CTO & Director',
    bio: 'Results-oriented leader specializing in subscription models and business growth, dedicated to delivering exceptional value and fostering long-term client relationships.',
    image: '/assets/Web_Photo_Editor.jpg',
    linkedin: 'https://www.linkedin.com/in/ghulam-fareed-b9a900236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'fareedzubair125@gmail.com',
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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {executives.map((exec, index) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="tech-card glass-card p-8 text-center h-full">
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
                    className="relative w-full h-full object-cover object-top rounded-full border-3 border-dark-600 group-hover:border-primary transition-all duration-500 group-hover:scale-105"
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
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {exec.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    href={exec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${exec.email}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
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

