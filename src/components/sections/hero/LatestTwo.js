import React from "react";

/*import utility functions */
import CarouselHeroItem from "../../utility/Carousel/Slides/CarouselHeroItem";

export default function LatestTwo(props) {
  return (
    <CarouselHeroItem
      image="./images/portfolio/web/drHollyFritch.jpg"
      alt="Screenshot of webpage for Dr. Holly Fritch Kirby"
      heading="Recently Finished Project"
      description="Website created for Dermatology business owner in Kansas City area."
    />
  );
}
