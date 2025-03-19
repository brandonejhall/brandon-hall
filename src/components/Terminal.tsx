
import React, { useState, useEffect } from 'react';
import TerminalHeader from './TerminalHeader';
import TerminalContent from './TerminalContent';

const Terminal: React.FC = () => {
  const [bootComplete, setBootComplete] = useState(false);
  
  useEffect(() => {
    // Complete boot sequence after 3 seconds
    const timer = setTimeout(() => {
      setBootComplete(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Boot Sequence */}
      <div className={`boot-sequence ${bootComplete ? 'hidden' : ''}`}>
        <div className="boot-line">&gt; System initializing...</div>
        <div className="boot-line">&gt; Loading profile data...</div>
        <div className="boot-line">&gt; Initializing display...</div>
        <div className="boot-line">&gt; Rendering interface...</div>
        <div className="boot-line">&gt; Ready.</div>
      </div>
      
      {/* Terminal Window */}
      <div className="terminal-window">
        <TerminalHeader />
        <TerminalContent />
      </div>
    </>
  );
};

export default Terminal;
