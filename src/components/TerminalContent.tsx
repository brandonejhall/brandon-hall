
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
    setIsTyping(true);
    setTypedCommand('');
    
    const typeCommand = (index: number) => {
      if (index <= command.length) {
        setTypedCommand(command.substring(0, index));
        setTimeout(() => typeCommand(index + 1), 50);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setActiveSection(section);
        }, 300);
      }
    };
    
    typeCommand(0);
  };

  const getCommandForSection = (section: Section): string => {
    switch(section) {
      case Section.EXPERIENCE: return 'cat Experience.md';
      case Section.PROJECTS: return 'cat Projects.md';
      case Section.SKILLS: return 'cat Skills.md';
      default: return 'ls sections/';
    }
  };

  return (
    <div className="terminal-content">
      <div className="command-prompt mb-2">brandon@hall:~$ cat intro.txt</div>
      <div className="command-output mb-6">
        <p>Explore my experience, projects, and skills using the navigation buttons below.</p>
      </div>
      
      <ASCIIPortrait />
      
      <div className="flex flex-wrap justify-center mb-4">
        <button 
          className={`section-button ${activeSection === Section.EXPERIENCE ? 'active' : ''}`}
          onClick={() => handleSectionClick(Section.EXPERIENCE, getCommandForSection(Section.EXPERIENCE))}
        >
          [Experience]
        </button>
        <button 
          className={`section-button ${activeSection === Section.PROJECTS ? 'active' : ''}`}
          onClick={() => handleSectionClick(Section.PROJECTS, getCommandForSection(Section.PROJECTS))}
        >
          [Projects]
        </button>
        <button 
          className={`section-button ${activeSection === Section.SKILLS ? 'active' : ''}`}
          onClick={() => handleSectionClick(Section.SKILLS, getCommandForSection(Section.SKILLS))}
        >
          [Skills]
        </button>
      </div>
      
      <div className="command-prompt mb-4">
        brandon@hall:~$ {isTyping ? typedCommand : getCommandForSection(activeSection)}
      </div>
      
      {activeSection === Section.EXPERIENCE && (
        <ExperienceSection />
      )}
      
      {activeSection === Section.PROJECTS && (
        <ProjectsSection />
      )}
      
      {activeSection === Section.SKILLS && (
        <SkillsSection />
      )}
    </div>
  );
};

export default TerminalContent;
