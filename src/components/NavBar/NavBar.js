import logo from "../../assets/logo.png";
import Container from "../UI/Container";
import BodyLarge from "../UI/BodyLarge/BodyLarge";
import CustomButton from "../UI/CustomButton/CustomButton";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={classes["header"]}>
      <Container>
        <div className={classes["header-grid"]}>
          <img className={classes["logo"]} src={logo} alt="kasmael" />
          <nav>
            <ul>
              <li>
                <BodyLarge text={"About"} />
              </li>
              <li>
                <BodyLarge text={"Projects"} />
              </li>
              <li>
                <BodyLarge text={"Skills"} />
              </li>
              <li>
                <CustomButton text={"Hire Me"} />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
