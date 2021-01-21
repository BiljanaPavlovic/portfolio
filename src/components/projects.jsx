/** @format */

import React from "react";
import LandingPages from "./projects/landingPages";
import JsProjects from "./projects/jsProjects";
import GroupProjects from "./groupProjects";
import ReactProjects from "./projects/reactProjects";
import SamostalniProjekti from "./samostalniProjekti";

export default function Projects() {
  return (
    <div>
      <SamostalniProjekti />

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
