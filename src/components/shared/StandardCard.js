import "./StandardCard.scss";

function StandardCard({ image, company, job, mainText, caption }) {
  return (
    <div className="standard-card">
      <div className="standard-card-head">
        <img src={image} alt="logo" />
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
