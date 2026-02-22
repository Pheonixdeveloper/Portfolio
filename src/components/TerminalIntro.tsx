import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalIntroProps {
  onComplete: () => void;
}

const commands = [
  { text: '> Initializing secure connection...', delay: 0 },
  { text: '> Loading encryption modules...', delay: 400 },
  { text: '> Authenticating user credentials...', delay: 800 },
  { text: '> Bypassing firewall... [SUCCESS]', delay: 1200 },
  { text: '> Decrypting portfolio data...', delay: 1600 },
  { text: '> Access granted. Welcome.', delay: 2000 },
];

export const TerminalIntro = ({ onComplete }: TerminalIntroProps) => {
  const [visibleCommands, setVisibleCommands] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    commands.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCommands(index + 1);
      }, commands[index].delay);
    });

    setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    setTimeout(() => {
      onComplete();
    }, 3500);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-cyber-darker flex items-center justify-center"
        >
          <div className="w-full max-w-2xl mx-4">
            {/* Terminal Window */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-cyber-dark border border-cyber-primary/30 rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="bg-cyber-card px-4 py-2 flex items-center gap-2 border-b border-cyber-primary/20">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-cyber-primary/70 text-sm font-mono">root@cybersec:~</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[250px]">
                {commands.slice(0, visibleCommands).map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`mb-2 ${
                      cmd.text.includes('[SUCCESS]') || cmd.text.includes('Welcome')
                        ? 'text-cyber-primary'
                        : 'text-gray-400'
                    }`}
                  >
                    {cmd.text}
                    {cmd.text.includes('[SUCCESS]') && (
                      <span className="ml-2 text-cyber-primary">✓</span>
                    )}
                  </motion.div>
                ))}
                
                {visibleCommands < commands.length && (
                  <span className="inline-block w-2 h-4 bg-cyber-primary cursor-blink"></span>
                )}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-4 h-1 bg-cyber-card rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
