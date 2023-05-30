import React, { useState } from "react";
import emailjs from "emailjs-com";
import classes from "./ContactForm.module.css";
import BodyLarge from "../UI/BodyLarge/BodyLarge";

const SERVICE_ID = "service_wqjs3gb";
const TEMPLATE_ID = "template_o6x8be4";
const USER_ID = "p5iScNBKwPDiWd161";

const ContactForm = () => {
  const [status, setStatus] = useState("Get In Touch");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        setStatus("Get In Touch");
        alert(result.text);
        e.target.reset();
      },
      (error) => {
        setStatus("Get In Touch");
        alert(error.text);
        e.target.reset();
      }
    );
  };
  return (
    <form className={classes["contact-form"]} onSubmit={handleSubmit}>
      <div className={classes["contact-form-in-container"]}>
        <div className={classes["name-email-container"]}>
          <div className={classes["name-container"]}>
            <label htmlFor="#name">
              <BodyLarge text={"Name"} color={"#737373"} />
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className={classes["email-container"]}>
            <label htmlFor="#email">
              <BodyLarge text={"Email"} color={"#737373"} />
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className={classes["message-container"]}>
          <label htmlFor="#message">
            <BodyLarge text={"Message"} color={"#737373"} />
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="Message"
            required
          />
        </div>
        <button className={classes["getin-touch"]} type="submit">
          <BodyLarge text={status} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
