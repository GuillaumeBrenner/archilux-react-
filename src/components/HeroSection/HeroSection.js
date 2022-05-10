import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./HeroSection.css";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <img src="images/interior.jpg" alt="" />
      <h1 data-aos="fade-right">{t("hero_title1")},</h1>
      <p
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-easing="ease-in"
      >
        {t("hero_title2")} <span>{t("lux")}</span>{t("ury")}.
      </p>
      <div className="hero-btns" data-aos="fade-up">
        <Link to="/about">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            {t("about_us")}
          </Button>
        </Link>
        <Link to="/projects">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            {t("our_projects")}
            <i className="fas fa-rocket" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
