import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function JsProjects() {
  return (
    <div>
      <Container>
        <h3>Ovde možete pogledati moje JavaScript projekte</h3>
        <Row>
          <Col>
            <p>
              Igrica kalkulator i igrica za pogadjanje brojeva uz cestitku :D
            </p>
            <p>HTML, SCSS, JS</p>
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
          </Col>
          <Col>
            <p>Bela tabla za pisanje.</p>
            <p>HTML, CSS, JS</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/Canvas-/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/9.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <p>
              Aplikacija za razmenu poruka, radjena kao projekat na
              ITBootcamp-u.
            </p>
            <p>HTML, CSS, JS, API</p>
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
          </Col>
          <Col>
            {" "}
            <p>Marko Kraljević putuje galaksijom i rezerviše karte za put.</p>
            <p>HTML, CSS, JS</p>
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
          </Col>
          <Col>
            {" "}
            <p>
              Budzet app, razvrstava prihode i rashode i izračunava ostatak
              2019.
            </p>
            <p>HTML, CSS, JS</p>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
