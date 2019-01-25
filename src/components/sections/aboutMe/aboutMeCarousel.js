import React from "react";
import Carousel from "../../utility/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-Intro";
import SlideTwo from "./SlideTwo-Paintball";
import SlideThree from "./SlideThree-Monk";
import SlideFour from "./SlideFour-FoxxHats";
import SlideFive from "./SlideFive-AtaraxyClothing";
import SlideSeven from "./SlideSeven-GraphicDesign";
import SlideEight from "./SlideEight-Bootcamp";
import SlideNine from "./SlideNine-AMostDifficultYear";

/* import css */
import "../../../css/title.css";
import "../../../css/body.css";

export default function AboutMeCarousel(props) {
  return (
    <React.Fragment>
      <Carousel
        carousel={[
          <SlideOne />,
          <SlideTwo />,
          <SlideThree />,
          <SlideFour />,
          <SlideFive />,
          <SlideSeven />,
          <SlideEight />,
          <SlideNine />
        ]}
      />
    </React.Fragment>
  );
}
