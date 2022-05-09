import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./Slick.css";

function Slick() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <>
      <section className="home-slick">
        <h1 data-aos="fade-up">{t("feedback")}</h1>
        <div className="separator" data-aos="fade-down"></div>
        <Slider {...settings} className="contain">
          <div className="slick-text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
          <div className="slick-text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
          <div className="slick-text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, velit alias eius non illum beatae atque repellat
              ratione qui veritatis repudiandae adipisci maiores. At inventore
              necessitatibus deserunt exercitationem cumque earum omnis ipsum
              rem accusantium quis, quas quia, accusamus provident suscipit
              magni! Expedita sint ad dolore, commodi labore nihil velit earum
              ducimus nulla quae nostrum fugit aut, deserunt reprehenderit
              libero enim!
            </p>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Slick;
