/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ItBootcampJS() {
  return (
    <div>
      <Container>
        <h4>Projekti rađeni na ITBootCamp-u</h4>
        <Row>
          <Col>
            <div className="project-small">
              <h5>Čet aplikacija</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/CetApp2019/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/17.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Aplikacija za razmenu poruka, radjena kao projekat na
                ITBootcamp-u. Omogućava korisniku da se registruje i uloguje, da
                šalje poruke i iščitava postojeće.
              </p>
              <p>Korišćene tehnologije: HTML, CSS, JS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/CetApp2019"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/CetApp2019/"
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
              <h5>Šarac Trans</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/MarkoKraljevicTrans/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/15.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Šarac od sada pruža usluge putovanja na druge planete, pa preko
                ovog sajta Marko Kraljević može da rezerviše svoju kartu i
                dobije informacije o ceni putovanja.
              </p>
              <p>Korišćene tehnologije: HTML, CSS, JS</p>
              <a
                href="https://github.com/BiljanaPavlovic/MarkoKraljevicTrans"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/MarkoKraljevicTrans/"
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
              <h5>Kućni budžet</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/budzetApp/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/16.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Kućni budžet je aplikacija u koju možete upisati opis i iznos
                transakcije i odabrati da li se radi o prihodu ili rashodu, a
                aplikacija će razvrstati ove stavke i izračunati koliko imate
                još sredstava na raspolaganju.
              </p>
              <p>Korišćene tehnologije: HTML, CSS, JS</p>
              <a
                href="https://github.com/BiljanaPavlovic/budzetApp"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/budzetApp/"
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
