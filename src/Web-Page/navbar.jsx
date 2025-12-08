import React from 'react'
import icon from './Img/icon.png'
import logo from './Img/logo.png'
import pickup from './Img/pickup.png'
import Deliver from './Img/Deliver.png'
import card from './Img/card.png'

export default function navbar() {
    return (
        <>
        <nav className='navbar'>
            <div className='nav'>
                <img src={icon} alt="" />
                <img src={logo} alt="" />
                <div className='nav-but1 nav-but'>
                    <img src={Deliver} alt="" />
                    <h3>DELIVERY</h3>
                </div>
                <div className='nav-but'>
                    <img src={pickup} alt="" />
                    <h3>PICKUP</h3>
                </div>
            </div>
            <div className='login'>
                <img src={card} alt="" />
                <button type="button" className="btn btn-danger">LOGIN</button>
            </div>
        </nav>
        <div className='navmediabar'>
            <div className='nav-media1'>
                    <img src={Deliver} alt="" />
                    <h3>DELIVERY</h3>
                </div>
                <div className='nav-media2'>
                    <img src={pickup} alt="" />
                    <h3>PICKUP</h3>
                </div></div>
                </>
    )
}
