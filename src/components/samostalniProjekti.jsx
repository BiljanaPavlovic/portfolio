/** @format */

import React from "react";
import Birtije from "./projects/reactProjects/birtije";
import MusicBox from "./projects/reactProjects/musicBox";
import Scrollingstorybook from "./projects/reactProjects/scrollingstorybook";

export default function SamostalniProjekti() {
  return (
    <div>
      <h2 className="second-title">Samostalni projekti</h2>
      <MusicBox />
      <hr />
      <Scrollingstorybook />
      <hr />
      <Birtije />
      <hr />
    </div>
  );
}
