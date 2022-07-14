import React from 'react'

function BlogCard(props) {
    return (
        <div className='first-blog-card'>

            {props.children}
        </div>
    )
}

export default BlogCard