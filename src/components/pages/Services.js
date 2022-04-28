import React from "react";
import "../../App.css";
import "./Services.css";
import Footer from "../Footer";

export default function Services() {
  return (
    <>
      <section>
        <div className="services-container">
          <div className="services-wrapper">
            <div className="services-top">
              <h1 className="section-title" data-aos="fade-down">
                LOOK OUR BEST SERVICES
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
                {/* <i className="fa fa-cog fa-4x"></i> */}
                <img src="images/compass.png"/>
                <h3>INTERIOR PLANING</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>SERVICES</h4>
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

                {/* <i className="fa fa-cog fa-4x"></i> */}
                <img src="images/construction.png"/>
                <h3>EXTERIOR DESIGN</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>SERVICES</h4>
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
                {/* <i className="fa fa-building fa-4x"></i> */}
                <img src="images/sketch (1).png"/>
                <h3>ARCHITECTURE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>SERVICES</h4>
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
                {/* <i className="fa fa-desktop fa-4x"></i> */}
                <img src="images/style-selection.png"/>
                <h3>STYLE SELECTION</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit reprehenderit assumenda alias ipsum inventore numquam
                  placeat illo corrupti facilis doloribus explicabo obcaecati,
                  iste amet, quis beatae ullam qui distinctio ipsa.
                </p>
                <div className="slide">
                  <h4>SERVICES</h4>
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

      <Footer />
    </>
  );
  // <h1 classNameName='services'>SERVICES</h1>;
}
