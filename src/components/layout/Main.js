import Home from "../sections/Home";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
