/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LpIndepended() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="project-small">
              <h5>SLAJDER LANDING PAGE</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/AlectoLandingPage/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/19.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Stranica je rađena po zadatom dizajnu. Uključen je slajder sa
                nekoliko slika na početku i sadrži još dve sekcije. Stranica je
                responsive, otvara se na svim uređajima.
              </p>
              <p>Korišćene tehnologije: HTML, CSS, JavaScript</p>
              <a
                href="https://github.com/BiljanaPavlovic/AlectoLandingPage"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/AlectoLandingPage/"
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
              <h5>CONNECT THE WORLD</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/connect-to-the-world/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/6.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Stranica agencije za putovanja, kod je pisan po dobijenom
                prototipu dizajna.
              </p>
              <p>Korišćene tehnologije: HTML, SCSS, Grid</p>
              <a
                href="https://github.com/BiljanaPavlovic/connect-to-the-world"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/connect-to-the-world/"
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
