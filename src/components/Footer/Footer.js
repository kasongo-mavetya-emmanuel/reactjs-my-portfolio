import classes from "./Footer.module.css";
import Container from "../UI/Container";
import linkedIn from "../../assets/icons/linkedin.svg";
import email from "../../assets/icons/email.svg";
import gitHub from "../../assets/icons/github2.svg";
import logo from "../../assets/logo.png";
import BodyLarge from "../UI/BodyLarge/BodyLarge";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <Container>
        <div className={classes["flex-footer"]}>
          <img className={classes["footer-logo"]} src={logo} alt="kasmael" />
          <div className={classes["right-div-flex"]}>
            <div className={classes["social-media-icons"]}>
              <div>
                <img src={linkedIn} alt="linkedin Icons" />
              </div>
              <div>
                <img src={gitHub} alt="github Icons" />
              </div>
              <div>
                <img src={email} alt="email Icons" />
              </div>
            </div>
            <ul className={classes["menu-container"]}>
              <li>
                <BodyLarge text={"Home"} />
              </li>
              <li>
                <BodyLarge text={"About"} />
              </li>
              <li>
                <BodyLarge text={"Projects"} />
              </li>
              <li>
                <BodyLarge text={" Skills"} />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
