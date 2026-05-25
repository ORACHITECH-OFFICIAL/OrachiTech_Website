import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/', isPage: true },
  { name: 'About', href: '/about', isPage: true },
  { name: 'Services', href: '/services', isPage: true },
  { name: 'School System', href: '/school-management-system', isPage: true },
  { name: 'Portfolio', href: '/portfolio', isPage: true },
  { name: 'Case Studies', href: '/case-studies', isPage: true },
  { name: 'Blog', href: '/blog', isPage: true },
  // { name: 'Team', href: '/#team', isPage: false },
  { name: 'Contact', href: '/contact', isPage: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isPage: boolean) => {
    setIsMobileMenuOpen(false);
    if (!isPage && href.includes('#')) {
      const sectionId = href.split('#')[1];
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Orachi Tech" className="h-12 w-auto" />
              <span className="font-display text-xl font-bold gradient-text">
                Orachi Tech
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {link.isPage ? (
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.isPage)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link to="/contact">
                <Button variant="hero" size="default">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/50"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.isPage)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {link.name}
                  </a>
                )
              )}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" size="lg" className="mt-4 w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
