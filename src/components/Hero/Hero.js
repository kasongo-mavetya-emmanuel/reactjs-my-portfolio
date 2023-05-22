import Container from "../UI/Container";
import classes from "./Hero.module.css";
import H4 from "../UI/H4/H4";
import H1 from "../UI/H1/H1";
import H2 from "../UI/H2/H2";
import CustomButton from "../UI/CustomButton/CustomButton";

const Hero = function () {
  return (
    <section className={classes["hero"]}>
      <div className={classes["hero-grid"]}>
        <div>
          <Container>
            <div className={classes["content"]}>
              <H4
                text={`I'am Kasongo Mavetya Emmanuel,`}
                marginBottom={"1.2rem"}
              />
              <H1 text={"A FRONTEND DEVELOPER"} marginBottom={"2.4rem"} />
              <div className={classes["h2-container"]}>
                <H2
                  text={"Limitless Web and Mobile Apps Delivery"}
                  fontSize={"4.8rem"}
                />
              </div>
              <CustomButton text={"Hire Me"} />
            </div>
          </Container>
        </div>
      </div>
      <div className={classes["bg-1"]}></div>
      <div className={classes["bg-2"]}></div>
      <div className={classes["bg-3"]}></div>
    </section>
  );
};

export default Hero;
