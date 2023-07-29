import React, { useEffect } from "react";
import LeftSideDescriptionProject from "./LeftSideDescriptionProject";
import RightSideDescriptionProject from "./RightSideDescriptionProject";
import teamviewer1 from "../../assets/projects/web/teamviewer1.webp";
import teamviewer2 from "../../assets/projects/web/teamviewer2.webp";
import teamviewer3 from "../../assets/projects/web/teamviewer3.webp";
import kasBraceletTablet from "../../assets/projects/web/kasBraceletTablet.webp";
import kasBraceletWeb from "../../assets/projects/web/kasBraceletWeb.webp";
import kasBraceletPhone from "../../assets/projects/web/kasBraceletMobile.webp";
import kasTokTablet from "../../assets/projects/web/kasTokTablet.webp";
import kasTokWeb from "../../assets/projects/web/kasTokWeb.webp";
import kasTokPhone from "../../assets/projects/web/kasTokMobile.webp";
import classes from "./WebProjects.module.css";
import lozad from "lozad";

const arrWebProjects = [
  {
    title: "Kas Tok",
    description:
      "Kas Tok is a web application that enables users to share videos with the world, also like and leave comments on other people posts.",
    techStack: ["nextJS", "tailwind", "cloudinary", "typescript", "sanity"],
    previewLink: "",
    liveLink: "https://kas-tok.vercel.app",
    sourceCodeLink:
      "https://github.com/kasongo-mavetya-emmanuel/nextjs-video-social-media",
    isSourceCode: true,
    screenShots: [
      {
        src: kasTokTablet,
        classes: `${classes["screenshot-left-tablet"]} lozad`,
        altText: "kas Tok mockup",
      },
      {
        src: kasTokWeb,
        classes: `${classes["screenshot-left-desktop"]} lozad`,
        altText: "kas Tok mockup",
      },

      {
        src: kasTokPhone,
        classes: `${classes["screenshot-left-phone"]} lozad`,
        altText: "Kas Tok mockup",
      },
    ],
  },

  {
    title: "Kas Bracelet",
    description: "e-shop website that sells bracelets.",
    techStack: ["react", "tailwind", "typescript", "sanity", "stripe"],
    previewLink: "",
    liveLink: "https://kasbracelets.netlify.app",
    sourceCodeLink:
      "https://github.com/kasongo-mavetya-emmanuel/reactjs-ecommerce",
    isSourceCode: true,
    screenShots: [
      {
        src: kasBraceletTablet,
        classes: `${classes["screenshot-left-tablet"]} lozad`,
        altText: "teamviewer mockup",
      },
      {
        src: kasBraceletWeb,
        classes: `${classes["screenshot-left-desktop"]} lozad`,
        altText: "teamviewer mockup",
      },

      {
        src: kasBraceletPhone,
        classes: `${classes["screenshot-left-phone"]} lozad`,
        altText: "teamviewer mockup",
      },
    ],
  },

  {
    title: "TeamViewer",
    description:
      "This is the TeamViewer landing page clone with parallax effets and scrolls animations.",
    techStack: ["react", "tailwind", "netlify", "sanity"],
    previewLink: "",
    liveLink: "https://kasbracelets.netlify.app",
    sourceCodeLink:
      "https://github.com/kasongo-mavetya-emmanuel/reactjs-team-viewer-clone",
    isSourceCode: true,
    screenShots: [
      {
        src: teamviewer1,
        classes: `${classes["screenshot-right-tablet"]} lozad`,
        altText: "table mockup",
      },
      {
        src: teamviewer2,
        classes: `${classes["screenshot-right-desktop"]} lozad`,
        altText: "table mockup",
      },

      {
        src: teamviewer3,
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
