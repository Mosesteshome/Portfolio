import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './assets/styles/main.css';
import my_profile_img from './assets/img/my-profile-img.jpg';
import RHISN1 from './assets/img/portfolio/RHISNproject/1.png';
import RHISN2 from './assets/img/portfolio/RHISNproject/2.png';
import RHISN3 from './assets/img/portfolio/RHISNproject/3.png';
import RHISN4 from './assets/img/portfolio/RHISNproject/4.png';
import RHISN5 from './assets/img/portfolio/RHISNproject/5.png';
import portfolio_product_1 from './assets/img/portfolio/product-1.jpg';

function PortfolioDetails() {
  const { id } = useParams();
  console.log("Project ID:", id);

  const projectDetails = {
    1: {
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
            <img src={my_profile_img} alt="" className="img-fluid rounded-circle" />
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
          <img src={my_profile_img} alt="" className="img-fluid rounded-circle" />
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
                    <img key={index} src={image} alt={`${project.title} ${index + 1}`} className="img-fluid" />
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3>Project Information</h3>
                  <ul>
                    <li><strong>Category</strong>: {project.category}</li>
                  </ul>
                </div>
                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
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




