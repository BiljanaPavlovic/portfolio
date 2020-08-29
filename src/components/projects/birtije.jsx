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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              cumque enim incidunt ex alias, aperiam laboriosam dolorum
              laudantium voluptatum nihil delectus sed nobis! Fugiat nisi
              numquam nobis distinctio, et sed.
            </p>
          </Col>
          <Col>
            <a href="https://birtije.000webhostapp.com/" target="_blanc">
              <img
                src="/portfolio/img/4.png"
                alt="project-img"
                className="project-img"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
