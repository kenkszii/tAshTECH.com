import React from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import test1 from "../static/assets/img/testimonials/quote.svg"
import test4 from "../static/assets/img/testimonials/3.jpg"
import test5 from "../static/assets/img/testimonials/4.jpg"
import test7 from "../static/assets/img/testimonials/6.jpg"


function Testimony() {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Testimonials</span>
          <h3>What My Clients Say</h3>
          <p>Most common methods for designing websites that work well on desktop is responsive and adaptive
            design</p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{ delay: 5000 }} 
                pagination={{
                  dynamicBullets: true,
                  
                }}


              >

                <ul>
                  <SwiperSlide>
                    <div className="icon">
                      <img className="svg" src={test1} alt="" />
                    </div>
                    <div className="text">
                      <p>I rarely like to write reviews, but the Marketify team truly deserve a
                        standing ovation for their customer support, customisation and most
                        importantly, friendliness and professionalism. Many thanks once again for
                        everything and hope that I get to deal with you again in the near future.
                      </p>
                    </div>
                    <div className="short">
                      <div className="image">
                        <img className="main marg" src={test5} alt="" />
                      </div>
                      <div className="detail">
                        <h3>Mike Anderson</h3>
                        <span>Vivaco Studio</span>
                        <div className="pag" >
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <li>
                      <div className="icon">
                        <img className="svg" src={test1} alt="" />
                      </div>
                      <div className="text">
                        <p>Really the Code Quality, Customer Support, and design are awesome and its
                          good support they are giving. They give an instant solution to our needs.
                          Really awesome. I will strongly recommend to my friends. Simply amazing team
                          and amazing theme! Thank you from United States of America!</p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <img className="main" src={test4} alt="" />
                        </div>
                        <div className="detail">
                          <h3>Keita Smith</h3>
                          <span>ABC Group</span>
                          <div className="pag" >
                        </div>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>

                  <SwiperSlide>
                    <li>
                      <div className="icon">
                        <img className="svg" src={test1} alt="" />
                      </div>
                      <div className="text">
                        <p>Loved the template design, documentation, customizability and the customer
                          support from Marketify team! I am a noob in programming with very little
                          knowledge about coding but the Marketify team helped me to launch my resume
                          website successfully. Much recommended!</p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <img className="main" src={test7} alt="" />
                        </div>
                        <div className="detail">
                          <h3>Alan Walker</h3>
                          <span>Web Designer</span>
                          <div className="pag" >
                        </div>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                </ul>
              </Swiper >
            </div>

            <div className="left_details">
              <span className="circle green animPulse"></span>
              <span className="circle yellow animPulse"></span>
              <span className="circle border animPulse"></span>

            </div>
            <div className="right_details">
              <span className="circle yellow animPulse"></span>
              <span className="circle purple animPulse"></span>
              <span className="circle border animPulse"></span>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Testimony
