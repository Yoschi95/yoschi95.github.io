import "./Education.scss";
import StandardCard from "../shared/StandardCard";
import educationLogo from "../../assets/images/education/education.svg";

function Education() {
  return (
    <main className="education" id="education">
      <h1>Education</h1>
      <div className="cards-container">
        <StandardCard
          image={educationLogo}
          company={"HTW Berlin"}
          job={"Electrical Engineering (M.Eng.)"}
          mainText={
            <ul>
              <li>Development of series software in automotive sector</li>
              <li>Test management</li>
              <li>Software -architecture, -implementation and -testing</li>
            </ul>
          }
          caption={"From October 2020 to December 2022 | Berlin, Germany"}
        />

        <StandardCard
          image={educationLogo}
          company={"FH Bielefeld"}
          job={"Electrical Engineering (B.Eng.)"}
          mainText={
            <ul>
              <li>Development of PLC software for building automation</li>
              <li>Integration, maintenance and troubleshooting of field devices</li>
            </ul>
          }
          caption={"From August 2016 to January 2020 | Bielefeld, Germany"}
        />

        <StandardCard
          image={educationLogo}
          company={"Plümat GmbH"}
          job={"Electronics Technician"}
          mainText={
            <ul>
              <li>Wiring of switch cabinets for machines and devices</li>
              <li>Installation of sensors and actuators</li>
              <li>Troubleshooting and commissioning</li>
            </ul>
          }
          caption={"From August 2014 to June 2017 | Espelkamp, Germany"}
        />
      </div>
    </main>
  );
}

export default Education;
