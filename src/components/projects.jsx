/** @format */

import React from "react";
import LandingPages from "./projects/landingPages/landingPages";
import JsProjects from "./projects/javaScriptProjects/jsProjects";
import GroupProjects from "./groupProjects";
import ReactProjects from "./projects/reactProjects/reactProjects";
import SamostalniProjekti from "./samostalniProjekti";

export default function Projects() {
  return (
    <div>
      <SamostalniProjekti />

      <hr />

      <ReactProjects />
      <hr />
      <JsProjects />
      <hr />
      <LandingPages />
      <hr />
      <GroupProjects />
      <hr />
    </div>
  );
}
