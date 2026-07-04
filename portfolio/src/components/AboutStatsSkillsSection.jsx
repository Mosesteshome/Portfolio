import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';
import profile_img from './assets/img/my-profile-img.jpg';

const AboutStatsSkillsSection = () => {
  useEffect(() => {
    new PureCounter();

    // Initialize Intersection Observer for skills animation
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let progress = entry.target.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    skillsAnimation.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <section id="about-stats-skills" className="about-stats-skills section">
      {/* About Section */}
      <section id="about" className="about">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I am a <b>data analyst</b> and <b>product manager</b> with 3+ years of experience turning complex, multi-source data into decisions that move the business. At <b>beU Delivery</b> I built the analytics foundation the company runs on — a <b>Tableau dashboard ecosystem</b> used by <b>32+ daily users</b> and automated <b>Python &amp; Streamlit</b> reporting pipelines that save <b>5+ hours per department each week</b> — and was promoted from Junior Data Analyst to <b>Product Manager</b> on the strength of that impact. I work fluently across <b>SQL (MySQL, PostgreSQL)</b>, <b>Python</b>, <b>Power BI</b>, <b>Metabase</b>, and <b>BigQuery</b>, and I bring the same data-first thinking to product strategy, cohort &amp; retention analysis, and stakeholder communication. I care about finding the <b>simplest</b> solution that actually works.
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={profile_img} className="img-fluid" alt="Portrait of Muse Teshome Dejene" loading="lazy" />
            </div>
            <div className="col-lg-8 content">
              <h2>Data Analyst &amp; Product Manager.</h2>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mosesteshome@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+251 960 184 195</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Addis Ababa, Ethiopia</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSc, Software Engineering</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Current:</strong> <span>Product Manager @ beU Delivery</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Remote:</strong> <span>Open to remote roles</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-calendar-check"></i>
                <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Years in Data &amp; Product</strong></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-people"></i>
                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Daily Dashboard Users</strong></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-bar-chart-line"></i>
                <span data-purecounter-start="0" data-purecounter-end="9" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Analytics Solutions Shipped</strong></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-clock-history"></i>
                <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Hours Saved / Dept / Week</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>I possess a diverse skill set in data analysis, web development, and automation, with hands-on experience in the latest tools and technologies to deliver impactful solutions.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>SQL &amp; Databases (MySQL, PostgreSQL, BigQuery)</span> <i className="val">92%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Data Visualization (Tableau, Power BI, Metabase, Streamlit)</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Python for Data (Pandas, NumPy)</span> <i className="val">88%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>Product &amp; User Analytics (KPIs, Cohort, Retention, A/B)</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Statistical Analysis (Stata, R)</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Web &amp; Mobile (React, Flutter/Dart)</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutStatsSkillsSection;