import React from "react";
import "../../App.css";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="form-wrapper">
            <div className="contact-info" data-aos="fade-down">
              <h3 className="title">{t("lets_connect")}</h3>
              <div className="info">
                <p className="text">Contact us on the address below :</p>
                <div className="info-wrapper">
                  <div className="information">
                    <img src="images/endroit.png" className="icon" alt="" />
                    <p>Lomé, Hédzranawoé</p>
                  </div>
                  <div className="information">
                    <img src="images/mail.png" className="icon" alt="" />
                    <p>grouparchilux@gmail.com</p>
                  </div>
                  <div className="information">
                    <img src="images/support2.png" className="icon" alt="" />
                    <p>91 85 12 80 / 99 51 32 40</p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <p>Follow us on the networks :</p>
                <div className="social-icons">
                  <div className="social-name">
                    <i className="fab fa-facebook-f"></i>
                    <p>Facebook</p>
                  </div>

                  <div className="social-name">
                    <i className="fab fa-twitter"></i>
                    <p>Twitter</p>
                  </div>

                  <div className="social-name">
                    <i className="fab fa-instagram"></i>
                    <p>Instagram</p>
                  </div>

                  <div className="social-name">
                    <i className="fab fa-linkedin-in"></i>
                    <p>Linkedin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form" data-aos="fade-up">
              <form autoComplete="off">
                <h3 className="title">{t("contact_us")}</h3>
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

      <section className="map-section" data-aos="zoom-in">
        <iframe
          title="map"
          width="900"
          height="350"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6662522345846!2d1.2399546291725134!3d6.175581699720572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e38b32aabb01%3A0xa03e60e7eb0a1a48!2sJovana%20Beauty!5e0!3m2!1sfr!2stg!4v1651662281031!5m2!1sfr!2stg"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6659715029264!2d1.2399148291885846!3d6.175731599720569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e35faeb324cb%3A0xde3e1b59553a8161!2sCENTRALE%20OPTIQUE%2C%20lunetterie%20m%C3%A9dicale!5e0!3m2!1sfr!2stg!4v1651660091926!5m2!1sfr!2stg"
        />
      </section>

      <Footer />
    </>
  );
}
