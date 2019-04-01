import React from "react";

/* import utility functions */
import Carousel from "../../../utility/Carousel/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-Gendered";
export default function PublicationCarousel(props) {
  return (
    <React.Fragment>
      <Carousel arrows={true} carousel={[<SlideOne />]} />
    </React.Fragment>
  );
}
