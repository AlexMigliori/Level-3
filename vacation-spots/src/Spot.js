import React from 'react'

export default function Spot(props){
   
    return(
        <div>
            <h1>{props.place}</h1>
            <p>{props.price} - {props.timeToGo}</p>
        </div>
    )
}

