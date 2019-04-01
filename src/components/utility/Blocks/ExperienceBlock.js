import React from "react";
/* import utility functions */
import SecondaryTitle from "../Titles/SecondaryTitle";
import TwoColumn from "../Columns/TwoColumn";
export default function ExperienceBlock(props) {
  return (
    <TwoColumn isFull={true} firstAlign="center" secondAlign="start">
      <h4 className="title--no-m">{props.name}</h4>
      <SecondaryTitle noM={true}>{props.duration}</SecondaryTitle>
    </TwoColumn>
  );
}
