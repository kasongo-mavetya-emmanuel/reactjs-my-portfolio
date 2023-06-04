import React from "react";
import nyolapp1 from "../../assets/projects/mobile/nyolapp1.png";
import nyolapp2 from "../../assets/projects/mobile/nyolapp2.png";
import nyolapp3 from "../../assets/projects/mobile/nyolapp3.png";
import nyolapp4 from "../../assets/projects/mobile/nyolapp4.png";
import xcooker1 from "../../assets/projects/mobile/xcooker1.png";
import xcooker2 from "../../assets/projects/mobile/xcooker2.png";
import xcooker3 from "../../assets/projects/mobile/xcooker3.png";
import xcooker4 from "../../assets/projects/mobile/xcooker4.png";
import eden1 from "../../assets/projects/mobile/eden1.png";
import eden2 from "../../assets/projects/mobile/eden2.png";
import eden3 from "../../assets/projects/mobile/eden3.png";
import eden4 from "../../assets/projects/mobile/eden4.png";
import LeftSideDescriptionProject from "./LeftSideDescriptionProject";
import RightSideDescriptionProject from "./RightSideDescriptionProject";
import classes from "./MobileProjects.module.css";

// ,{
//   title:,
//   description:,
//   techStack:[],
//   screenShots:[],
// },

// eslint-disable-next-line no-sparse-arrays
const ArrMobileProjects = [
  {
    title: "NyolApp",
    description:
      "NyolApp is an application that facilitate barberShop Owners to track daily income of the shop,for each coiffeur without internet and it allows to backup their data on cloud.",
    techStack: ["flutter", "sqFlite", "firebase"],
    screenShots: [
      <img
        key={0}
        src={nyolapp1}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img1"]}`}
        alt="nyolapp mockup"
      />,
      <img
        key={1}
        src={nyolapp2}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img2"]}`}
        alt="nyolapp mockup"
      />,
      <img
        key={2}
        src={nyolapp3}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img3"]}`}
        alt="nyolapp mockup"
      />,
      <img
        key={3}
        src={nyolapp4}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img4"]}`}
        alt="nyolapp mockup"
      />,
    ],
  },
  {
    title: "XCooker",
    description:
      "This is an application to control an induction cooker. In the app, the user can change the temperature of the plates, add a timer to automatically limit the cooking time, add cooking modes and turn off the stove.",
    techStack: ["flutter", "hive", "nodejs"],
    screenShots: [
      <img
        key={0}
        src={xcooker1}
        className={`${classes["screenshot"]} ${classes["screenshot-right-img1"]}`}
        alt="xcooker mockup"
      />,
      <img
        key={1}
        src={xcooker2}
        className={`${classes["screenshot"]} ${classes["screenshot-right-img2"]}`}
        alt="xcooker mockup"
      />,
      <img
        key={2}
        src={xcooker3}
        className={`${classes["screenshot"]} ${classes["screenshot-right-img3"]}`}
        alt="xcooker mockup"
      />,
      <img
        key={3}
        src={xcooker4}
        className={`${classes["screenshot"]} ${classes["screenshot-right-img4"]}`}
        alt="xcooker mockup"
      />,
    ],
  },
  {
    title: "Eden World",
    description:
      "Eden World is an application for sponsors to send funds to pay school fees to help children, sponsors can also send feedback to the administrator. The administrator is responsible for adding students to the system, assigning students to a sponsor, distributing fees to students, and validating sponsor payments.",
    techStack: ["flutter", "firebase", "stripe", "push-notification"],
    screenShots: [
      <img
        key={0}
        src={eden1}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img1"]}`}
        alt="eden mockup"
      />,
      <img
        key={1}
        src={eden2}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img2"]}`}
        alt="eden mockup"
      />,
      <img
        key={2}
        src={eden3}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img3"]}`}
        alt="eden mockup"
      />,
      <img
        key={3}
        src={eden4}
        className={`${classes["screenshot"]} ${classes["screenshot-left-img4"]}`}
        alt="eden mockup"
      />,
    ],
  },
];

const MobileProjects = () => {
  return (
    <React.Fragment>
      {ArrMobileProjects.map((project, index) => {
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

export default MobileProjects;
