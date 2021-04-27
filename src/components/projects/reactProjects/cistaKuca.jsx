/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CistaKuca() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h5>Cista Kuća</h5>
            <p>
              Ova aplikacija služi za slanje zahteva i izračunavanje cene
              čišćenja kuće i poslovnog prostora, kao i za slanje prijave za
              posao za one koji žele da se bavi čišćenjem.
            </p>
            <p>Korišćene tehnologije: React, CSS</p>
            <a
              href="https://github.com/BiljanaPavlovic/cistaKuca"
              target="_blanc"
            >
              <img
                src="/portfolio/img/soc-ico/code.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
            <a
              href="https://biljanapavlovic.github.io/cistaKuca/"
              target="_blanc"
            >
              <img
                src="/portfolio/img/soc-ico/Live.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
          </Col>
          <Col>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/cistaKuca/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/22.png"
                  alt="project-img"
                  className="project-img"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
