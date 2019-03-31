import React from "react";

/* import functions */
import Title from "../../../utility/Titles/Title";
import SingleSection from "../../../utility/Sections/SingleSection";
export default function AboutColumn(props) {
  return (
    <div className="section section--column">
    <SingleSection widthFull={true} col={true}>
      <img
        className="image "
        src="./images/jpg/ataraxydualitypose.jpg"
        alt="christopher fox duiality pose"
      />
      </SingleSection>
      <SingleSection widthFull={true} col={true}>
        <Title>Certifications</Title>
        <div>Adobe Certified Expert Illustrator</div>
      </SingleSection>
      <SingleSection widthFull={true} col={true}>
        <Title>Basic Stuff</Title>
        <div>I am a student of life</div>
      </SingleSection>
    </div>
  );
}
