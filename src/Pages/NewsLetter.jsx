import React from "react";

// import dot from "../static/assets/img/subscribe/dots.jpg"

function NewsLetter () {
  return (
    <div class="dizme_tm_section">
            <div class="dizme_tm_subscribe">
                <div class="container">
                    <div class="inner">
                        <div class="background">
                            {/* <img class="dots" src={dot}/> */}
                            <div class="overlay"></div>
                        </div>

                        <div class="content">
                            <div class="left wow fadeInLeft" data-wow-duration="1s">
                                <span class="subtitle">
                                  Subscribe Now
                                </span>

                                <h3 class="title">
                                  Get Our Newsletter
                                </h3>

                                <p class="text">
                                  Get latest news, updates, tips and trics in your inbox
                                </p>
                            </div>

                            <div class="right wow fadeInRight" data-wow-duration="1s">
                                <div class="field">
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
