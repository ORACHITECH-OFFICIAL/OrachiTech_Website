import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaWordpress, 
  FaPython, 
  FaAws, 
  FaDocker, 
  FaFigma,
  FaHeart
} from 'react-icons/fa';
import { 
  SiFlutter, 
  SiTensorflow, 
  SiOpenai, 
  SiReplit, 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb, 
  SiFirebase, 
  SiSupabase 
} from 'react-icons/si';

const technologies = [
  { name: 'React', category: 'Frontend', icon: FaReact },
  { name: 'React Native', category: 'Mobile', icon: FaReact },
  { name: 'Flutter', category: 'Mobile', icon: SiFlutter },
  { name: 'Node.js', category: 'Backend', icon: FaNodeJs },
  { name: 'Laravel', category: 'Backend', icon: FaLaravel },
  { name: 'WordPress', category: 'CMS', icon: FaWordpress },
  { name: 'Python', category: 'AI/ML', icon: FaPython },
  { name: 'TensorFlow', category: 'AI/ML', icon: SiTensorflow },
  { name: 'OpenAI', category: 'AI/ML', icon: SiOpenai },
  { name: 'Lovable', category: 'Rapid Dev', icon: FaHeart },
  { name: 'Replit', category: 'Rapid Dev', icon: SiReplit },
  { name: 'TypeScript', category: 'Language', icon: SiTypescript },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb },
  { name: 'AWS', category: 'Cloud', icon: FaAws },
  { name: 'Docker', category: 'DevOps', icon: FaDocker },
  { name: 'Figma', category: 'Design', icon: FaFigma },
  { name: 'Firebase', category: 'Backend', icon: SiFirebase },
  { name: 'Supabase', category: 'Backend', icon: SiSupabase },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20';
      case 'Mobile': return 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20';
      case 'Backend': return 'bg-green-500/10 text-green-400 hover:bg-green-500/20';
      case 'CMS': return 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20';
      case 'AI/ML': return 'bg-orange-500/10 text-orange-400 hover:bg-orange-500/20';
      case 'Rapid Dev': return 'bg-pink-500/10 text-pink-400 hover:bg-pink-500/20';
      case 'Language': return 'bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20';
      case 'Database': return 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20';
      case 'Cloud': return 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20';
      case 'DevOps': return 'bg-red-500/10 text-red-400 hover:bg-red-500/20';
      case 'Design': return 'bg-fuchsia-500/10 text-fuchsia-400 hover:bg-fuchsia-500/20';
      default: return 'bg-primary/10 text-primary hover:bg-primary/20';
    }
  };

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden" ref={ref}>
       {/* Background Elements */}
       <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
       
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/10 px-4 py-1">
              Technologies
            </Badge>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="shimmer-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="tech-card group p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/40 cursor-default"
            >
              <tech.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium transition-colors ${getCategoryColor(tech.category)}`}>
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
