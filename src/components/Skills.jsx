import React from "react";
import css from "../Resources/New folder (2)/css.png"
import js from "../Resources/New folder (2)/javascript.png"
import mongo from "../Resources/New folder (2)/mongodb.png"
import node from "../Resources/New folder (2)/node.png"
import git from "../Resources/New folder (2)/git.png"
import web from "../Resources/New folder (2)/website.png"
import db from "../Resources/New folder (2)/database.png"
import react from "../Resources/New folder (2)/react.png"
import ex from "../Resources/New folder (2)/express.png"

function Skills() {
  return (
    <div className="realtive">
      <div class="skills container" id="skills">
        <div class="text-[7rem] absolute top-[-130px] font-semibold text-[#cecece] left-[-100px]">
          Skills
        </div>

        <div class="skills-content">
          <h2 class="skills-heading">Me and MyTech Stack</h2>

          <div class="skills-sub-heading">
          As a MERN (MongoDB, Express.js, React.js, Node.js) developer, I specialize in full-stack web development, leveraging the power of the MERN stack to build robust and dynamic web applications. With expertise in both front-end and back-end technologies, I craft seamless user experiences while ensuring efficient server-side functionalities. 
          <br></br>
          <br></br>
          My proficiency in MongoDB allows for flexible and scalable database management, while Express.js enables me to create robust server-side applications. Leveraging React.js, I design interactive user interfaces with reusable components, ensuring an intuitive and engaging user experience. 
          <br></br>
          <br></br>
          Additionally, my skills in Node.js empower me to develop high-performance server-side applications, handling asynchronous operations efficiently. Through continuous learning and staying updated with emerging technologies, I strive to deliver innovative solutions that meet the evolving needs of clients and users. With a passion for problem-solving and a commitment to excellence, I am dedicated to creating impactful web applications that drive business growth and user satisfaction.
          </div>
        </div>

        <div class="skills-icons">
        <img class="skills-img" src={css} />
        <img class="skills-img" src={js} />
        <img class="skills-img" src={node} />
        <img class="skills-img" src={git} />
        <img class="skills-img" src={db} />
        <img class="skills-img" src={web} />
        <img class="skills-img" src={ex} />
        <img class="skills-img" src={mongo} />
        <img class="skills-img" src={react} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
