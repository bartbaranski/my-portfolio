// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaOrcid } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <span className="brand-mark" aria-hidden="true">BB</span>
          <div className="brand-copy">
            <h1>Bartłomiej Barański</h1>
            <span>Data · Technology · Law</span>
          </div>
        </div>
        <div className="navbar-icons">
          <a href="https://www.linkedin.com/in/bartlomiej-baranski-bartbaranski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/bartbaranski" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://orcid.org/0009-0003-1805-6432" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
            <FaOrcid />
          </a>
        </div>
        <div className="separator"></div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
          <li><NavLink to="/publications">Publications</NavLink></li>
          <li><NavLink to="/certificates">Certificates</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
