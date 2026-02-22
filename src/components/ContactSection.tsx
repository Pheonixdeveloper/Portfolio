import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

interface ContactSectionProps {
  isDark: boolean;
}

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'aabasit@gmail.com', href: 'mailto:aabasit@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'India', href: '#' },
  { icon: FiPhone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
];

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/Pheonixdeveloper', color: '#333' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmadabbas-revasiya-b91077295', color: '#0A66C2' },
  { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com', color: '#1DA1F2' },
  { icon: FiMail, label: 'Email', href: 'mailto:aabasit@gmail.com', color: '#EA4335' },
];

export const ContactSection = ({ isDark }: ContactSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
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
            {'<Contact />'}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In Touch
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss cybersecurity? 
            Feel free to reach out. I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-cyber-card border-cyber-border hover:border-cyber-primary/50 hover:shadow-lg hover:shadow-cyber-primary/10'
                      : 'bg-white border-gray-200 hover:border-emerald-500 hover:shadow-lg'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isDark
                        ? 'bg-cyber-primary/10 text-cyber-primary'
                        : 'bg-emerald-100 text-emerald-600'
                    }`}
                  >
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      {info.label}
                    </p>
                    <p
                      className={`font-medium ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className={`p-6 rounded-xl border ${
                isDark
                  ? 'bg-cyber-card border-cyber-border'
                  : 'bg-white border-gray-200'
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: `0 0 20px ${social.color}50`
                    }}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isDark
                        ? 'bg-cyber-darker border border-cyber-border text-gray-400 hover:text-white'
                        : 'bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Terminal Style Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className={`p-4 rounded-xl font-mono text-sm ${
                isDark
                  ? 'bg-cyber-darker border border-cyber-primary/20'
                  : 'bg-gray-100 border border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                <span className={isDark ? 'text-cyber-primary' : 'text-emerald-600'}>$</span> echo "Let's build something secure together!"
              </p>
              <p className={isDark ? 'text-cyber-secondary' : 'text-blue-600'}>
                → Response: Ready to collaborate! 🚀
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl border ${
                isDark
                  ? 'bg-cyber-card border-cyber-border'
                  : 'bg-white border-gray-200 shadow-xl'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Send a Message
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                        isDark
                          ? 'bg-cyber-darker border-cyber-border text-white placeholder-gray-500 focus:border-cyber-primary'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <FiMail
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                        isDark
                          ? 'bg-cyber-darker border-cyber-border text-white placeholder-gray-500 focus:border-cyber-primary'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare
                      className={`absolute left-4 top-4 w-5 h-5 ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or just say hi..."
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 outline-none resize-none ${
                        isDark
                          ? 'bg-cyber-darker border-cyber-border text-white placeholder-gray-500 focus:border-cyber-primary'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-r from-cyber-primary to-cyber-secondary text-cyber-dark hover:shadow-lg hover:shadow-cyber-primary/30'
                      : 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:shadow-lg hover:shadow-emerald-500/30'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center ${
                      isDark
                        ? 'bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/30'
                        : 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                    }`}
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl text-center bg-red-100 text-red-700 border border-red-300"
                  >
                    ✗ Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </form>

            {/* Backend Integration Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className={`mt-4 p-4 rounded-xl font-mono text-xs ${
                isDark
                  ? 'bg-cyber-darker/50 text-gray-500 border border-cyber-border/50'
                  : 'bg-gray-100 text-gray-500 border border-gray-200'
              }`}
            >
              <p>// Backend Integration Example:</p>
              <p className={isDark ? 'text-cyber-primary' : 'text-emerald-600'}>
                POST /api/contact → Node.js + MongoDB
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
