import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Staznam() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <a href="https://js-samuraji.github.io/staznam.rs/" target="_blanc">
              <img src="img/5.png" alt="project-img" className="project-img" />
            </a>
          </Col>
          <Col>
            <p>
              Kao deo tima sam radila na ovom projektu, deo sajta koji je bio
              moje zaduženje je arhiva, kao i veći deo dizajna sajta.
            </p>
            <p>
              Korišćene tehnologije su React za front, Node za back,
              React-Bootstrap za dizajn
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
