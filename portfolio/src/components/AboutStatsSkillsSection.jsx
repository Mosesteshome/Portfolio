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
            I am a <b>data analyst</b> and <b>full-stack web developer</b> with a strong focus on delivering efficient, data-driven solutions and scalable web applications. I have experience in <b>data visualization</b>, <b>statistical analysis</b>, and <b>automation</b>, helping organizations turn raw data into actionable insights. In web development, I have built and deployed applications, including a <b>football field reservation system</b> using <b>React</b> for the frontend and <b>Node.js</b> for the backend. My approach combines <b>technical expertise</b> with a commitment to meeting <b>deadlines</b> and ensuring <b>high-quality results</b>. Whether it’s analyzing complex datasets or developing robust web solutions, I am dedicated to delivering work that drives impact.
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={profile_img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>Data Analyst &amp; Web Developer.</h2>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>25 March 2000</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mosesteshome@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+251960184195</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Addis Ababa, Ethiopia</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Software Engineer</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
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
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Happy Clients</strong></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Projects</strong></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="180" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Hours Of Support</strong></p>
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
                <span className="skill"><span>Data Visualization (Streamlit, Power BI, Tableau)</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Statistical Analysis (Stata, SPSS)</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Programming (Python, R, SQL)</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>Excel & Google Apps Script</span> <i className="val">88%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Frontend Development (React)</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Backend Development (Node.js)</span> <i className="val">75%</i></span>
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