
import React from 'react';

const ServicesSection = () => (
  <section id="services" className="services section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>I help teams turn raw, messy data into decisions they can trust — from the SQL pipeline all the way to the product roadmap.</p>
    </div>
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
          <div>
            <h4 className="title">Dashboards &amp; Data Visualization</h4>
            <p className="description">I design decision-driving dashboards in Tableau, Power BI, Metabase, and Streamlit — turning KPIs into near-real-time, self-serve views that stakeholders actually use.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="icon flex-shrink-0"><i className="bi bi-diagram-3"></i></div>
          <div>
            <h4 className="title">SQL, Pipelines &amp; Automation</h4>
            <p className="description">I write and optimize SQL (MySQL, PostgreSQL, BigQuery) and automate reporting with Python and Streamlit — replacing hours of manual work with live, always-on data.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <div className="icon flex-shrink-0"><i className="bi bi-lightbulb"></i></div>
          <div>
            <h4 className="title">Product &amp; Growth Analytics</h4>
            <p className="description">I bring data-first product thinking — cohort &amp; retention analysis, KPI monitoring, and A/B testing support — to help teams decide what to build and prioritize next.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;