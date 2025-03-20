
import React, { useEffect } from 'react';
import Terminal from '@/components/Terminal';
import { setupKonamiCode } from '@/lib/terminalEffects';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  useEffect(() => {
    // Set up Konami code Easter egg
    const cleanup = setupKonamiCode(() => {
      toast({
        title: "Easter Egg Activated!",
        description: "You found the secret Konami code! The sorting visualizer has been enhanced.",
        duration: 5000,
      });
      
      // Add a class to the sorting visualizer for special animation
      const visualizerElement = document.querySelector('.sorting-visualizer');
      if (visualizerElement) {
        visualizerElement.classList.add('konami-active');
        
        // Add special animation effect
        visualizerElement.animate([
          { transform: 'scale(1)', filter: 'brightness(1)' },
          { transform: 'scale(1.1)', filter: 'brightness(1.5)' },
          { transform: 'scale(1)', filter: 'brightness(1)' }
        ], {
          duration: 1000,
          iterations: 1
        });
        
        // Trigger a re-sort or special effect on the visualizer
        const resetButton = document.querySelector('.sorting-visualizer button:first-of-type') as HTMLButtonElement;
        const sortButton = document.querySelector('.sorting-visualizer button:last-of-type') as HTMLButtonElement;
        
        if (resetButton && sortButton) {
          resetButton.click();
          setTimeout(() => {
            sortButton.click();
          }, 500);
        }
        
        // Remove the class after the animation
        setTimeout(() => {
          visualizerElement.classList.remove('konami-active');
        }, 5000);
      }
    });
    
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <Terminal />
      <div className="mt-6 text-terminal-gray text-xs opacity-50">
        © {new Date().getFullYear()} Brandon Hall • Press ↑↑↓↓←→←→BA for a surprise
      </div>
    </div>
  );
};

export default Index;
