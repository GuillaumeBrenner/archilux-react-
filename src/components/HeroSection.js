import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Bonjour,</h1>
      <p>Bienvenue à ARCHILUX</p>
      <div className="hero-btns">
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
