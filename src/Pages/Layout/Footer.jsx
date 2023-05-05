
import React from "react";

import "../../static/assets/css/style.scss";
import "../../static/assets/css/plugins.css";
import "../../static/assets/css/dark.css";

function Footer () {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              
              <p>
                Developed by&nbsp;
                <a href="https://wa.me/08181659815" target="_blank" rel="noreferrer" >
                @kenkszii
                </a> 
                &copy; 2023
              </p>

            </div>

            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>

                <li>
                  <a href="#!">
                    Terms &amp; Condition
                  </a>
                </li>

                <li>
                  <a href="#!">
                    Privacy Policy
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;

