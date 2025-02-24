import { useRef } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Resume from "../sections/Resume";
import "./Main.scss";

function Main() {
  // Define ref to about section
  const aboutSectionRef = useRef(null);

  return (
    <main className="main">
      <Home targetSectionRef={aboutSectionRef} />
      <About sectionRef={aboutSectionRef} />
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
