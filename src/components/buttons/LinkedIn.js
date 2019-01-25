import React from "react";
import "../../css/button.css";
export default function ContactButton(props) {
  return (
    <a
      href="https://www.linkedin.com/in/foxchrisrealthe/"
      target="_blank"
      rel="noopener noreferrer"
      className="button button--circle button--right"
    >
      <i className="fab fa-linkedin-in" />
    </a>
  );
}
