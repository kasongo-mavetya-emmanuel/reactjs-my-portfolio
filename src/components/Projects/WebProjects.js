import React from "react";
import LeftSideDescriptionProject from "./LeftSideDescriptionProject";
import RightSideDescriptionProject from "./RightSideDescriptionProject";
import teamviewer1 from "../../assets/projects/web/teamviewer1.png";
import teamviewer2 from "../../assets/projects/web/teamviewer2.png";
import teamviewer3 from "../../assets/projects/web/teamviewer3.png";
import table1 from "../../assets/projects/web/table1.png";
import table2 from "../../assets/projects/web/table2.png";
import table3 from "../../assets/projects/web/table3.png";
import classes from "./WebProjects.module.css";

const arrWebProjects = [
  {
    title: "TeamViewer Clone",
    description:
      "This is the TeamViewer landing page clone with parallax effets and scrolls animations.",
    techStack: ["react", "css"],
    screenShots: [
      <img
        key={0}
        src={teamviewer1}
        className={`${classes["screenshot-left-tablet"]}`}
        alt="teamviewer mockup"
      />,
      <img
        key={1}
        src={teamviewer2}
        className={`${classes["screenshot-left-desktop"]}`}
        alt="teamviewer mockup"
      />,
      <img
        key={2}
        src={teamviewer3}
        className={`${classes["screenshot-left-phone"]}`}
        alt="teamviewer mockup"
      />,
    ],
  },

  {
    title: "Kamel Tables",
    description:
      "This is a Web page of a selling table company with scroll animations.",
    techStack: ["react", "css"],
    screenShots: [
      <img
        key={0}
        src={table1}
        className={`${classes["screenshot-right-tablet"]}`}
        alt="table mockup"
      />,
      <img
        key={1}
        src={table2}
        className={`${classes["screenshot-right-desktop"]}`}
        alt="table mockup"
      />,
      <img
        key={2}
        src={table3}
        className={`${classes["screenshot-right-phone"]}`}
        alt="table mockup"
      />,
    ],
  },
];

const WebProjects = () => {
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
            >
              {project.screenShots.map((e, index) => {
                return e;
              })}
            </LeftSideDescriptionProject>
          );
        } else {
          return (
            <RightSideDescriptionProject
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            >
              {project.screenShots.map((e, index) => {
                return e;
              })}
            </RightSideDescriptionProject>
          );
        }
      })}
    </React.Fragment>
  );
};

export default WebProjects;
