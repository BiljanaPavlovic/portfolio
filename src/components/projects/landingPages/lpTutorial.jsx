/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LpTutorial() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="project-small">
              <h5>Digitalna Agencija</h5>

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
              <p>
                Stranica je napravljena u HTML-u i CSS-u uz nešto JS-a za
                animaciju slova.
              </p>
              <p>Korišćene tehnologije: HTML, CSS, JS</p>
              <a
                href="https://github.com/BiljanaPavlovic/AgencijaWebcon"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/AgencijaWebcon/"
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
              <h5>Shoot For The Stars!</h5>

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
              <p>
                Projekat je naslovna strana sajta sa animiranom odnosno video
                pozadinom.
              </p>
              <p>Korišćene tehnologije:HTML, CSS i JS</p>
              <a
                href="https://github.com/BiljanaPavlovic/landing-page-practis-"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/landing-page-practis-/#about"
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
              <h5>Hello World!</h5>

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
              <p>
                Prezentaciona stranica kompanije napravljena korišćenjem
                Bootstrap-a.
              </p>
              <p>Korišćene tehnologije: HTML, CSS, Bootstrap</p>
              <a
                href="https://github.com/BiljanaPavlovic/Bootstrap-landing-page"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/Bootstrap-landing-page/"
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
              <h5>Web Design Bootcamp</h5>

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
              <p>Prezentaciona stranica kompanije uz responsive principe.</p>
              <p>Korišćene tehnologije: HTML, CSS, Grid</p>
              <a
                href="https://github.com/BiljanaPavlovic/WebconResponsiveDesign"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/WebconResponsiveDesign/"
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
