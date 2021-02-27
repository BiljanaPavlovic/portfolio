/** @format */

import React from "react";
import Birtije from "./projects/birtije";
import MusicBox from "./projects/musicBox";
import Scrollingstorybook from "./projects/scrollingstorybook";

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
