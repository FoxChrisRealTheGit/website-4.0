import React from "react";

export default function TwoRow(props) {
  return (
    <div className={`section--column section ${
      props.align === "start" ? "section--align-start" : ""
    } ${props.align === "end" ? "section--align-end" : ""}
    ${props.align === "center" ? "section--align-center" : ""}`}>
      <div
        className={`section ${
          props.align === "start" ? "section--align-start" : ""
        } ${props.align === "end" ? "section--align-end" : ""}`}
      >
        {props.children[0]}
      </div>
      <div
        className={`section ${
          props.align === "start" ? "section--align-start" : ""
        } ${props.align === "end" ? "section--align-end" : ""}
        ${props.align === "center" ? "section--align-center" : ""}`}
      >
        {props.children[1]}
      </div>
    </div>
  );
}
