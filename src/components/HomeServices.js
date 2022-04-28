import React from "react";
import "./HomeServices.css";

function HomeServices() {
  return (
    <>
      <section className="home-services">
        <h1 data-aos="fade-up">Experience</h1>
        <div className="separator" data-aos="fade-down"></div>
        <div className="experience-container" data-aos="fade-up">
          <div className="experience-grid">
            <div className="experience-details">
              <h2>10</h2>
              <span>Year Experience</span>
            </div>

            <div className="experience-details">
              <h2>75</h2>
              <span>Complete tours</span>
            </div>

            <div className="experience-details">
              <h2>650+</h2>
              <span>Tourist Destination</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeServices;
