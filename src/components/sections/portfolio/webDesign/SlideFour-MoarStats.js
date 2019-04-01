import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideFour(props) {
  return (
    <CarouselSlide>
      <img
        className="image"
        src="./images/portfolio/web/MoarStatsProfile.jpg"
        alt=""
      />
      <div className="section section--column section--center">
        <h3 className="title">MoarStats.io</h3>
        <h5>Worked on: November 2018 - Present</h5>
        <p className="body">
          <em>ReactJs/Golang</em>
        </p>
        <p className="body">
          Currently broken while rebuilding the server to support SQL. Does have
          working multiplayer chess and go boards.
        </p>
      </div>
    </CarouselSlide>
  );
}
