import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideFour(props) {
  return (
    <CarouselSlide>
      <img
        className="image"
        src="./images/portfolio/web/AdorableHomepage.jpg"
        alt=""
      />
      <div className="section  section--column section--center">
        <h3 className="title">Adorable Norman Home</h3>
        <h5>Worked on: February 2019</h5>
        <p className="body">
          <em>HTML/Golang</em>
        </p>
        <p className="body">
          Built for a client to allow renters to view property and inquire for
          more information. The client also requested that the webpage have an
          administration section to allow them to send rental agreements and
          other forms to clients, as well as upload new documents and images.
        </p>
      </div>
    </CarouselSlide>
  );
}
