// src/Components/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faGraduationCap, faEnvelope, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef(null);

  const handleToggle = () => setExpanded(!expanded);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setExpanded(false);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  return (
    <>
      <button className="menu-button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        ref={sidebarRef}
        className={`sidebar ${expanded ? 'expanded' : ''}`}
        onMouseEnter={() => window.innerWidth > 768 && setExpanded(true)}
        onMouseLeave={() => window.innerWidth > 768 && setExpanded(false)}
      >
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>JS</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faUser} />
                {expanded && <span>Sobre Mí</span>}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faProjectDiagram} />
                {expanded && <span>Mis Proyectos</span>}
              </Link>
            </li>
            <li>
              <Link to="/training" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faGraduationCap} />
                {expanded && <span>Formación</span>}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faEnvelope} />
                {expanded && <span>Contacto</span>}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`social-media ${expanded ? 'expanded' : 'collapsed'}`}>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </div>
        <div className="cta">
          <a href="/resume.pdf" download className="btn" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faDownload} />
            {expanded && <span>Descargar CV</span>}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
