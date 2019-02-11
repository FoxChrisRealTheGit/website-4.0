import React from "react";
/* import buttons */
import AboutButton from "../buttons/AboutButton";
import PortfolioButton from "../buttons/PortfolioButton";
import ContactButton from "../buttons/ContactMe";
import LinkedInButton from "../buttons/LinkedIn";
/* import mobile menu */
import MobileMenu from "../../js/mobileMenu";
/* import css */
import "../../css/header.css";
export default class Header extends React.Component {
  componentDidMount() {
    new MobileMenu(
      "header__main",
      "header--is-expanded",
      "header__menu-icon",
      "header__menu-icon--close-x",
      "header__menu-content",
      "header__menu-content--is-visible"
    );
  }
  render() {
    return (
      <React.Fragment>
        <header
          id="header__main"
          className="section section--header header__main"
        >
          <div className="brand">
            <img
              src="./images/svg/foxtail2-1.svg"
              alt="Christopher Fox's Logo"
            />
          </div>
          <div id="header__menu-icon" className="header__menu-icon">
            <div className="header__menu-icon__middle" />
          </div>
          <ul id="header__menu-content" className="header__menu-content">
            <li>
              <a className="header__menu-content--link" href="/#about-me">
                About Me
              </a>
            </li>
            <li>
              <a className="header__menu-content--link" href="/#my-portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="header__menu-content--link" href="/#contact-me">
                Contact
              </a>
            </li>
            <li>
              <a
                className="header__menu-content--link"
                href="https://www.linkedin.com/in/foxchrisrealthe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </header>
        <AboutButton />
        <PortfolioButton />
        <LinkedInButton />
        <ContactButton />
      </React.Fragment>
    );
  }
}
