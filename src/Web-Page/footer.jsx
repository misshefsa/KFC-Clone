import React from 'react'
import facebook from './Img/facebook.svg'
import youtube from './Img/youtube.svg'
import logo from './Img/logo.png'
import instagram from './Img/instagram.svg'
export default function footer() {
  return (
    <div className="container">
        <div className="foot">
            <div className="logo">
                <img src={logo} alt="" />
                <div><img src={facebook} alt="" /></div>
                <div><img src={instagram} alt="" /></div>
                <div><img src={youtube} alt="" /></div>
            </div>
        </div>
        <div className="foot-menu"></div>
        <div>2024 KFC. All rights reserved</div>
    </div>
  )
}
