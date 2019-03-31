import React from "react";

/* import functions */
import TwoColumn from "../../utility/Columns/TwoColumn";
import AboutColumn from "./leftColumn/AboutColumn";
import ChangingWords from "./rightColumn/ChangeingWords";
import Experience from "./rightColumn/Experience";
import Education from "./rightColumn/Education";
/* import css */
import "../../../css/title.css";
import "../../../css/body.css";

export default function AboutMeInformation(props) {
  return (
    <React.Fragment>
      <TwoColumn
        col1="30"
        margins="10"
        col2="50">
        <AboutColumn />

        <div className="section section--column">
          <ChangingWords />
          <Experience />
          <Education />
        </div>
      </TwoColumn>
    </React.Fragment>
  );
}
