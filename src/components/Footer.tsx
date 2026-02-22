import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiShield } from 'react-icons/fi';

interface FooterProps {
  isDark: boolean;
}

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ],
  resources: [
    // { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Pheonixdeveloper', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ahmadabbas-revasiya-b91077295', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:aabasit@gmail.com', label: 'Email' },
];

export const Footer = ({ isDark }: FooterProps) => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      className={`relative pt-16 pb-8 ${
        isDark
          ? 'bg-cyber-darker border-t border-cyber-border'
          : 'bg-gray-900 border-t border-gray-800'
      }`}
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className={`p-2 rounded-lg ${isDark ? 'bg-cyber-primary/10' : 'bg-emerald-900/50'}`}>
                <FiShield className="w-6 h-6 text-cyber-primary" />
              </div>
              <span className="font-bold text-xl font-mono text-white">
                <span className="text-cyber-primary">Port</span>folio
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              B.Tech Cyber Security Engineer passionate about building secure systems,
              ethical hacking, and creating impactful web applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:text-cyber-primary hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-cyber-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className="text-gray-400 hover:text-cyber-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()}Phoenixdeveloper. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <FiHeart className="w-4 h-4 text-red-500" /> and{' '}
              <span className="text-cyber-primary">secure code</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
