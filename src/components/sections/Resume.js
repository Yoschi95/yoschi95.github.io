import "./Resume.scss";
import CV_en_website from "pdf:/src/assets/docs/CV_en_website.pdf";
import download_icon from "../../assets/icons/download.png";

function Resume() {
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
      <img className="downloadIcon" src={download_icon} />
    </button>
  );
}

export default Resume;
