
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
            <h4>Muse Teshome Dejene</h4>
            <p>
              <em>
                Data Analyst &amp; Product Manager with 3+ years of experience
                transforming complex, multi-source data into product and business
                decisions. I build real-time dashboards, automate reporting
                pipelines, and run cohort &amp; retention analysis with SQL,
                Python, Tableau, Power BI, and Streamlit. Promoted from Data
                Analyst to Product Manager at beU Delivery after building the
                analytics foundation the business now runs on. Open to remote
                opportunities.
              </em>
            </p>
          </div>
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>BSc, Software Engineering</h4>
            <h5>2018 - 2022</h5>
            <p><em>Addis Ababa Science and Technology University</em></p>
          </div>
          <h3 className="resume-title">Skills</h3>
          <div className="resume-item">
            <p><em>SQL &amp; Databases: MySQL, PostgreSQL, BigQuery — complex queries, optimization, ETL</em></p>
            <p><em>Data Visualization: Tableau (Certified), Power BI, Metabase, Streamlit</em></p>
            <p><em>Python &amp; AI: Pandas, NumPy, Streamlit; Python code review for AI training</em></p>
            <p><em>Product &amp; User Analytics: KPI monitoring, cohort analysis, retention, A/B testing</em></p>
            <p><em>Programming: Python, JavaScript / React, Flutter / Dart, R, Stata</em></p>
            <p><em>Field Research &amp; M&amp;E: SurveyCTO, enumerator training, mixed-methods analysis</em></p>
          </div>
          <h3 className="resume-title">Certifications</h3>
          <div className="resume-item">
            <p><em>Tableau Fundamentals — Tableau eLearning</em></p>
            <p><em>Process Data from Dirty to Clean — Google &amp; Coursera</em></p>
            <p><em>Data Analysis with R Programming — Google &amp; Coursera</em></p>
            <p><em>Prepare Data for Exploration — Google &amp; Coursera</em></p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Product Manager</h4>
            <h5>May 2026 - Present</h5>
            <p><em>beU Delivery — Addis Ababa</em></p>
            <ul>
              <li>Promoted to Product Manager after building the company's analytics foundation as a Data Analyst.</li>
              <li>Own product strategy across beU's admin dashboard, customer app, and driver app, prioritizing with engineering, operations, and business teams.</li>
              <li>Make product decisions grounded in real data fluency — pipelines I built myself.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Data Analyst (Junior → Data Analyst)</h4>
            <h5>Jan 2025 - May 2026</h5>
            <p><em>beU Delivery — Addis Ababa</em></p>
            <ul>
              <li>Architected a cross-departmental Tableau dashboard ecosystem delivering near-real-time insights to 32+ users across all business units.</li>
              <li>Engineered automated Python &amp; Streamlit reporting pipelines, eliminating 5+ hours of manual work per department per week.</li>
              <li>Designed and deployed 9+ analytics solutions across logistics (driver tracking, risk zones), payments (refund detection), and business development (cancellation intelligence).</li>
              <li>Led end-to-end Tableau adoption: feasibility assessment, stakeholder alignment, license procurement, and self-serve analytics rollout.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Python Code Reviewer &amp; AI Trainer (Contract)</h4>
            <h5>Dec 2024 - Jan 2025</h5>
            <p><em>Meta AI</em></p>
            <ul>
              <li>Reviewed and debugged Python code samples to produce high-quality labeled data for large language model training.</li>
              <li>Evaluated code correctness, logic, and best practices to improve AI model quality.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Data Analyst</h4>
            <h5>Feb 2023 - Jan 2025</h5>
            <p><em>Zerihun Association — Addis Ababa</em></p>
            <ul>
              <li>Cleaned and analyzed data from digital surveys, CRM-equivalent systems, and field reports for large-scale workforce readiness programs.</li>
              <li>Designed and deployed 10+ advanced SurveyCTO surveys; trained and supervised field data collection teams.</li>
              <li>Built Power BI dashboards with live data integration; led cohort analysis and donor-ready reporting.</li>
            </ul>
          </div>
          <h3 className="resume-title">Projects</h3>
          <div className="resume-item">
            <h4>Full-Stack Developer — YebenFund</h4>
            <h5>2024 - Present · yebenfund.org</h5>
            <ul>
              <li>Built and launched a full website from scratch end-to-end, from concept to deployment.</li>
              <li>Developed a companion mobile app in Flutter/Dart and managed the full product lifecycle.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeSection;
