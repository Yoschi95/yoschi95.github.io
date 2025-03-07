import "./Resume.scss";
import CV_en_website from "pdf:/src/assets/docs/CV_en_website.pdf";

function Resume() {
  return (
    <div>
      <a className="resumeButton" href={CV_en_website} download>
        Resume
      </a>
    </div>
  );
}

export default Resume;
