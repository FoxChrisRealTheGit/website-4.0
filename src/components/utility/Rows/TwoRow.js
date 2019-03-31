import React from "react";

export default function TwoRow(props){
    return(
        <div className="section">
            <div className="section section--column">
                {props.children[0]}
            </div>
            <div className="section section--column">
                {props.children[1]}
            </div>
        </div>
    )
}