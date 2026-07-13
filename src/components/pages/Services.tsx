import "../../App.css";
import "./Services.css";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const panels = [
  { icon: "/images/compass.png", titleKey: "panel1_title", aos: "fade-right" },
  { icon: "/images/construction.png", titleKey: "panel2_title", aos: "fade-up" },
  { icon: "/images/sketch.png", titleKey: "panel3_title", aos: "fade-up" },
  {
    icon: "/images/style-selection.png",
    titleKey: "panel4_title",
    aos: "fade-left",
  },
];

const skills = [
  { titleKey: "panel1_title", barClass: "skills-engineering", percent: "25%" },
  { titleKey: "panel2_title", barClass: "skills__realEstate", percent: "10%" },
  { titleKey: "panel3_title", barClass: "skills__architecture", percent: "55%" },
  { titleKey: "panel4_title", barClass: "skills__attend", percent: "10%" },
];

const partners = [
  "/images/angular.png",
  "/images/sponsors2.png",
  "/images/google.png",
  "/images/sponsors4.png",
  "/images/sponsors5.png",
];

const panelText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Impedit reprehenderit assumenda alias ipsum inventore numquam placeat illo
  corrupti facilis doloribus explicabo obcaecati, iste amet, quis beatae ullam
  qui distinctio ipsa.`;

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
              <p data-aos="zoom-in">{t("service_description")}</p>
            </div>

            <div className="panel-cards">
              {panels.map((panel) => (
                <div className="panel" data-aos={panel.aos} key={panel.titleKey}>
                  <br />
                  <br />
                  <img src={panel.icon} alt="" />
                  <h3>{t(panel.titleKey)}</h3>
                  <p>{panelText}</p>
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

      <div className="h-line line1"></div>

      <section className="skills-section">
        <div className="services-top">
          <h1 className="section-title" data-aos="zoom-in">
            {t("stats")}
          </h1>
          <div className="separator"></div>
          <p data-aos="zoom-in">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            deleniti maiores pariatur assumenda quas magni et, doloribus quod
            voluptate quasi molestiae magnam officiis dolorum, dolor provident
            atque molestias voluptatum explicabo!
          </p>
        </div>
        <div className="skills-container bd-grid">
          <div>
            {skills.map((skill) => (
              <div className="skills-data" key={skill.titleKey}>
                <div className="skills-names">
                  <span className="skills-name">{t(skill.titleKey)}</span>
                </div>
                <div className={`skills-bar ${skill.barClass}`}></div>
                <div>
                  <span className="skills__percentage">{skill.percent}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-img" data-aos="fade-left">
            <img src="/images/projet2.jpg" alt="" />
          </div>
        </div>
      </section>

      <div className="h-line"></div>

      <section className="partners-section">
        <div className="partners-container">
          <div className="bg prize"></div>
          <h1 data-aos="fade-down">{t("prize")}</h1>
          <div className="separator" data-aos="fade-up"></div>
          <div className="sponsor__container grid">
            {partners.map((src) => (
              <div className="partners__content" key={src}>
                <img src={src} alt="" className="partners__img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
