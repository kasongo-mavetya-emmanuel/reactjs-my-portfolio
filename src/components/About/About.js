import React, { useContext } from "react";
import SectionsContext from "../../store/sections-context";
import H2 from "../UI/H2/H2";
import Container from "../UI/Container";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./About.module.css";
import "aos/dist/aos.css";

const About = () => {
  const ctx = useContext(SectionsContext);

  return (
    <section className={classes["about-section"]} ref={ctx.aboutRef}>
      <Container>
        <div className={classes["content-wrapper"]}>
          <div
            className={classes["headline"]}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <H2 text={"ABOUT ME"} />
          </div>
          <div className={classes["description"]}>
            <Paragraph>
              I am a front-end developer with experience in developing mobile
              and web applications that are both functional and visually
              appealing.
              <br />
              &nbsp;
              <br />
              I am passionate about creating innovative, responsive, and
              user-friendly applications that meet the needs of users. I am a
              quick learner and enjoy working in a fast-paced environment.
              <br />
              &nbsp;
              <br />I am excited to work with a team of experienced developers
              to create high-quality products that make an impact.
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
