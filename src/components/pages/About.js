import React from "react";
import "../../App.css";
import "./About.css";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

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
              <img src="images/img-history.jpg" alt="img" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            {/* <h1 className="about-title">HISTOIRE</h1> */}
            <h2>Front End Developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
        </div>
      </section>

      <div className="h-line line1"></div>

      <section>
        <h1 className="section-title" data-aos="fade-up">
          {t("team")}
        </h1>
        <div className="separator"></div>
        <div className="about-container">
          <div className="col-left" data-aos="fade-right">
            <div className="about-img">
              <img src="images/projet2.jpg" alt="img" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            <h2 className="about-title">HOUNKPATI</h2>
            <h2>Front End Developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
        </div>

        <div className="about-container">
          <div className="col-left" data-aos="fade-right">
            <div className="about-img">
              <img src="images/projet2.jpg" alt="img" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            <h2 className="about-title">MENSANH</h2>
            <h2>Front End Developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
        </div>
      </section>

      <div className="h-line line1"></div>

      <section className="partners-section">
        <div className="partners-container">
          <h1 data-aos="fade-down">{t("partners")}</h1>
          <div className="separator" data-aos="fade-up"></div>
          <div className="sponsor__container grid">
            <div className="partners__content">
              <img src="images/angular.png" alt="" className="partners__img" />
            </div>
            <div className="partners__content">
              <img
                src="images/sponsors2.png"
                alt=""
                className="partners__img"
              />
            </div>
            <div className="partners__content">
              <img src="images/google.png" alt="" className="partners__img" />
            </div>
            <div className="partners__content">
              <img
                src="images/sponsors4.png"
                alt=""
                className="partners__img"
              />
            </div>
            <div className="partners__content">
              <img
                src="images/sponsors5.png"
                alt=""
                className="partners__img"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
