
// This file contains utility functions for terminal-like effects

// Function to simulate typing effect
export const typeEffect = (
  text: string, 
  element: HTMLElement, 
  speed = 30, 
  onComplete?: () => void
) => {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
      if (onComplete) onComplete();
    }
  }, speed);
  
  return () => clearInterval(intervalId); // Return cleanup function
};

// Function to create matrix-like effect on characters
export const matrixEffect = (container: HTMLElement, interval = 100) => {
  // Characters used in the matrix effect
  const chars = "01BアウエオR@#$%^&*()_+NO";
  
  // Get all character elements
  const charElements = container.querySelectorAll('.char');
  
  // Apply random character changes at intervals
  const intervalId = setInterval(() => {
    // Randomly select some characters to change
    const randomElements = Array.from(charElements)
      .filter(() => Math.random() < 0.01) // Only change 1% of chars at a time
      .filter(el => el.textContent && el.textContent.trim() !== ''); // Ignore whitespace
    
    randomElements.forEach(el => {
      const original = el.textContent;
      
      // Change to a random character
      el.textContent = chars[Math.floor(Math.random() * chars.length)];
      
      // After a brief moment, change back to original
      setTimeout(() => {
        el.textContent = original;
      }, 100);
    });
  }, interval);
  
  return () => clearInterval(intervalId); // Return cleanup function
};

// Function to create a scanning line effect
export const scanLineEffect = (container: HTMLElement) => {
  const scanLine = document.createElement('div');
  scanLine.className = 'scan-line';
  container.appendChild(scanLine);
  
  return () => {
    if (container.contains(scanLine)) {
      container.removeChild(scanLine);
    }
  };
};

// Function to create glitch effect on an element
export const glitchEffect = (element: HTMLElement, intensity = 0.1) => {
  const original = element.textContent;
  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>/?";
  
  const intervalId = setInterval(() => {
    if (Math.random() < intensity) {
      const len = original?.length || 0;
      let glitched = '';
      
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += original?.[i] || '';
        }
      }
      
      element.textContent = glitched;
      
      // Reset after a brief moment
      setTimeout(() => {
        element.textContent = original;
      }, 100);
    }
  }, 500);
  
  return () => clearInterval(intervalId); // Return cleanup function
};

// Easter egg: Konami code detector
export const setupKonamiCode = (onActivate: () => void) => {
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];
  let konamiIndex = 0;
  
  const keydownHandler = (e: KeyboardEvent) => {
    // Check if the key pressed matches the next key in the Konami code
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      
      // If the entire code has been entered
      if (konamiIndex === konamiCode.length) {
        onActivate();
        konamiIndex = 0; // Reset the index
      }
    } else {
      konamiIndex = 0; // Reset if wrong key is pressed
    }
  };
  
  window.addEventListener('keydown', keydownHandler);
  
  return () => {
    window.removeEventListener('keydown', keydownHandler);
  };
};
