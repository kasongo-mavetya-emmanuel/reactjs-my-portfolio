import React, { useContext } from "react";
import SectionsContext from "../../store/sections-context";
import classes from "./Footer.module.css";
import Container from "../UI/Container";
import linkedIn from "../../assets/icons/linkedin.svg";
import email from "../../assets/icons/email.svg";
import gitHub from "../../assets/icons/github2.svg";
import logo from "../../assets/logo.png";
import BodyLarge from "../UI/BodyLarge/BodyLarge";

const Footer = () => {
  const ctx = useContext(SectionsContext);
  function onHome() {
    ctx.heroRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function onAbout() {
    ctx.aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function onProjects() {
    ctx.projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function onSkills() {
    ctx.skillsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className={classes["footer"]}>
      <Container>
        <div className={classes["flex-footer"]}>
          <img className={classes["footer-logo"]} src={logo} alt="kasmael" />
          <div className={classes["right-div-flex"]}>
            <div className={classes["social-media-icons"]}>
              <div>
                <a
                  href="https://www.linkedin.com/in/kasongo-mavetya-emmanuel-67087015b/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={linkedIn} alt="linkedin Icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/kasongo-mavetya-emmanuel"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={gitHub} alt="github Icons" />
                </a>
              </div>
              <div>
                <a
                  href="mailto:someone@yoursite.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={email} alt="email Icons" />
                </a>
              </div>
            </div>
            <ul className={classes["menu-container"]}>
              <li onClick={onHome}>
                <BodyLarge text={"Home"} />
              </li>
              <li onClick={onAbout}>
                <BodyLarge text={"About"} />
              </li>
              <li onClick={onProjects}>
                <BodyLarge text={"Projects"} />
              </li>
              <li onClick={onSkills}>
                <BodyLarge text={"Skills"} />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
