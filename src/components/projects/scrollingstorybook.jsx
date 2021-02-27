/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Scrollingstorybook() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="imgDiv">
              <a
                href="https://biljanapavlovic.github.io/scrollingbook/"
                target="_blanc"
              >
                <video
                  src="/portfolio/img/scrollingbook.mp4"
                  autoPlay
                  muted
                  loop
                  className="project-img"
                />
              </a>
            </div>
          </Col>
          <Col>
            <h5>My Journey Into Tech</h5>
            <p>
              My Jorurney Into Tech je single-page aplikacija napravljena kao
              zadatak za Mintbeans hakaton. Prikazuje moje putovanje u svet web
              developmenta. Želela sam da na zanimljiv način prezentujem korake
              koje sam preduzimala kako bih što bolje naučila programiranje i
              razvila IT veštine. Sadrži puno animiranih elemenata. Izvori koje
              preporučujem su linkovani, kao i moji projekti.
            </p>
            <p>
              Sajt je napravljen u Reactu, za dizajn sam koristila CSS sa
              CSS-ovim animacijama, za uređivanje slika sam koristila Figma
              alat.
            </p>
            <a
              href="https://github.com/BiljanaPavlovic/scrollingbook"
              target="_blanc"
            >
              <img
                src="/portfolio/img/soc-ico/code.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
            <a
              href="https://biljanapavlovic.github.io/scrollingbook/"
              target="_blanc"
            >
              <img
                src="/portfolio/img/soc-ico/Live.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
