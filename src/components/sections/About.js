import "./About.scss";

function About({ sectionRef }) {
  return (
    <main className="about" id="about" ref={sectionRef}>
      <h1>About me</h1>
      <p>I am currently working as a software engineer in the automotive industry.</p>
      <p>
        Other than coding, i spent most of my free time to meeting friends, enjoing good food, playing video games,
        doing yoga and riding my bycicle.
      </p>
    </main>
  );
}

export default About;
