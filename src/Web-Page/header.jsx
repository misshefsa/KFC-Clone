import React from "react"; // make sure extension is correct
import Bg1 from './Img/header.jpg'
import Bg2 from './Img/header2.jpg'
import Bg3 from './Img/header3.jpg'
import Bg4 from './Img/header4.jpg'
import Bg5 from './Img/header5.jpg'
import Bg6 from './Img/header6.jpg'
import Bg7 from './Img/header7.jpg'
import Bg8 from './Img/header8.jpg'
import Bg9 from './Img/header9.jpg'



function Header() {
  return (
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Bg1} className="d-block w-100" alt="..." />
    </div>
     <div className="carousel-item active" data-bs-interval="10000">
      <img src={Bg5} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Bg2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Bg3} className="d-block w-100" alt="..." />
    </div>
      <div className="carousel-item active" data-bs-interval="10000">
      <img src={Bg4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Bg6} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Bg7} className="d-block w-100" alt="..." />
    </div>
      <div className="carousel-item active" data-bs-interval="10000">
      <img src={Bg8} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Bg9} className="d-block w-100" alt="..." />
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
  
  );
}

export default Header;
