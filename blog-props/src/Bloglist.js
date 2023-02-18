import React from 'react'
import ReactDOM from 'react-dom/client'
import Blogpost from './Blogpost'
import Blogdata from './Blogdata'

export default function Bloglist (){

    const BlogdataProp = Blogdata.map(blog => <Blogpost 
        key={blog.date}
        title={blog.title}
        subTitle={blog.subTitle}
        author={blog.author}
        date={blog.date} />)

    return (
        <div className='blogListProp'>
            {BlogdataProp}
        </div>
    )
}

