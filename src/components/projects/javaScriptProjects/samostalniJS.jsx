/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SamostalniJS() {
  return (
    <div>
      <Container>
        <h4>Samostalni projekti u vanila JavaScriptu</h4>
        <Row>
          <Col>
            <div className="project-small">
              <h5>Kalkulator - igrica</h5>

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
              <p>
                Čestitka za Novu godinu koja sadrži i igricu "Zamišljeni broj",
                korisnik pogađa broj koji je kompjuter zamislio i kalkulator gde
                korisnik proverava rezultat računanja.
              </p>
              <p>Korišćene tehnologije: HTML, SCSS, JS</p>
              <a
                href="https://github.com/BiljanaPavlovic/calculator"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/calculator/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/Live.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
