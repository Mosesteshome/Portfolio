import React from 'react';
import './assets/styles/main.css';

function PortfolioDetails() {
  return (
    <div className="portfolio-details-page">
      <header id="header" className="header dark-background d-flex flex-column">
        {/* ...existing code... */}
      </header>
      <main className="main">
        <div className="page-title dark-background">
          {/* ...existing code... */}
        </div>
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper init-swiper">
                  <script type="application/json" className="swiper-config">
                    {`{
                      "loop": true,
                      "speed": 600,
                      "autoplay": {
                        "delay": 5000
                      },
                      "slidesPerView": "auto",
                      "pagination": {
                        "el": ".swiper-pagination",
                        "type": "bullets",
                        "clickable": true
                      }
                    }`}
                  </script>
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src="./assets/img/portfolio/app-1.jpg" alt="" />
                    </div>
                    {/* ...existing code... */}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    {/* ...existing code... */}
                  </ul>
                </div>
                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                  <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                  <p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer" className="footer position-relative light-background">
        {/* ...existing code... */}
      </footer>
      <script src="./assets/js/main.js"></script>
    </div>
  );
}

export default PortfolioDetails;
