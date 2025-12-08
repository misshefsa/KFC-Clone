import React from "react";
import Bgimg from "./Img/header.png"; // make sure extension is correct

function Header() {
  return (
    <div>
      <img src={Bgimg} className="img-fluid" alt="Header" />
    </div>
  );
}

export default Header;
