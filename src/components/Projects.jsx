import React from "react";
import p1 from "../Resources/projects/p1.png";
import p3 from "../Resources/projects/p3.png";
import p3_1 from "../Resources/projects/p3 1.png";
import p1_2 from "../Resources/projects/p1 2.png";
import p1_3 from "../Resources/projects/p1 3.png";
import p2 from "../Resources/projects/p2.png";
import p2_2 from "../Resources/projects/p2 2.png";
import { FaLock } from "react-icons/fa";

function Projects() {
  return (
    <div
      className="w-[100%] pb-10 mt-[185px] bg-[#cecece] relative min-h-[500px] "
      id="projects"
    >
      <p className="absolute text-[#cecece] top-[-9rem] text-[8rem] font-semibold left-[80px]">
        SANSKAR GOUR
      </p>

      <p className="text-[#0092ca] text-center py-10 text-[5rem] font-semibold">
        PROJECTS
      </p>

      <div>
        <div className="bg-white project-card mt-28 mb-10 mx-auto rounded-xl ">
          <div class="project-number">01</div>

          <div>
            <img
              src={p1}
              className="p-5 h-[430px] w-[750px] absolute top-[35px]"
            />
            <img src={p1_2} className="p-5 right-[110px] h-[300px] absolute" />
            <img
              src={p1_3}
              className="p-5 h-[230px] right-[20px] top-[270px] absolute"
            />
          </div>

          <div className="project-content">
            <h2 class="project-skills-heading text-2xl font-bold">toConnect</h2>

            <p class="project-skills-sub-heading">
              A dynamic platform dedicated to fostering creativity,
              collaboration and knowledge exchange among students.
            </p>

            <div class="btn-grp">
              <a>
                <div class="btn-hire-me" id="btn">
                  Github Link
                  <FaLock />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white project-card mt-28 mb-10 mx-auto rounded-xl ">
          <div class="project-number">02</div>

          <div>
            <img src={p2} className="p-5 h-[500px] w-[750px] absolute" />
            <img src={p2_2} className="p-5 right-[90px] h-[250px] absolute" />
          </div>

          <div className="project-content">
            <h2 class="project-skills-heading text-2xl font-bold">
              Tower of Hanoi
            </h2>

            <p class="project-skills-sub-heading">
              An interactive and fun game and solution one can play. Helps you
              understand and solve Tower of Hanoi.
            </p>

            <div class="btn-grp">
              <a href="https://github.com/SanskarGour/tower-of-hanoi" target="_blank">
                <div class="btn-hire-me" id="btn">
                  Github Link
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white project-card mt-28 mb-10 mx-auto rounded-xl ">
          <div class="project-number">03</div>

          <div>
            <img src={p3} className="p-5 h-[500px] w-[750px] absolute" />
            <img src={p3_1} className="p-5 right-[130px] h-[380px] absolute" />
          </div>

          <div className="project-content">
            <h2 class="project-skills-heading text-2xl font-bold">
              Plan With Me
            </h2>

            <p class="project-skills-sub-heading">
              A website to plan your next trip with us.
            </p>

            <div class="btn-grp">
              <a href="https://github.com/SanskarGour/Web-Development-Projects/tree/main/Plan-with-me" target="_blank">
                <div class="btn-hire-me" id="btn">
                  Github Link
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;