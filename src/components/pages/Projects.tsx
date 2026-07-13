import { useMemo, useState } from "react";
import "../../App.css";
import "./Projects.css";
import Footer from "../Footer/Footer";
import projects, { type ProjectTag } from "./Data/data";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Filter = "all" | ProjectTag;

interface TagButtonProps {
  label: string;
  filter: Filter;
  active: boolean;
  onSelect: (filter: Filter) => void;
}

const TagButton = ({ label, filter, active, onSelect }: TagButtonProps) => (
  <button
    className={`tag ${active ? "active-window" : ""}`}
    onClick={() => onSelect(filter)}
  >
    {label.toUpperCase()}
  </button>
);

export default function Projects() {
  const [tag, setTag] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const { t } = useTranslation();

  const filteredImages = useMemo(
    () =>
      tag === "all"
        ? projects
        : projects.filter((image) => image.tag === tag),
    [tag]
  );

  const slides = filteredImages.map((image) => ({
    src: `/images/${image.imageName}`,
    title: image.projectName,
  }));

  return (
    <>
      <div className="tags">
        <div className="projects-top">
          <h1 className="projects-title" data-aos="fade-down">
            {t("project")}
          </h1>
          <div className="separator"></div>
        </div>
        <div className="tag-filters" data-aos="fade-up">
          <TagButton
            label={t("all_tag")}
            filter="all"
            active={tag === "all"}
            onSelect={setTag}
          />{" "}
          |
          <TagButton
            label={t("interior_tag")}
            filter="interior"
            active={tag === "interior"}
            onSelect={setTag}
          />{" "}
          |
          <TagButton
            label={t("exterior_tag")}
            filter="exterior"
            active={tag === "exterior"}
            onSelect={setTag}
          />{" "}
          |
          <TagButton
            label={t("house_tag")}
            filter="house"
            active={tag === "house"}
            onSelect={setTag}
          />
        </div>

        <div className="project-container" data-aos="fade-up">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="image-card">
              <button
                type="button"
                className="image-card__button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open ${image.projectName}`}
              >
                <img
                  className="projects-image"
                  src={`/images/${image.imageName}`}
                  alt={image.alt}
                  loading="lazy"
                />
              </button>
              <div className="description">
                <h1>{image.projectName}</h1>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={slides}
        />
      </div>
      <Footer />
    </>
  );
}
