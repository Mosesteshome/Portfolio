import React, { useEffect } from 'react';
import Typed from 'typed.js';
import hero_bg from './assets/img/home-page.png';
const HeroSection = () => {
  useEffect(() => {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={hero_bg} alt="Muse Teshome Dejene — Data Analyst & Product Manager" loading="eager" data-aos="fade-in" className="" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Muse Teshome Dejene</h2>
        <p>
          I'm a <span className="typed" data-typed-items="Data Analyst, Product Manager, Python &amp; SQL Developer, Dashboard Builder">Data Analyst</span>
        </p>
        <p className="hero-availability">Turning data into decisions · Addis Ababa, Ethiopia · <strong>Open to remote roles</strong></p>
        <div className="hero-social" style={{ marginTop: '1rem' }}>
          <a href="https://www.linkedin.com/in/moses-teshome/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ marginRight: '1rem', fontSize: '1.5rem' }}><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/Mosesteshome" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ marginRight: '1rem', fontSize: '1.5rem' }}><i className="bi bi-github"></i></a>
          <a href="mailto:mosesteshome@gmail.com" aria-label="Email" style={{ fontSize: '1.5rem' }}><i className="bi bi-envelope"></i></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
