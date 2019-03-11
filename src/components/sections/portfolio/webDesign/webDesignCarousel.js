import React from "react";
import Carousel from "../../../utility/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-FoxxyHatsSite";
import SlideOneFive from "./SlideOneFive-TwoLies";
import SlideTwo from "./SlideTwo-AtaraxyLife";
import SlideTwoFive from "./SlideTwoFive-Peax";
import SlideThree from "./SlideThree-AtaraxyClothing";
import SlideFour from "./SlideFour-MoarStats";
import SlideFive from "./SlideFive-AdorableHome";
import SlideSix from "./SlideSix-DrHollyFritch";
export default function WebDesignCarousel(props) {
  return (
    <React.Fragment>
      <Carousel
        carousel={[
          <SlideSix />,
          <SlideFive />,
          <SlideFour />,
          <SlideThree />,
          <SlideTwoFive />,
          <SlideTwo />,
          <SlideOneFive />,
          <SlideOne />
        ]}
      />
    </React.Fragment>
  );
}
