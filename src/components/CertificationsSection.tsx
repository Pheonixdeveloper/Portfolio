import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi';

interface CertificationsSectionProps {
  isDark: boolean;
}

const certifications = [
  {
    id: 1,
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2024',
    credentialId: 'CEH-2024-XXXXX',
    link: '#',
    icon: '🎖️',
    color: '#00ff88',
  },
  {
    id: 2,
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2023',
    credentialId: 'SEC+-2023-XXXXX',
    link: '#',
    icon: '🛡️',
    color: '#00d4ff',
  },
  {
    id: 3,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CP-XXXXX',
    link: '#',
    icon: '☁️',
    color: '#ff9900',
  },
  {
    id: 4,
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-XXXXX',
    link: '#',
    icon: '⚛️',
    color: '#0088ff',
  },
  {
    id: 5,
    title: 'Google Cybersecurity Professional',
    issuer: 'Google (Coursera)',
    date: '2024',
    credentialId: 'GGL-CS-XXXXX',
    link: '#',
    icon: '🔐',
    color: '#4285f4',
  },
  {
    id: 6,
    title: 'Linux Foundation Certified SysAdmin',
    issuer: 'Linux Foundation',
    date: '2024',
    credentialId: 'LFCS-XXXXX',
    link: '#',
    icon: '🐧',
    color: '#fcc624',
  },
];

const achievements = [
  { icon: '🏆', title: 'CTF Competition Winner', desc: 'National Level Capture The Flag' },
  { icon: '📝', title: 'Security Researcher', desc: 'Published 5+ Security Articles' },
  { icon: '👨‍💻', title: 'Open Source Contributor', desc: '50+ Contributions on GitHub' },
  { icon: '🎓', title: 'Academic Excellence', desc: 'Top 5% in Cybersecurity Program' },
];

export const CertificationsSection = ({ isDark }: CertificationsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="certifications"
      className={`py-20 relative ${
        isDark ? 'bg-cyber-darker' : 'bg-white'
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
                ? 'bg-cyber-warning/10 text-cyber-warning border border-cyber-warning/30'
                : 'bg-amber-100 text-amber-700 border border-amber-300'
            }`}
          >
            {'<Certifications />'}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Credentials & Achievements
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Industry-recognized certifications and achievements that validate my expertise
            in cybersecurity and software development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: isDark 
                  ? `0 0 30px ${cert.color}30` 
                  : '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-cyber-card border-cyber-border hover:border-opacity-50'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
              style={{
                ['--glow-color' as string]: cert.color,
              }}
            >
              {/* Top Decoration */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: cert.color }}
              />

              {/* Icon */}
              <div className="text-4xl mb-4">{cert.icon}</div>

              {/* Content */}
              <h3
                className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {cert.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <FiAward
                    className="w-4 h-4"
                    style={{ color: cert.color }}
                  />
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    {cert.issuer}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar
                    className="w-4 h-4"
                    style={{ color: cert.color }}
                  />
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Issued {cert.date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle
                    className="w-4 h-4"
                    style={{ color: cert.color }}
                  />
                  <span
                    className={`text-sm font-mono ${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    {cert.credentialId}
                  </span>
                </div>
              </div>

              {/* View Certificate Link */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: cert.color }}
              >
                View Certificate
                <FiExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`p-8 rounded-2xl border ${
            isDark
              ? 'bg-cyber-card border-cyber-border'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Additional Achievements
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 rounded-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-cyber-darker border border-cyber-border hover:border-cyber-primary/50'
                    : 'bg-white border border-gray-200 hover:border-emerald-500 shadow-md'
                }`}
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4
                  className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {achievement.title}
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? 'text-gray-500' : 'text-gray-600'
                  }`}
                >
                  {achievement.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
