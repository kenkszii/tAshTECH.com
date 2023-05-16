import React, { useEffect } from "react";
import { initializeDropdown } from "../../static/assets/js/menuhamburger.js";

import mobilelogo from "../../static/assets/img/joined_copy.svg"
function MobileView() {
  useEffect(() => {
    initializeDropdown();
  }, []);

  return (
    <div className="dizme_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#home"><img src={mobilelogo} alt="" /></a>
          </div>
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="download_cv"><a href="#contact" ><span>Hire Us</span></a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default MobileView;
