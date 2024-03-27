  import React, { useEffect } from "react";
  import p1 from "../Resources/projects/p1.png";
  import p3 from "../Resources/projects/p3.png";
  import p3_1 from "../Resources/projects/p3 1.png";
  import p3_2 from "../Resources/projects/p3 2.png";
  import p1_2 from "../Resources/projects/p1 2.png";
  import p1_3 from "../Resources/projects/p1 3.png";
  import p1_4 from "../Resources/projects/p1 4.png";
  import p1_5 from "../Resources/projects/p1 5.png";
  import p2 from "../Resources/projects/p2.png";
  import p2_2 from "../Resources/projects/p2 2.png";
  import p4_1 from "../Resources/projects/p4 1.png";
  import p4_2 from "../Resources/projects/p4 2.png";
  import p4_3 from "../Resources/projects/p4 3.png";
  import p5_1 from "../Resources/projects/p5 1.png";
  import p5_2 from "../Resources/projects/p5 2.png";
  import p7_1 from "../Resources/projects/p7 1.png";
  import p7_2 from "../Resources/projects/p7 2.png";
  import p7_3 from "../Resources/projects/p7 3.png";
  import p7_4 from "../Resources/projects/p7 4.png";
  import { FaLock } from "react-icons/fa";

  function Projects() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
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
      <div
        className="w-[100%] pb-10 sm:mt-[5rem] relative min-h-[500px] "
        id="projects"
      >
        <h1 className="select-none text-white text-center py-10 font-semibold">
          PROJECTS
        </h1>

        <div className="flex flex-col gap-10 md:gap-20">
          <div className="project-card ">
            <div class="project-number">1</div>

            <div class="scroller" data-direction="left" data-speed="slow">
              <div class="scroller__inner">
                <img src={p1} draggable="false" />
                <img src={p1_4} draggable="false" />
                <img src={p1_2} draggable="false" />
                <img src={p1_3} draggable="false" />
                <img src={p1_5} draggable="false" />
              </div>
            </div>

            <div className="project-content">
              <h2 class="project-skills-heading text-2xl font-bold">toConnect</h2>

              <p class="project-skills-sub-heading">
                A dynamic platform dedicated to fostering creativity,
                collaboration and knowledge exchange among students.
              </p>

              <div className="link">
                <a>
                  Github Link
                  <FaLock />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div class="project-number">2</div>

            <div class="scroller" data-direction="right" data-speed="slow">
              <div class="scroller__inner">
                <img src={p7_1} />
                <img src={p7_3} />
                <img src={p7_2} />
                <img src={p7_4} />
              </div>
            </div>

            <div className="project-content">
              <h2 class="project-skills-heading text-2xl font-bold">Crytocoin</h2>

              <p class="project-skills-sub-heading">
                Know more about the Crypto World.
                <br></br>
                Keep an Eye on the top Markets and Crypto Coin in detail.
              </p>

              <div className="link">
                <a
                  href="https://github.com/SanskarGour/crypto-app"
                  target="_blank"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div class="project-number">3</div>

            <div class="scroller" data-direction="left" data-speed="slow">
              <div class="scroller__inner">
                <img src={p3} />
                <img src={p3_1} />
                <img src={p3_2} />
              </div>
            </div>

            <div className="project-content">
              <h2 class="project-skills-heading text-2xl font-bold">
                Plan With Me
              </h2>

              <p class="project-skills-sub-heading">
                A website to plan your next trip with us.
              </p>

              <div className="link">
                <a
                  href="https://github.com/SanskarGour/Web-Development-Projects/tree/main/Plan-with-me"
                  target="_blank"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div class="project-number">4</div>

            <div class="scroller" data-direction="right" data-speed="slow">
              <div class="scroller__inner">
                <img src={p4_1} />
                <img src={p4_2} />
                <img src={p4_3} />
              </div>
            </div>

            <div className="project-content">
              <h2 class="project-skills-heading text-2xl font-bold">MyBlogs</h2>

              <p class="project-skills-sub-heading">
                Read latest Blogs on MyBlogs.
                <br></br>
                Read Blogs about your topics of your interest.
              </p>

              <div className="link">
                <a
                  href="https://github.com/SanskarGour/Web-Development-Projects/tree/main/MyBlogs"
                  target="_blank"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div class="project-number">5</div>

            <div class="scroller" data-direction="left" data-speed="slow">
              <div class="scroller__inner">
                {" "}
                <img src={p5_1} />
                <img src={p5_2} />
              </div>
            </div>

            <div className="project-content">
              <h2 class="project-skills-heading text-2xl font-bold">
                Tic-Tak-Toe
              </h2>

              <p class="project-skills-sub-heading">
                A fun game to play with your mates!
              </p>

              <div className="link">
                <a
                  href="https://github.com/SanskarGour/Web-Development-Projects/tree/main/Tic-tak-toe"
                  target="_blank"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div class="project-number">6</div>

            <div class="scroller" data-direction="right" data-speed="slow">
              <div class="scroller__inner">
                <img src={p2} />
                <img src={p2_2} />
              </div>
            </div>

            <div className="project-content">
              <h2 class="project-skills-heading text-2xl font-bold">
                Tower of Hanoi
              </h2>

              <p class="project-skills-sub-heading">
                An interactive and fun game and solution one can play. Helps you
                understand and solve Tower of Hanoi.
              </p>

              <div className="link">
                <a
                  href="https://github.com/SanskarGour/tower-of-hanoi"
                  target="_blank"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  export default Projects;
