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
            <a href="https://js-samuraji.github.io/staznam.rs/" target="_blanc">
              <img src="img/5.png" alt="project-img" className="project-img" />
            </a>
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              repellat, quasi non sunt laboriosam nihil eveniet magni explicabo
              fugit quam tenetur. Nemo a aperiam praesentium quidem rerum quos
              minima dolores hic assumenda, illo asperiores tempora deleniti
              nulla laudantium modi ea voluptatibus tempore est inventore cum.
              Dolorem nihil atque cupiditate provident.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
