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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              nihil ipsam accusamus consectetur, quo accusantium aperiam,
              voluptas illo itaque autem consequuntur dignissimos vero quaerat
              ea delectus? Fuga itaque perferendis alias.
            </p>
            <a
              href="https://biljanapavlovic.github.io/landing-page-practis-/#about"
              target="_blanc"
            >
              <img
                src="img/1.png"
                alt="project-img"
                className="project-img-lp"
              />
            </a>
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              nihil ipsam accusamus consectetur, quo accusantium aperiam,
              voluptas illo itaque autem consequuntur dignissimos vero quaerat
              ea delectus? Fuga itaque perferendis alias.
            </p>
            <a
              href="https://biljanapavlovic.github.io/Bootstrap-landing-page/"
              target="_blanc"
            >
              <img
                src="img/2.png"
                alt="project-img"
                className="project-img-lp"
              />
            </a>
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              nihil ipsam accusamus consectetur, quo accusantium aperiam,
              voluptas illo itaque autem consequuntur dignissimos vero quaerat
              ea delectus? Fuga itaque perferendis alias.
            </p>
            <a
              href="https://biljanapavlovic.github.io/WebconResponsiveDesign/"
              target="_blanc"
            >
              <img
                src="img/3.png"
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
