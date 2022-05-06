import React from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../HomeServices/HomeServices";
import Slick from "../Slick/Slick";

function Home() {
  return (
    <>
      <HeroSection />
      <HomeAbout />
      <HomeServices />
      <Cards />
      <Slick />
      <Footer />
    </>
  );
}

export default Home;
