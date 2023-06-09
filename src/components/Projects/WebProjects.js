import React, { useEffect } from "react";
import LeftSideDescriptionProject from "./LeftSideDescriptionProject";
import RightSideDescriptionProject from "./RightSideDescriptionProject";
import teamviewer1 from "../../assets/projects/web/teamviewer1.webp";
import teamviewer2 from "../../assets/projects/web/teamviewer2.webp";
import teamviewer3 from "../../assets/projects/web/teamviewer3.webp";
import table1 from "../../assets/projects/web/table1.webp";
import table2 from "../../assets/projects/web/table2.webp";
import table3 from "../../assets/projects/web/table3.webp";
import portfolio1 from "../../assets/projects/web/portfolio1.webp";
import portfolio2 from "../../assets/projects/web/portfolio2.webp";
import portfolio3 from "../../assets/projects/web/portfolio3.webp";

import classes from "./WebProjects.module.css";
import lozad from "lozad";

const arrWebProjects = [
  {
    title: "My PortFolio",
    description:
      "This is a webpage giving an introduction and description about me, my works and skills.",
    techStack: ["react", "css", "emailJs", "figma"],
    previewLink: "",
    liveLink: "https://kasongo-mavetya-emmanuel-portfolio.netlify.app",
    sourceCodeLink:
      "https://github.com/kasongo-mavetya-emmanuel/reactjs-my-portfolio",
    isSourceCode: true,
    screenShots: [
      {
        src: portfolio1,
        classes: `${classes["screenshot-left-tablet"]} lozad`,
        altText: "teamviewer mockup",
      },
      {
        src: portfolio2,
        classes: `${classes["screenshot-left-desktop"]} lozad`,
        altText: "teamviewer mockup",
      },

      {
        src: portfolio3,
        classes: `${classes["screenshot-left-phone"]} lozad`,
        altText: "teamviewer mockup",
      },
    ],
  },

  {
    title: "TeamViewer Clone",
    description:
      "This is the TeamViewer landing page clone with parallax effets and scrolls animations.",
    techStack: ["react", "css"],
    previewLink: "",
    liveLink: "https://team-viewer-clone.netlify.app",
    sourceCodeLink:
      "https://github.com/kasongo-mavetya-emmanuel/reactjs-team-viewer-clone",
    isSourceCode: true,
    screenShots: [
      {
        src: teamviewer1,
        classes: `${classes["screenshot-left-tablet"]} lozad`,
        altText: "teamviewer mockup",
      },
      {
        src: teamviewer2,
        classes: `${classes["screenshot-left-desktop"]} lozad`,
        altText: "teamviewer mockup",
      },

      {
        src: teamviewer3,
        classes: `${classes["screenshot-left-phone"]} lozad`,
        altText: "teamviewer mockup",
      },
    ],
  },

  {
    title: "Kamel Tables",
    description:
      "This is a Web page of a selling table company with scroll animations.",
    techStack: ["react", "css"],
    previewLink: "",
    liveLink: "https://kamel-tables.netlify.app",
    sourceCodeLink:
      "https://github.com/kasongo-mavetya-emmanuel/reactjs-table-selling-webpage",
    isSourceCode: true,
    screenShots: [
      {
        src: table1,
        classes: `${classes["screenshot-right-tablet"]} lozad`,
        altText: "table mockup",
      },
      {
        src: table2,
        classes: `${classes["screenshot-right-desktop"]} lozad`,
        altText: "table mockup",
      },

      {
        src: table3,
        classes: `${classes["screenshot-right-phone"]} lozad`,
        altText: "table mockup",
      },
    ],
  },
];

const WebProjects = () => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  return (
    <React.Fragment>
      {arrWebProjects.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <LeftSideDescriptionProject
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              screenShots={project.screenShots}
              previewLink={project.previewLink}
              liveLink={project.liveLink}
              sourceCodeLink={project.sourceCodeLink}
              isSourceCode={project.isSourceCode}
            />
          );
        } else {
          return (
            <RightSideDescriptionProject
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              screenShots={project.screenShots}
              previewLink={project.previewLink}
              liveLink={project.liveLink}
              sourceCodeLink={project.sourceCodeLink}
              isSourceCode={project.isSourceCode}
            />
          );
        }
      })}
    </React.Fragment>
  );
};

export default WebProjects;
