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
              As a lifelong musician, before tech I taught guitar and voice, ran
              a rehearsal studio, and booked concerts in NYC and beyond.
              <br />
              &nbsp;
              <br />
              In 2020, I took a leap and trained in modern app development at
              Fullstack Academy. I quickly absorbed new concepts, while bringing
              ambitious ideas and a positive attitude to every challenge.
              <br />
              &nbsp;
              <br />
              In 2020, I took a leap and trained in modern app When I'm not
              coding, I'm usually doing yoga, testing out a new recipe, or
              writing a musical parody on guitar.
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
