import React from "react";
import "./HomeAbout.css";

function HomeAbout() {
  return (
    <>
      <section className="home-about">
        <h1 data-aos="fade-up">More than an architecture agency</h1>
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
                <p>Ikeja, Lagos</p>
              </div>
            </div>
          </div>
          <div className="about-text" data-aos="fade-down">
            <div className="text1">
              <h3>Who we are</h3>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward will
                have multiple touchpoints for offshoring.
              </p>
            </div>

            <div className="text2">
              <h3>Our philosophy</h3>
              <p>
                A new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time.
              </p>
            </div>
            <div className="text3">
              <h3>How we work</h3>
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
