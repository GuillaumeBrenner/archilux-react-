import React, { useEffect } from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../HomeServices/HomeServices";
import Slick from "../Slick/Slick";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home">
        <HeroSection />
        <HomeAbout />
        <HomeServices />
        <Cards />
        <Slick />
        <Footer />
      </div>
    </>
  );
}

export default Home;
