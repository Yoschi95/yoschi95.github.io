import "./About.scss";
import me_comic from "../../assets/images/me/me_comic.jpg";

function About() {
  return (
    <main className="about" id="about">
      <h1>About me</h1>
      <div className="about-flexbox">
        <div className="about-text flex-item-1">
          <p>
            Hi there! I am currently working as a software engineer in the automotive industry, where I help develop
            cutting-edge technology that powers modern vehicles. My work involves designing, implementing, and
            optimizing software solutions that enhance vehicle performance, safety, and user experience, including
            embedded systems, autonomous driving technologies, and connected vehicle solutions.
          </p>
          <br></br>
          <p>
            Beyond coding, I have a wide range of interests that keep me engaged and inspired. I love spending time with
            friends, sharing great conversations, and exploring new experiences together. I'm also a big food
            enthusiast, always on the lookout for delicious meals, whether it's trying out new restaurants or enjoying
            home-cooked dishes.
          </p>
          <br></br>
          <p>
            In my free time, I enjoy immersing myself in video games, from story-driven adventures and strategic
            challenges to competitive multiplayer experiences. Gaming allows me to unwind, connect with others, and
            appreciate the creativity behind interactive storytelling and game development.
          </p>
          <br></br>
          <p>
            To maintain a healthy and balanced lifestyle, I practice yoga, helping me stay physically flexible and
            mentally centered. I also love cycling, whether it’s riding through scenic routes, commuting through the
            city, or simply enjoying a leisurely ride in nature. These activities give me a sense of freedom and
            relaxation while keeping me active.
          </p>
          <br></br>
          <p>
            I'm always open to new opportunities, collaborations, and discussions about technology, gaming, or anything
            in between. Feel free to connect with me — I’d love to hear from you!
          </p>
        </div>
        <img src={me_comic} alt="AI generated comic image of Joscha Hartmann" className="about-img flex-item-2" />
      </div>
    </main>
  );
}

export default About;
