import { useTranslation } from "react-i18next";
import Slider, { type Settings } from "react-slick";
import "./Slick.css";

const feedback = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
   velit alias eius non illum beatae atque repellat ratione qui veritatis
   repudiandae adipisci maiores. At inventore necessitatibus deserunt
   exercitationem cumque earum omnis ipsum rem accusantium quis.`,
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
   velit alias eius non illum beatae atque repellat ratione qui veritatis
   repudiandae adipisci maiores. At inventore necessitatibus deserunt
   exercitationem cumque earum omnis ipsum rem accusantium quis.`,
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
   velit alias eius non illum beatae atque repellat ratione qui veritatis
   repudiandae adipisci maiores. At inventore necessitatibus deserunt
   exercitationem cumque earum omnis ipsum rem accusantium quis.`,
];

function Slick() {
  const { t } = useTranslation();

  const settings: Settings = {
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
    <section className="home-slick">
      <div className="slick-container">
        <h1 data-aos="fade-up">{t("feedback")}</h1>
        <div className="separator" data-aos="fade-down"></div>
        <p className="feedback-intro">{t("intro")}</p>
        <div className="bg"></div>
        <Slider {...settings} className="contain">
          {feedback.map((text, index) => (
            <div className="slick-text" key={index}>
              <p>{text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Slick;
