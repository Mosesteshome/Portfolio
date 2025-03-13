import React from 'react';
import './assets/styles/main.css';

function StarterPage() {
  return (
    <div className="starter-page-page">
      <header id="header" className="header dark-background d-flex flex-column">
        {/* ...existing code... */}
      </header>
      <main className="main">
        <div className="page-title dark-background">
          {/* ...existing code... */}
        </div>
        <section id="starter-section" className="starter-section section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Starter Section</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="container" data-aos="fade-up">
            <p>Use this page as a starter for your own custom pages.</p>
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

export default StarterPage;
