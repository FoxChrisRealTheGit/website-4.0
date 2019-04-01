import React from "react";

/*import utility functions */
import CarouselHeroItem from "../../utility/Carousel/Slides/CarouselHeroItem";

export default function LatestOne(props) {
  return (
    <CarouselHeroItem
      image="./images/portfolio/graphic/Workshop_1.2.jpg"
      alt="Glow Growth and Development workshop"
      heading="Latest Finished Project"
      description="Flier created for a client's business development workshop in Colorado Springs."
    />
  );
}
