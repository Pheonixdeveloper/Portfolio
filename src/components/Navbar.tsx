import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiShield } from 'react-icons/fi';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-cyber-dark/90 backdrop-blur-xl shadow-lg shadow-cyber-primary/10'
              : 'bg-white/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`p-2 rounded-lg ${
                isDark 
                  ? 'bg-cyber-primary/10 group-hover:bg-cyber-primary/20' 
                  : 'bg-emerald-100 group-hover:bg-emerald-200'
              } transition-all duration-300`}>
                <FiShield className={`w-6 h-6 ${
                  isDark ? 'text-cyber-primary' : 'text-emerald-600'
                }`} />
              </div>
              <span className={`font-bold text-xl font-mono ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <span className={isDark ? 'text-cyber-primary' : 'text-emerald-600'}>Port</span>
                <span className={isDark ? 'text-cyber-secondary' : 'text-blue-500'}>folio</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === link.href.slice(1)
                      ? isDark
                        ? 'text-cyber-primary'
                        : 'text-emerald-600'
                      : isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        isDark ? 'bg-cyber-primary/10' : 'bg-emerald-100'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-cyber-primary/10 text-cyber-primary hover:bg-cyber-primary/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiSun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMoon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${
                  isDark
                    ? 'bg-cyber-primary/10 text-cyber-primary'
                    : 'bg-gray-100 text-gray-600'
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${
                isDark ? 'bg-cyber-dark/95' : 'bg-white/95'
              } backdrop-blur-xl border-t ${
                isDark ? 'border-cyber-primary/20' : 'border-gray-200'
              }`}
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? isDark
                          ? 'bg-cyber-primary/10 text-cyber-primary'
                          : 'bg-emerald-100 text-emerald-600'
                        : isDark
                          ? 'text-gray-400 hover:text-white hover:bg-white/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
