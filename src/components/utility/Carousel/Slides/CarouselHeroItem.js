import React from "react";

export default function CarouselHeroItem(props) {
  return (
    <React.Fragment>
      <img
        className="image  image__carousel"
        src={props.image}
        alt={props.alt}
      />
      <div className="carousel__heading">
        <h2 className="">{props.heading}</h2>
      </div>

      <div className="carousel__description">
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  );
}
