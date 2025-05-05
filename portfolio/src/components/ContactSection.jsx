
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zdvc0lj', 'template_p5ll57u', form.current, 'z2plQ7sdZ1xzUTGpN')
      .then(
        (result) => {
          setStatus(
            <div className="alert alert-success mt-3" role="alert">
              Message sent successfully!
            </div>
          );
          form.current.reset();
        },
        (error) => {
          setStatus(
            <div className="alert alert-danger mt-3" role="alert">
              Failed to send message. Please try again.
            </div>
          );
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a project in mind or need help? Feel free to reach out!</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+251 960184195</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>mosesteshome@gmail.com</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-linkedin flex-shrink-0"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <p>
                    <a href="https://www.linkedin.com/in/moses-teshome/" target="_blank" rel="noopener noreferrer">
                      Moses Teshome
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <form ref={form} onSubmit={sendEmail} className="php-email-form">
              {status && <div className="mt-3">{status}</div>}
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Name
                  </label>
                  <input type="text" name="name" id="name-field" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Email
                  </label>
                  <input type="email" name="email" id="email-field" className="form-control" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input type="text" name="subject" id="subject-field" className="form-control" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message:
                  </label>
                  <textarea name="message" id="message-field" className="form-control" rows="2" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;