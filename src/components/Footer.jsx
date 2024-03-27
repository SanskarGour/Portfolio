import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div class="footer-container">
        <div class="footer-icon">SG</div>

        <div class="footer-items gap-[1rem] sm:gap-[2rem]">
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

        <div class="footer-socials flex gap-[15px]">
          <a href="https://www.linkedin.com/in/sanskar-gour/" target="_blank">
            <FaLinkedin/>
          </a>

          <a href="https://github.com/SanskarGour" target="_blank">
            <FaGithub/>
          </a>

          <a href="https://www.instagram.com/sansxkar/" target="_blank">
            <FaInstagram/>
          </a>

          <a href="mailto:sanskargour1234@gmail.com">
            <FaEnvelope/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
