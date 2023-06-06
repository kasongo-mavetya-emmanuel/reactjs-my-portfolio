import React, { useState } from "react";
import MobileProjects from "./MobileProjects";
import WebProjects from "./WebProjects";
import H2 from "../UI/H2/H2";
import H3 from "../UI/H3/H3";
import classes from "./Projects.module.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <div className={classes["projects-headline-container"]}>
        <div className={classes["tab-bar-container"]}>
          <H2 text={"PROJECTS"} />
          <div
            className={`${classes["mobile-tab"]} ${
              isMobile ? classes["selected"] : classes["unSelected"]
            }`}
            onClick={() => setIsMobile(true)}
          >
            <H3
              text={"Mobile"}
              color={`${isMobile ? "" : "rgba(0,0,0,0.4)"}`}
            />
          </div>
          <div
            className={`${classes["web-tab"]} ${
              isMobile ? classes["unSelected"] : classes["selected"]
            }`}
            onClick={() => setIsMobile(false)}
          >
            <H3 text={"Web"} color={`${isMobile ? "rgba(0,0,0,0.4)" : ""}`} />
          </div>
        </div>
      </div>
      {isMobile ? <MobileProjects /> : <WebProjects />}
    </div>
  );
};

export default Projects;
