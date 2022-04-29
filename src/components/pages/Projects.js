import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Projects.css";
import Footer from "../Footer";

const images = [
  { id: "1", imageName: "img1.jpeg", tag: "exterior" },
  { id: "2", imageName: "img2.jpeg", tag: "interior" },
  { id: "3", imageName: "img3.jpeg", tag: "house" },
  { id: "4", imageName: "img4.jpeg", tag: "house" },
  { id: "5", imageName: "img5.jpeg", tag: "exterior" },
  { id: "6", imageName: "img6.jpeg", tag: "interior" },
  { id: "7", imageName: "img6.jpeg", tag: "house" },
  { id: "8", imageName: "img8.jpeg", tag: "exterior" },
  { id: "9", imageName: "img9.jpeg", tag: "interior" },
  { id: "10", imageName: "img10.jpeg", tag: "interior" },
  { id: "11", imageName: "img11.jpeg", tag: "interior" },
  { id: "12", imageName: "img12.jpeg", tag: "interior" },
  { id: "13", imageName: "img13.jpeg", tag: "exterior" },
  { id: "14", imageName: "img14.jpeg", tag: "house" },
  { id: "15", imageName: "img15.jpeg", tag: "exterior" },
  { id: "16", imageName: "img16.jpeg", tag: "interior" },
];

export default function Projects() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
      <button
        className={`tag ${tagActive ? "active-window" : null}`}
        onClick={() => handleSetTag(name)}
      >
        {name.toUpperCase()}
      </button>
    );
  };

  return (
    <>
      <div className="tags" handleSetTag={setTag}>
        <div className="projects-top">
          <h1 className="projects-title" data-aos="fade-down">PROJECTS</h1>
          <div className="separator"></div>
        </div>
        <div data-aos="fade-down">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          |
          <TagButton
            name="interior"
            tagActive={tag === "interior" ? true : false}
            handleSetTag={setTag}
          />{" "}
          |
          <TagButton
            name="exterior"
            tagActive={tag === "exterior" ? true : false}
            handleSetTag={setTag}
          />{" "}
          |
          <TagButton
            name="house"
            tagActive={tag === "house" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        <div className="project-container" data-aos="fade-up">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
