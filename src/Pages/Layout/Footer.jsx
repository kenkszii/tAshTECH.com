
import React from "react";

import "../../static/assets/css/style.scss";
import "../../static/assets/css/plugins.css";
import "../../static/assets/css/dark.css";

function Footer () {
  const current = new Date();
  const year = `${current.getFullYear()}`;
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              
              <p className="kenkszii">
                Developed by&nbsp;
                <a href="https://github.com/kenkszii" target="_blank" rel="noreferrer" className="kenkszii">
                @kenkszii
                </a> 
                &copy; {year}
              </p>

            </div>

            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>

                <li>
                  <a href="#!" className="kenkszii">
                    Terms &amp; Condition
                  </a>
                </li>

                <li>
                  <a href="#!" className="kenkszii">
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

