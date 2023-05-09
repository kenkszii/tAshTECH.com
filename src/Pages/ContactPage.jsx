import React from "react"

// import contact1 from "../static/assets/img/brushes/contact/1.png"
// import contact2 from "../static/assets/img/brushes/contact/2.png"

function ContactPage() {
  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">

            <span>
              Contact us
            </span>
            <h3>
              I Want To Hear From You
            </h3>
            <p>
              Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and
              8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">

              <ul>
                <li>
                  <div className="list_inner">
                    <div className="icon orangeBackground">
                      <i className="icon-location orangeText"></i>
                    </div>
                    <div className="short">

                      <h3>
                        Address
                      </h3>
                      <span>
                        Kaduna, Nigeria.
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="list_inner">
                    <div className="icon greenBackground">
                      <i className="icon-mail-1 greenText"></i>
                    </div>
                    <div className="short">

                      <h3>
                        Email
                      </h3>

                      <span>
                        <a href="#!">
                          <span className="__cf_email__"
                            data-cfemail="bbd3ded7d7d4fbdfd2c1d6de95d8d4d6">
                            kenkszii@gmail.com
                          </span>
                        </a>
                      </span>

                    </div>
                  </div>
                </li>

                <li>
                  <div className="list_inner">
                    <div className="icon purpleBackground">
                      <i className="icon-phone purpleText"></i>
                    </div>
                    <div className="short">
                      <h3>
                        Phone
                      </h3>

                      <span>
                        +23481816598, +2348066286427
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

            </div>

            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                
                <form action="https://marketifythemes.net/" method="post" className="contact_form"
                  id="contact_form" autoComplete="off">
                  <div className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."></div>
                  <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                  <div className="input_list">

                    <ul>
                      <li>
                        <input id="name" type="text" placeholder="Your Name" />
                      </li>

                      <li>
                        <input id="email" type="text" placeholder="Your Email" />
                      </li>

                      <li>
                        <input id="phone" type="number" placeholder="Your Phone" />
                      </li>

                      <li>
                        <input id="subject" type="text" placeholder="Subject" />
                      </li>
                    </ul>

                  </div>
                  <div className="message_area">
                    <textarea id="message" placeholder="Write your message here"></textarea>
                  </div>
                  <div className="dizme_tm_button">

                    <a id="send_message" href="#!">
                      <span>
                        Submit Now
                      </span>
                    </a>

                  </div>

                </form>
              </div>
            </div>
            
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              {/* <img src={contact2}
              alt="" /> */}
            </div>
          </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          {/* <img src={contact1} alt="" /> */}
        </div>
      </div>
    </div>
  </div>

  )
}

export default ContactPage;
