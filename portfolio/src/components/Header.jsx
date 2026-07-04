
import React, { useEffect } from 'react';
import my_profile_img from './assets/img/my-profile-img.jpg';

const Header = () => {
  useEffect(() => {
    const headerToggleBtn = document.querySelector('.header-toggle');
    const header = document.querySelector('#header');

    if (headerToggleBtn) {
      const headerToggle = () => {
        header.classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
      };

      headerToggleBtn.addEventListener('click', headerToggle);

      document.querySelectorAll('#navmenu a').forEach((navmenu) => {
        navmenu.addEventListener('click', () => {
          if (header.classList.contains('header-show')) {
            headerToggle();
          }
        });
      });
    }
  }, []);

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
        <img src={my_profile_img} alt="Muse Teshome Dejene" className="img-fluid rounded-circle" />
      </div>

      <div to="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Muse Teshome</h1>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className="active">
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#resume">
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#services">
              <i className="bi bi-hdd-stack navicon"></i> Services
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="social-links text-center mt-3">
        <a href="https://www.linkedin.com/in/moses-teshome/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mx-2"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/Mosesteshome" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mx-2"><i className="bi bi-github"></i></a>
        <a href="mailto:mosesteshome@gmail.com" aria-label="Email" className="mx-2"><i className="bi bi-envelope"></i></a>
      </div>
    </header>
  );
};

export default Header;