import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <p>
              Zdravo! Ja sam Biljana, završila sam proces prekvalifikacije na
              kursu za razvoj web stranice. Do sada sam studirala književnost i
              radila, najviše u administraciji. Odlučila sam se za
              prekvalifikaciju jer smatram da bi mi posao u IT struci pružio
              mogućnost da ispoljim svoj pun potencijal i iskažem svoju
              kreativnost. Želim da se bavim front-end programiranjem, da
              osmišljavam izgled i funkcije web stranica i drugih aplikacija sa
              java skriptom.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <Image src="img/profil.png" roundedCircle />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
