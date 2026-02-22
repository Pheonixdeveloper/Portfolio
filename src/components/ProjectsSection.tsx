import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiBook, FiMonitor, FiTool, FiSettings } from 'react-icons/fi';

interface ProjectsSectionProps {
  isDark: boolean;
}

const projects = [
  {
    id: 1,
    title: 'Cyber Security Guide for Non-Technical Users',
    description: 'A comprehensive web platform explaining cybersecurity concepts in simple, accessible language. Features interactive guides, infographics, and practical security tips for everyday users.',
    image: '🔐',
    icon: FiBook,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Pheonixdeveloper',
    demo: 'https://maktabahjafariyah.org/wp-content/uploads/2026/01/Cyber_Safety_and_Digital_Responsibility_Book.pdf', 
    category: 'Security Education',
  },
  {
    id: 2,
    title: 'StreamHub - Video Streaming Platform for Gamers Only',
    description: 'A full-featured video streaming platform with user authentication, video upload, playlist management, search functionality, and responsive design inspired by modern streaming services.',
    image: '📺',
    icon: FiMonitor,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS S3'],
    github: 'https://github.com/Pheonixdeveloper',
    demo: 'https://github.com/Pheonixdeveloper/videostreaming',
    featured: true,
    category: 'Web Application',
  },
  {
    id: 3,
    title: 'Repair and maintenance service platform Website',
    description: 'Complete electronics repair service platform with online booking system and admin dashboard,',
    image: '🔧',
    icon: FiTool,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/Pheonixdeveloper',
    demo: 'https://github.com/Pheonixdeveloper/Pheonixdeveloper.git',
    featured: false,
    category: 'Service Platform',
  },
  {
    id: 4,
    title: 'UPCOMING !!! PCCare - Computer Servicing Hub',
    description: 'Professional computer repair and maintenance service website featuring appointment scheduling, diagnostic tools, service history tracking, and a comprehensive admin panel.',
    image: '💻',
    icon: FiSettings,
    tags: ['React.js', 'Express.js', 'PostgreSQL', 'Redux', 'Material UI'],
    github: 'https://github.com/Pheonixdeveloper',
    demo: 'https://pccare-services.com',
    featured: false,
    category: 'Service Platform',
  },
  {
    id: 5,
    title: 'UPCOMING !!! SecureNet - Network Security Monitor',
    description: 'A network monitoring and security analysis tool with real-time traffic analysis, intrusion detection alerts, vulnerability scanning, and comprehensive reporting.',
    image: '🛡️',
    icon: FiBook,
    tags: ['Python', 'React.js', 'Flask', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Pheonixdeveloper',
    demo: 'https://securenet-monitor.com',
    featured: true,
    category: 'Security Tool',
  },
];

export const ProjectsSection = ({ isDark }: ProjectsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
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
                ? 'bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/30'
                : 'bg-purple-100 text-purple-700 border border-purple-300'
            }`}
          >
            {'<Projects />'}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Work
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of projects showcasing my skills in full-stack development,
            cyber security, and creating user-centric solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 card-shine ${
                isDark
                  ? 'bg-cyber-card border-cyber-border hover:border-cyber-primary/50'
                  : 'bg-white border-gray-200 hover:border-emerald-500 shadow-lg hover:shadow-xl'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  isDark
                    ? 'bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10'
                    : 'bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5'
                }`}
              />

              {/* Featured Badge */}
              {project.featured && (
                <div
                  className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                    isDark
                      ? 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30'
                      : 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                  }`}
                >
                  Featured
                </div>
              )}

              {/* Project Icon/Image Area */}
              <div
                className={`h-48 flex items-center justify-center text-7xl relative overflow-hidden ${
                  isDark
                    ? 'bg-gradient-to-br from-cyber-darker via-cyber-card to-cyber-darker'
                    : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100'
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring' }}
                >
                  {project.image}
                </motion.span>
                
                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isDark ? 'bg-cyber-darker/80' : 'bg-white/80'
                  }`}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl transition-all ${
                      isDark
                        ? 'bg-cyber-primary/20 text-cyber-primary hover:bg-cyber-primary/30'
                        : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                    }`}
                  >
                    <FiGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl transition-all ${
                      isDark
                        ? 'bg-cyber-secondary/20 text-cyber-secondary hover:bg-cyber-secondary/30'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    <FiExternalLink className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Category */}
                <span
                  className={`inline-block text-xs font-mono mb-2 ${
                    isDark ? 'text-cyber-primary' : 'text-emerald-600'
                  }`}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm mb-4 line-clamp-3 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        isDark
                          ? 'bg-cyber-darker text-gray-400 border border-cyber-border'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Border Glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Pheonixdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-cyber-card border border-cyber-border text-white hover:border-cyber-primary hover:shadow-lg hover:shadow-cyber-primary/20'
                : 'bg-white border border-gray-200 text-gray-900 hover:border-emerald-500 hover:shadow-lg'
            }`}
          >
            <FiGithub className="w-5 h-5" />
            View All Projects on GitHub
            <FiExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
