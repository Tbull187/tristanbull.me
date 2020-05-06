import React from 'react';
import logo from './assets/logo.svg';
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
          <div className="resume-link">
            <a 
              className="italic"
              href="bull-tristan-resume.pdf"
              download
              >
                Resume
            </a>
          </div>
          <div>
            <a 
              className="italic" 
              href="mailto:tristan.tbull@gmail.com?subject=Reaching out from tristanbull.me"
              target="_blank"
              rel="noopener noreferrer">
                Contact Me
            </a>
          </div>
        </div>

      </header>
      {/* <div className="content">

      </div> */}
    </div>
  );
}

export default App;
