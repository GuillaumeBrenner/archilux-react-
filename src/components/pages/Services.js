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
                <h3>INGENIERIE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>INGENIERIE</h4>
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
                <h3>IMMOBILIER</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>IMMOBILIER</h4>
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
                <h3>ARCHITECTURE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>ARCHITECTURE</h4>
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
                <h3>SUIVI ET CONTROLE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>SUIVI ET CONTROLE</h4>
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

      <Footer />
    </>
  );
}
