import React from "react";

export default function TwoColumn(props) {
  return (
    <div className="section section--center section--w-full section--responsive">
      <div
        className={`section section--column section--w-${
          props.col1
        } section--m-${props.margins}  ${
          props.firstAlign === "start" ? "section--align-start" : ""
        } ${props.firstAlign === "end" ? "section--align-end" : ""}
        ${props.isFull ? "section--w-50" : ""}`}
      >
        {props.children[0]}
      </div>
      <div
        className={`section section--column section--w-${
          props.col2
        } section--m-${props.margins}  ${
          props.secondAlign === "start" ? "section--align-start" : ""
        } ${props.secondAlign === "end" ? "section--align-end" : ""}
        ${props.isFull ? "section--w-50" : ""}`}
      >
        {props.children[1]}
      </div>
    </div>
  );
}
