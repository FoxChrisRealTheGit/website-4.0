import React from "react";

export default function SlideFour(props) {
  return (
    <div className="section section--h-full section--responsive">
      <div className="carousel--item-one">
        <img
          className="image"
          src="./images/portfolio/web/MoarStatsProfile.jpg"
          alt=""
        />
      </div>
      <div className="section carousel--item-two">
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
    </div>
  );
}
