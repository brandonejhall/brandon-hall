
import React from 'react';
import SkillBar from './SkillBar';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="command-output animate-fade-in">
      <h1 className="section-title text-xl mb-6"># WORK EXPERIENCE</h1>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## Financial Institution (Sep 2023 – Present)</h2>
        <p className="text-terminal-green mb-2">&gt; Software Developer | Kingston, Jamaica</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Perform real-time monitoring and issue resolution for core banking systems using SQL and Unix-based applications.</li>
          <li>Implemented additional functionality for an internal core systems notification tool using C#.</li>
          <li>Developed a SOAP API to assist with regulatory compliance using Spring Boot, PL/SQL, and XML.</li>
          <li>Enhanced transaction parsing logic in a core banking system using Spring Boot, reducing false errors.</li>
          <li>Optimized a PL/SQL package by adding safeguards, reducing transactional redundancies.</li>
          <li>Managed core banking system failover validations ensuring operational continuity on backup servers.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## Financial Institution (May 2023 – Sep 2023)</h2>
        <p className="text-terminal-green mb-2">&gt; Research & Development | Kingston, Jamaica</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Gained exposure to Web Development, Data Analysis, and Agile Methodologies.</li>
          <li>Worked on projects utilizing Ionic, Flask, R, and Power BI.</li>
          <li>Applied Scrum methodology in team-based project development workflows.</li>
          <li>Collaborated with cross-functional teams to deliver analytics dashboards and web applications.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">## Software Development Firm (May 2022 – May 2023)</h2>
        <p className="text-terminal-green mb-2">&gt; Technology Solutions | Kingston, Jamaica</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Developed responsive frontend interfaces using Vue.js, HTML, and CSS.</li>
          <li>Created serverless functions with AWS Lambda and Node.js for backend processes.</li>
          <li>Implemented payment integration systems for e-commerce applications.</li>
          <li>Collaborated with senior developers to improve application performance and user experience.</li>
        </ul>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <div className="command-output animate-fade-in">
      <h1 className="section-title text-xl mb-6"># PROJECTS</h1>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">
          ## Workout Tracking App <a href="https://github.com/ColdCoffeeBeans/Ephyris-engine" target="_blank" rel="noopener noreferrer" className="text-blue-400">[Code]</a>
        </h2>
        <p className="text-terminal-green mb-3">&gt; Spring Boot, PostgreSQL, React Native (Expo)</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Developing a mobile application that helps users log, monitor, and analyze their fitness activities.</li>
          <li>Implementing features for recording workout sessions, tracking exercises with details like sets, reps, and weights.</li>
          <li>Building secure user authentication using JWT and cloud synchronization for cross-device access.</li>
          <li>Creating real-time progress charts and workout history analytics to visualize fitness improvements.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">
          ## SafeZone <a href="https://github.com/ColinACampbell/safezone-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-400">[Code]</a>
        </h2>
        <p className="text-terminal-green mb-3">&gt; Flutter, FastAPI, PostgreSQL</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Designed and developed a mobile application with geofencing and alert features for personal safety.</li>
          <li>Implemented real-time location tracking and emergency notification systems.</li>
          <li>Created a REST API backend with FastAPI to handle user data and alert processing.</li>
          <li>Built an intuitive UI/UX focused on simplicity and rapid access during emergency situations.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green-light font-bold mb-1">
          ## UWI Career Services Platform <a href="https://github.com/brandonejhall/UWI-Career-Services-and-Placement-Booking-Platform" target="_blank" rel="noopener noreferrer" className="text-blue-400">[Code]</a>
        </h2>
        <p className="text-terminal-green mb-3">&gt; Flask, HTML, SQLAlchemy, JavaScript</p>
        <ul className="list-disc list-inside space-y-2 text-terminal-gray pl-4">
          <li>Developed a web platform connecting university students with potential employers and internship opportunities.</li>
          <li>Created features for resume uploading, job searching, and application tracking.</li>
          <li>Implemented an administrative dashboard for career services staff to manage job postings and student applications.</li>
          <li>Built responsive interfaces ensuring accessibility across desktop and mobile devices.</li>
        </ul>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <div className="command-output animate-fade-in">
      <h1 className="section-title text-xl mb-6"># TECHNICAL SKILLS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="skill-category">
          <h2 className="text-terminal-green-light font-bold mb-3">## Programming Languages</h2>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h2 className="text-terminal-green-light font-bold mb-3">## Frontend Technologies</h2>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">React</span>
            <span className="skill-tag">React Native</span>
            <span className="skill-tag">Vue.js</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h2 className="text-terminal-green-light font-bold mb-3">## Backend Technologies</h2>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">FastAPI</span>
            <span className="skill-tag">Node.js</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h2 className="text-terminal-green-light font-bold mb-3">## Database Technologies</h2>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">Oracle SQL</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h2 className="text-terminal-green-light font-bold mb-3">## Cloud & DevOps</h2>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">AWS Lambda</span>
            <span className="skill-tag">AWS Services</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Unix</span>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-terminal-green-light font-bold mb-3">## Education</h2>
        <div className="text-terminal-gray pl-4 mb-3">
          <p className="mb-1"><span className="text-terminal-green">Degree:</span> Bachelor of Science in Software Engineering</p>
          <p className="mb-1"><span className="text-terminal-green">Institution:</span> University of the West Indies, Mona</p>
          <p className="mb-1"><span className="text-terminal-green">Location:</span> Kingston, Jamaica</p>
          <p className="mb-1"><span className="text-terminal-green">Duration:</span> September 2020 - September 2023</p>
          <p className="mb-1"><span className="text-terminal-green">Honors:</span> Second Class Honors (Upper Division)</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-terminal-green-light font-bold mb-3">## Certifications</h2>
        <div className="text-terminal-gray pl-4">
          <p className="mb-1">• AWS Certified Cloud Practitioner</p>
        </div>
      </div>
    </div>
  );
};
