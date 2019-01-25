import React from "react";
import "../../css/button.css";
export default function ContactButton(props) {
  return (
    <a
      href="#contact-me"
      className="button button--circle button--right button--right-two"
    >
      <i className="far fa-envelope" />
    </a>
  );
}
