import React from 'react';
import logo from './logo.svg';
import { SkillBar } from './components/SkillBar';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="name-text animated fadeInLeft">Tristan Bull</div>
        <div className="role-container">
          <div className="role-text animated fadeInLeft">front end engineer</div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="blurb animated fadeIn delay-1s">
          From scrappy start-ups to big-name tech companies, I use my knowledge of frontend
          development, service-based web architecture, databases, and cloud computing to
          craft simple solutions to complex business problems.
        </p>

        <div className="btn-group animated fadeIn delay-1s">
          <div>
            <a 
              className="link italic"
              href="bull-tristan-resume.pdf"
              download
              >
                Resume
            </a>
          </div>
          <div>
            <a 
              className="link italic" 
              href="mailto:tristan.tbull@gmail.com?subject=Reaching out from tristanbull.me"
              target="_blank"
              rel="noopener noreferrer">
                Contact Me
            </a>
          </div>
        </div>

      </header>
        <div className="content">
          <div className="skills-container">            
            <SkillBar skill="HTML" percent="100"/>
            <SkillBar skill="CSS" percent="100" />
            <SkillBar skill="JavaScript" percent="100" />
            <SkillBar skill="React" percent="90" />
            <SkillBar skill="Node.js" percent="70" />
            <SkillBar skill="AWS" percent="60" />
            <SkillBar skill="C#" percent="50" />
            <SkillBar skill="Test Automation" percent="60" />
          </div>
        </div>
    </div>
  );
}

export default App;
