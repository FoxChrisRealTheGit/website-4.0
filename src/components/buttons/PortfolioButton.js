import React from "react";
import "../../css/button.css";
export default function PortfolioButton(props) {
  return (
    <a
      href="#my-portfolio"
      className="button button--circle button--right button--right-three"
    >
      <i className="fas fa-book-open" />
    </a>
  );
}
