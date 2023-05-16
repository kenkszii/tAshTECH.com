import React from "react";

// import dot from "../static/assets/img/subscribe/dots.jpg"

function NewsLetter () {
  return (
    <div className="dizme_tm_section">
            <div className="dizme_tm_subscribe">
                <div className="container">
                    <div className="inner">
                        <div className="background">
                            {/* <img className="dots" src={dot}/> */}
                            <div className="overlay"></div>
                        </div>

                        <div className="content">
                            <div className="left wow fadeInLeft" data-wow-duration="1s">
                                <span className="subtitle">
                                  Subscribe Now
                                </span>

                                <h3 className="title">
                                  Get Our Newsletter
                                </h3>

                                <p className="text">
                                  Get latest news, updates, tips and trics in your inbox
                                </p>
                            </div>

                            <div className="right wow fadeInRight" data-wow-duration="1s">
                                <div className="field">
                                    <input type="text" placeholder="Your email here"/>
                                    <input type="submit" value="Send Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NewsLetter;
