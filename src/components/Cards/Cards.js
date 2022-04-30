import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

function Cards() {
  return (
    <div className="cards">
      <h1 data-aos="fade-up">Check out our Best Projects</h1>
      <div className="separator" data-aos="fade-down"></div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" data-aos="fade-up">
            <CardItem
              src="images/projet1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Villa"
              path="/projects"
            />
            <CardItem
              src="images/interior1.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/projects"
            />
          </ul>
          <ul className="cards__items" data-aos="fade-up">
            <CardItem
              src="images/interior3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="House"
              path="/projects"
            />
            <CardItem
              src="images/exterior1.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Piscine"
              path="/projects"
            />
            <CardItem
              src="images/exterior2.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
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
            VIEW MORE
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
