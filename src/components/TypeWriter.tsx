import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypeWriter = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  className = '',
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        const deleteTimer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(deleteTimer);
      }
    } else {
      if (displayText === currentText) {
        setIsPaused(true);
      } else {
        const typeTimer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(typeTimer);
      }
    }
  }, [displayText, textIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor">&nbsp;</span>
    </span>
  );
};
