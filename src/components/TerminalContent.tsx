
import React, { useState } from 'react';
import ASCIIPortrait from './ASCIIPortrait';
import { ExperienceSection, ProjectsSection, SkillsSection } from './TerminalSections';

enum Section {
  MENU,
  EXPERIENCE,
  PROJECTS,
  SKILLS
}

const TerminalContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.MENU);
  const [typedCommand, setTypedCommand] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  
  const handleSectionClick = (section: Section, command: string) => {
    // Simulate typing effect
    setIsTyping(true);
    setTypedCommand('');
    
    const typeCommand = (index: number) => {
      if (index <= command.length) {
        setTypedCommand(command.substring(0, index));
        setTimeout(() => typeCommand(index + 1), 50);
      } else {
        // Command completed, show section after a brief delay
        setTimeout(() => {
          setIsTyping(false);
          setActiveSection(section);
        }, 300);
      }
    };
    
    typeCommand(0);
  };
  
  const returnToMenu = () => {
    handleSectionClick(Section.MENU, 'ls sections/');
  };

  return (
    <div className="terminal-content">
      {/* Introduction */}
      <div className="command-prompt mb-2">brandon@hall:~$ cat intro.txt</div>
      <div className="command-output mb-6">
        Welcome to my terminal portfolio
      </div>
      
      {/* ASCII Portrait */}
      <ASCIIPortrait />
      
      {/* Section Selection Menu */}
      {activeSection === Section.MENU && (
        <>
          <div className="command-prompt mb-2">brandon@hall:~$ ls sections/</div>
          <div className="flex flex-wrap justify-center mb-4">
            <button 
              className="section-button"
              onClick={() => handleSectionClick(Section.EXPERIENCE, 'cat Experience.md')}
            >
              [Experience]
            </button>
            <button 
              className="section-button"
              onClick={() => handleSectionClick(Section.PROJECTS, 'cat Projects.md')}
            >
              [Projects]
            </button>
            <button 
              className="section-button"
              onClick={() => handleSectionClick(Section.SKILLS, 'cat Skills.md')}
            >
              [Skills]
            </button>
          </div>
          <div className="command-prompt cursor">
            brandon@hall:~$ {isTyping ? typedCommand : ''}
          </div>
        </>
      )}
      
      {/* Section Content */}
      {activeSection === Section.EXPERIENCE && (
        <>
          <div className="command-prompt mb-4">brandon@hall:~$ cat Experience.md</div>
          <ExperienceSection returnToMenu={returnToMenu} />
        </>
      )}
      
      {activeSection === Section.PROJECTS && (
        <>
          <div className="command-prompt mb-4">brandon@hall:~$ cat Projects.md</div>
          <ProjectsSection returnToMenu={returnToMenu} />
        </>
      )}
      
      {activeSection === Section.SKILLS && (
        <>
          <div className="command-prompt mb-4">brandon@hall:~$ cat Skills.md</div>
          <SkillsSection returnToMenu={returnToMenu} />
        </>
      )}
    </div>
  );
};

export default TerminalContent;
