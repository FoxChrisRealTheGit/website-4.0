import React from "react";

/* import functions */
import Title from "../../../utility/Titles/Title";
import SingleSection from "../../../utility/Sections/SingleSection";

export default function Education(props) {
  return (
    <SingleSection  col={true}>
      <Title>Education</Title>
      <div>Master's</div>
      <div>Bachelor's</div>
      <div>Self Study</div>
      <div>Coding Bootcamp</div>
    </SingleSection>
  );
}
