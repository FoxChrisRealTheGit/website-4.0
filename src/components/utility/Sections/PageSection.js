import React from "react";

export default function PageSection(props) {
  return (
    <div className={`section section--${props.color}`} id={props.secid}>
      {props.children}
    </div>
  );
}
