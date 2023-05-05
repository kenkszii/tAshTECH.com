import React from "react";
import about from "../static/assets/img/bg-image.jpg"


function AboutPage () {
  return (
        <div className ="dizme_tm_counter" id="about">
          <div className ="dizme_tm_about">
            <div className ="container">
              <div className ="wrapper">
                <div className ="left">
                  <div className ="image">
                    <img src={about} alt="" />
                    <div className ="numbers year">
                      <div className ="wrapper">
                        <h3><span className ="dizme_tm_counter" data-from="0" data-to="18" data-speed="2000">4</span></h3>
                        <span className ="name">Years of<br />Success</span>
                      </div>
                    </div>
                    <div className ="numbers project">
                      <div className ="wrapper">
                        <h3 className ="yellowText"><span className ="dizme_tm_counter" data-from="0" data-to="9"
                          data-speed="2000">9</span>K</h3>
                        <span className ="name">Total<br />Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className ="right">
                  <div className ="title wow fadeInUp" data-wow-duration="1s">
                    <span>About tAshTECH</span>
                    <h3>We Can Design Anything You Want</h3>
                  </div>
                  <div className ="text wow fadeInUp" data-wow-duration="1s">
                    <p>
                      tAshTECH is an innovative information and technology company that specializes in delivering cutting-edge web design,
                      graphics design, mobile and web app development, and IT consultation services. We help businesses of all sizes
                      to achieve their digital goals by leveraging the latest technology and industry best practices.
                     
                        <br/>Our team of experienced professionals is dedicated to delivering exceptional results to our clients. 
                        We understand that each project is unique, and we take the time to understand our clients' needs and goals before developing a customized solution that meets their specific requirements.
                  
                    </p>
                  </div>
                  <div className ="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                    <a className ="anchor" href="#contact"><span>Hire us</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className ="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/about/1.png" alt="" /></div>
            <div className ="brush_2 wow fadeInRight" data-wow-duration="1s"><img src="img/brushes/about/2.png" alt="" /></div>
          </div>
        </div>
  )
}

export default AboutPage;
