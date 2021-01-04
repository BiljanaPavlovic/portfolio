import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile">
      <Container>
        <Row>
          <Col>
            <p className="intro">
              Zdravo! Ja sam Biljana, završila sam proces prekvalifikacije na
              kursu za razvoj web stranice u organizaciji Divac fondacije. Do
              sada sam studirala književnost i radila, najviše u administraciji.
              Odlučila sam se za prekvalifikaciju jer sam tokom rada na pisanju
              tekstova za jedan sajt zavolela web i poželela da mogu i ja da
              napravim sajt i smatram da bi mi posao u IT struci pružio
              mogućnost da ispoljim svoj pun potencijal i iskažem svoju
              kreativnost. Želim da se bavim front-end programiranjem, da
              osmišljavam izgled i funkcije web stranica i drugih aplikacija sa
              JavaScriptom.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <Link to="/">
              <Image
                className="profile-img"
                src="/portfolio/img/profil.png"
                onClick={(e) =>
                  (e.currentTarget.src = "/portfolio/img/profil-boja.jpg")
                }
                roundedCircle
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
