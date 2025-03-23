import "./Projects.scss";
import ProjectCard from "../shared/ProjectCard";

function Projects() {
  return (
    <main className="projects" id="projects">
      <h1>Projects</h1>
      <div className="cards-container">
        <ProjectCard
          title={"Portfolio Website"}
          description={
            "My portfolio website showcases my experience, skills and education in a clean and engaging design. It is fully repsonsive, fast and user-friendly."
          }
          techStack={"HTML, SCSS, JavaScript, React.js"}
          gitHubLink={"https://github.com/Yoschi95/yoschi95.github.io"}
          appLink={"https://yoschi95.github.io/"}
        />
        <ProjectCard
          title={"Little Lemon"}
          description={
            "A modern restaurant website that features a menu, opening hours, and an online reservation system. Customers can easily book tables online and reice confirmations"
          }
          techStack={"HTML, SCSS, JavaScript, React.js"}
          gitHubLink={"https://github.com/Yoschi95/little-lemon"}
          appLink={"https://yoschi95.github.io/little-lemon/"}
        />
        <ProjectCard
          title={"PMM"}
          description={
            "An ECU middleware designed to manage notifications within a vehicle's parking context. It allows for message prioritization, configurable display durations, and selection of the display where the message will appear"
          }
          techStack={"C, Enterprise Architect, Jenkins, CUnit, Atlassian Toolchain (Confluence, Bitbucket , Jira)"}
        />
        <ProjectCard
          title={"PisstsHeut"}
          description={
            "A minimalist weather app that provides current weather data and forecasts for any location. It features a clean interface and uses a weather API for reliable data"
          }
          techStack={
            <ul>
              <li>Frontend: HTML, SCSS, JavaScript, React.js</li>
              <li>Backend: TBD</li>
            </ul>
          }
          gitHubLink={"https://github.com/Yoschi95/PisstsHeut"}
        />
      </div>
    </main>
  );
}

export default Projects;
