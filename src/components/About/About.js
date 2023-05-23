import H2 from "../UI/H2/H2";
import Container from "../UI/Container";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes["about-section"]}>
      <Container>
        <div className={classes["content-wrapper"]}>
          <div className={classes["headline"]}>
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
