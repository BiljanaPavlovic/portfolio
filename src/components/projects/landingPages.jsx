import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LandingPages() {
  return (
    <div className="landingPages">
      <Container>
        <h3>Landing Pages</h3>
        <Row>
          <Col>
            <p>Naslovna stranica je rađena sa SCSS-om.</p>
            <p>HTML, SCSS</p>
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
          </Col>
          <Col>
            <p>
              Stranica je napravljena u HTML-u i CSS-u uz nešto JS-a za
              animaciju slova.
            </p>
            <p>HTML, CSS, JS</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/AgencijaWebcon/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/7.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Projekat je naslovna strana sajta sa animiranom pozadinom.</p>
            <p>HTML, CSS i JS</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/landing-page-practis-/#about"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/1.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </a>
            </div>
          </Col>
          <Col>
            <p>Naslovna stranica je rađena sa bootstrapom.</p>
            <p>HTML, CSS, Bootstrap</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/Bootstrap-landing-page/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/2.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </a>
            </div>
          </Col>
          <Col>
            <p>Stranica je napravljena uz pomoć CSS grida</p>
            <p>HTML, CSS</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/WebconResponsiveDesign/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/3.png"
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
