import React from "react";
import Birtije from "./projects/birtije";
import LandingPages from "./projects/landingPages";
import JsProjects from "./projects/jsProjects";
import GroupProjects from "./groupProjects";
import ReactProjects from "./projects/reactProjects";

export default function Projects() {
  return (
    <div>
      <h2 className="second-title">
        Ovde možete pogledati neke od mojih projekata
      </h2>

      <Birtije />
      <hr />
      <GroupProjects />
      <hr />
      <ReactProjects />
      <hr />
      <JsProjects />
      <hr />
      <LandingPages />
      <hr />
    </div>
  );
}
