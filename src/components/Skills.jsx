import React, { useEffect } from "react";
import css from "../Resources/New folder (2)/css.png";
import js from "../Resources/New folder (2)/javascript.png";
import mongo from "../Resources/New folder (2)/mongodb.png";
import node from "../Resources/New folder (2)/node.png";
import git from "../Resources/New folder (2)/git.png";
import web from "../Resources/New folder (2)/website.png";
import db from "../Resources/New folder (2)/database.png";
import react from "../Resources/New folder (2)/react.png";
import ex from "../Resources/New folder (2)/express.png";

function Skills() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".skills_scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector(".skills_scroller_inner");
        const scrollerContent = scrollerInner.querySelectorAll("img");
        const imageCount = scrollerContent.length;
        scrollerInner.style.setProperty("--image-count", imageCount);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="realtive">
      <div
        className="w-[100%] pb-10 sm:mt-[5rem] relative min-h-[500px] "
        id="skills"
      >
        <h1 className="select-none text-white text-center py-10 font-semibold">
          SKILLS
        </h1>

        <div className="gap-10 md:gap-20 skills-card">
          <div id="text">
            <p className="para fancy pb-[1rem] sm:pb-[2rem]">
              As a <a href="https://www.oracle.com/in/database/mern-stack/" target="_blank" className="text-[#0092ca]">MERN</a> developer, I
              specialize in{" "}
              <a href="https://www.geeksforgeeks.org/what-is-full-stack-development/" target="_blank" className="text-[#0092ca]">Full-Stack Web Development</a>
              , leveraging the power of the MERN stack to build robust and web
              applications. With expertise in both front-end and back-end
              technologies, I craft seamless user experiences while ensuring
              efficient server-side functionalities.
            </p>

            <p className="para fancy pb-[1rem] sm:pb-[2rem]">
              My proficiency in <a href="https://www.mongodb.com/" target="_blank" className="text-[#0092ca]">MongoDB</a>{" "}
              allows for flexible and scalable database management, while{" "}
              <a href="https://expressjs.com/" target="_blank" className="text-[#0092ca]">Express.js</a> enables me to
              create robust server-side applications. Leveraging{" "}
              <a href="https://react.dev/learn" target="_blank" className="text-[#0092ca]">React.js</a>, I design
              interactive user interfaces with reusable components, ensuring an
              intuitive and engaging user experience.
            </p>

            <p className="para fancy">
              Additionally, my skills in{" "}
              <a href="https://nodejs.org/en" target="_blank" className="text-[#0092ca]">Node.js</a> empower me to
              develop high-performance server-side applications, handling
              asynchronous operations efficiently. Through continuous learning
              and staying updated with emerging technologies, I strive to
              deliver innovative solutions that meet the evolving needs of
              clients and users. With a passion for problem-solving and a
              commitment to excellence, I am dedicated to creating impactful web
              applications that drive business growth and user satisfaction.
            </p>
          </div>

          <div class="skills_scroller" data-speed="slow">
            <div class="skills_scroller_inner">
              <img src={css} />
              <img src={js} />
              <img src={node} />
              <img src={git} />
              <img src={db} />
              <img src={web} />
              <img src={ex} />
              <img src={mongo} />
              <img src={react} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
