import React from "react";

/*import utility functions */
import CarouselHeroItem from "../../utility/Carousel/Slides/CarouselHeroItem";

export default function LatestOne(props) {
  return (
    <CarouselHeroItem
      image="./images/portfolio/web/moarstatslogin.jpg"
      alt="Screenshot of the MoarStats.io login page"
      heading="Latest Finished Project"
      description="Moarstats.io - Web application that gamify's social media and allows for the handeling of online tournaments, leagues and matches."
    />
  );
}
