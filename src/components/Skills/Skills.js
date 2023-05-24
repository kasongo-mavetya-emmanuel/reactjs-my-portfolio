import classes from "./Skills.module.css";
import Container from "../UI/Container";
import H6 from "../UI/H6/H6";
import SkillIcon from "./SkillIcon";
import reactjs from "../../assets/icons/react.svg";
import flutter from "../../assets/icons/flutter.svg";
import html from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import javascript from "../../assets/icons/javascript.svg";
import wordPress from "../../assets/icons/wordpress.svg";
import androidStudio from "../../assets/icons/android-studio.svg";
import vsCode from "../../assets/icons/vscode.svg";
import gitHub from "../../assets/icons/github.svg";
import git from "../../assets/icons/git.svg";
import figma from "../../assets/icons/figma.svg";
import slack from "../../assets/icons/slack.svg";
import nodeJs from "../../assets/icons/nodejs.svg";
import firebase from "../../assets/icons/firebase.svg";
import mongoDB from "../../assets/icons/mongodb.svg";
import sqlite from "../../assets/icons/sqlite.svg";

const Skills = () => {
  return (
    <section className={classes["skills-section"]}>
      <Container height={"100%"}>
        <div className={classes["frontend"]}>
          <div className={classes["frontend-headline"]}>
            <H6 text={"FrontEnd"} />
          </div>

          <div className={classes["fontend-in-circle"]}></div>

          <SkillIcon source={reactjs} alt={"react Icon"} />
          <SkillIcon source={flutter} alt={"flutter Icon"} />
          <SkillIcon source={html} alt={"html Icon"} />
          <SkillIcon source={css} alt={"css Icon"} />
          <SkillIcon source={javascript} alt={"javascript Icon"} />
          <SkillIcon source={wordPress} alt={"wordPress Icon"} />

          <div className={classes["tools"]}>
            <div className={classes["backend"]}></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
