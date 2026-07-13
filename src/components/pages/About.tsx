import "../../App.css";
import "./About.css";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const placeholder = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Asperiores, velit alias eius non illum beatae atque repellat ratione qui
  veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt
  exercitationem cumque earum omnis ipsum rem accusantium quis.`;

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <h1 className="section-title" data-aos="fade-down">
          {t("history")}
        </h1>
        <div className="separator"></div>
        <div className="about-container">
          <div className="col-left" data-aos="fade-right">
            <div className="about-img">
              <img src="/images/img-history.JPG" alt="Agency history" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            <h2>Our Story</h2>
            <p>{placeholder}</p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="section-title" data-aos="fade-up">
          {t("team")}
        </h1>
        <div className="separator"></div>
        <div className="about-container">
          <div className="col-left" data-aos="fade-right">
            <div className="about-img">
              <img src="/images/projet2.jpg" alt="Team member" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            <h2 className="about-title">HOUNKPATI</h2>
            <h2>Front End Developer</h2>
            <p>{placeholder}</p>
          </div>
        </div>

        <div className="about-container">
          <div className="col-left" data-aos="fade-right">
            <div className="about-img">
              <img src="/images/projet2.jpg" alt="Team member" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            <h2 className="about-title">MENSANH</h2>
            <h2>Front End Developer</h2>
            <p>{placeholder}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
