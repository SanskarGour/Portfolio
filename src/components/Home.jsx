import React from "react";
import Navbar from "./Navbar";
import HomeMain from "./HomeMain";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Home(){
  
  return(
    <div className="pt-6 relative min-w-[100vw] w-[100%] min-h-[100vh] h-[100%]">
      <div className="translucent-bg"></div>
      <Navbar />
      <Sidebar />
      <HomeMain />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;