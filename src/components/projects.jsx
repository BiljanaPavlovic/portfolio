import React from "react";
import Staznam from "./projects/staznam";
import Birtije from "./projects/birtije";
import LandingPages from "./projects/landingPages";

export default function Projects() {
  return (
    <div>
      <h2 className="second-title">
        Ovde možete pogledati neke od mojih projekata
      </h2>
      <Staznam />
      <hr />
      <Birtije />
      <hr />
      <LandingPages />
      <hr />
    </div>
  );
}
