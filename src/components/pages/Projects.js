import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Projects.css";
import Footer from "../Footer/Footer";
import images from "./Data/data";
import { SRLWrapper } from "simple-react-lightbox";

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

  return (
    <>
      <div className="tags" handlesetag={tag}>
        <div className="projects-top">
          <h1 className="projects-title" data-aos="fade-down">
            PROJECTS
          </h1>
          <div className="separator"></div>
        </div>
        <div data-aos="fade-up">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handlesetag={setTag}
          />{" "}
          |
          <TagButton
            name="interior"
            tagActive={tag === "interior" ? true : false}
            handlesetag={setTag}
          />{" "}
          |
          <TagButton
            name="exterior"
            tagActive={tag === "exterior" ? true : false}
            handlesetag={setTag}
          />{" "}
          |
          <TagButton
            name="house"
            tagActive={tag === "house" ? true : false}
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
