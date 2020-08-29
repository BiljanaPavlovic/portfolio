import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Birtije() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>
              Birtije projekat je napravljen u Reactu, za dizajn sam koristila
              React-Bootstrap i CSS. Sajt se sastoji iz tri dela: O kafanama gde
              je planirano da se prikazuju tekstovi o starim kafanama, zatim
              unutar tog dela imamo neke zabavne sadržaje kao što su citati o
              kafanama, pesme i zdravice. Drugi deo je posvećen predstavljanju
              Beogradskih kafana koje rade i treći čini žiri koji će ocenjivati
              te kafane.
            </p>
          </Col>
          <Col>
            <a href="https://birtije.000webhostapp.com/" target="_blanc">
              <img
                src="/portfolio/img/4.png"
                alt="project-img"
                className="project-img"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
