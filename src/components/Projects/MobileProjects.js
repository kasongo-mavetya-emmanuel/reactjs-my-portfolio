import React, { useEffect } from "react";
import nyolapp1 from "../../assets/projects/mobile/nyolapp1.webp";
import nyolapp2 from "../../assets/projects/mobile/nyolapp2.webp";
import nyolapp3 from "../../assets/projects/mobile/nyolapp3.webp";
import nyolapp4 from "../../assets/projects/mobile/nyolapp4.webp";
import xcooker1 from "../../assets/projects/mobile/xcooker1.webp";
import xcooker2 from "../../assets/projects/mobile/xcooker2.webp";
import xcooker3 from "../../assets/projects/mobile/xcooker3.webp";
import xcooker4 from "../../assets/projects/mobile/xcooker4.webp";
import eden1 from "../../assets/projects/mobile/eden1.webp";
import eden2 from "../../assets/projects/mobile/eden2.webp";
import eden3 from "../../assets/projects/mobile/eden3.webp";
import eden4 from "../../assets/projects/mobile/eden4.webp";
import LeftSideDescriptionProject from "./LeftSideDescriptionProject";
import RightSideDescriptionProject from "./RightSideDescriptionProject";
import classes from "./MobileProjects.module.css";
import lozad from "lozad";

// eslint-disable-next-line no-sparse-arrays
const ArrMobileProjects = [
  {
    title: "NyolApp",
    description:
      "NyolApp is an application that facilitate barberShop Owners to track daily income of the shop,for each coiffeur without internet and it allows to backup their data on cloud.",
    techStack: ["flutter", "sqFlite", "firebase"],
    previewLink: "",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.kasongomavetya.nyola_app",
    sourceCodeLink: "",
    isSourceCode: false,
    screenShots: [
      {
        src: nyolapp1,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img1"]} lozad`,
        altText: "nyolapp mockup",
      },
      {
        src: nyolapp2,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img2"]} lozad`,
        altText: "nyolapp mockup",
      },

      {
        src: nyolapp3,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img3"]} lozad`,
        altText: "nyolapp mockup",
      },

      {
        src: nyolapp4,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img4"]} lozad`,
        altText: "nyolapp mockup",
      },
    ],
  },
  {
    title: "XCooker",
    description:
      "This is an application to control an induction cooker. In the app, the user can change the temperature of the plates, add a timer to automatically limit the cooking time, add cooking modes and turn off the stove.",
    techStack: ["flutter", "hive", "nodejs"],
    previewLink:
      "https://drive.google.com/file/d/1u8Np7cBK_aqaJxKMv-_4T5SQ4e8p2wu2/view",
    liveLink: "",
    sourceCodeLink: "",
    isSourceCode: false,

    screenShots: [
      {
        src: xcooker1,
        classes: `${classes["screenshot"]} ${classes["screenshot-right-img1"]} lozad`,
        altText: "xcooker mockup",
      },
      {
        src: xcooker2,
        classes: `${classes["screenshot"]} ${classes["screenshot-right-img2"]} lozad`,
        altText: "xcooker mockup",
      },

      {
        src: xcooker3,
        classes: `${classes["screenshot"]} ${classes["screenshot-right-img3"]} lozad`,
        altText: "xcooker mockup",
      },
      {
        src: xcooker4,
        classes: `${classes["screenshot"]} ${classes["screenshot-right-img4"]} lozad`,
        altText: "xcooker mockup",
      },
    ],
  },
  {
    title: "Eden World",
    description:
      "Eden World is an application for sponsors to send funds to pay school fees to help children, sponsors can also send feedback to the administrator. The administrator is responsible for adding students to the system, assigning students to a sponsor, distributing fees to students, and validating sponsor payments.",
    techStack: ["flutter", "firebase", "stripe", "push-notification"],
    previewLink:
      "https://drive.google.com/file/d/1Jvbwb0DI3XAxFzxqQbg5rn5kly58wjUY/view",
    liveLink: "",
    sourceCodeLink: "",
    isSourceCode: false,

    screenShots: [
      {
        src: eden1,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img1"]} lozad`,
        altText: "eden mockup",
      },
      {
        src: eden2,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img2"]} lozad`,
        altText: "eden mockup",
      },
      {
        src: eden3,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img3"]} lozad`,
        altText: "eden mockup",
      },
      {
        src: eden4,
        classes: `${classes["screenshot"]} ${classes["screenshot-left-img4"]} lozad`,
        altText: "eden mockup",
      },
    ],
  },
];

const MobileProjects = () => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

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

export default MobileProjects;
