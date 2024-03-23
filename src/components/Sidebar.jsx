import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";

function Sidebar() {
  const navigate = useNavigate();
  const { setSidebar, sidebar } = useContext(AppContext);

  return (
    <div>
      {sidebar ? (
        <div
          onClick={() => {
            setSidebar(false);
          }}
          className="text-[11.5px] w-[10.5rem] rounded-[1.45938rem] h-[11rem] overflow-hidden text-white absolute flex-col top-[5rem] right-[2rem] hamburger font-medium justify-evenly items-center z-40 cursor-pointer bg-[#2c2b2b] "
        >
          <div className="w-full h-full on-hover flex justify-center items-center text-center border-b border-[#5d5b5b7a]">
            <a href="#" className="w-max h-max" onClick={() => navigate("/")}>
              Home
            </a>
          </div>

          <div className="w-full h-full on-hover flex justify-center items-center text-center border-b border-[#5d5b5b7a]">
            <a
              className="w-max h-max"
              href="#skills"
              onClick={() => navigate("/")}
            >
              Skills
            </a>
          </div>

          <div className="w-full h-full on-hover flex justify-center items-center text-center border-b border-[#5d5b5b7a]">
            <a
              className="w-max h-max"
              href="#projects"
              onClick={() => navigate("/")}
            >
              Projects
            </a>
          </div>

          <div className="w-full h-full  on-hover flex justify-center items-center text-center ">
            <a
              className="w-max h-max"
              href="#contact"
              onClick={() => navigate("/")}
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
