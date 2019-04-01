import React from "react"

export default function SecondaryTitle (props){
    return(
        <React.Fragment>
        <h2 className={`${props.center?"title--center":""} ${props.noM?"title--no-m":""}`}>{props.children}</h2>
        </React.Fragment>
    )
}