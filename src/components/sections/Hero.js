import React from "react";
import "../../css/image.css";
export default function Hero(props) {
  return (
    <React.Fragment>
      <img
        className="image image--banner"
        src="./images/jpg/chrisinaspen.jpg"
        alt="Christopher Fox in Aspen Colorado"
      />
    </React.Fragment>
  );
}
