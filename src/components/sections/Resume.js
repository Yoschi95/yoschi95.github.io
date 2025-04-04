import "./Resume.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import CV_en_website from "pdf:/src/assets/docs/CV_en_website.pdf";
import download_icon_dark from "../../assets/icons/download_icon_dark.svg";
import download_icon_light from "../../assets/icons/download_icon_light.svg";

function Resume() {
  const { theme } = useContext(ThemeContext);

  const handleDownload = async () => {
    try {
      // Fetch the PDF file from the frontend server
      const response = await fetch(CV_en_website);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "CV_Joscha.pdf";

      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <button className="resumeButton" onClick={handleDownload}>
      Resume
      <img className="downloadIcon" src={theme === "dark" ? download_icon_light : download_icon_dark} />
    </button>
  );
}

export default Resume;
