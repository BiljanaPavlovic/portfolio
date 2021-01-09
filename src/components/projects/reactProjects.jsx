import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ReactProjects() {
  return (
    <div>
      <Container>
        <h3>React projekti</h3>

        <Row>
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
        <Row>
          <Col>
            <div className="project-small">
              <h5>Tic-tac-toe</h5>

              <div className="imgDiv">
                <a
                  href="https://github.com/BiljanaPavlovic/Tic-tac-toe-game"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/14.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                XO igrica sa dva igrača u realnom vremenu, napravljena je pomoću
                dobijenog API-ja i Socket-a, moj rad je front deo aplikacije.{" "}
              </p>
              <p>
                Korišćene tehnologije: React, CSS, React-Bootstrap, API, Socket
              </p>
              <a
                href="https://github.com/BiljanaPavlovic/Tic-tac-toe-game"
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
        </Row>
      </Container>
    </div>
  );
}
