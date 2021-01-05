import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Birtije() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h5>BIRTIJE.COM</h5>
            <p>
              Birtije projekat je moj samostalni projekat. Sajt se sastoji iz
              tri dela: O kafanama, gde je planirano da se prikazuju tekstovi o
              starim kafanama, unutar tog dela možete naći neke zabavne sadržaje
              kao što su citati o kafanama, pesme i zdravice. Drugi deo posvećen
              je predstavljanju Beogradskih kafana i treći čini žiri koji će
              ocenjivati te kafane. Korisnici će moći da ostave svoj komentar i
              da ocene recenzije i komentare punom ili praznom kriglom.
            </p>
            <p>
              Sajt je napravljen u Reactu, za dizajn sam koristila
              React-Bootstrap i CSS.
            </p>
            <a
              href="https://github.com/BiljanaPavlovic/BIRTIJE.COM"
              target="_blanc"
            >
              <img
                src="/portfolio/img/soc-ico/code.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
            <a href="https://birtije.000webhostapp.com/" target="_blanc">
              <img
                src="/portfolio/img/soc-ico/Live.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
          </Col>
          <Col>
            <div className="imgDiv">
              <a href="https://birtije.000webhostapp.com/" target="_blanc">
                <img
                  src="/portfolio/img/4.png"
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
