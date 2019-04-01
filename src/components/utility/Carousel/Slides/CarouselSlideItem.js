import React from "react"

/* import utility functions */
import TwoColumn from "../../Columns/TwoColumn";

export default function CarouselSlideItem (props){
    return(
        <TwoColumn>
            <div className="carousel--item-one">
                Image
            </div>
            <div classNAme="carousel--item-two">
                Content
            </div>
        </TwoColumn>
    )
}