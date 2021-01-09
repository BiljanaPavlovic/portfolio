import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Staznam() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h5>STAZNAM.RS</h5>
            <p>
              Ovaj sajt je zamišljen kao zbir raznih funkcionalnosti koje smo
              dodavali zajednički kao deo podrške jedni drugima nakon završenog
              kampa sa ciljem da uvežbamo i naučimo nove funkcionalnosti koje
              nam React pruža. Osnovne kategorije su arhiva raznih tekstova,
              forum korisnika, alati, igrice i playliste.
            </p>
            <p>
              Moje zaduženje na ovom projektu je da napravim kategoriju arhiva,
              kao i veći deo dizajna sajta. Korišćene tehnologije su:
            </p>
            <p>React.js za frontend,</p>
            <p>Node.js za backend, Mongo.db je korišćena baza,</p>
            <p> React-Bootstrap i CSS za dizajn</p>
            <a href="https://github.com/js-samuraji" target="_blanc">
              <img
                src="/portfolio/img/soc-ico/code.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
            <a href="https://js-samuraji.github.io/staznam.rs/" target="_blanc">
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
                href="https://js-samuraji.github.io/staznam.rs/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/5.png"
                  alt="project-img"
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
