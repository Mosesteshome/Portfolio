import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RHISN1 from "./assets/img/portfolio/RHISNproject/1.png";
import website from "./assets/img/portfolio/website-portfolio.png";
import streamlit1 from "./assets/img/portfolio/Streamlit/1.jpeg";
import yebenfund from "./assets/img/portfolio/yebenfund.png";
import gametracker1 from "./assets/img/portfolio/game-tracker/1.png";

const PortfolioSection = () => {
  useEffect(() => {
    const filters = document.querySelectorAll(".portfolio-filters li");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        // Remove active class from all filters
        filters.forEach((f) => f.classList.remove("filter-active"));
        // Add active class to the clicked filter
        filter.classList.add("filter-active");

        const filterValue = filter.getAttribute("data-filter");
        portfolioItems.forEach((item) => {
          if (
            filterValue === "*" ||
            item.classList.contains(filterValue.substring(1))
          ) {
            item.classList.remove("d-none", "animate__fadeOut");
            item.classList.add("animate__animated", "animate__fadeIn");
          } else {
            item.classList.remove("animate__fadeIn");
            item.classList.add("animate__animated", "animate__fadeOut");
            setTimeout(() => {
              item.classList.add("d-none");
            }, 500); // Match the duration of the animation
          }
        });
      });
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Take a look at some of my work below. Each project reflects my skills
          in data analysis, backend development, mobile app development, and
          turning ideas into practical solutions.
        </p>
      </div>
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">Power bi</li>
            <li data-filter=".filter-product">App</li>
            <li data-filter=".filter-branding">Website</li>
            <li data-filter=".filter-books">Python</li>
          </ul>
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100 animate__animated">
                <img src={RHISN1} className="img-fluid" alt="Power BI dashboard built by Muse Teshome" loading="lazy" />
                <div className="portfolio-info">
                  <h4>Workforce Readiness Dashboard</h4>
                  <p>Power BI · M&amp;E Analytics</p>
                  <Link
                    to="/portfolio-details/1"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100 animate__animated">
                <img src={website} className="img-fluid" alt="Portfolio website project by Muse Teshome" loading="lazy" />
                <div className="portfolio-info">
                  <h4>Portfolio Website</h4>
                  <p>Website Project</p>
                  <Link
                    to="/portfolio-details/3"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-product">
              <div className="portfolio-content h-100 animate__animated">
                <img src={yebenfund} className="img-fluid" alt="YeBen Endowment Fund website and mobile app built by Muse Teshome" loading="lazy" />
                <div className="portfolio-info">
                  <h4>YeBen Endowment Fund</h4>
                  <p>Full-Stack Web </p>
                  <Link
                    to="/portfolio-details/4"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Add additional portfolio items here following the same structure */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-product">
              <div className="portfolio-content h-100 animate__animated">
                <img src={gametracker1} className="img-fluid" alt="PS House PlayStation lounge management system built by Muse Teshome" loading="lazy" />
                <div className="portfolio-info">
                  <h4>PS House Tracker</h4>
                  <p>Progressive Web App ·  JS</p>
                  <Link
                    to="/portfolio-details/5"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                <div className="portfolio-content h-100 animate__animated">
                  <img src={streamlit1} className="img-fluid" alt="Streamlit and SQL analytics dashboard by Muse Teshome" loading="lazy" />
                  <div className="portfolio-info">
                    <h4>beU Delivery Operations Analytics</h4>
                    <p>Python · SQL · Streamlit</p>
                    <Link
                      to="/portfolio-details/2"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
