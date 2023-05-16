import React from "react";

import biteexpress from "../static/assets/img/partners/light/1.png"
import phoenix from "../static/assets/img/partners/light/2.png"
import exfac from "../static/assets/img/partners/light/3.png"
import sheyita from "../static/assets/img/partners/light/4.png"
import zarima from "../static/assets/img/partners/light/5.png"
import emi from "../static/assets/img/partners/light/6.png"
import Maliksclinic from "../static/assets/img/partners/light/7.png"
import zxt from "../static/assets/img/partners/light/8.png"

function Partners() {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Our Partners</span>
          <h3>We have the most amazing partners</h3>
          
        </div>
        <div className="container">
          <div className="partners_inner">
            <ul>
              <li className="wow fadeIn" data-wow-duration="1s">
                <div className="list_inner">
                  <img src={biteexpress} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="list_inner">
                  <img src={phoenix} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                <div className="list_inner">
                  <img src={exfac} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                <div className="list_inner">
                  <img src={sheyita} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li className="wow fadeIn" data-wow-duration="1s">
                <div className="list_inner">
                  <img src={zarima} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="list_inner">
                  <img src={emi} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                <div className="list_inner">
                  <img src={Maliksclinic} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                <div className="list_inner">
                  <img src={zxt} alt="" />
                  <a className="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/partners/1.png"
          alt="" /></div>
      </div>
    </div>
  )
}

export default Partners;
