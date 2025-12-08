import React from "react"; // make sure extension is correct
import Bg1 from './Img/header.png'
import Bg2 from './Img/header2.jpg'
import Bg3 from './Img/header3.jpg'


function Header() {
  return (
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Bg1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Bg2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Bg3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  
  );
}

export default Header;
