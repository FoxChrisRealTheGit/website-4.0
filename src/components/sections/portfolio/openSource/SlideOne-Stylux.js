import React from "react";

export default function SlideOne(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img
          className="image"
          src="./images/portfolio/openSource/reactStyluxTOC.jpg"
          alt=""
        />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">React Stylux</h3>
        <h5>Worked on: December 2017 - May 2018</h5>
        <p className="body">
          I found the bootcamp to be very boring, I tried to ask for more work,
          but they would not give it to me. To make the experience more of a
          challenge, I began to design a component lirbary. After about a week
          on ReactJS, I rationilized that it would be possible to pass styles
          through props. I then systematically learned HTML through doing this.
        </p>
      </div>
    </div>
  );
}
