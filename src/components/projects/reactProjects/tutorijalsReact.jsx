/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function TutorijalsReact() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="project-small">
              <h5>Kursna lista - konverter</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/Converter/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/13.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ova aplikacija vuče podatke sa API-ja i preračunava vrednost iz
                jedne izabrane valute u drugu izabranu valutu.
              </p>
              <p>Korišćene tehnologije: React, CSS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/Converter"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/Converter/"
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
          <Col>
            <div className="project-small">
              <h5>Animirani Facebook nav</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/React-nav/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/21.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Napravljeno je uz pomoć tutorijala, animirani nav bar u React-u.
              </p>
              <p>Korišćene tehnologije: React, CSS</p>
              <a
                href="https://github.com/BiljanaPavlovic/React-nav"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/React-nav/"
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
