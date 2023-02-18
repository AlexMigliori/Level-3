import React from "react";
import ReactDOM from 'react-dom/client'

export default function Navbar(){
    return(
        <div>
           <ul className="firstList">
                <li>Start Bootstrap</li>
            </ul>
            <ul className="secondList">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SAMPLE POST</li>
                <li>CONTACT</li>

            </ul> 
        </div>
    )
}