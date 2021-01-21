/** @format */

import React from "react";
import Birtije from "./projects/birtije";
import Scrollingstorybook from "./projects/scrollingstorybook";

export default function SamostalniProjekti() {
  return (
    <div>
      <h2 className="second-title">Samostalni projekti</h2>
      <Scrollingstorybook />
      <hr />
      <Birtije />
      <hr />
    </div>
  );
}
