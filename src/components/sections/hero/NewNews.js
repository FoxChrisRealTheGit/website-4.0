import React from "react";

/*import utility functions */
import CarouselHeroItem from "../../utility/Carousel/Slides/CarouselHeroItem";

export default function NewNews(props) {
  return (
    <CarouselHeroItem
      image="./images/jpg/leaf.JPG"
      alt="Picture of a leaf taken by Christopher Fox"
      heading="New News!"
      description="I will be going to Breckenridge Colorado for the summer to experience working at a resort and focus on finishing my Master's of Cyber Security. I am still open to freelance requests, please contact me on LinkedIn."
    />
  );
}
