import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { TypeWriter } from './TypeWriter';

interface HeroSectionProps {
  isDark: boolean;
}

const typingTexts = [
  'Cyber Security Enthusiast',
  'B.Tech Engineering Student',
  'Ethical Hacking Learner',
  'Full-Stack Developer',
  'Security Researcher',
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Pheonixdeveloper', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ahmadabbas-revasiya-b91077295', label: 'LinkedIn' },
  { icon: FiMail, href: 'https://mail.google.com/', label: 'Email' },
];

export const HeroSection = ({ isDark }: HeroSectionProps) => {
  const handleNavClick = (href: string) => {  
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-cyber-darker' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl ${
            isDark
              ? 'bg-gradient-to-br from-cyber-primary/20 to-transparent'
              : 'bg-gradient-to-br from-emerald-200/50 to-transparent'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl ${
            isDark
              ? 'bg-gradient-to-tl from-cyber-secondary/20 to-transparent'
              : 'bg-gradient-to-tl from-blue-200/50 to-transparent'
          }`}
        />
        
        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 ${
            isDark ? 'opacity-20' : 'opacity-10'
          }`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#00ff88' : '#10b981'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? '#00ff88' : '#10b981'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span
              className={`px-4 py-2 rounded-full text-sm font-mono border ${
                isDark
                  ? 'border-cyber-primary/50 bg-cyber-primary/10 text-cyber-primary'
                  : 'border-emerald-500/50 bg-emerald-100 text-emerald-700'
              } pulse-glow`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Hi, I'm{' '}
            <span
              className={`${
                isDark
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500'
              } animate-gradient`}
            >
              AhmadAbbas
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-xl sm:text-2xl md:text-3xl font-mono mb-8 h-12 ${
              isDark ? 'text-cyber-primary' : 'text-emerald-600'
            }`}
          >
            <TypeWriter texts={typingTexts} speed={80} deleteSpeed={40} pauseDuration={2500} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`max-w-2xl mx-auto text-lg mb-10 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A passionate B.Tech Engineering student specializing in Cyber Security. 
            I build secure, scalable web applications and explore the fascinating world 
            of ethical hacking and penetration testing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => handleNavClick('#projects')}
              whileHover={{ scale: 1.05, boxShadow: isDark ? '0 0 30px rgba(0, 255, 136, 0.4)' : '0 0 30px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-cyber-primary to-cyber-secondary text-cyber-dark hover:shadow-cyber-primary/50'
                  : 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:shadow-emerald-500/50'
              } shadow-lg`}
            >
              View Projects
              <FiArrowDown className="animate-bounce" />
            </motion.button>

            <motion.button
              onClick={() => handleNavClick('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 border-2 transition-all duration-300 ${
                isDark
                  ? 'border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10'
                  : 'border-emerald-500 text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Contact Me
              <FiMail />
            </motion.button>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 ${
                isDark
                  ? 'bg-cyber-card text-gray-300 hover:bg-cyber-card/80 border border-cyber-border'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              Resume
              <FiDownload />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: isDark ? '0 0 20px rgba(0, 255, 136, 0.5)' : '0 0 20px rgba(16, 185, 129, 0.5)'
                }}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-cyber-card border border-cyber-border text-gray-400 hover:text-cyber-primary hover:border-cyber-primary'
                    : 'bg-white border border-gray-200 text-gray-600 hover:text-emerald-600 hover:border-emerald-500 shadow-md'
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${
            isDark ? 'border-cyber-primary/50' : 'border-emerald-500/50'
          }`}
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? 'bg-cyber-primary' : 'bg-emerald-500'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
