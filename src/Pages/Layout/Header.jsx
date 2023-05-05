import React from "react";

import "../../static/assets/css/style.scss";
import "../../static/assets/css/plugins.css";
import "../../static/assets/css/dark.css";
import headerlog from "../../static/assets/img/joined_copy.svg"

function Header () {
  return (
    <div className="dizme_tm_header headercolor">
      <div className="container">
          <div className="inner">
              <div className="logo">

                  <a href="#!">
                    <img src={headerlog} alt="" />
                  </a>

              </div>
              <div className="menu">

                  <ul className="anchor_nav">

                      <li className="current">
                        <a href="#home">
                          tAshTECH</a>
                      </li>

                      <li>
                        <a href="#about">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#service">
                          Service
                        </a>
                      </li>

                      <li>
                        <a href="#blog">
                          Blog
                        </a>
                      </li>

                      <li>
                        <a href="#contact">
                          Contact
                        </a>
                      </li>

                      <li className="download_cv">
                        <a href="img/cv/1.jpg" download>
                          <span>Hire Us</span>
                        </a>
                      </li>
                      
                  </ul>
              </div>
          </div>
      </div>
    </div>
    
  )
}
export default Header;