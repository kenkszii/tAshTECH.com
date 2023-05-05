import React from "react";
import Tilt from "react-parallax-tilt";

import anchor1 from "../static/assets/img/service/web.svg"
import anchor2 from "../static/assets/img/service/dark/1.png"
import anchor3 from "../static/assets/img/service/graphicdesign.svg"
import anchor4 from "../static/assets/img/service/dark/2.png"
import anchor5 from "../static/assets/img/service/contact.svg"
import anchor6 from "../static/assets/img/service/dark/3.png"
import anchor7 from "../static/assets/img/service/itconsultation.svg"
import anchor8 from "../static/assets/img/service/dark/4.png"


function ServicePage() {
  return (
    <div class="dizme_tm_section" id="service">
      <div class="dizme_tm_services">
        <div class="container">
          <div class="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>
              What We Do for Clients
            </h3>
            <p>
              Most common methods for designing websites that
              work well on desktop is responsive and
              adaptive design
            </p>
          </div>

          <div class="service_list">
            <ul>
              <div className='tiltComponent'>
                <div className="col">
                  <Tilt glareEnable={true} tiltMaxAngleX={10}
                    tiltMaxAngleY={10} perspective={2000}
                    glareColor={"rgb(255,0,0)"}>

                    <li class="wow fadeInLeft" data-wow-duration="1s">
                      <div class="list_inner tilt-effect">
                        <span class="icon">
                          <img class="svg" src={anchor1} alt="" />
                          <img class="back" src={anchor2} alt="" />
                        </span>
                        <div class="title">
                          <h3>
                            Creative Design
                          </h3>

                        </div>

                        <div class="text">
                          <p>
                            Our team of experienced designers works closely with you to understand your business
                            needs and create visually stunning designs.
                            Whether you need a new mobile app design or want to redesign your existing web application, 
                            we've got you covered.

                          </p>
                        </div>
                      </div>
                    </li>
                  </Tilt>

                  <Tilt glareEnable={true} tiltMaxAngleX={10}
                    tiltMaxAngleY={10} perspective={2000}
                    glareColor={"rgb(255,0,0)"}>
                    <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                      <div class="list_inner tilt-effect">
                        <span class="icon">
                          <img class="svg" src={anchor3} alt="" />
                          <img class="back" src={anchor8} alt="" />
                        </span>
                        <div class="title">
                          <h3>
                            Graphic Design
                          </h3>

                        </div>
                        <div class="text">
                          <p>
                            We offer graphic design services,
                            including logo and branding design,
                            print and digital design, and illustration.
                            Our designs are tailored to effectively 
                            communicate our clients' messages and establish a strong visual identity.
                          </p>
                        </div>
                      </div>
                    </li>
                  </Tilt>
                </div>

                <div className='tiltComponent'>
                  <Tilt glareEnable={true} tiltMaxAngleX={10}
                    tiltMaxAngleY={10} perspective={2000}
                    glareColor={"rgb(255,0,0)"}>
                    <li class="wow fadeInLeft" data-wow-duration="1s">
                      <div class="list_inner tilt-effect">
                        <span class="icon">
                          <img class="svg" src={anchor5} alt="" />
                          <img class="back" src={anchor6} alt="" />
                        </span>
                        <div class="title">
                          <h3>
                            Digital Marketing
                          </h3>
                        </div>
                        <div class="text">
                          <p>
                            Our digital marketing services help you reach your target audience by utilizing various
                            online marketing channels. We work with you to create
                            a comprehensive digital marketing strategy that aligns with your business goals and
                            helps you achieve maximum ROI.
                          </p>
                        </div>
                      </div>
                    </li>
                  </Tilt>

                  <Tilt glareEnable={true} tiltMaxAngleX={10}
                    tiltMaxAngleY={10} perspective={2000}
                    glareColor={"rgb(255,0,0)"}>
                    <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                      <div class="list_inner tilt-effect">
                        <span class="icon">
                          <img class="svg" src={anchor7} alt="" />
                          <img class="back" src={anchor4} alt="" />
                        </span>
                        <div class="title">
                          <h3>IT Consultation</h3>

                        </div>
                        <div class="text">
                          <p>
                            Our IT consultation services provide expert advice and guidance
                            on all aspects of technology for your business. Whether you
                            need help with hardware and software procurement,
                            network design and implementation, or IT security, our team of
                            experts is here to help.
                          </p>
                        </div>




                      </div>
                    </li>
                  </Tilt>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div class="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/service/5.png"
          alt="" /></div>
        <div class="brush_2 wow zoomIn" data-wow-duration="1s"><img src="img/brushes/service/6.png" alt="" />
        </div>
      </div>
    </div>
  )
}
export default ServicePage;

