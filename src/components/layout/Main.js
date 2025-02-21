import Home from "../sections/Home";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Resume from "../sections/Resume";

function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Resume />
    </main>
  );
}

export default Main;
