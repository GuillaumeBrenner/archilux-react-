import { useState, type ChangeEvent, type FormEvent } from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import ScrollToTopButton from "react-scroll-to-top";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL ?? "";

function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/newsletter`, { email });
      toast.success("THANK YOU FOR SUBSCRIBING TO OUR NEWSLETTER");
      toast.success("YOU WILL HEAR FROM US SOON.", {
        delay: 5000,
        autoClose: 3000,
      });
      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Please fill the inputs properly, check your internet and retry");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription" data-aos="fade-down">
          <p className="footer-subscription-heading">{t("news_letter")}</p>
          <p className="footer-subscription-text">{t("unsubscribe")}</p>
          <div className="input-areas">
            <form onSubmit={handleSubmit}>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder={t("mail")}
                onChange={handleChange}
                value={email}
                required
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
                  <i className="fas fa-paper-plane"></i> 21 BP 40 Lomé-TOGO
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Angle rue 61 HDN,
                  Blvd Haho
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i> (+228) 91 85 12 80 / 99 51
                  32 40
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
      <div className="footer_copyright">
        <p className="footer__copy">
          {new Date().getFullYear()} &#169; archilux.com
        </p>
      </div>

      <ScrollToTopButton smooth color="red" top={500} />
    </>
  );
}

export default Footer;
