import React from "react";

/* import utility functions */
import TwoColumn from "../../Columns/TwoColumn";

export default function CarouselSlideItem(props) {
  return (
    <TwoColumn margins={0} col1={40} col2={40}>
      <div className="carousel--item-one">{props.children[0]}</div>
      <div className="carousel--item-two">{props.children[1]}</div>
    </TwoColumn>
  );
}
