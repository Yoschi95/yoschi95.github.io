import "./Experience.scss";
import StandardCard from "../shared/StandardCard";

function Experience() {
  return (
    <main className="experience" id="experience">
      <h1>Experience</h1>
      <div className="cards-container">
        <StandardCard
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
        />

        <StandardCard
          company={"Siemens AG"}
          job={"Software Engineer"}
          mainText={
            <ul>
              <li>Development of PLC software for building automation</li>
              <li>Integration, maintenance and troubleshooting of field devices</li>
            </ul>
          }
          caption={"From April 2021 to November 2022 | Berlin, Germany"}
        />

        <StandardCard
          company={"Plümat GmbH"}
          job={"Software Engineer"}
          mainText={
            <ul>
              <li>Development of PLC software for process automation in pharmacie sector</li>
              <li>Integration, maintenance and troubleshooting of field devices</li>
            </ul>
          }
          caption={"From June 2017 to September 2020 | Espelkamp, Germany"}
        />

        <StandardCard
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

export default Experience;
