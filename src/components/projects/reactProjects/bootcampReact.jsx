/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BootcampReact() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="project-small">
              <h5>ITBootcamp Forum</h5>

              <div className="imgDiv">
                <a
                  href="https://github.com/BiljanaPavlovic/ITBootcampZavrsniRad"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/10.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ovo je završni projekat na ITBootcamp-u, korisnik ima mogućnost
                registracije, logovanja, razmene poruka i izlistavanja svojih
                poruka kao i profil ulogovanog korisnika.
              </p>
              <p>Korišćene tehnologije: React, CSS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/ITBootcampZavrsniRad"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="project-small">
              <h5>SpaceX</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/spaceX/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/12.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ova aplikacija povlači podatke o prošlim i budućim lansiranjima
                raketa kompanije SpaceX i sortira ih po vremenu dešavanja.
              </p>
              <p>Korišćene tehnologije: React, CSS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/spaceX"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/spaceX/"
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
              <h5>Citati</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/Quotes/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/11.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ova aplikacija izvlači nasumične citate iz niza i pruža
                mogućnost korisniku da ih oceni.
              </p>
              <p>Korišćene tehnologije: React, CSS</p>
              <a
                href="https://github.com/BiljanaPavlovic/Quotes"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/Quotes/"
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
