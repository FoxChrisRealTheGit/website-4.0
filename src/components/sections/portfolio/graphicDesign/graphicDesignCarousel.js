import React from "react";
import Carousel from "../../../utility/Carousel/Carousel";

/* import Slides */
import SlideOne from "./SlideOne-FoxxyHatsMarketing";
import SlideTwo from "./SlideTwo-AtaraxyLogo";
import SlideThree from "./SlideThree-AtaraxyBusinessCard";
import SlideFour from "./SlideFour-FirstBrochure";
import SlideFive from "./SlideFive-BrentsBody";
import SlideSix from "./SlideSix-YouthSymphonyShirts";
import SlideSeven from "./SlideSeven-GrooperLogo";
import SlideEight from "./SlideEight-BobDylan";
import SlideNine from "./SlideNine-NightmarePoster";
import SlideTen from "./SlideTen-HomeSpringsLogo";
import SlideEleven from "./SlideEleven-GlowWorkshop";
export default function GraphicDesignCarousel(props) {
  return (
    <React.Fragment>
      <Carousel
        carousel={[
          <SlideEleven />,
          <SlideTen />,
          <SlideNine />,
          <SlideEight />,
          <SlideSeven />,
          <SlideSix />,
          <SlideFive />,
          <SlideFour />,
          <SlideThree />,
          <SlideTwo />,
          <SlideOne />
        ]}
      />
    </React.Fragment>
  );
}
