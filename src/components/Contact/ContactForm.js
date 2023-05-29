import classes from "./ContactForm.module.css";
import BodyLarge from "../UI/BodyLarge/BodyLarge";

const ContactForm = () => {
  return (
    <form className={classes["contact-form"]}>
      <div className={classes["contact-form-in-container"]}>
        <div className={classes["name-email-container"]}>
          <div className={classes["name-container"]}>
            <label htmlFor="#name">
              <BodyLarge text={"Name"} color={"#737373"} />
            </label>
            <input id="name" type="text" name="name" value="" />
          </div>
          <div className={classes["email-container"]}>
            <label htmlFor="#email">
              <BodyLarge text={"Email"} color={"#737373"} />
            </label>
            <input id="email" type="email" name="email" value="" />
          </div>
        </div>
        <div className={classes["message-container"]}>
          <label htmlFor="#message">
            <BodyLarge text={"Message"} color={"#737373"} />
          </label>
          <input id="message" type="text" name="message" value="" />
        </div>
        <button className={classes["getin-touch"]}>
          <BodyLarge text={"Get In Touch"} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
