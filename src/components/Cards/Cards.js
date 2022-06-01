import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";

function Cards() {
  const { t } = useTranslation();

  return (
    <div className="cards">
      <h1 data-aos="fade-up">{t("check_project")}</h1>
      <div className="separator" data-aos="fade-down"></div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" data-aos="fade-up">
            <CardItem
              src="images/img-1.jpg"
              text="Card Texte"
              label="Villa"
              path="/projects"
            />
            <CardItem
              src="images/interior1.jpg"
              text="Card Texte"
              label="Luxury"
              path="/projects"
            />
          </ul>
          <ul className="cards__items" data-aos="fade-down">
            <CardItem
              src="images/interior3.jpg"
              text="Maison d'hotes"
              label="House"
              path="/projects"
            />
            <CardItem
              src="images/exterior1.jpg"
              text="Les Résidences des milliadaires"
              label="Piscine"
              path="/projects"
            />
            <CardItem
              src="images/exterior2.jpg"
              text="Places de divertissement à la plage"
              label="Terasse"
              path="/projects"
            />
          </ul>
        </div>
        <Link to="/projects">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--test"
          >
            {t("view_more")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
