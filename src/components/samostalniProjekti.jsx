/** @format */

import React from "react";
import Birtije from "./projects/reactProjects/birtije";
import CistaKuca from "./projects/reactProjects/cistaKuca";
import Scrollingstorybook from "./projects/reactProjects/scrollingstorybook";

export default function SamostalniProjekti() {
  return (
    <div>
      <h2 className="second-title">Samostalni projekti</h2>
      <CistaKuca />
      <hr />
      <Scrollingstorybook />
      <hr />
      <Birtije />
      <hr />
    </div>
  );
}
