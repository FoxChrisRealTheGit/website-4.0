import React from "react";

/* import utility functions */
import TwoColumn from "../Columns/TwoColumn";
import TwoRows from "../Rows/TwoRow";
export default function EducationBock(props) {
  return (
    <React.Fragment>
      <TwoColumn firstAlign="start" secondAlign="end" isFull={true}>
        <TwoRows>
          <h4>{props.programName}</h4>
          <h5>{props.schoolName}</h5>
        </TwoRows>
        <TwoRows align="end">
          <h4>{props.yearsAttended}</h4>
          <h5>{props.location}</h5>
        </TwoRows>
      </TwoColumn>
    </React.Fragment>
  );
}
