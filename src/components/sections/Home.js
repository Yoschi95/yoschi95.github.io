import profile_img from "../../assets/images/me/me_real.jpg";
import "./Home.scss";
import Button from "../shared/Button.js";

function Home() {
  return (
    <main className="home" id="home">
      <p className="home-text">
        <h1>Hello! I'm Joscha.&#128075;</h1>
        <h2>
          a passionate software engineer from Germany. I like to develop innovative solutions that solve complex
          problems and improve the user experience so that it puts a smile on our faces.
        </h2>
        <br></br>
        <Button text="Read more" />
      </p>
      <img src={profile_img} alt="Profile image Joscha Hartmann" className="home-img" />
    </main>
  );
}

export default Home;
