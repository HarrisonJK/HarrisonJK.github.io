import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("myyarzvk");
  if (state.succeeded) {
    return <p>Thanks for reaching out! Look forward to speaking with you :D</p>;
  }
  return (
    <div className="contactContainer">
      <form onSubmit={handleSubmit}>
        <h2 className="center noPad">Get in Touch!</h2>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="center " type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      <div className="under">
        <a
          className="fa fa-linkedin noStyle "
          href="https://www.linkedin.com/in/harrisonhjk/"
        ></a>
        &nbsp;
        <a
          className=" fa fa-github noStyle"
          href="https://github.com/HarrisonJK"
        ></a>
        &nbsp;
        <a
          className="fa fa-instagram noStyle"
          href="https://www.instagram.com/harrisonhjk_/"
        ></a>
        &nbsp;
        <a
          className="fa fa-envelope noStyle"
          href="mailto:hjk72@cornell.edu"
        ></a>
      </div>
    </div>
  );
}
