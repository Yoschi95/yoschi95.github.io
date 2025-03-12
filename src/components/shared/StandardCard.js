import "./StandardCard.scss";
import companyLogo from "../../assets/images/experience/office.svg";

function StandardCard({ company, job, mainText, caption }) {
  return (
    <div className="standard-card">
      <div className="standard-card-head">
        <img src={companyLogo} alt="company logo" />
        <p>{company}</p>
        <p>{job}</p>
      </div>
      <hr />
      <div className="standard-card-body">
        <p>{mainText}</p>
        <p className="standard-card-body-caption">{caption}</p>
      </div>
    </div>
  );
}

export default StandardCard;
