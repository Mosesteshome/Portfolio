
import React from 'react';

const ResumeSection = () => (
  <section id="resume" className="resume section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Resume</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4>Brandon Johnson</h4>
            <p>
              <em>
                Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
              </em>
            </p>
            <ul>
              <li>Portland par 127, Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div>
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Science &amp; Software Engineering</h4>
            <h5>2018 - 2022</h5>
            <p><em>Addis Ababa Science and Technology University</em></p>
          </div>
          <h3 className="resume-title">Skills</h3>
          <div className="resume-item">
            <p><em>Programming Languages: Python</em></p>
            <p><em>Frameworks and Libraries: Django, SQLite, Panda, Numpy, Streamlit</em></p>
            <p><em>Data Analysis Tools: Power BI, Stata</em></p>
            <p><em>Front-End Development: React</em></p>
            <p>
              <em>
                Soft Skills: Proven track record of handling complex projects, prioritizing tasks to meet tight deadlines while ensuring precision in deliverables. Skilled in fostering clear communication across teams to drive project success and maintain high standards.
              </em>
            </p>
            <p><em>Survey Software: SurveyCTO</em></p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Data Analyst</h4>
            <h5>Feb 2025 - Present</h5>
            <p><em>beU Delivery</em></p>
            <ul>
              <li>Perform exploratory data analysis (EDA) to identify trends, patterns, and outliers in delivery performance and operational data.</li>
              <li>Develop and maintain interactive dashboards in Streamlit to monitor KPIs like order volume and success rates, reducing manual work by 95% and providing 24/7 real-time insights for stakeholders.</li>
              <li>Create custom reports for executives and operations teams.</li>
              <li>Collaborate with logistics, marketing, and IT teams to ensure accurate, accessible, and up-to-date data.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Data Analyst</h4>
            <h5>Feb 2023 - 2025</h5>
            <p><em>Zerihun Association</em></p>
            <ul>
              <li>Automated data cleaning, transformation, and visualization workflows using Python scripts for improved decision-making.</li>
              <li>Developed and deployed 10+ complex surveys using SurveyCTO.</li>
              <li>Developed interactive dashboards in Power BI that integrated live survey data, enabling real-time visualization and analysis; improved decision-making speed by 40% for key stakeholders within the organization.</li>
              <li>Used Stata for advanced statistical analysis.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeSection;