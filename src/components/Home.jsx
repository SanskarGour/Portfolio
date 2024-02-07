import React from "react";
import Navbar from "./Navbar";
import HomeMain from "./HomeMain";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function Home(){
  return(
    <div className="pt-6 bg-[#eeeeee] w-[100%] h-full min-h-[100%]">
      <Navbar />
      <HomeMain />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;