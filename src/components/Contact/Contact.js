import classes from "./Contact.module.css";
import Container from "../UI/Container";
import linkedIn from "../../assets/icons/linkedin.svg";
import email from "../../assets/icons/email.svg";
import gitHub from "../../assets/icons/github2.svg";
import H2 from "../UI/H2/H2";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={classes["contact-section"]}>
      <div className={classes["top-shape"]}></div>
      <Container height={"100%"}>
        <div className={classes["flex-wrapper"]}>
          <div className={classes["form-container"]}>
            <div className={classes["social-media"]}>
              <div className={classes["social-media-in-container"]}>
                <div className={classes["contact-headline"]}>
                  <H2 text={"CONTACT"} color={"rgba( 214, 214, 214,0.25)"} />
                </div>
                <div>
                  <div className={classes["icons-container"]}>
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
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
