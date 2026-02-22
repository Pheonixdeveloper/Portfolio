import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { TerminalIntro } from './components/TerminalIntro';
import { MatrixBackground } from './components/MatrixBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
// import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const { isDark, toggleTheme } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if intro has been shown this session
    const introShown = sessionStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
      setIsLoaded(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIsLoaded(true);
    sessionStorage.setItem('introShown', 'true');
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? 'bg-cyber-darker text-white'
          : 'bg-white text-gray-900'
      }`}
    >
      {/* Terminal Intro Animation */}
      <AnimatePresence>
        {showIntro && <TerminalIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Matrix Background */}
            <MatrixBackground isDark={isDark} />

            {/* Navbar */}
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            {/* Main Sections */}
            <main>
              <HeroSection isDark={isDark} />
              <AboutSection isDark={isDark} />
              <SkillsSection isDark={isDark} />
              <ProjectsSection isDark={isDark} />
              {/* <CertificationsSection isDark={isDark} /> */}
              <ContactSection isDark={isDark} />
            </main>

            {/* Footer */}
            <Footer isDark={isDark} />

            {/* Back to Top Button */}
            <BackToTopButton isDark={isDark} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Back to Top Button Component
function BackToTopButton({ isDark }: { isDark: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
            isDark
              ? 'bg-cyber-primary text-cyber-dark hover:shadow-cyber-primary/50'
              : 'bg-emerald-500 text-white hover:shadow-emerald-500/50'
          }`}
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
