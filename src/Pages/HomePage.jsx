import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

function Home() {
  return (
    <>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}

      >
        
        <SwiperSlide>
          <div className="dizme_tm_section homebg" id="home" >
            <div className="dizme_tm_hero">
              <div className="container">
                <div className="content">
                  <div className="details">


                    <div className="hdjd">
                      <div className="dizme_tm_button2">
                        <a className="anchor" href="#contact">
                          <span>Let help you transform your business and unlock its full potential </span>
                        </a>
                      </div>
                    </div>
                    <div className="button">
                      <div className="dizme_tm_button3">
                        <a className="anchor" href="#about">
                          <span>About us</span>
                        </a>
                      </div>
                      <div className="social">
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="icon-facebook-1"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="icon-twitter-1"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="icon-linkedin-1"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="icon-whatsapp"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
