import React from "react";

export default function SingleSection(props) {
  return (
    <React.Fragment>
      <div
        className={`section section--p-20 section--m-t-b-20 section--white ${
          props.col ? "section--column section--column-center" : ""
        }
      
        ${props.widthFull ? "section--w-full" : ""}  `}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
}
