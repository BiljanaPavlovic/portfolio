import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LandingPages() {
  return (
    <div>
      <Container>
        <Row></Row>
        <Row>
          <Col>
            <p>
              Ovaj projekat je naslovna strana sajta sa animiranom pozadinom.
            </p>
            <p>HTML, CSS i JS</p>
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
          </Col>
          <Col>
            <p>Ova naslovna stranica je rađena sa bootstrapom.</p>
            <p>HTML, CSS, Bootstrap</p>
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
          </Col>
          <Col>
            <p>Ova stranica je napravljena uz pomoć CSS grida</p>
            <p>HTML, CSS</p>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
