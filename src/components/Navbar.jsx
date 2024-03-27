import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext } from "./context/AppContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { sidebar, setSidebar } = useContext(AppContext);
  const navigate = useNavigate();

  function sidebarHandler() {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }

  return (
    <nav className="navbar-main mx-auto select-none relative">
      <div className="h-full flex items-center ml-7 justify-center relative">
        {/* logo and icon */}
        {/* <div className="w-[1rem] flex justify-center items-center rounded-full relative">
          <img src={logo} width="100%" />
        </div> */}

        <h1 className="font-semibold text-[1rem] lg:text-[1.2rem] relative">
          SANXKAR
          {/* ANSKAR GOUR */}
        </h1>
      </div>

      <div>
        <button 
        className="hamburger-btn hamburger rounded-full w-[1.3rem] h-[1.3rem] text-[0.8rem] lg:text-[1rem] flex justify-center items-center mr-7 relative"
        onClick={() => sidebarHandler()}>
          <RxHamburgerMenu />
        </button>
      </div>

      <div className="text-sm btn-container mr-7 hamburger font-medium relative">
        {/* home about contact skills*/}
        <div className="w-max h-max on-hover">
          <a href="#" className="w-max h-max" onClick={() => navigate("/")}>
            Home
          </a>
        </div>

        <div className="w-max h-max on-hover">
          <a
            className="w-max h-max"
            href="#skills"
            onClick={() => navigate("/")}
          >
            Skills
          </a>
        </div>

        <div className="w-max h-max on-hover">
          <a
            className="w-max h-max"
            href="#projects"
            onClick={() => navigate("/")}
          >
            Projects
          </a>
        </div>

        <div className="w-max h-max on-hover">
          <a
            className="w-max h-max"
            href="#contact"
            onClick={() => navigate("/")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
