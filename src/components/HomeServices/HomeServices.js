import React from "react";
import "./HomeServices.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

function HomeServices() {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-services">
        <h1 data-aos="fade-up">{t("experience")}</h1>
        <div className="separator" data-aos="fade-down"></div>
        <div className="experience-container" data-aos="fade-up">
          <div className="experience-grid">
            <div className="experience-details">
              <h2>
                <VisibilitySensor partialVisibility>
                  {({ isVisible }) => (
                    <div style={{ height: 60 }}>
                      {isVisible ? <CountUp end={10} /> : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h2>
              <span>{t("years")}</span>
            </div>

            <div className="experience-details">
              <h2>
                <VisibilitySensor partialVisibility>
                  {({ isVisible }) => (
                    <div style={{ height: 60 }}>
                      {isVisible ? <CountUp end={85} /> : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h2>
              <span>{t("finished")}</span>
            </div>

            <div className="experience-details">
              <h2>
                <VisibilitySensor partialVisibility>
                  {({ isVisible }) => (
                    <div style={{ height: 60 }} className="clients">
                      {isVisible ? <CountUp end={90} duration={3} /> : null}+
                    </div>
                  )}
                </VisibilitySensor>
              </h2>
              <span>{t("clients")}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeServices;
