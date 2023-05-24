import classes from "./Skills.module.css";
import Container from "../UI/Container";
import H6 from "../UI/H6/H6";
import H2 from "../UI/H2/H2";
import wordPress from "../../assets/icons/wordpress.svg";
import vsCode from "../../assets/icons/vscode.svg";
import gitHub from "../../assets/icons/github.svg";
import git from "../../assets/icons/git.svg";
import nodeJs from "../../assets/icons/nodejs.svg";
import firebase from "../../assets/icons/firebase.svg";
import mongoDB from "../../assets/icons/mongodb.svg";
import sqlite from "../../assets/icons/sqlite.svg";
import figma from "../../assets/icons/figma.svg";
import slack from "../../assets/icons/slack.svg";
import SkillIcon from "./SkillIcon";
import reactjs from "../../assets/icons/react.svg";
import flutter from "../../assets/icons/flutter.svg";
import html from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import javascript from "../../assets/icons/javascript.svg";
import androidStudio from "../../assets/icons/android-studio.svg";

const Skills = () => {
  return (
    <section className={classes["skills-section"]}>
      <Container height={"100%"}>
        <div className={classes["flex-center"]}>
          <div className={classes["skills-container"]}>
            <div className={classes["frontend"]}>
              <div className={classes["headline"]}>
                <H6 text={"FrontEnd"} />
              </div>

              <div className={classes["frontend-in-circle"]}>
                <div className={classes["tools"]}>
                  <div className={classes["headline"]}>
                    <H6 text={"Tools"} />
                  </div>

                  <div className={classes["tools-in-circle"]}>
                    <div className={classes["backend"]}>
                      <div className={classes["headline"]}>
                        <H6 text={"backend"} />
                      </div>

                      <div className={classes["backend-in-circle"]}></div>

                      <SkillIcon source={nodeJs} alt={"nodejs Icon"} />
                      <SkillIcon source={firebase} alt={"firebase Icon"} />
                      <SkillIcon source={mongoDB} alt={"mongodb Icon"} />
                      <SkillIcon source={sqlite} alt={"sqlite Icon"} />
                    </div>
                  </div>

                  <SkillIcon
                    source={androidStudio}
                    alt={"android studion Icon"}
                  />
                  <SkillIcon source={vsCode} alt={"vscode Icon"} />
                  <SkillIcon source={git} alt={"git Icon"} />
                  <SkillIcon source={gitHub} alt={"gitub Icon"} />
                  <SkillIcon source={slack} alt={"slack Icon"} />
                  <SkillIcon source={figma} alt={"figma Icon"} />
                </div>
              </div>

              <SkillIcon source={reactjs} alt={"react Icon"} />
              <SkillIcon source={flutter} alt={"flutter Icon"} />
              <SkillIcon source={html} alt={"html Icon"} />
              <SkillIcon source={css} alt={"css Icon"} />
              <SkillIcon source={javascript} alt={"javascript Icon"} />
              <SkillIcon source={wordPress} alt={"wordPress Icon"} />
            </div>

            <div className={classes["skills-headline"]}>
              <H2 text={"SKILLS"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
