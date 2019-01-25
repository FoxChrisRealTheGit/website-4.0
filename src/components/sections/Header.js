import React from "react";
/* import buttons */
import AboutButton from "../buttons/AboutButton";
import PortfolioButton from "../buttons/PortfolioButton";
import ContactButton from "../buttons/ContactMe";
import LinkedInButton from "../buttons/LinkedIn";

/* import css */
import "../../css/header.css";
export default function Header(props) {
  return (
    <React.Fragment>
      <header className="section section--header">
        <div className="brand">
          <img src="./images/svg/foxtail2-1.svg" alt="Christopher Fox's Logo" />
        </div>
      </header>
      <AboutButton />
      <PortfolioButton />
      <LinkedInButton />
      <ContactButton />
    </React.Fragment>
  );
}
