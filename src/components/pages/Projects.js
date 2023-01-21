import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Projects.css";
import Footer from "../Footer/Footer";
import images from "./Data/data";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

const options = {
  buttons: {
    backgroundColor: "#fcba03",
    iconColor: "#000",
    iconPadding: "10px",
    showFullscreenButton: true,
    showDownloadButton: false,
    showAutoplayButton: false,
    showCloseButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
    size: "40px",
  },
  caption: {
    captionFontFamily: "Raleway, sans-serif",
    captionFontSize: "25px",
    captionFontWeight: "700",
    captionTextTransform: "uppercase",
  },
  settings: {
    boxShadow: "none",
    hideControlsAfter: 5000,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: "linear",
    overlayColor: "rgba(30, 30, 30, 0.9)",
    slideTransitionSpeed: 0.9,
    slideTransitionTimingFunction: "linear",
    usingPreact: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

export default function Projects() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const TagButton = ({ name, handlesetag, tagActive }) => {
    return (
      <button
        className={`tag ${tagActive ? "active-window" : null}`}
        onClick={() => handlesetag(name)}
      >
        {name.toUpperCase()}
      </button>
    );
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="project-header">
        <img src="images/interior.jpg" alt="" />
        <h1 data-aos="fade-right">{t("projet_hero")}</h1>
        <p data-aos="fade-left" data-aos-easing="ease-in">
          {t("projet_description")}
        </p>
      </div>

      <div className="tags" handlesetag={tag}>
        <div className="projects-top">
          <h1 className="section-title" data-aos="fade-down">
            {t("projet_title")}
          </h1>
          <div className="separator"></div>
        </div>
        <div data-aos="fade-up">
          <TagButton
            name={t("all_tag")}
            tagActive={tag === "all" ? true : false}
            handlesetag={setTag}
          />{" "}
          |
          <TagButton
            name={t("interior_tag")}
            tagActive={tag === "interieur" ? true : false}
            handlesetag={setTag}
          />{" "}
          |
          <TagButton
            name={t("exterior_tag")}
            tagActive={tag === "exterieur" ? true : false}
            handlesetag={setTag}
          />{" "}
          |
          <TagButton
            name={t("house_tag")}
            tagActive={tag === "maison" ? true : false}
            handlesetag={setTag}
          />
        </div>
        <SRLWrapper options={options}>
          <div className="project-container" data-aos="fade-up">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                <a href={`/images/${image.imageName}`}>
                  <img
                    className="projects-image"
                    src={`/images/${image.imageName}`}
                    alt={image.alt}
                  />
                </a>
                <div className="description">
                  <h1> {image.projectName} </h1>
                </div>
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
      <Footer />
    </>
  );
}
