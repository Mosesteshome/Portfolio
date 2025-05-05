
import React from 'react';

const ServicesSection = () => (
  <section id="services" className="services section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Whether you're a business looking to make data-driven decisions, a startup needing a backend system, or someone with an idea for a mobile app — I’ve got you covered.</p>
    </div>
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
          <div>
            <h4 className="title">Data Analysis & Visualization</h4>
            <p className="description">I clean and transform raw data for accuracy, create interactive dashboards with Streamlit, Power BI, and Tableau, and apply statistical analysis using Stata and SPSS for deeper insights.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
          <div>
            <h4 className="title">Full-Stack Web Development</h4>
            <p className="description">I build scalable backend systems with Node.js and Express, develop responsive frontends using React, and manage databases with SQL and MongoDB for optimized performance.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
          <div>
            <h4 className="title">Mobile App Development</h4>
            <p className="description">Create smooth, responsive mobile apps using Flutter — ideal for startups and businesses looking to go mobile-first.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;