/** @format */

import React from "react";
import LpIndepended from "./lpIndepended";
import LpTutorial from "./lpTutorial";

export default function LandingPages() {
  return (
    <div className="landingPages">
      <h3>Landing Pages</h3>
      <h4>Samostalno urađene stranice</h4>
      <LpIndepended />
      <h4>Stranice napravljene pomoću tutorijala</h4>
      <LpTutorial />
    </div>
  );
}
