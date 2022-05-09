import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription" data-aos="fade-down">
          <p className="footer-subscription-heading">{t("news_letter")}</p>
          <p className="footer-subscription-text">{t("unsubscribe")}</p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder={t("mail")}
              />
              <Button buttonStyle="btn--outline">{t("subscribe_button")}</Button>
            </form>
          </div>
        </section>
      </div>

      <div className="footer">
        <div className="contain" data-aos="fade-right" data-aos-duration="2000">
          <div className="row">
            <div className="footer-col">
              <h2
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Link to="/" className="app-name">
                  ARCHILUX
                </Link>
              </h2>
            </div>
            <div className="footer-col">
              <h4>{t("company")}</h4>
              <ul>
                <li>
                  <Link to="/about">{t("about_us")}</Link>
                </li>
                <li>
                  <Link to="/services">{t("services")}</Link>
                </li>
                <li>
                  <Link to="/projects">{t("our_projects")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("contactUs")}</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t("address")}</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Lomé, Hédzranawoé
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i> 91 85 12 80 / 99 51 32 40
                </li>
                <li>
                  <i className="fas fa-envelope"></i> grouparchilux@gmail.com
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t("follow_us")}</h4>
              <div className="social-links">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop smooth color="red" top="500" data-aos="fade-left" />
    </>
  );
}

export default Footer;
