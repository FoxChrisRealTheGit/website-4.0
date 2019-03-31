import React from "react";

/* import utility class */
import Carousel from "../../utility/Carousel/Carousel";

/* import classes */
import Initial from "./Initial";
import NewNews from "./NewNews";
import LatestOne from "./LatestOne";
import LatestTwo from "./LatestTwo";

/* import css */
import "../../../css/image.css";
export default function Hero(props) {
  return (
    <React.Fragment>
      <Carousel
        autoSlide={true}
        arrows={true}

        carousel={[<Initial />, <NewNews />, <LatestOne />, <LatestTwo />]}
      />
    </React.Fragment>
  );
}
