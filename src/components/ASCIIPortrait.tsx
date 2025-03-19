
import React, { useEffect, useRef } from 'react';

// Pre-rendered ASCII art
const ASCII_PORTRAIT = `
████████████████████████████████
████████████████████████████████
████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████
████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████
████▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓████
████▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓████
████▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓████
████▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓████
████▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓████
████▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓████
████▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓████
████▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓████
████▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓████
████▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓████
████▓▓▓▓▓▓▓▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓████
████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████
████████████████████████████████
████████████████████████████████
`;

const ASCIIPortrait: React.FC = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!portraitRef.current) return;
    
    // Generate the portrait with individual spans for each character
    const characters = ASCII_PORTRAIT.split('');
    portraitRef.current.innerHTML = '';
    
    characters.forEach(char => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      portraitRef.current?.appendChild(span);
      
      // Random glitch effect
      if (Math.random() < 0.1 && char !== '\n') {
        setInterval(() => {
          const glitchChars = "01BアウエオR@#$%^&*()_+NO";
          const originalChar = span.textContent;
          
          // Only glitch non-whitespace characters
          if (originalChar && originalChar.trim()) {
            span.textContent = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            
            // Reset after a short delay
            setTimeout(() => {
              span.textContent = originalChar;
            }, 100);
          }
        }, Math.random() * 10000 + 5000); // Random interval between 5-15 seconds
      }
    });
    
    // Add scanning effect
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    portraitRef.current.appendChild(scanLine);
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 mb-6">
      <div className="command-prompt mb-2">brandon@hall:~$ generate-portrait --style=ascii</div>
      <div ref={portraitRef} className="ascii-container ascii-art"></div>
      <div className="text-center mt-4">
        <div className="text-terminal-green-light font-bold text-xl mb-1">BRANDON HALL</div>
        <div className="text-terminal-green mb-1">Software Engineer</div>
        <div className="text-terminal-gray text-sm mb-2">Saint Catherine, Jamaica</div>
        <div className="text-terminal-gray text-sm max-w-md">
          AWS Certified Cloud Practitioner with experience in full-stack development,
          specializing in Spring Boot, AWS, and database optimization.
        </div>
      </div>
    </div>
  );
};

export default ASCIIPortrait;
