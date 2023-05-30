import React, { useContext } from "react";
import SectionsContext from "../../store/sections-context";
import classes from "./Contact.module.css";
import Container from "../UI/Container";
import linkedIn from "../../assets/icons/linkedin.svg";
import email from "../../assets/icons/email.svg";
import gitHub from "../../assets/icons/github2.svg";
import H2 from "../UI/H2/H2";
import ContactForm from "./ContactForm";
import "aos/dist/aos.css";

const Contact = () => {
  const ctx = useContext(SectionsContext);

  const handleOpenEmail = (e) => {
    e.preventDefault();
    window.open("mailto:emmanuelkasongomavetya@gmail.com");
  };

  return (
    <section className={classes["contact-section"]} ref={ctx.contactRef}>
      <div className={classes["top-shape"]}></div>
      <Container height={"100%"}>
        <div className={classes["flex-wrapper"]}>
          <div
            className={classes["form-container"]}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className={classes["social-media"]}>
              <div className={classes["social-media-in-container"]}>
                <div className={classes["contact-headline"]}>
                  <H2 text={"CONTACT"} color={"rgba( 214, 214, 214,0.25)"} />
                </div>
                <div>
                  <div className={classes["icons-container"]}>
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
                      <img
                        src={email}
                        alt="email Icons"
                        onClick={handleOpenEmail}
                      />
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
