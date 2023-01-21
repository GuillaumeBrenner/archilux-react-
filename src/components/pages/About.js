import React, { useEffect } from "react";
import "../../App.css";
import "./About.css";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="bg"></div>
        <h1 className="section-title" data-aos="fade-down">
          {t("history")}
        </h1>
        <div className="separator"></div>
        <div className="about-container">
          <div className="col-left">
            <div className="about-img">
              <img src="images/img-history.jpg" alt="img" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            {/* <h1 className="about-title">HISTOIRE</h1> */}
            <h2>
              {t("architecture")}-{t("urbanisme")}-{t("engineering")}
            </h2>
            <h3>
              <p>
                Créé en 2009, Notre cabinet d'architecture offre une
                connaissance de l'ingénierie et du marché immobilier, avec le
                suivi du projet pour garantir la protection de votre
                investissement. Nos architectes comptent parmi les plus
                recherchés du pays, avec des antécédents divers et une expertise
                dans tous les domaines de l'architecture.
              </p>
              <p>
                Nous mettons cette expérience à votre service, en vous offrant
                une gamme complète de services, de l'ingénierie au suivi en
                passant par l'immobilier. Des esquisses aux bâtiments
                écologiques, nous fournissons des solutions pour répondre à vos
                besoins spécifiques. Nous ne sommes pas limités par un modèle
                d'entreprise bureau par bureau, au contraire nous sommes en
                mesure de vous rencontrer là où vous avez besoin de nous, au
                Togo ou dans la sous-région.
              </p>
            </h3>
          </div>
        </div>
      </section>

      <section className="quote">
        <h1 className="section-title guillemet" data-aos="zoom-in">
          ,,
        </h1>
        <div className="separator"></div>
        <div className="quote-container">
          <div className="quotation" data-aos="zoom-in">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero!
            </p>
            <h1>- Le Directeur Général -</h1>
          </div>
        </div>
      </section>

      <div className="h-line team"></div>

      <section>
        <h1 className="section-title" data-aos="fade-up">
          {t("team")}
        </h1>
        <div className="separator"></div>
        <div className="about-container">
          <div className="col-left">
            <div className="about-img">
              <img src="images/projet2.jpg" alt="img" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            <h2 className="about-title">
              Edmond F. K. <span>AZIAGBA</span>
            </h2>
            <h2>
              {t("architect")} - {t("urban")} DEIAU
            </h2>
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
          <div className="col-left">
            <div className="about-img">
              <img src="images/projet2.jpg" alt="img" />
            </div>
          </div>
          <div className="col-right" data-aos="fade-left">
            <h2 className="about-title">
              <span>David</span> MENSANH
            </h2>
            <h2>
              {t("architect")} - {t("engineer")}
            </h2>
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

      <div className="h-line"></div>

      <section className="partners-section">
        <div className="partners-container">
          <div className="bg partners"></div>
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
