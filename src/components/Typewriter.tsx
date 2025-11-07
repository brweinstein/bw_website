'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export default function Typewriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  className = ""
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isPaused) {
        setTimeout(() => setIsPaused(false), delayBetween);
        return;
      }

      if (!isDeleting) {
        // Typing forward
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setIsPaused(true);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping, 
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}