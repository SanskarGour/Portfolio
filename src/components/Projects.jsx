import React from "react";
import p1 from "../Resources/projects/p1.png";
import p1_2 from "../Resources/projects/p1 2.png";
import p1_3 from "../Resources/projects/p1 3.png";

function Projects() {
  return (
    <div className="w-[100%] pb-10 mt-[185px] bg-[#cecece] relative min-h-[500px] "  id="projects">
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
            <h2 class="project-skills-heading">Tint&Orange</h2>

            <p class="project-skills-sub-heading">
              Its a car modification company which provides you sheets to
              protect your car from scratch.
            </p>

            <div class="btn-grp">
              <div class="btn-hire-me" id="btn">
                Read More
              </div>

              <a href="">
                <i class="fa-brands fa-github icon"></i>
              </a>

              <a href="">
                <i class="fa-solid fa-link icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
