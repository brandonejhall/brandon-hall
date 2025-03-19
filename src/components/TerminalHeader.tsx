
import React from 'react';

const TerminalHeader: React.FC = () => {
  return (
    <div className="flex items-center px-4 py-2 bg-[#1a1a1a] border-b border-terminal-border">
      <div className="flex space-x-2 mr-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 text-center text-xs text-terminal-gray">
        brandon@hall: ~/portfolio
      </div>
    </div>
  );
};

export default TerminalHeader;
