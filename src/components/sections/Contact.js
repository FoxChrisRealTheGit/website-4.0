import React from "react";
import "../../css/form.css";
export default function ContactMe(props) {
  return (
    <div className="section section--contact section--column" id="contact-me">
      <h3 className="title">Contact Me!</h3>
      <a
        href="https://www.linkedin.com/in/foxchrisrealthe/"
        target="_blank"
        rel="noopener noreferrer"
        className="button button--circle button--rev"
      >
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  );
}
