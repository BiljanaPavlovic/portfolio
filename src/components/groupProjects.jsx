import React from "react";
import Hakaton from "./projects/hakaton";
import Staznam from "./projects/staznam";

export default function GroupProjects() {
  return (
    <div>
      <h3>Ovde možete pogledati projekte koje sam radila kao deo tima</h3>
      <Hakaton />
      <hr />
      <Staznam />
    </div>
  );
}
