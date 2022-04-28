import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1 data-aos="fade-right">Here,</h1>
      <p data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-in">
        We build <span>Lux</span>URY.
      </p>
      <div className="hero-btns" data-aos="fade-up">
        <Link to="/about">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            ABOUT US
          </Button>
        </Link>
        <Link to="/projects">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            OUR PROJECTS <i className="fas fa-rocket" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
