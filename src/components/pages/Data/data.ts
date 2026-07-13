export type ProjectTag = "interior" | "exterior" | "house";

export interface Project {
  id: string;
  imageName: string;
  projectName: string;
  alt: string;
  tag: ProjectTag;
}

const projects: Project[] = [
  {
    id: "1",
    imageName: "interior.jpg",
    projectName: "Modern Interior",
    alt: "Modern interior living space",
    tag: "interior",
  },
  {
    id: "2",
    imageName: "interior3.jpg",
    projectName: "Open Living",
    alt: "Open living room design",
    tag: "interior",
  },
  {
    id: "3",
    imageName: "projet2.jpg",
    projectName: "Family House",
    alt: "Family house exterior",
    tag: "house",
  },
  {
    id: "4",
    imageName: "img4.jpg",
    projectName: "Contemporary Home",
    alt: "Contemporary home facade",
    tag: "house",
  },
  {
    id: "5",
    imageName: "exterior1.jpg",
    projectName: "Facade Study",
    alt: "Building facade study",
    tag: "exterior",
  },
  {
    id: "6",
    imageName: "img6.jpg",
    projectName: "Interior Detail",
    alt: "Interior detailing",
    tag: "interior",
  },
  {
    id: "7",
    imageName: "img7.jpg",
    projectName: "Residence",
    alt: "Residential building",
    tag: "house",
  },
  {
    id: "8",
    imageName: "exterior2.jpg",
    projectName: "Urban Exterior",
    alt: "Urban exterior view",
    tag: "exterior",
  },
  {
    id: "9",
    imageName: "img9.jpg",
    projectName: "Living Space",
    alt: "Bright living space",
    tag: "interior",
  },
];

export default projects;
