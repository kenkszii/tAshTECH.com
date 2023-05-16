import React from "react"

import Lottie from "lottie-react";

import preloader from "../../static/assets/img/preloader2.json"


function Prelaoder() {
  return (
    <div className="preloader" >
      <Lottie
        animationData={preloader}
        loop={true}
        height={100}
        style={{ marginLeft: '41%', marginTop: "13%", width: '15%' }}
      />
    </div>
  )
}

export default Prelaoder;
