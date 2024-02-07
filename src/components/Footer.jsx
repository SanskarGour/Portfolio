import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
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
          <FaLinkedin className="text-2xl text-white"  />
          <FaGithub className="text-2xl text-white" />
          <FaInstagram className="text-2xl text-white" />
          <FaEnvelope className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
