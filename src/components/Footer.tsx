import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Award, Shield, CheckCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/#team' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'Cloud Solutions', href: '/services' },
    { name: 'UI/UX Design', href: '/services' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'WhatsApp', href: 'https://wa.me/923233593780' },
    { name: 'Phone', href: 'tel:+923233593780' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const certificates = [
  { name: 'ISO 27001', icon: Shield, description: 'Information Security' },
  { name: 'ISO 9001', icon: Award, description: 'Quality Management' },
  { name: 'AWS Partner', icon: CheckCircle, description: 'Certified Partner' },
  { name: 'Google Cloud', icon: CheckCircle, description: 'Partner Program' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-dark-elevated/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img src={logo} alt="Orachi Tech" className="h-10 w-auto" />
              <span className="font-display text-xl font-bold gradient-text">
                Orachi Tech
              </span>
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering businesses with innovative technology solutions. We turn
              your digital vision into reality.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="py-8 border-t border-b border-border/50 mb-8">
          <h4 className="font-display font-semibold text-center mb-6">Certifications & Partnerships</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-card p-4 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <cert.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-sm">{cert.name}</p>
                <p className="text-muted-foreground text-xs">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Orachi Tech. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with 💚 by Orachi Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
