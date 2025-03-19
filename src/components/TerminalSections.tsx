
import React from 'react';
import SkillBar from './SkillBar';

interface SectionProps {
  returnToMenu: () => void;
}

export const ExperienceSection: React.FC<SectionProps> = ({ returnToMenu }) => {
  return (
    <div className="command-output animate-fade-in">
      <h1 className="section-title text-xl mb-6"># WORK EXPERIENCE</h1>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## National Commercial Bank (Sep 2023 – Present)</h2>
        <p className="text-terminal-green mb-2">&gt; Software Developer | Kingston, Jamaica</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Perform real-time monitoring and issue resolution for core banking systems using SQL and Unix-based applications.</li>
          <li>Implemented additional functionality for an internal core systems notification tool using C#.</li>
          <li>Developed a SOAP API to assist with regulatory compliance using Spring Boot, PL/SQL, and XML.</li>
          <li>Enhanced transaction parsing logic in a core banking system using Spring Boot, reducing false errors.</li>
          <li>Optimised a PL/SQL package by adding safeguards, reducing transactional redundancies by 99%.</li>
          <li>Managed core banking system failover validations ensuring 100% operational continuity on backup servers.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## Optima Innovations (Mar 2023 – Aug 2023)</h2>
        <p className="text-terminal-green mb-2">&gt; Full Stack Developer | Kingston, Jamaica</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Designed and developed a food delivery app with over 2,800 users using React Native and Firebase.</li>
          <li>Built RESTful APIs for a fleet management system with Node.js and MongoDB.</li>
          <li>Created a comprehensive admin panel with React.js for managing restaurants, orders, and drivers.</li>
          <li>Implemented real-time updates for order tracking, improving customer experience.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## J-Tech Digital Solutions (Jun 2022 – Feb 2023)</h2>
        <p className="text-terminal-green mb-2">&gt; Junior Software Developer | Saint Catherine, Jamaica</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Developed and maintained web applications using Spring Boot, JPA, and PostgreSQL.</li>
          <li>Created responsive frontend interfaces with TypeScript, React, and Material-UI.</li>
          <li>Collaborated with design team to implement UI/UX improvements, increasing user engagement by 25%.</li>
          <li>Optimized database queries, reducing average page load time by 40%.</li>
        </ul>
      </div>
      
      <div className="mt-6">
        <button onClick={returnToMenu} className="terminal-link">
          brandon@hall:~$ cd ..
        </button>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC<SectionProps> = ({ returnToMenu }) => {
  return (
    <div className="command-output animate-fade-in">
      <h1 className="section-title text-xl mb-6"># PROJECTS</h1>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## Workout Tracking App <span className="text-blue-400">[Code]</span></h2>
        <p className="text-terminal-green mb-3">&gt; Spring Boot, PostgreSQL, React Native (Expo)</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>This workout tracking app is being developed to help users log, monitor, and analyze their fitness activities.</li>
          <li>Allows users to record workout sessions, track exercises with details like sets, reps, and weights, and measure progress over time.</li>
          <li>Implemented JWT authentication, real-time progress charts, and workout history analytics.</li>
          <li>Added cloud synchronization to ensure workout data is accessible across devices.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## E-commerce Platform <span className="text-blue-400">[Live Demo]</span></h2>
        <p className="text-terminal-green mb-3">&gt; React, Node.js, Express, MongoDB</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Built a scalable e-commerce platform with complete product management, user authentication, and payment processing capabilities.</li>
          <li>Integrated with Stripe for payment processing and AWS S3 for image storage.</li>
          <li>Implemented responsive design principles for optimal mobile and desktop experiences.</li>
          <li>Added advanced product filtering, sorting, and recommendation features.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## Banking System Simulator <span className="text-blue-400">[Code]</span></h2>
        <p className="text-terminal-green mb-3">&gt; Java, Spring Boot, PostgreSQL</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Developed a banking system simulator that models core banking operations such as account management, transfers, and transaction processing.</li>
          <li>Implemented comprehensive transaction logging and audit trails.</li>
          <li>Added features for interest calculation, scheduled payments, and account reporting.</li>
          <li>Ensured ACID compliance for all database transactions with proper error handling and rollback mechanisms.</li>
        </ul>
      </div>
      
      <div className="mt-6">
        <button onClick={returnToMenu} className="terminal-link">
          brandon@hall:~$ cd ..
        </button>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC<SectionProps> = ({ returnToMenu }) => {
  return (
    <div className="command-output animate-fade-in">
      <h1 className="section-title text-xl mb-6"># TECHNICAL SKILLS</h1>
      
      <div className="mb-6">
        <h2 className="text-terminal-green-light font-bold mb-3">## Languages</h2>
        <div className="space-y-2">
          <SkillBar name="Java" percentage={90} delay={100} />
          <SkillBar name="Python" percentage={80} delay={200} />
          <SkillBar name="TypeScript" percentage={80} delay={300} />
          <SkillBar name="JavaScript" percentage={80} delay={400} />
          <SkillBar name="SQL" percentage={90} delay={500} />
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-terminal-green-light font-bold mb-3">## Frameworks & Libraries</h2>
        <div className="space-y-2">
          <SkillBar name="Spring Boot" percentage={85} delay={600} />
          <SkillBar name="React" percentage={75} delay={700} />
          <SkillBar name="Node.js" percentage={70} delay={800} />
          <SkillBar name="Express" percentage={75} delay={900} />
          <SkillBar name="Hibernate" percentage={80} delay={1000} />
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-terminal-green-light font-bold mb-3">## Cloud & DevOps</h2>
        <div className="space-y-2">
          <SkillBar name="AWS" percentage={85} delay={1100} />
          <SkillBar name="Docker" percentage={70} delay={1200} />
          <SkillBar name="CI/CD" percentage={75} delay={1300} />
          <SkillBar name="Git" percentage={90} delay={1400} />
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-terminal-green-light font-bold mb-3">## Databases</h2>
        <div className="space-y-2">
          <SkillBar name="PostgreSQL" percentage={90} delay={1500} />
          <SkillBar name="MongoDB" percentage={75} delay={1600} />
          <SkillBar name="Redis" percentage={65} delay={1700} />
          <SkillBar name="Oracle" percentage={80} delay={1800} />
        </div>
      </div>
      
      <div className="mt-6">
        <button onClick={returnToMenu} className="terminal-link">
          brandon@hall:~$ cd ..
        </button>
      </div>
    </div>
  );
};
