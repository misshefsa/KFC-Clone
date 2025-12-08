import React from 'react'
import dealpart from './Img/dealpart.png'
import burger from './Img/buger.png'
import topdeal3 from './Img/topdeal2.png'
import topdeal4 from './Img/topdeal3.png'


export default function TopDeal() {
    return (
        <div className="topdeal">

            <div className="container-fluid">
                <div className="container">
                    <div className="heading">
                        <div>TOP DEALS</div>
                        <div className='line'></div>
                    </div>
                    <div className="row box">
                        <div className="col-xl-3 col-md-6 col-sm-12 deals">
                            <img src={dealpart} className="img" alt="" />
                            <img src={burger} alt="" />
                            <div>
                                <span>Zinger Stacker Combo</span>
                                <p>1 Zinger Stacker + 1 Regular fries + 1 Regular drink</p>
                                <p>RS 950</p>
                            </div>
                            <button className='btn btn-danger'>+ ADD TO BUCKET</button>
                        </div>
            
                        <div className="col-xl-3 col-md-6 col-sm-12 deals">
                            <img src={dealpart} alt="" />
                            <img src={topdeal3} alt="" />
                            <div>
                                <span>Zinger Stacker Combo</span>
                                <p>1 Zinger Stacker + 1 Regular fries + 1 Regular drink</p>
                                <p>RS 950</p>
                            </div>
                            <button className='btn btn-danger'>+ ADD TO BUCKET</button>
                        </div>
                        <div className="col-xl-3 deal3 col-md-6 col-sm-12 deals">
                            <img src={dealpart} alt="" />
                            <img src={topdeal4} alt="" />
                            <div>
                                <span>Zinger Stacker Combo</span>
                                <p>1 Zinger Stacker + 1 Regular fries + 1 Regular drink</p>
                                <p>RS 950</p>
                            </div>
                            <button className='btn btn-danger'>+ ADD TO BUCKET</button>
                        </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
