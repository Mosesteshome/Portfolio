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
      <img src={hero_bg} alt="" data-aos="fade-in" className="" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Muse Teshome</h2>
        <p>
          I'm <span className="typed" data-typed-items="Software Engineer, Data analyst, Freelancer">Designer</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;