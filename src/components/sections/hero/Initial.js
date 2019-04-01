import React from "react";

/*import utility functions */
import CarouselHeroItem from "../../utility/Carousel/Slides/CarouselHeroItem";

export default function Initial(props) {
  return (
    <CarouselHeroItem
      image="./images/jpg/hawaii.jpg"
      alt="Christopher Fox in Aspen Colorado"
      heading="Welcome to my Web Page"
      description="Below you will find stuff about me and a few things that I have done, Have Fun!"
    />
  );
}
