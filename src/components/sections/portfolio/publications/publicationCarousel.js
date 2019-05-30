import React from "react";

/* import utility functions */
import Carousel from "../../../utility/Carousel/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-Gendered";
import SlideTwo from "./SlideTwo-PoemsAndStuff";
export default function PublicationCarousel(props) {
  return (
    <React.Fragment>
      <Carousel arrows={true} carousel={[<SlideTwo />, <SlideOne />]} />
    </React.Fragment>
  );
}
