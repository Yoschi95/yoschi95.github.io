import "./Skills.scss";
import img_c from "../../assets/images/skills/c.svg";
import img_cpp from "../../assets/images/skills/cpp.svg";
import img_python from "../../assets/images/skills/python.svg";
import img_html from "../../assets/images/skills/html.svg";
import img_sass from "../../assets/images/skills/sass.svg";
import img_js from "../../assets/images/skills/js.svg";
import img_react from "../../assets/images/skills/react.svg";
import img_git from "../../assets/images/skills/git.svg";

const Skills = () => {
  return (
    <main className="skills" id="skills">
      <h1>Skills</h1>
      <div className="all-skills-container">
        <div className="skill-container">
          <a href="https://www.w3schools.com/c/" target="_blank" rel="noopener noreferrer">
            <img src={img_c} alt="Logo of C" />
          </a>
          <p>C</p>
        </div>
        <div className="skill-container">
          <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noopener noreferrer">
            <img src={img_cpp} alt="Logo of C++" />
          </a>
          <p>C++</p>
        </div>
        <div className="skill-container">
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
            <img src={img_python} alt="Logo of Python" />
          </a>
          <p>Python</p>
        </div>
        <div className="skill-container">
          <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
            <img src={img_html} alt="Logo of HTML" />
          </a>
          <p>HTML</p>
        </div>
        <div className="skill-container">
          <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
            <img src={img_sass} alt="Logo of SASS" />
          </a>
          <p>SASS</p>
        </div>
        <div className="skill-container">
          <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
            <img src={img_js} alt="Logo of JavaScript" />
          </a>
          <p>JavaScript</p>
        </div>
        <div className="skill-container">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <img src={img_react} alt="Logo of React" />
          </a>
          <p>React</p>
        </div>
        <div className="skill-container">
          <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
            <img src={img_git} alt="Logo of Git" />
          </a>
          <p>Git</p>
        </div>
      </div>
    </main>
  );
};

export default Skills;
