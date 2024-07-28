import React, { useEffect } from "react";
import projectImages from '../helper/images.helper.js';

// Project data
const projectsData = [
  {
    id: 1,
    title: "toConnect",
    description: "A dynamic platform dedicated to fostering creativity, collaboration and knowledge exchange among students.",
    images: ["p1", "p1_4", "p1_2", "p1_3", "p1_5"],
    github: "https://to-connect-one.vercel.app/",
    live: "https://to-connect-one.vercel.app/",
    direction: "left"
  },
  {
    id: 2,
    title: "Crytocoin",
    description: "Know more about the Crypto World. Keep an Eye on the top Markets and Crypto Coin in detail.",
    images: ["p7_1", "p7_3", "p7_2", "p7_4"],
    github: "https://github.com/SanskarGour/crypto-app",
    live: "https://crytocoin.vercel.app/",
    direction: "right"
  },
  {
    id: 3,
    title: "Plan With Me",
    description: "A website to plan your next trip with us.",
    images: ["p3", "p3_1", "p3_2"],
    github: "https://github.com/SanskarGour/Web-Development-Projects/tree/main/Plan-with-me",
    live: null,
    direction: "left"
  },
  {
    id: 4,
    title: "MyBlogs",
    description: "Read latest Blogs on MyBlogs. Read Blogs about your topics of your interest.",
    images: ["p4_1", "p4_2", "p4_3"],
    github: "https://github.com/SanskarGour/Web-Development-Projects/tree/main/MyBlogs",
    live: null,
    direction: "right"
  },
  {
    id: 5,
    title: "Tic-Tak-Toe",
    description: "A fun game to play with your mates!",
    images: ["p5_1", "p5_2"],
    github: "https://github.com/SanskarGour/Web-Development-Projects/tree/main/Tic-tak-toe",
    live: null,
    direction: "left"
  },
  {
    id: 6,
    title: "Tower of Hanoi",
    description: "An interactive and fun game and solution one can play. Helps you understand and solve Tower of Hanoi.",
    images: ["p2", "p2_2"],
    github: "https://github.com/SanskarGour/tower-of-hanoi",
    live: null,
    direction: "right"
  }
];

// Scroller component
const Scroller = ({ images, direction, speed = "slow" }) => (
  <div className="scroller" data-direction={direction} data-speed={speed}>
    <div className="scroller__inner">
      {images.map((img, index) => (
        <img 
          key={index} 
          src={projectImages[img]} 
          draggable="false" 
          alt={`Project image ${index + 1}`} 
        />
      ))}
    </div>
  </div>
);

// ProjectCard component
const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-number">{project.id}</div>
    <Scroller images={project.images} direction={project.direction} />
    <div className="project-content">
      <h2 className="project-skills-heading text-2xl font-bold">{project.title}</h2>
      <p className="project-skills-sub-heading">{project.description}</p>
      <div className="flex gap-4">
        {project.github && (
          <div className="link">
            <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        )}
        {project.live && (
          <div className="link">
            <a href={project.live} target="_blank" rel="noopener noreferrer">Live Project</a>
          </div>
        )}
      </div>
    </div>
  </div>
);

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
    <div className="w-[100%] pb-10 sm:mt-[5rem] relative min-h-[500px]" id="projects">
      <h1 className="select-none text-white text-center py-10 font-semibold">PROJECTS</h1>
      <div className="flex flex-col gap-10 md:gap-20">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;