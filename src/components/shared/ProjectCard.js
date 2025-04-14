import "./ProjectCard.scss";
import React, { useState } from "react";
import projectLogo from "../../assets/images/projects/projects_1.svg";
import DotMenu from "../shared/DotMenu";
import ExitCross from "../shared/ExitCross";
import webLogo from "../../assets/images/projects/web.svg";
import gitHubLogo from "../../assets/images/contact/github.svg";

const ProjectCard = ({ title, description, techStack, gitHubLink, appLink }) => {
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
        {isDefaultMenu ? (
          <div className="default-menu">
            <div className="default-title-bar">
              <p className="heading">{title}</p>
              <button className="button" onClick={toggleMenu}>
                <DotMenu />
              </button>
            </div>
            <p className="description">{description}</p>
          </div>
        ) : (
          <div className="popup">
            <div className="exit-title-bar">
              <p className="description">
                <span className="heading">Tech Stack</span>
                <br></br>
                {techStack}
              </p>
              <button className="button" onClick={toggleMenu}>
                <ExitCross />
              </button>
            </div>

            <div className="exit-logo-bar">
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <img src={gitHubLogo} />
              </a>
              <a href={appLink} target="_blank" rel="noopener noreferrer">
                <img src={webLogo} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
