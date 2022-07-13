import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
  return (
      <div className='footer'>
          <span className='footer-icons'>
              <i><Icon icon="ph:youtube-logo-duotone" inline={true} /></i>
              <i><Icon icon="fa:facebook-official" inline={true} /></i>
              <i><Icon icon="akar-icons:linkedin-box-fill"  inline={true} /></i>
              <i><Icon icon="ant-design:instagram-filled" inline={true} /></i>
              <i><Icon icon="fa-brands:twitter-square" inline={true} /></i>
          </span>  
          <div className='footer-small'>
              <small>Terms of services</small>
              <small>Privacy Policy</small> 
          </div>
         
        <p>Copyrights 2022 @ Andrew Micheal</p>
    </div>
  )
}

export default Footer