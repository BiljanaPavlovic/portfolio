/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import ItBootcampJS from "./itBootcampJS";
import SamostalniJS from "./samostalniJS";
import TutorijaliJs from "./tutorijaliJs";

export default function JsProjects() {
  return (
    <div>
      <Container>
        <h3>JavaScript projekti</h3>
        <SamostalniJS />
        <TutorijaliJs />
        <ItBootcampJS />
      </Container>
    </div>
  );
}
