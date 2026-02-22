import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FiCode, FiDatabase, FiTerminal, FiShield, FiServer, 
  FiLayout, FiBox, FiGlobe, FiCpu, FiLock
} from 'react-icons/fi';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiMongodb, SiPython, SiLinux, SiTailwindcss, SiTypescript
} from 'react-icons/si';

interface SkillsSectionProps {
  isDark: boolean;
}

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FiLayout,
    skills: [
      { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
      { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
      { name: 'React.js', icon: SiReact, level: 85, color: '#61DAFB' },
    ],
  },
  {
    title: 'Backend Development',
    icon: FiServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 82, color: '#339933' },
      { name: 'Python', icon: SiPython, level: 78, color: '#3776AB' },
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
      { name: 'SQL', icon: FiDatabase, level: 75, color: '#4479A1' },
    ],
  },
  {
    title: 'Cyber Security',
    icon: FiShield,
    skills: [
      { name: 'Linux', icon: SiLinux, level: 88, color: '#FCC624' },
      { name: 'Ethical Hacking', icon: FiLock, level: 75, color: '#00FF88' },
      { name: 'Network Security', icon: FiGlobe, level: 72, color: '#00D4FF' },
      { name: 'Penetration Testing', icon: FiTerminal, level: 70, color: '#FF00FF' },
    ],
  },
];

const tools = [
  { name: 'VS Code', icon: FiCode },
  { name: 'Git', icon: FiBox },
  { name: 'Docker', icon: FiBox },
  { name: 'Wireshark', icon: FiCpu },
  { name: 'Burp Suite', icon: FiShield },
  { name: 'Nmap', icon: FiTerminal },
  { name: 'Metasploit', icon: FiLock },
  { name: 'Kali Linux', icon: SiLinux },
];

export const SkillsSection = ({ isDark }: SkillsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
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
                ? 'bg-cyber-secondary/10 text-cyber-secondary border border-cyber-secondary/30'
                : 'bg-blue-100 text-blue-700 border border-blue-300'
            }`}
          >
            {'<Skills />'}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technical Arsenal
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive toolkit of technologies and security skills honed through
            continuous learning and hands-on experience.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className={`p-6 rounded-2xl border ${
                isDark
                  ? 'bg-cyber-card border-cyber-border'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    isDark
                      ? 'bg-cyber-primary/10 text-cyber-primary'
                      : 'bg-emerald-100 text-emerald-600'
                  }`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3
                  className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon
                          className="w-5 h-5"
                          style={{ color: skill.color }}
                        />
                        <span
                          className={`font-medium ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-mono ${
                          isDark ? 'text-cyber-primary' : 'text-emerald-600'
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDark ? 'bg-cyber-darker' : 'bg-gray-200'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${
                            isDark ? '#00ff88' : '#10b981'
                          })`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
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
            className={`text-2xl font-bold mb-6 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05, type: 'spring' }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: isDark 
                    ? '0 0 20px rgba(0, 255, 136, 0.3)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.1)' 
                }}
                className={`px-5 py-3 rounded-xl flex items-center gap-2 cursor-default transition-all duration-300 ${
                  isDark
                    ? 'bg-cyber-darker border border-cyber-border hover:border-cyber-primary text-gray-300'
                    : 'bg-white border border-gray-200 hover:border-emerald-500 text-gray-700 shadow-sm'
                }`}
              >
                <tool.icon className={`w-5 h-5 ${isDark ? 'text-cyber-primary' : 'text-emerald-600'}`} />
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
