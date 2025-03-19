
import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  // Generate the visual bar representation
  const generateBar = () => {
    const filledBoxes = Math.floor(percentage / 10);
    const emptyBoxes = 10 - filledBoxes;
    
    return `[${'█'.repeat(filledBoxes)}${'░'.repeat(emptyBoxes)}] ${percentage}%`;
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row md:items-center">
      <div className="w-24 font-semibold text-terminal-green truncate mr-4">{name}</div>
      <div className="flex-1 font-mono tracking-wider text-terminal-green-light" ref={skillRef}>
        <div className="skill-bar-container">
          <div 
            className="skill-bar-fill" 
            style={{ width: visible ? `${percentage}%` : '0%' }}
          ></div>
        </div>
        <div className="mt-1 text-sm">{generateBar()}</div>
      </div>
    </div>
  );
};

export default SkillBar;
