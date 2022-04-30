import React from "react";
import "./HomeServices.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function HomeServices() {
  return (
    <>
      <section className="home-services">
        <h1 data-aos="fade-up">Experience</h1>
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
              <span>Years Experience</span>
            </div>

            <div className="experience-details">
              <h2>
                <VisibilitySensor partialVisibility>
                  {({ isVisible }) => (
                    <div style={{ height: 60 }}>
                      {isVisible ? <CountUp end={75} /> : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h2>
              <span>Finished Projects</span>
            </div>

            <div className="experience-details">
              <h2>
                <VisibilitySensor partialVisibility>
                  {({ isVisible }) => (
                    <div style={{ height: 60 }}>
                      {isVisible ? <CountUp end={150} duration={3} /> : null}+
                    </div>
                  )}
                </VisibilitySensor>
              </h2>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeServices;
