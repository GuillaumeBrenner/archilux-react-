import React from "react";
import "../../App.css";
import "./Contact.css";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="form-wrapper">
            <div className="contact-info" data-aos="fade-down">
              <h3 className="title">Let's Connect</h3>
              <p className="text">Contact us on the address below :</p>

              <div className="info">
                <div className="information">
                  <img src="img/location.png" className="icon" alt="" />
                  <p>Hédzranawoé, Eglise Catholique</p>
                </div>
                <div className="information">
                  <img src="img/email.png" className="icon" alt="" />
                  <p>hounkpatiiguillaume@gmail.com</p>
                </div>
                <div className="information">
                  <img src="img/phone.png" className="icon" alt="" />
                  <p>92 31 33 41</p>
                </div>
              </div>

              <div className="social-media">
                <p>Follow us on the networks :</p>
                <div className="social-icons">
                  <i className="fab fa-facebook-f"></i>

                  <i className="fab fa-twitter"></i>

                  <i className="fab fa-instagram"></i>

                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>

            <div className="contact-form" data-aos="fade-up">
              <form autoComplete="off">
                <h3 className="title">Contact Us</h3>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name/Lastname"
                    className="input"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="input"
                  />
                </div>
                <div className="input-container textarea">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="input"
                  ></textarea>
                </div>
                <input type="submit" value="Send" className="btn-contact" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
