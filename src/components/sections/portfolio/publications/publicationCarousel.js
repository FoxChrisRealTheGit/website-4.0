import React from "react";
import Carousel from "../../../utility/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-Gendered";
export default function PublicationCarousel(props) {
  return (
    <React.Fragment>
      <Carousel carousel={[<SlideOne />]} />
    </React.Fragment>
  );
}
