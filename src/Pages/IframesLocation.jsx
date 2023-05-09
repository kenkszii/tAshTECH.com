import React from "react";

function IframesLocation() {
  return (
    <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Google Maps"
            width="100%"
            height="375"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=6%20Zaria%20Sokoto%20Rd&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon"></a>
          <br />
          <style>
            {`
            .mapouter {
              position: relative;
              text-align: right;
              height: 375px;
              width: 100%;
            }
  
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              height: 375px;
              width: 100%;
            }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}

export default IframesLocation;
