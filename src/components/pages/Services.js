import React from "react";
import "../../App.css";
import "./Services.css";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <div className="services-container">
          <div className="services-wrapper">
            <div className="services-top">
              <h1 className="section-title" data-aos="fade-down">
                {t("service_title")}
              </h1>
              <div className="separator"></div>
              <p data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                deleniti maiores pariatur assumenda quas magni et, doloribus
                quod voluptate quasi molestiae magnam officiis dolorum, dolor
                provident atque molestias voluptatum explicabo!
              </p>
            </div>

            <div className="panel-cards">
              <div className="panel" data-aos="fade-right">
                <br />
                <br />
                <img src="images/compass.png" alt="" />
                <h3>{t("panel1_title")}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>{t("panel1_title")}</h4>
                  <ul>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                  </ul>
                </div>
              </div>

              <div className="panel" data-aos="fade-up">
                <br />
                <br />

                <img src="images/construction.png" alt="" />
                <h3>{t("panel2_title")}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>{t("panel2_title")}</h4>
                  <ul>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                  </ul>
                </div>
              </div>

              <div className="panel" data-aos="fade-up">
                <br />
                <br />
                <img src="images/sketch.png" alt="" />
                <h3>{t("panel3_title")}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>{t("panel3_title")}</h4>
                  <ul>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                  </ul>
                </div>
              </div>

              <div className="panel" data-aos="fade-left">
                <br />
                <br />
                <img src="images/style-selection.png" alt="" />
                <h3>{t("panel4_title")}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>{t("panel4_title")}</h4>
                  <ul>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                    <li>
                      <i className="fa fa-check"></i>project
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="person"></div>

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
