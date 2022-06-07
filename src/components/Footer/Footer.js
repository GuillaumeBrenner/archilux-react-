import React, { useState } from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [newsletter, setNewsletter] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/newsletter", {
        email: newsletter.email,
      })
      .then((res) => {
        console.log(res.newsletterData);
        toast.success("THANK YOU FOR SUBSCRIBING TO OUR NEWSLETTER");
        toast.success("YOU WILL HEAR FROM US SOON.", {
          delay: 5000,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Please fill the inputs properly, Check your internet and retry"
        );
      });

    setNewsletter({
      email: "",
    });
  };

  const handleChange = (e) => {
    const newLetter = { ...newsletter };
    newLetter[e.target.name] = e.target.value;
    setNewsletter(newLetter);
    console.log(newLetter);
  };

  let promise = () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "In progress, Please Wait",
    });
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription" data-aos="fade-down">
          <p className="footer-subscription-heading">{t("news_letter")}</p>
          <p className="footer-subscription-text">{t("unsubscribe")}</p>
          <div className="input-areas">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder={t("mail")}
                onChange={(e) => handleChange(e)}
                value={newsletter.email}
                required
              />
              <Button buttonStyle="btn--outline" onClick={promise}>
                {t("subscribe_button")}
              </Button>
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
                  Archi<span>LUX</span>
                </Link>
              </h2>
              <div className="slogan">ARCHITECTURE-URBANISME-INGENIERIE</div>
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
                  <i className="fas fa-map-marker-alt"></i> 21 BP 40 Lomé-TOGO
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Angle rue 61 HDN, Blvd Haho
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i> (+228) 91 85 12 80 / 99 51 32 40
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

        <div className="footer_copyright">
          <p className="footer__copy">2022 &#169; ArchiLUX</p>
        </div>
      </div>

      <ScrollToTop smooth color="red" top="500" data-aos="fade-left" />
    </>
  );
}

export default Footer;
