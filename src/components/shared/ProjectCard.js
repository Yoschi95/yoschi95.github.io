import "./ProjectCard.scss";
import React, { useState } from "react";
import projectLogo from "../../assets/images/projects/Projects_1.svg";
import DotMenu from "../shared/DotMenu";
import ExitCross from "../shared/ExitCross";

function ProjectCard({ title, description, techStack }) {
  const [isDefaultMenu, setIsDefaultMenu] = useState(true);

  const toggleMenu = () => {
    setIsDefaultMenu(!isDefaultMenu);
  };

  return (
    <div className="project-card">
      <div className="head">
        <img src={projectLogo} alt="logo" />
      </div>
      <div className="body">
        <div className="title">
          <p>{title}</p>
          <button className="menuButton" onClick={toggleMenu}>
            {isDefaultMenu ? <DotMenu /> : <ExitCross />}
          </button>
        </div>
        {isDefaultMenu ? (
          <p className={`description fade-in ${isDefaultMenu ? "animate" : ""}`}>{description}</p>
        ) : (
          <p className={`description fade-in}`}>{techStack}</p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
