import React from 'react'
import Deal1 from './Img/Deal1.png'
import Deal2 from './Img/Deal2.png'
import Deal3 from './Img/Deal3.png'
import Deal4 from './Img/Deal4.png'
import '../App.css'
export default function Dealsection() {
  return (
    <>
    <div className="container deal-section">
      <div className="row explore-section"><div className="col-6  explore"><img src={Deal3} alt="" /></div>
      <div className="col-6 explore"><img src={Deal1} alt="" /></div>
      <div className="col-6 explore"><img src={Deal2} alt="" /></div>
      
      <div className="col-6  explore"><img src={Deal4} alt="" /></div>
      </div>
    </div>
    </>
  )
}
