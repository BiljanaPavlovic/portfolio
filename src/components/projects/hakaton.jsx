import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hakaton() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="imgDiv">
              <a href="https://github.com/Tim8hakaton" target="_blanc">
                <img
                  src="/portfolio/img/team8.gif"
                  alt="project-img"
                  className="project-img"
                />
              </a>
            </div>
          </Col>
          <Col>
            <p>
              Kao deo tima sam radila na ovom projektu na hakatonu u
              organizaciji Namics kompanije. Moja zaduženja su bila setovanje
              backenda i povezivanje sa frontom. Aplikacija je namenjena
              humanitarnim organizacijama da oglašavaju svoje akcije kao i
              volonterima koji se mogu uključiti. Takođe je planirano da se
              uvede i servis za pružanje psihološke pomoći pojedincima ugroženim
              covid-om.
            </p>
            <li>HTML, CSS i JS,</li>
            <li>Za backend je korišćen live JSON server,</li>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
