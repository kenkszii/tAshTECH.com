import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Typewriter from 'typewriter-effect';
import Lottie from "lottie-react";

import "swiper/css";
import "swiper/css/autoplay";

import groovyWalkAnimation from "../static/assets/img/TQyfp742Yu.json";


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
                    <div className="name">
                      <h3>ACCELERATE YOUR GROWTH</h3>
                    </div>
                    <div className="job">
                      <p>
                        <span className="homeblack">
                          AND EXPERIRNCE THE FUTURE OF
                        </span>
                      </p>
                    </div>

                    <div className="text">
                      <p>
                        <Typewriter
                          options={{
                            autoStart: true,
                            strings: ["TECHNOLOGY TODAY WITH OUR TECH SOLUTIONS."],
                            delay: 40,
                            loop: false,
                            deleteSpeed: 100 * 9000000000,
                          }}
                        />

                      </p>
                    </div>
                    <div className="button">
                      <div className="dizme_tm_button">
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
              <div className="dizme_tm_down">
                <a className="anchor" href="#process">
                  {/* <svg width="26px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
              <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke:#fff;stroke-width:20px;" />
              <path id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style="fill:none;stroke:#fff;stroke-width:20px;" />
            </svg> */}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
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

                    <Lottie 
                      animationData={groovyWalkAnimation}
                      loop={true} 
                      height={100}
                      style={{ marginLeft: '25%', width:'32%'  }}
                    />
                 

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
