import React from 'react';
import './assets/styles/main.css';

function ServiceDetails() {
  return (
    <div className="service-details-page">
      <header id="header" className="header dark-background d-flex flex-column">
        {/* ...existing code... */}
      </header>
      <main className="main">
        <div className="page-title dark-background">
          {/* ...existing code... */}
        </div>
        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="services-list">
                  <a href="#" className="active">Web Design</a>
                  {/* ...existing code... */}
                </div>
                <h4>Enim qui eos rerum in delectus</h4>
                <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.</p>
              </div>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <img src="./assets/img/services.jpg" alt="" className="img-fluid services-img" />
                <h3>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h3>
                <p>Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.</p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> <span>Aut eum totam accusantium voluptatem.</span></li>
                  {/* ...existing code... */}
                </ul>
                <p>Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.</p>
                <p>Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.</p>
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

export default ServiceDetails;
