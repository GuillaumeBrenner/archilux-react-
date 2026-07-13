import "../../App.css";
import "./Services.css";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

interface Panel {
  icon: string;
  titleKey: string;
  aos: string;
}

const panels: Panel[] = [
  { icon: "/images/compass.png", titleKey: "panel1_title", aos: "fade-right" },
  { icon: "/images/construction.png", titleKey: "panel2_title", aos: "fade-up" },
  { icon: "/images/sketch.png", titleKey: "panel3_title", aos: "fade-up" },
  {
    icon: "/images/style-selection.png",
    titleKey: "panel4_title",
    aos: "fade-left",
  },
];

const partners = [
  "/images/R.png",
  "/images/google.png",
  "/images/angular.png",
  "/images/git.png",
];

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
              {panels.map((panel) => (
                <div className="panel" data-aos={panel.aos} key={panel.titleKey}>
                  <img src={panel.icon} alt="" />
                  <h3>{t(panel.titleKey)}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit reprehenderit assumenda alias ipsum inventore
                    numquam placeat illo corrupti facilis doloribus explicabo
                    obcaecati, iste amet, quis beatae ullam qui distinctio ipsa.
                  </p>
                  <div className="slide">
                    <h4>{t(panel.titleKey)}</h4>
                    <ul>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i}>
                          <i className="fa fa-check"></i>project
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="person"></div>

      <section className="partners">
        <div className="partners-container">
          <h1 data-aos="fade-down">{t("partners")}</h1>
          <div className="separator" data-aos="fade-up"></div>
          <div className="partners-wrapper">
            <ul className="partners-list">
              {partners.map((src) => (
                <li key={src}>
                  <img alt="Partner brand" src={src} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
