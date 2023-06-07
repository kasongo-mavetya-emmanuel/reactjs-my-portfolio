import React, { useContext } from "react";
import SectionsContext from "../../store/sections-context";
import logo from "../../assets/logo.png";
import Container from "../UI/Container";
import BodyLarge from "../UI/BodyLarge/BodyLarge";
import CustomButton from "../UI/CustomButton/CustomButton";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const ctx = useContext(SectionsContext);
  function onAbout() {
    ctx.aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function onProjects() {
    ctx.projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function onSkills() {
    ctx.skillsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function onHireMe(e) {
    e.preventDefault();
    ctx.contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={classes["header"]}>
      <Container>
        <div className={classes["header-grid"]}>
          <img className={classes["logo"]} src={logo} alt="kasmael" />
          <nav>
            <ul>
              <li onClick={onAbout}>
                <BodyLarge text={"About"} />
              </li>
              <li onClick={onProjects}>
                <BodyLarge text={"Projects"} />
              </li>
              <li onClick={onSkills}>
                <BodyLarge text={"Skills"} />
              </li>
              <li>
                <CustomButton text={"Hire Me"} onClick={onHireMe} />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
