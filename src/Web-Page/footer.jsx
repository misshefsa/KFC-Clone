import React from "react";
import facebook from "./Img/facebook.svg";
import youtube from "./Img/youtube.svg";
import instagram from "./Img/instagram.svg";
import appstore from "./Img/appstore.svg";
import playstore from "./Img/playstore.svg";
import logo from "./Img/logo.png";

export default function Footer() {
  return (
    <footer className="kfc-footer container-fluid py-5">
      <div className="container">

        {/* LOGO + SOCIAL ICONS */}
        <div className="footer-brand d-flex justify-content-around align-items-center flex-wrap ">
          <img src={logo} alt="KFC" className="footer-logo" />

          <div className="d-flex gap-3 social-icons mt-3 mt-md-0">
          <div>   <img src={facebook} alt="facebook" height={23}/></div>
            <div><img src={instagram} alt="instagram" /></div>
           
           <div> <img src={youtube} alt="youtube" /></div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="row mt-4 footer-links">

          <div className="col-md-3 col-sm-6 mb-4">
            <h6>Explore</h6>
            <a>About Us</a>
            <a>Mitao Bhook</a>
            <a>Privacy Policy</a>
            <a>Careers</a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h6>Support</h6>
            <a>Contact Us</a>
            <a>Store Locator</a>
            <a>Track Order</a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h6>Legal</h6>
            <a>Terms & Conditions</a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h6>Get the App</h6>
            <img src={playstore} alt="" height={40} className="mb-2" />
            <br />
            <img src={appstore} alt="" height={40} />
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom d-flex justify-content-between flex-wrap mt-4 pt-3 border-top">
          <p className="mb-0">2024 KFC. All rights reserved.</p>
          <p className="mb-0">
            Powered by <a href="https://simplexts.net/">SimpleX Technology Solutions</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
