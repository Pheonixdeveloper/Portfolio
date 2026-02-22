import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiShield, FiTerminal, FiCode, FiLock, FiServer, FiDatabase } from 'react-icons/fi';

interface AboutSectionProps {
  isDark: boolean;
}

const highlights = [
  { icon: FiShield, title: 'Security First', desc: 'Building secure applications with best practices' },
  { icon: FiTerminal, title: 'Linux Expert', desc: 'Proficient in Linux environments' },
  { icon: FiLock, title: 'Ethical Hacking', desc: 'Passionate about penetration testing & security' },
  { icon: FiCode, title: 'Full-Stack Dev', desc: 'Creating complete web solutions' },
  { icon: FiServer, title: 'System Admin', desc: 'Learning to manage and secure server infrastructures' },
  { icon: FiDatabase, title: 'Data Security', desc: 'Learn to Protecting sensitive information and databases' },
];

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '5+', label: 'Certifications' },
  { value: '1+', label: 'Years Experience' },
  { value: '100%', label: 'Commitment' },
];

export const AboutSection = ({ isDark }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className={`py-20 relative ${
        isDark ? 'bg-cyber-dark' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-mono mb-4 ${
              isDark
                ? 'bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/30'
                : 'bg-emerald-100 text-emerald-700 border border-emerald-300'
            }`}
          >
            {'<About Me />'}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Who I Am
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A dedicated cyber security enthusiast with a passion for building secure systems
            and exploring the depths of ethical hacking.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`p-8 rounded-2xl border ${
                isDark
                  ? 'bg-cyber-card border-cyber-border'
                  : 'bg-white border-gray-200 shadow-xl'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Passionate About{' '}
                <span className={isDark ? 'text-cyber-primary' : 'text-emerald-600'}>
                  Secure Systems
                </span>
              </h3>
              <div className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>
                  As a B.Tech Engineering student specializing in Cyber Security, I've developed
                  a deep understanding and learning both offensive and defensive security practices. My
                  journey began with a curiosity about how systems work and evolved into a
                  passion for protecting them.
                </p>
                <p>
                  I thrive in Linux environments, where I spend countless hours exploring
                  command-line tools, automating security tasks, and learning about system
                  internals. The terminal is my playground, and security is my game.
                </p>
                <p>
                  Beyond security, I'm a full-stack developer capable of building complete
                  web applications. I believe that understanding how to build systems is
                  essential to knowing how to protect them.
                </p>
              </div>

              {/* Terminal-style quote */}
              <div
                className={`mt-6 p-4 rounded-lg font-mono text-sm ${
                  isDark
                    ? 'bg-cyber-darker border border-cyber-primary/20'
                    : 'bg-gray-100 border border-gray-300'
                }`}
              >
                <span className={isDark ? 'text-cyber-primary' : 'text-emerald-600'}>$</span>
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {' '}echo "Security is not a product, but a process."
                </span>
                <br />
                <span className={isDark ? 'text-cyber-secondary' : 'text-blue-600'}>
                  → Bruce Schneier
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: isDark 
                    ? '0 0 30px rgba(0, 255, 136, 0.2)' 
                    : '0 10px 40px rgba(0, 0, 0, 0.1)' 
                }}
                className={`p-5 rounded-xl border transition-all duration-300 group ${
                  isDark
                    ? 'bg-cyber-card border-cyber-border hover:border-cyber-primary/50'
                    : 'bg-white border-gray-200 hover:border-emerald-500 shadow-md'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                    isDark
                      ? 'bg-cyber-primary/10 text-cyber-primary group-hover:bg-cyber-primary/20'
                      : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h4
                  className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? 'text-gray-500' : 'text-gray-600'
                  }`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`p-8 rounded-2xl border grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isDark
              ? 'bg-gradient-to-r from-cyber-card via-cyber-dark to-cyber-card border-cyber-border'
              : 'bg-gradient-to-r from-emerald-50 via-white to-blue-50 border-gray-200 shadow-xl'
          }`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
              className="text-center"
            >
              <div
                className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  isDark
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary'
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500'
                }`}
              >
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
