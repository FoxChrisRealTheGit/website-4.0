import React from "react";
import "../../css/button.css"
export default function AboutButton(props) {
  return (
    <a
      href="#about-me"
      className="button button--circle button--right button--right-four"
    >
      <i className="fas fa-hiking" />
    </a>
  );
}
