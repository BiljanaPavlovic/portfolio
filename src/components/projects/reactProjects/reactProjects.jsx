/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import BootcampReact from "./bootcampReact";
import IndependentReact from "./independentReact";
import TutorijalsReact from "./tutorijalsReact";

export default function ReactProjects() {
  return (
    <div>
      <Container>
        <h3>React projekti</h3>
        <h4>Samostali projekti rađeni u Reactu</h4>
        <IndependentReact />
        <h4>Projekti urađeni uz tutorijale</h4>
        <TutorijalsReact />
        <h4>Projekti sa ITBootcamp-a</h4>
        <BootcampReact />
      </Container>
    </div>
  );
}
