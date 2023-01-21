import React from "react";
import { useTranslation } from "react-i18next";
import "./HomeAbout.css";

function HomeAbout() {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-about">
        <h1 data-aos="fade-up">{t("more_than")}</h1>
        <div className="separator" data-aos="fade-down"></div>
        <div className="homeAbout-container">
          <div className="homeAbout-grid">
            <div className="aboutImg image1" data-aos="fade-right">
              <img src="images/interior.jpg" alt="" />
              <div className="image-text">
                <h3>{t("teamwork")}</h3>
              </div>
            </div>
            <div className="aboutImg" data-aos="fade-left">
              <img src="images/projet2.jpg" alt="" />
              <div className="image-text">
                <h3>{t("committed")}</h3>
              </div>
            </div>
            <div className="aboutImg" data-aos="fade-left">
              <img src="images/projet3.jpg" alt="" />
              <div className="image-text">
                <h3>{t("creative")}</h3>
              </div>
            </div>
          </div>
          <div className="about-text" data-aos="fade-down">
            <div className="description">
              <h3>{t("who_we_are")}</h3>
              <p>{t("who_we_are2")}</p>
            </div>

            <div className="description">
              <h3>{t("philosophy")}</h3>
              <p>{t("philosophy2")}</p>
            </div>
            <div className="description">
              <h3>{t("how_we_work")}</h3>
              <p>{t("how_we_work2")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
