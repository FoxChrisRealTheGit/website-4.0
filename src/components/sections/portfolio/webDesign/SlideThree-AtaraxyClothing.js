import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideThree(props) {
  return (
    <CarouselSlide>
      <img
        className="image"
        src="./images/portfolio/web/AtaraxyClothingHomepage.jpg"
        alt=""
      />
      <div className="section  section--column section--center">
        <h3 className="title">Ataraxy Clothing</h3>
        <h5>Worked on: January 2018 - August 2018</h5>
        <p className="body">
          First React Ecommerce website. This was rebuilt two times and then
          continuously updated using the Aristos CMS (my custom-built CMS)..
        </p>
      </div>
    </CarouselSlide>
  );
}
