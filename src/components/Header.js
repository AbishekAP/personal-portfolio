import React, { useState,useEffect } from 'react';
import { IonIcon } from '@ionic/react'; // Import the IonIcon component from @ionic/react
import { menuOutline, closeOutline } from 'ionicons/icons'; // Import the specific icons

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <header className={`header ${navActive ? 'nav-active' : ''} ${isVisible ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#home">
          <h1 className="logo">Abishek R</h1>
        </a>

        <button
          className={`nav-toggle-btn ${navActive ? 'active' : ''}`}
          aria-label="Toggle Menu"
          data-nav-toggle-btn
          onClick={toggleNav}
        >
          {navActive ? (
            <IonIcon icon={closeOutline} className="close-icon" />
          ) : (
            <IonIcon icon={menuOutline} className="menu-icon" />
          )}
        </button>

        <nav className="navbar container">
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link onClick={closeNav}>Home</a>
            </li>
            <li>
              <a href="#about" className="navbar-link" data-nav-link onClick={closeNav}>About</a>
            </li>
            <li>
              <a href="#projects" className="navbar-link" data-nav-link onClick={closeNav}>Projects</a>
            </li>
            <li>
              <a href="#skills" className="navbar-link" data-nav-link onClick={closeNav}>Skills</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link" data-nav-link onClick={closeNav}>Contact</a>
            </li>
            <li>
              <a href="/resume/Abishek-React-Resume.pdf" target='_blank' rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
