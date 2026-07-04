import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './assets/styles/main.css';
import my_profile_img from './assets/img/my-profile-img.jpg';
import RHISN1 from './assets/img/portfolio/RHISNproject/1.png';
import RHISN2 from './assets/img/portfolio/RHISNproject/2.png';
import RHISN3 from './assets/img/portfolio/RHISNproject/3.png';
import RHISN4 from './assets/img/portfolio/RHISNproject/4.png';
import RHISN5 from './assets/img/portfolio/RHISNproject/5.png';
<<<<<<< HEAD
import website from './assets/img/portfolio/website-portfolio.png';
import streamlit1 from './assets/img/portfolio/Streamlit/1.jpeg';
import streamlit2 from './assets/img/portfolio/Streamlit/2.jpeg';
import streamlit3 from './assets/img/portfolio/Streamlit/3.png';
import streamlit4 from './assets/img/portfolio/Streamlit/4.png';
import yebenfund from './assets/img/portfolio/yebenfund.png';
=======
import portfolio_product_1 from './assets/img/portfolio/product-1.jpg';
>>>>>>> parent of b9db808 (component based and code cleaned)

function PortfolioDetails() {
  const { id } = useParams();

  const projectDetails = {
    1: {
<<<<<<< HEAD
      title: 'Workforce Readiness Survey Dashboard',
      category: 'Power BI · M&E Analytics',
      role: 'Data Analyst — Zerihun Association',
      timeframe: '2023 – 2025',
      tools: ['Power BI', 'SurveyCTO', 'Python (Pandas)', 'Stata', 'SQL'],
      overview:
        'An interactive Power BI reporting system built for a large-scale workforce readiness and livelihood program at an NGO, tracking employment outcomes across multiple project sites in Ethiopia.',
      challenge:
        'Field data flowed in from 10+ digital SurveyCTO surveys and thousands of open-text responses across multiple sites. Monitoring & Evaluation (M&E) reporting was manual and slow, yet donors and program leads needed timely, trustworthy numbers to steer the program and secure funding.',
      solution:
        'I integrated live survey data into Power BI and reconciled it with Python (Pandas) and Stata to guarantee data integrity. The dashboard tracks program KPIs, segments participants into cohorts, and surfaces employment-outcome trends, letting stakeholders self-serve answers instead of waiting on manual reports.',
      impact: [
        'Improved decision-making speed by ~40% for key stakeholders through live, self-serve reporting.',
        'Replaced slow manual M&E reporting with always-current dashboards.',
        'Produced donor-ready reporting used directly for fundraising and program strategy.',
      ],
      images: [RHISN1, RHISN2, RHISN3, RHISN4, RHISN5],
    },
    2: {
      title: 'beU Delivery Operations Analytics',
      category: 'Python · SQL · Streamlit',
      role: 'Data Analyst — beU Delivery',
      timeframe: '2025 – 2026',
      tools: ['Python', 'Pandas', 'SQL', 'Streamlit'],
      overview:
        'An internal analytics tool that lets non-technical operations staff explore large transactional delivery datasets without writing a single line of SQL — part of the analytics foundation now used by 32+ people daily at beU Delivery.',
      challenge:
        'Operations staff needed to interrogate huge order, area-manager, and delivery-timestamp datasets, but loading everything was slow and most staff could not write queries. The tool had to stay fast and responsive while returning only the data each question actually needed.',
      solution:
        'I built a responsive Streamlit app backed by Python, Pandas, and SQL. The Area Manager view dynamically filters order acceptance and assignment rates by manager and date; the Delivery Data view takes one or more Order IDs and fires targeted SQL that returns only the matching timestamp details — keeping the app fast by never over-fetching.',
      impact: [
        'Gave non-technical staff self-serve access to operational KPIs.',
        'Part of the pipeline suite that saves 5+ hours per department each week.',
        'Adopted across the org as one of 9+ analytics solutions I shipped.',
      ],
      images: [streamlit1, streamlit2, streamlit3, streamlit4],
    },
    3: {
      title: 'Personal Portfolio Website',
      category: 'React · Web Development',
      role: 'Full-Stack Developer',
      timeframe: '2024 – Present',
      tools: ['React', 'JavaScript', 'Bootstrap', 'GitHub Pages'],
      overview:
        'This site — a fast, discoverable personal portfolio designed and built from scratch in React to showcase my data and product work and attract remote opportunities.',
      challenge:
        'A single-page React app is invisible to search engines and AI crawlers that do not run JavaScript, and heavy images make first load slow. I needed the site to be both machine-readable and fast.',
      solution:
        'I added schema.org Person structured data, Open Graph metadata, and a crawlable content fallback so search engines and AI tools read real content instead of an empty page. I optimized every image and lazy-loaded below-the-fold assets, then deployed to GitHub Pages.',
      impact: [
        'Fully machine-readable by search engines and AI crawlers.',
        'Cut total image weight by ~80% for a noticeably faster first load.',
        'Zero-cost hosting with a simple one-command deploy.',
      ],
      images: [website],
=======
      title: 'App 1',
      category: 'Web Design',
      description: 'Description for App 1.',
      images: [RHISN1, RHISN2, RHISN3, RHISN4, RHISN5],
    },
    2: {
      title: 'Product 1',
      category: 'Product Design',
      description: 'Description for Product 1.',
      images: [portfolio_product_1],
>>>>>>> parent of b9db808 (component based and code cleaned)
    },
    4: {
      title: 'YeBen Endowment Fund',
      category: 'Full-Stack Web · Flutter Mobile',
      role: 'Full-Stack Developer (Solo)',
      timeframe: '2024 – Present',
      tools: ['React', 'JavaScript', 'Flutter / Dart', 'Web'],
      overview:
        'YeBen Endowment Fund (yebenfund.org) is a nonprofit that helps college students in Ethiopia overcome financial barriers through financial aid, life-changing training, and innovation grants. I built and launched the organization’s full web platform and a companion mobile app end-to-end, on my own.',
      challenge:
        'A new endowment fund needed a credible online home to reach students, share programs and news (YeBen Talk, public-speaking training, graduations), and accept donations — with no in-house engineering team and a limited budget. It had to work well on the phones most students actually use.',
      solution:
        'I owned the full product lifecycle solo: design, front-end and back-end development, and ongoing iteration. I built the responsive website (Home, About, Services, News, Students, Contact, and a Donate flow) and a companion mobile app in Flutter/Dart to extend the platform’s reach to mobile-first users.',
      impact: [
        'Gave the fund a professional public presence to attract students, donors, and partners.',
        'Extended reach with a cross-platform Flutter mobile app from a single codebase.',
        'Demonstrated end-to-end ownership — from concept and design to deployment and iteration.',
      ],
      images: [yebenfund],
    },
    // Add more project details as needed
  };

  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="portfolio-details-page">
        <header id="header" className="header dark-background d-flex flex-column">
          <i className="header-toggle d-xl-none bi bi-list"></i>
          <div className="profile-img">
            <img src={my_profile_img} alt="Muse Teshome Dejene" className="img-fluid rounded-circle" />
          </div>
          <div className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">Muse Teshome</h1>
          </div>
          <div className="social-links text-center">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="/" className="active"><i className="bi bi-house navicon"></i> Home</Link></li>
              <li><Link to="/#about"><i className="bi bi-person navicon"></i> About</Link></li>
              <li><Link to="/#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
              <li><Link to="/#portfolio"><i className="bi bi-images navicon"></i> Portfolio</Link></li>
              <li><Link to="/#services"><i className="bi bi-hdd-stack navicon"></i> Services</Link></li>
              <li><Link to="/#contact"><i className="bi bi-envelope navicon"></i> Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div className="page-title dark-background">
            <h1>Project Not Found</h1>
          </div>
          <section id="portfolio-details" className="portfolio-details section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <p>The project you are looking for does not exist.</p>
            </div>
          </section>
        </main>
        <footer id="footer" className="footer position-relative light-background">
          {/* ...existing code... */}
        </footer>
      </div>
    );
  }

  return (
    <div className="portfolio-details-page">
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>
        <div className="profile-img">
          <img src={my_profile_img} alt="Muse Teshome Dejene" className="img-fluid rounded-circle" />
        </div>
        <div className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Muse Teshome</h1>
        </div>
        <div className="social-links text-center">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active"><i className="bi bi-house navicon"></i> Home</Link></li>
            <li><Link to="/#about"><i className="bi bi-person navicon"></i> About</Link></li>
            <li><Link to="/#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
            <li><Link to="/#portfolio"><i className="bi bi-images navicon"></i> Portfolio</Link></li>
            <li><Link to="/#services"><i className="bi bi-hdd-stack navicon"></i> Services</Link></li>
            <li><Link to="/#contact"><i className="bi bi-envelope navicon"></i> Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="page-title dark-background">
          <h1>{project.title}</h1>
        </div>
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider">
                  {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`${project.title} — screenshot ${index + 1}`} className="img-fluid" loading={index === 0 ? 'eager' : 'lazy'} />
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3>Project Information</h3>
                  <ul>
                    <li><strong>Category</strong>: {project.category}</li>
                    {project.role && <li><strong>Role</strong>: {project.role}</li>}
                    {project.timeframe && <li><strong>Timeframe</strong>: {project.timeframe}</li>}
                    {project.tools && <li><strong>Tools</strong>: {project.tools.join(', ')}</li>}
                  </ul>
                </div>
                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                  <h2>{project.title}</h2>
                  <p>{project.overview}</p>
                  {project.challenge && (
                    <>
                      <h4>The Challenge</h4>
                      <p>{project.challenge}</p>
                    </>
                  )}
                  {project.solution && (
                    <>
                      <h4>What I Built</h4>
                      <p>{project.solution}</p>
                    </>
                  )}
                  {project.impact && (
                    <>
                      <h4>Impact</h4>
                      <ul>
                        {project.impact.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer" className="footer position-relative light-background">
        {/* ...existing code... */}
      </footer>
    </div>
  );
}

export default PortfolioDetails;




