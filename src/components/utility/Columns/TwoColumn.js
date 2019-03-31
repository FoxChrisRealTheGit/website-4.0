import React from "react";

export default function TwoColumn(props) {
  return (
    <div className="section section--center section--w-full section--responsive">
      <div className={`section section--column section--w-${props.col1} section--m-${props.margins}`}>
        {props.children[0]}
      </div>
      <div className={`section section--column section--w-${props.col2} section--m-${props.margins}`}>
        {props.children[1]}
      </div>
    </div>
  );
}
