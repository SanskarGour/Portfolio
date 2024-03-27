import React, { useEffect } from "react";
// import user from "../Resources/user.JPG";
// import user from "../Resources/user-img1.png";
// import user from "../Resources/user-img2.png";
import user from "../Resources/user-img3.png";

function HomeMain() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  function changeChar(event) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }


  return (
    <div className="text-white border-[0.5px] border-[#605f5f32] rounded-xl px-4 sm:px-10 w-[80%] mx-auto my-10 sm:my-20 py-[1rem] sm:py-[2rem] md:py-[3rem] flex justify-between items-center home-main z-10 relative ">
      <div className="flex flex-col justify-evenly h-full sm:min-h-[20rem] items-start">
        <h1 className="text-3xl">
          <span
            data-value="SANSKAR GOUR"
            className="dynamic-name"
            onMouseOver={changeChar}
          >
            SANSKAR GOUR
          </span>
        </h1>
        <p className="text-start font-light">
          {/* I am a Web Developer and here is my portfolio website. Here you'll
          learn about my journey as a software developer. */}
          "I specialize in Full Stack Web Development, excelling in React.js, 
          alongside a strong foundation in Data Structures and Algorithms."
        </p>
      </div>

      <div class="hero-section-right">
        <div class="user-img">
          <img src={user} />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
