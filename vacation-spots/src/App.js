import React from 'react';
import ReactDOM from 'react-dom/client';
import Spot from './Spot'
import vacationSpots from './Vacation'

export default function App(){
    const spotData = vacationSpots.map(place => 
    <Spot place={place.place}     
    price ={place.price} 
    timeToGo={place.timeToGo} 
    />)
    return(
        <div>
            {spotData}
        </div>
    )
}

