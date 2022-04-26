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
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Veuillez nous joindre sur l'addresse ci-dessous :
              </p>

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
                <p>Nous Suivre sur les réseaux :</p>
                <div className="social-icons">
                  <i className="fab fa-facebook-f"></i>

                  <i className="fab fa-twitter"></i>

                  <i className="fab fa-instagram"></i>

                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form autocomplete="off">
                <h3 className="title">Contact Us</h3>
                <div className="input-container">
                  <input type="text" name="name" className="input" />
                  <label for="">Name</label>
                  <span>Username</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn-contact" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
    // <h1 classNameName='contact'>CONTACT</h1>
  );
}
