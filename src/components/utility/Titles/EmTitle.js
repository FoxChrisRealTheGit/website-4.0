import React from "react";

export default function EmTitle(props) {
  return (
      <React.Fragment>
    <h4>
      <em>{props.children}</em>
    </h4>
    </React.Fragment>
  );
}
