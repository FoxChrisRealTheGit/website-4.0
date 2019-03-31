import React from "react"

export default function SecondaryTitle (props){
    return(
        <React.Fragment>
        <h2 className="title--center">{props.children}</h2>
        </React.Fragment>
    )
}