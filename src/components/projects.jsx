import React from "react";
import Staznam from "./projects/staznam";
import Birtije from "./projects/birtije";
import LandingPages from "./projects/landingPages";

export default function Projects() {
  return (
    <div>
      <h2>Ovo su moji projekti</h2>
      <Staznam />
      <hr />
      <Birtije />
      <hr />
      <LandingPages />
      <hr />
    </div>
  );
}
