// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>Bartłomiej Barański</h1>
        <div className="navbar-icons">
          <a href="https://www.linkedin.com/in/bartlomiej-baranski-bartbaranski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/bartbaranski" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
        <div className="separator"></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
