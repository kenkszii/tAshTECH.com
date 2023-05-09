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
    <div class="dizme_tm_section">
      <div class="dizme_tm_partners">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Our Partners</span>
          <h3>We have the most amazing partners</h3>
          
        </div>
        <div class="container">
          <div class="partners_inner">
            <ul>
              <li class="wow fadeIn" data-wow-duration="1s">
                <div class="list_inner">
                  <img src={biteexpress} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <div class="list_inner">
                  <img src={phoenix} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                <div class="list_inner">
                  <img src={exfac} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                <div class="list_inner">
                  <img src={sheyita} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li class="wow fadeIn" data-wow-duration="1s">
                <div class="list_inner">
                  <img src={zarima} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <div class="list_inner">
                  <img src={emi} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                <div class="list_inner">
                  <img src={Maliksclinic} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
              <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                <div class="list_inner">
                  <img src={zxt} alt="" />
                  <a class="dizme_tm_full_link" a href="#"></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/partners/1.png"
          alt="" /></div>
      </div>
    </div>
  )
}

export default Partners;
