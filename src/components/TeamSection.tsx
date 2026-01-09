import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ahmed Khan',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sara Ali',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Hassan Raza',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Fatima Zahra',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Usman Malik',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Ayesha Siddiqui',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Bilal Ahmed',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Zara Khan',
    role: 'Mobile Developer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Imran Shah',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Nadia Hussain',
    role: 'QA Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Kamran Ali',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Mehwish Iqbal',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hexagon-pattern opacity-5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A talented group of professionals dedicated to delivering exceptional results
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-4 text-center group hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="relative mb-4 mx-auto w-24 h-24 md:w-32 md:h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-2 border-dark-600 group-hover:border-teal-500 transition-colors duration-300"
                />
              </div>
              <h3 className="text-foreground font-semibold text-sm md:text-base mb-1">
                {member.name}
              </h3>
              <p className="text-teal-400 text-xs md:text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-teal-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="text-muted-foreground hover:text-teal-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    className="text-muted-foreground hover:text-teal-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
