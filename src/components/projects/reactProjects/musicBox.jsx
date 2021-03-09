/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MusicBox() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h5>Music Box</h5>
            <p>
              Music Box je single-page aplikacija napravljena kao zadatak za
              Mintbeans hakaton. Na ovoj stranici sam rekonstruisala dečiju
              igračku koju je moj bratanac imao kad je bio beba. Bila je jako
              glasna i iritantna, ali ju je on obožavao, pa sam odlučila da je
              napravim u ovom obliku.
            </p>
            <p>
              Sajt je napravljen u Reactu, za dizajn sam koristila CSS sa
              CSS-ovim animacijama, tonovi koji se mogu odsvirati uvedeni su iz
              tone.js biblioteke, zvuci vozila i životinja skinuti su sa
              Vikipedije.
            </p>
            <a href="https://github.com/BiljanaPavlovic/Synth" target="_blanc">
              <img
                src="/portfolio/img/soc-ico/code.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
            <a href="https://biljanapavlovic.github.io/Synth/" target="_blanc">
              <img
                src="/portfolio/img/soc-ico/Live.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
          </Col>
          <Col>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/Synth/"
                target="_blanc"
              >
                <video
                  src="/portfolio/img/musicbox.mp4"
                  autoPlay
                  muted
                  loop
                  className="project-img"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
