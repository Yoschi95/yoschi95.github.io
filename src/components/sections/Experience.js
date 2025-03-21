import "./Experience.scss";
import StandardCard from "../shared/StandardCard";
import companyLogo from "../../assets/images/experience/office.svg";

function Experience() {
  return (
    <main className="experience" id="experience">
      <h1>Experience</h1>
      <div className="cards-container">
        <StandardCard
          image={companyLogo}
          company={"IAV GmbH"}
          job={"Software Engineer"}
          mainText={
            <ul>
              <li>Development of series software in automotive sector</li>
              <li>Test management</li>
              <li>Software -architecture, -implementation and -testing</li>
            </ul>
          }
          caption={"From December 2022 to now | Berlin, Germany"}
          link={"https://www.iav.com/"}
        />

        <StandardCard
          image={companyLogo}
          company={"Siemens AG"}
          job={"Software Engineer"}
          mainText={
            <ul>
              <li>Development of PLC software for building automation</li>
              <li>Integration, maintenance and troubleshooting of field devices</li>
            </ul>
          }
          caption={"From April 2021 to October 2022 | Berlin, Germany"}
          link={"https://www.siemens.com/"}
        />

        <StandardCard
          image={companyLogo}
          company={"Plümat GmbH"}
          job={"Software Engineer"}
          mainText={
            <ul>
              <li>Development of PLC software for process automation in pharmacie sector</li>
              <li>Integration, maintenance and troubleshooting of field devices</li>
            </ul>
          }
          caption={"From February 2020 to September 2020 | Espelkamp, Germany"}
          link={"https://www.pluemat.info/"}
        />

        <StandardCard
          image={companyLogo}
          company={"Plümat GmbH"}
          job={
            <span>
              Software Engineer <span className="card-small-text">(dual student)</span>
            </span>
          }
          mainText={
            <ul>
              <li>Development of PLC software for process automation in pharmacie sector</li>
              <li>Integration, maintenance and troubleshooting of field devices</li>
              <li>Several study related projects</li>
            </ul>
          }
          caption={"From August 2016 to January 2020 | Espelkamp, Germany"}
          link={"https://www.pluemat.info/"}
        />
      </div>
    </main>
  );
}

export default Experience;
