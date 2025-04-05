import "./StandardCard.scss";

function StandardCard({ image, company, job, mainText, caption, link }) {
  return (
    <div className="standard-card">
      <div className="standard-card-head">
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="logo" />
          </a>
        </p>
        <p>{company}</p>
        <p>{job}</p>
      </div>
      <hr />
      <div className="standard-card-body">
        <div>{mainText}</div>
        <p className="standard-card-body-caption">{caption}</p>
      </div>
    </div>
  );
}

export default StandardCard;
