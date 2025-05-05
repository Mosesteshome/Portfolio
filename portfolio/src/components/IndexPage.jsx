  import React, { useEffect, useState } from 'react';
  import './assets/styles/main.css';
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap-icons/font/bootstrap-icons.css";
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  // Components
  import HeroSection from './HeroSection';
  import PortfolioSection from './PortfolioSection';
  import ContactSection from './ContactSection';
  import AboutStatsSkillsSection from './AboutStatsSkillsSection';
  import Header from './Header';
  import ResumeSection from './ResumeSection';
  import ServicesSection from './ServicesSection';

  function IndexPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });

      // Handle preloader
      const handleLoad = () => setLoading(false);
      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);

    useEffect(() => {
      const headerToggleBtn = document.querySelector('.header-toggle');
      const header = document.querySelector('#header');

      const toggleHeader = () => {
        header.classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
      };

      headerToggleBtn?.addEventListener('click', toggleHeader);

      const navLinks = document.querySelectorAll('#navmenu a');
      const handleNavClick = () => {
        if (header.classList.contains('header-show')) {
          header.classList.remove('header-show');
          headerToggleBtn.classList.toggle('bi-list');
          headerToggleBtn.classList.toggle('bi-x');
        }
      };

      navLinks.forEach(link => link.addEventListener('click', handleNavClick));

      return () => {
        headerToggleBtn?.removeEventListener('click', toggleHeader);
        navLinks.forEach(link => link.removeEventListener('click', handleNavClick));
      };
    }, []);

    useEffect(() => {
      const scrollTop = document.querySelector('.scroll-top');
      const toggleScrollTop = () => {
        if (window.scrollY > 100) {
          scrollTop?.classList.add('active');
        } else {
          scrollTop?.classList.remove('active');
        }
      };

      const handleScrollTopClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      scrollTop?.addEventListener('click', handleScrollTopClick);
      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);

      return () => {
        scrollTop?.removeEventListener('click', handleScrollTopClick);
        document.removeEventListener('scroll', toggleScrollTop);
      };
    }, []);

    useEffect(() => {
      // Handle hash link scroll
      const handleHashScroll = () => {
        if (window.location.hash && document.querySelector(window.location.hash)) {
          const section = document.querySelector(window.location.hash);
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      };
      window.addEventListener('load', handleHashScroll);
      return () => window.removeEventListener('load', handleHashScroll);
    }, []);

    useEffect(() => {
      const navmenulinks = document.querySelectorAll('.navmenu a');
      const navmenuScrollspy = () => {
        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          const section = document.querySelector(navmenulink.hash);
          if (!section) return;
          const position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        });
      };
      window.addEventListener('load', navmenuScrollspy);
      document.addEventListener('scroll', navmenuScrollspy);

      return () => {
        window.removeEventListener('load', navmenuScrollspy);
        document.removeEventListener('scroll', navmenuScrollspy);
      };
    }, []);

    return (
      <div className="index-page">
        {/* {loading && <div id="preloader">Loading...</div>} */}
        <Header />
        <main className="main">
          <HeroSection />
          <AboutStatsSkillsSection />
          <ResumeSection />
          <PortfolioSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <footer
          id="footer"
          className="footer position-relative light-background"
        >
          <div className="container">
            <div className="copyright text-center">
              <p>
                © 2025 <strong className="px-1 sitename">Muse Teshome</strong>.
                Built with React. Inspired by the iPortfolio template.
              </p>
            </div>
            <div className="credits">
              Original design by{" "}
              <a
                href="https://bootstrapmade.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BootstrapMade
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  export default IndexPage;
