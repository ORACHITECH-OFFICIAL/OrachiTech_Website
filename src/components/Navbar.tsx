import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const cinematicRoutes = new Set(['/', '/about', '/services', '/portfolio', '/case-studies', '/blog', '/contact', '/start-project']);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const transparentHero = cinematicRoutes.has(location.pathname) && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        transparentHero
          ? 'border-transparent bg-transparent text-white'
          : 'border-slate-900/10 bg-[#f8f8f5]/92 text-slate-950 shadow-[0_8px_30px_rgba(3,16,20,0.06)] backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Orachi Tech home">
            <img src={logo} alt="" className="h-11 w-auto" />
            <span className="font-display text-lg font-semibold tracking-[-0.02em]">Orachi Tech</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`group relative py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? transparentHero ? 'text-white' : 'text-slate-950'
                    : transparentHero ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.name}
                <span className={`absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-300 ${transparentHero ? 'bg-teal-300' : 'bg-teal-700'} ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            ))}
            <Link
              to="/start-project"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                transparentHero
                  ? 'bg-white text-slate-950 hover:bg-teal-300'
                  : 'bg-slate-950 text-white hover:bg-teal-700'
              }`}
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-900/10 bg-[#f8f8f5] text-slate-950 lg:hidden"
          >
            <div className="container mx-auto flex flex-col px-6 py-5">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="border-b border-slate-900/10 py-4 font-medium last:border-b-0">
                  {link.name}
                </Link>
              ))}
              <Link to="/start-project" className="mt-5 rounded-full bg-slate-950 px-5 py-3.5 text-center font-semibold text-white">
                Start a project
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
