import React from "react";
import Hakaton from "./projects/hakaton";
import Staznam from "./projects/staznam";

export default function GroupProjects() {
  return (
    <div>
      <h3>Projekti u kojima sam učestvovala kao deo tima</h3>
      <Hakaton />
      <hr />
      <Staznam />
    </div>
  );
}
