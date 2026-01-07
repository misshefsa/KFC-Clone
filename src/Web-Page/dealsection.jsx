import React from 'react'
import deal1 from './Img/deal1.jpg'
import deal2 from './Img/deal2.jpg'
import deal3 from './Img/deal3.jpg'
import deal4 from './Img/deal4.jpg'
import '../App.css'
export default function Dealsection() {
  return (
    <>
      <div className="container deal-section">
        <div className="heading">
          <div>More Deals</div>
          <div className='line' style={{ marginBottom: "2rem" }}></div>
        </div>
        <div className="row explore-section">
          <img className="col-6  explore" style={{padding: "01rem"}} src={deal3} alt="" />
          <img className="col-6  explore" src={deal1} style={{padding: "1rem"}} alt="" />
          
          <img className="col-6  explore" src={deal2} style={{padding: "1rem"}} alt="" />
          <img className="col-6  explore" src={deal4} style={{padding: "1rem"}} alt="" />
        </div>
      </div>
    </>
  )
}
