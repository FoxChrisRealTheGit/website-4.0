import React from "react";

/* import utility functions */
import Carousel from "../../../utility/Carousel/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-Stylux";
import SlideTwo from "./SlideTwo-AristosCMS";
import SlideThree from "./SlideThree-PlayingCards";
export default function OpenSourceCarousel(props) {
  return (
    <React.Fragment>
      <Carousel
        arrows={true}
        carousel={[<SlideThree />, <SlideTwo />, <SlideOne />]}
      />
    </React.Fragment>
  );
}
