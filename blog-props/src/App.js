import React from 'react'
import ReactDOM from 'react-dom/client'
import Bloglist from './Bloglist'
import Footer from './Footer'
import Header from './Header'
import './style.css'


export default function App() {
  return (
    <div>
      <Header />
      <Bloglist />
      <div className='postButton'>
        <button>OLDER POSTS → </button>
      </div>
      <Footer />
    </div>
  )
}



