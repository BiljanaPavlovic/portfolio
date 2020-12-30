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
            <div className="imgDiv">
              <a
                href="https://js-samuraji.github.io/staznam.rs/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/5.png"
                  alt="project-img"
                  className="project-img"
                />
              </a>
            </div>
          </Col>
          <Col>
            <p>
              Kao deo tima sam radila na ovom projektu, deo sajta koji je bio
              moje zaduženje je arhiva, kao i veći deo dizajna sajta. Korišćene
              tehnologije su:
            </p>
            <li>React za frontend,</li>
            <li>Node za backend,</li>
            <li> React-Bootstrap i CSS za dizajn</li>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
