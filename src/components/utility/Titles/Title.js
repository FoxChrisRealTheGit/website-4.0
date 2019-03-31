import React from "react";

export default function Title(props) {
  return (
    <React.Fragment>
      <h3>{props.children}</h3>
    </React.Fragment>
  );
}
