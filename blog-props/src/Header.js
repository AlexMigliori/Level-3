import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'

export default function Header(){
    return(
        <div className='navProp'>
            <Navbar />
            <div className='headerTitle'>
                <h1>Clean Blog</h1>
                <h4>A Blog Theme by Start Bootstrap</h4>
            </div>
        </div>
    )
}