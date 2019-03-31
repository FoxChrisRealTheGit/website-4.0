import React from "react";

/* import functions */
import Title from "../../../utility/Titles/Title";
import SingleSection from "../../../utility/Sections/SingleSection";
export default function Experience(props) {
  return (
    <SingleSection col={true}>
      <Title>Experience</Title>
      <div>Web Design ~ 4 years</div>
      <div>Web Development 1 1/2 years</div>
      <div>Graphic Design ~ 4 years</div>
      <div>
        <p>Security less than 1 year</p>
      </div>
      <div>Poetry ~ 15 years</div>
      <div>Playwriting ~ 5 years</div>
      <div>Prose ~ 3 years</div>
      <div>Slam Poetry ~ 5 years</div>
      <div>Storytelling ~ 4 years</div>
    </SingleSection>
  );
}
