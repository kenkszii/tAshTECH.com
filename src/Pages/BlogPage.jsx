import React, { useState } from "react";

import blog1 from "../static/assets/img/thumbs/42-29.jpg";
import blog2 from "../static/assets/img/news/1.jpg";
import blog3 from "../static/assets/img/news/2.jpg";
import blog4 from "../static/assets/img/news/3.jpg";
import blog5 from "../static/assets/img/brushes/news/1.png";
import blog6 from "../static/assets/img/brushes/news/2.png";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function BlogPage() {
  const current = new Date();
  const day = `${current.getDate()}`;
  const month = `${current.getMonth()}`;
  const monthNames = [
    "Jan",  "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const formattedMonth = monthNames[month];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add("disable-scroll");
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove("disable-scroll");
  };
  return (
    <div className="dizme_tm_section" id="blog">
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>From Our Blog</span>
            <h3>Our Recent Updates, Blog, Tips, Tricks &amp; More</h3>
          </div>

          <div className="news_list">
            <ul>
              <li className="wow fadeInUp" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src={blog1} alt="" />
                    <img className="main" src={blog2} />
                    <div className="date">
                      <h3>{day}</h3>
                      <span>{formattedMonth}</span>
                    </div>
                    <a
                      className="dizme_tm_full_link"
                      href="#!"
                    ></a>
                  </div>

                  <div className="details">
                    <span className="category">
                      <a href="#!">Web Development</a>
                    </span>

                    <h3 className="title">
                      <a href="#!">
                        Jim Morisson Says when the musics over turn off the
                        light
                      </a>
                    </h3>
                  </div>




                  
                  <Popup trigger={<a className="dizme_tm_full_link" href="#!" onClick={openPopup}></a>}
                    open={isPopupOpen}
                    onClose={closePopup}
                    modal>
                    {close => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> Web Development </div>
                        <div className="image">

                          <img className="main" src={blog2} />
                          <div className="news_hidden_details">
                            <div className="news_popup_informations">
                              <div className="text">
                                <>
                                  <p>
                                    Dizme is a leading web design agency with an
                                    award-winning design team that creates innovative,
                                    effective websites that capture your brand,
                                    improve your conversion rates, and maximize your
                                    revenue to help grow your business and achieve
                                    your goals.
                                  </p>

                                  <p>
                                    In today’s digital world, your website is the
                                    first interaction consumers have with your
                                    business. That's why almost 95 percent of a user’s
                                    first impression relates to web design. It’s also
                                    why web design services can have an immense impact
                                    on your company’s bottom line.
                                  </p>

                                  <p>
                                    That’s why more companies are not only
                                    reevaluating their website’s design but also
                                    partnering with Kura, the web design agency that’s
                                    driven more than $2.4 billion in revenue for its
                                    clients. With over 50 web design awards under our
                                    belt, we're confident we can design a custom
                                    website that drives sales for your unique
                                    business.
                                  </p>
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </li>

              <li
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={blog1} alt="" />
                    <img className="main" src={blog3} />
                    <div className="date">
                      <h3>{day}</h3>
                      <span>{formattedMonth}</span>
                    </div>
                    <a className="dizme_tm_full_link" href="#!"></a>
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#!">Branding</a>
                    </span>

                    <h3 className="title">
                      <a href="#!">
                        How to be appreciated for your hard work as a developer
                      </a>
                    </h3>
                  </div>

                 
                  <Popup trigger={ <a className="dizme_tm_full_link" href="#!" onClick={openPopup}></a>}
                    open={isPopupOpen}
                    onClose={closePopup}
                    modal>
                    {close => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> Branding </div>
                        <div className="image">

                          <img className="main" src={blog3} />
                          <div className="news_hidden_details">
                            <div className="news_popup_informations">
                              <div className="text">
                                <>
                                  <p>
                                    Dizme is a leading web design agency with an
                                    award-winning design team that creates innovative,
                                    effective websites that capture your brand,
                                    improve your conversion rates, and maximize your
                                    revenue to help grow your business and achieve
                                    your goals.
                                  </p>

                                  <p>
                                    In today’s digital world, your website is the
                                    first interaction consumers have with your
                                    business. That's why almost 95 percent of a user’s
                                    first impression relates to web design. It’s also
                                    why web design services can have an immense impact
                                    on your company’s bottom line.
                                  </p>

                                  <p>
                                    That’s why more companies are not only
                                    reevaluating their website’s design but also
                                    partnering with Kura, the web design agency that’s
                                    driven more than $2.4 billion in revenue for its
                                    clients. With over 50 web design awards under our
                                    belt, we're confident we can design a custom
                                    website that drives sales for your unique
                                    business.
                                  </p>
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </li>

              <li
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={blog1} alt="" />
                    <img className="main" src={blog4} alt="" />
                    <div className="date">
                      <h3>{day}</h3>

                      <span>{formattedMonth}</span>
                    </div>

                    <a className="dizme_tm_full_link" href="#!"></a>
                  </div>

                  <div className="details">
                    <span className="category">
                      <a href="#!">Social Media</a>
                    </span>

                    <h3 className="title">
                      <a href="#!">
                        How designers and developers can collaborate better
                      </a>
                    </h3>
                  </div>

                         
                  <Popup trigger={<a className="dizme_tm_full_link" href="#!" onClick={openPopup}></a>}
                    open={isPopupOpen}
                    onClose={closePopup}
                    modal>
                    {close => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header">Social Media </div>
                        <div className="image">

                          <img className="main" src={blog4} />
                          <div className="news_hidden_details">
                            <div className="news_popup_informations">
                              <div className="text">
                                <>
                                  <p>
                                    Dizme is a leading web design agency with an
                                    award-winning design team that creates innovative,
                                    effective websites that capture your brand,
                                    improve your conversion rates, and maximize your
                                    revenue to help grow your business and achieve
                                    your goals.
                                  </p>

                                  <p>
                                    In today’s digital world, your website is the
                                    first interaction consumers have with your
                                    business. That's why almost 95 percent of a user’s
                                    first impression relates to web design. It’s also
                                    why web design services can have an immense impact
                                    on your company’s bottom line.
                                  </p>

                                  <p>
                                    That’s why more companies are not only
                                    reevaluating their website’s design but also
                                    partnering with Kura, the web design agency that’s
                                    driven more than $2.4 billion in revenue for its
                                    clients. With over 50 web design awards under our
                                    belt, we're confident we can design a custom
                                    website that drives sales for your unique
                                    business.
                                  </p>
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src={blog5} alt="" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
        <img src={blog6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
