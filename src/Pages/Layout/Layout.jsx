import React from "react";

import "../../static/assets/css/style.scss"
import Footer from "./Footer.jsx";
import Header from "./Header";
import MobileView from "./MobileView";

function Layout({ children }) {

  return (
      <>
      <div className ="dizme_tm_all_wrap" data-magic-cursor="show">
          <Header />
          <MobileView /> 
         

          {children}


          <Footer />
        </div>
        </>
        )
}

export default Layout;
