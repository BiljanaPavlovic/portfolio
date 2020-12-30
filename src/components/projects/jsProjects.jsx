import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function JsProjects() {
  return (
    <div>
      <Container>
        <h3>Ovde možete pogledati moje JavaScript projekte</h3>
        <Row>
          <Col>
            <p>
              Igrica kalkulator i igrica za pogadjanje brojeva uz cestitku :D
            </p>
            <p>HTML, SCSS, JS</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/calculator/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/8.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </a>
            </div>
          </Col>
          <Col>
            <p>Bela tabla za pisanje.</p>
            <p>HTML, CSS, JS</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/Canvas-/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/9.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}
