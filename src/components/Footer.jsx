import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div class="container footer-container">
        <div class="footer-faded-text">SG</div>

        <div class="footer-items">
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        <div class="socials flex gap-[15px]">
          <a href="https://www.linkedin.com/in/sanskar-gour/" target="_blank">
          <FaLinkedin className="text-2xl text-white"  />
          </a>

          <a href="https://github.com/SanskarGour" target="_blank">
          <FaGithub className="text-2xl text-white" />
          </a>

          <a href="https://www.instagram.com/sansxkar/" target="_blank">
          <FaInstagram className="text-2xl text-white" />
          </a>

          <a href="mailto:sanskargour1234@gmail.com" >
          <FaEnvelope className="text-2xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
