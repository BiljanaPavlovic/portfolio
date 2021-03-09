/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function IndependentReact() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="project-small">
              <h5>RENT-A-CAR</h5>

              <div className="imgDiv">
                <a
                  href="https://github.com/BiljanaPavlovic/rent-a-car"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/20.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ova aplikacija povlači podatke Marvelovim junacima, omogućava
                pretragu po imenu junaka i njigovo čuvanje, kako bi korisnik
                mogao da vidi sačuvane i posle zatvaranje stranice, takodje može
                da očisti svoje skladište.
              </p>
              <p>Korišćene tehnologije: React, CSS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/rent-a-car"
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
              <h5>Marvel API Challange</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/MarvelApiChallenge/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/18.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ova aplikacija povlači podatke Marvelovim junacima, omogućava
                pretragu po imenu junaka i njigovo čuvanje, kako bi korisnik
                mogao da vidi sačuvane i posle zatvaranje stranice, takodje može
                da očisti svoje skladište.
              </p>
              <p>Korišćene tehnologije: React, CSS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/MarvelApiChallenge"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/MarvelApiChallenge/"
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
        </Row>
      </Container>
    </div>
  );
}
