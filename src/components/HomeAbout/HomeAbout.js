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
                <h3>Teamwork</h3>
                <p>Commited and Creative</p>
              </div>
            </div>
            <div className="aboutImg" data-aos="fade-left">
              <img src="images/projet2.jpg" alt="" />
              <div className="image-text">
                <h3>Philosophy</h3>
                <p>Trust Pays off</p>
              </div>
            </div>
            <div className="aboutImg" data-aos="fade-left">
              <img src="images/projet3.jpg" alt="" />
              <div className="image-text">
                <h3>Office</h3>
                <p>Hédrzanawwoé, Lomé</p>
              </div>
            </div>
          </div>
          <div className="about-text" data-aos="fade-down">
            <div className="description">
              <h3>{t("who_we_are")}</h3>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward will
                have multiple touchpoints for offshoring.
              </p>
            </div>

            <div className="description">
              <h3>{t("philosophy")}</h3>
              <p>
                A new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time.
              </p>
            </div>
            <div className="description">
              <h3>{t("how_we_work")}</h3>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
