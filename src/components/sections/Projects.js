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
            <ul>
              <li>Development of series software in automotive sector</li>
              <li>Test management</li>
              <li>Software -architecture, -implementation and -testing</li>
            </ul>
          }
          techStack={
            <ul>
              <li>C</li>
              <li>Jenkins</li>
              <li>Atlassian Toolchain (Confluence, Bitbucket , Jira)</li>
            </ul>
          }
        />
        <ProjectCard
          title={"Litte Lemon"}
          description={
            <ul>
              <li>Development of series software in automotive sector</li>
              <li>Test management</li>
              <li>Software -architecture, -implementation and -testing</li>
            </ul>
          }
          techStack={
            <ul>
              <li>C</li>
              <li>Jenkins</li>
              <li>Atlassian Toolchain (Confluence, Bitbucket , Jira)</li>
            </ul>
          }
        />
        <ProjectCard
          title={"PMM"}
          description={
            <ul>
              <li>Development of series software in automotive sector</li>
              <li>Test management</li>
              <li>Software -architecture, -implementation and -testing</li>
            </ul>
          }
          techStack={
            <ul>
              <li>C</li>
              <li>Jenkins</li>
              <li>Atlassian Toolchain (Confluence, Bitbucket , Jira)</li>
            </ul>
          }
        />
        <ProjectCard
          title={"PisstsHeut"}
          description={
            <ul>
              <li>Development of series software in automotive sector</li>
              <li>Test management</li>
              <li>Software -architecture, -implementation and -testing</li>
            </ul>
          }
          techStack={
            <ul>
              <li>C</li>
              <li>Jenkins</li>
              <li>Atlassian Toolchain (Confluence, Bitbucket , Jira)</li>
            </ul>
          }
        />
      </div>
    </main>
  );
}

export default Projects;
