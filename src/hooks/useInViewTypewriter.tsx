import { useState, useEffect, useRef } from 'react';

interface UseInViewTypewriterOptions {
  text: string;
  speed?: number;
}

export const useInViewTypewriter = ({ text, speed = 30 }: UseInViewTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isVisible || !isComplete) {
            setIsVisible(true);
          }
        } else {
          // Reset when out of view
          setIsVisible(false);
          setDisplayedText('');
          setIsComplete(false);
          indexRef.current = 0;
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible, isComplete]);

  useEffect(() => {
    if (!isVisible) return;

    if (indexRef.current < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed, isVisible]);

  return { displayedText, isComplete, elementRef };
};
