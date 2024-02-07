import React from "react";
import logo from "../Resources/s logo.png"

function Navbar(){
  return(
    <div className="bg-[#222831] px-10 w-[80%] flex justify-between h-[3.25rem] mx-auto rounded-xl">
      <div className="rounded-[10px] h-full w-max flex items-center justify-center">
        <img src={logo} width="27px" className="rounded-[10px]"/>
        <h1 className="text-white text-xl">ANSKAR GOUR</h1>
      </div>

      <div className="text-white w-[20rem] text-base flex h-[3rem] justify-between items-center">
        <a href="#skills" className="font-light hover:font-normal">Skills</a>
        <a href="#projects" className="font-light hover:font-normal">Projects</a>
        <a href="#contact" className="font-light hover:font-normal">Contact Me</a>
      </div>
    </div>
  );
}

export default Navbar;