import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ReactProjects() {
  return (
    <div>
      <Container>
        <h3>Projekti radjeni u React-u</h3>

        <Row>
          <Col>
            <p>Povlacenje letova sa SpaceX API servisa</p>
            <p>React, CSS</p>
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
          </Col>
          <Col>
            <p>Smešni citati o programerima</p>
            <p>React, CSS</p>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Converter </p>
            <p>React, CSS</p>
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
          </Col>
          <Col>
            <p>Završni projekat na ITBootcamp-u forum.</p>
            <p>React, CSS, ReactBootstrap</p>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/ITBootcamp-zavrsni-rad/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/10.png"
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
