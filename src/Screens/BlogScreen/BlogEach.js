import React from 'react'
import './BlogScreenStyle.css'
import { Icon } from '@iconify/react';
import manImage from '../../assets/images/work.png'


function BlogEach() {
    return (
        <div>
            <div className='blog-bottom'>
                <h3>Articles and News</h3>
                <small>Blog</small>
                <i id='arrow-icon'><Icon icon="bi:arrow-right" color="#d105d4" inline={true} /></i>
            </div>
            <div className='blog-details-image-section'>
                <img src={manImage} alt='blog-image' />
            </div>
        </div>
    )
}

export default BlogEach