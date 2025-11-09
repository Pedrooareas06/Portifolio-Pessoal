import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!hasStarted) return;

    if (indexRef.current < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed, hasStarted]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return { displayedText, isComplete };
};
