import React from "react";
import user from "../Resources/user.JPG";
import circle from "../Resources/circle.png";
import cube from "../Resources/cube.png";
import dots from "../Resources/dots.png";
import zigzag from "../Resources/zigzag.png";


function HomeMain() {
  return (
    <div className="border-[0.5px] rounded-xl p-10 w-[80%] mx-auto my-20 h-[450px] flex justify-between items-center">
      <div className="flex flex-col justify-evenly h-full max-w-[500px] items-start">
        <h2 className="text-3xl font-light">Hi!! Everyone</h2>
        <h1 className="text-4xl">I am a Web Developer</h1>
        <p className="text-start font-light">
          I am a Web Developer and here is my portfolio website. Here you'll
          learn about my journey as a software developer.
        </p>

        {/* <div class="btn-hire-me" id="btn">
          Hire me
        </div> */}
      </div>

      {/* <div class="hero-section-right">
        <div class="absolute icon icon-circle">
          <img src={circle} />
        </div>

        <div class="absolute icon icon-cube">
          <img src={cube} />
        </div>

        <div class="absolute icon icon-dots">
          <img src={dots} />
        </div>

        <div class="absolute icon icon-zigzag">
          <img src={zigzag} />
        </div>

        <div class="user-img">
          <img src={user} />
        </div>
      </div> */}

    </div>
  );
}

export default HomeMain;
