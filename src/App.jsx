import React from "react";
import Home from "./Pages/HomePage.jsx";
import About from "./Pages/AboutPage.jsx";
import Layout from "./Pages/Layout/Layout.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ServicePage from "./Pages/ServicePage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import Testimony from "./Pages/Testimony.jsx";
// import MobileView from "./Pages/MobileView.jsx";
function App() {
  return (
    <Layout>
      <Home />
      <About/>
      
      <ServicePage />
      <Testimony/>
      <BlogPage />
      {/* <MobileView /> */}
      <ContactPage/>
    </Layout>
    
  );
}

export default App;
