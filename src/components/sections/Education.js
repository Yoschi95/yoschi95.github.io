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
              <li>Artificial Intelligence</li>
              <li>Functional Safety</li>
              <li>Process Automation</li>
              <li>Control Engineering</li>
              <li>Renewable energies</li>
              <li>Industry 4.0</li>
            </ul>
          }
          caption={"From October 2020 to December 2022 | Berlin, Germany"}
          link={"https://et-master.htw-berlin.de/"}
        />

        <StandardCard
          image={educationLogo}
          company={"FH Bielefeld"}
          job={"Electrical Engineering (B.Eng.)"}
          mainText={
            <ul>
              <li>Computer Science</li>
              <li>Software development</li>
              <li>Embedded Systems</li>
              <li>Control engineering</li>
              <li>Circuit design</li>
              <li>Printed circuit board design</li>
            </ul>
          }
          caption={"From August 2016 to January 2020 | Bielefeld, Germany"}
          link={"https://www.hsbi.de/studiengaenge/elektrotechnik-bachelor-praxisintegriert"}
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
          link={
            "https://www.lsbk.de/bildungsangebot/berufsschule-duale-ausbildung/elektrotechnik/elektroniker_in-fuer-betriebstechnik"
          }
        />
      </div>
    </main>
  );
}

export default Education;
