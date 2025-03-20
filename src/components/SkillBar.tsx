
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage?: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage = 0, delay = 0 }) => {
  // Component kept for backward compatibility but no longer used with percentages
  return (
    <div className="mb-4 flex flex-col md:flex-row md:items-center">
      <div className="w-24 font-semibold text-terminal-green truncate mr-4">{name}</div>
      <div className="flex-1 font-mono tracking-wider text-terminal-green-light">
        <span className="skill-tag">{name}</span>
      </div>
    </div>
  );
};

export default SkillBar;
