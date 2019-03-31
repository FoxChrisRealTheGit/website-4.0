import React from "react";
import Carousel from "../../../utility/Carousel/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-Stylux";
import SlideTwo from "./SlideTwo-AristosCMS";
import SlideThree from "./SlideThree-PlayingCards";
export default function OpenSourceCarousel(props) {
  return (
    <React.Fragment>
      <Carousel carousel={[<SlideThree />, <SlideTwo />, <SlideOne />]} />
    </React.Fragment>
  );
}
