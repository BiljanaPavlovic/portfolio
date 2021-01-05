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
            <div className="uvod">
              <p className="intro">
                Zdravo! Ja sam Biljana, završila sam proces prekvalifikacije na
                kursu Razvoj Web stranice u organizaciji Divac fondacije 2019
                godine. Od tada se samostalno usavršavam i trudim se da naučim
                što više korisnih Web tehnologija. Završila sam i neke online
                kurseve, odgledala mnoštvo tutorijala i napravila nekoliko
                projekata koje možete pogledati u nastavku.{" "}
              </p>
              <p>
                Ranije sam studirala književnost i radila različite
                administrativne poslove. Odlučila sam se za prekvalifikaciju jer
                sam tokom rada na pisanju tekstova za jedan sajt zavolela Web i
                poželela da naučim da kreiram sajtove, ne samo kao kreativac već
                i sa tehničke strane. Smatram da bi mi posao u IT struci pružio
                mogućnost da ispoljim svoj pun potencijal i iskažem svoju
                kreativnost. Želim da se bavim front-end programiranjem i činim
                svet boljim mestom.{" "}
                <span role="img" aria-label="smajli">
                  &#128187;
                </span>
              </p>
              <br />
              <p>Web tehnologije:</p>
              <div className="skills-ico">
                <img
                  src="/portfolio/img/skills/html.png"
                  alt="HTML"
                  className="soc-ico"
                />
                <img
                  src="/portfolio/img/skills/css.png"
                  alt="CSS"
                  className="soc-ico"
                />
                <img
                  src="/portfolio/img/skills/bootstrap.png"
                  alt="Bootstrap"
                  className="soc-ico"
                />
                <img
                  src="/portfolio/img/skills/sass.png"
                  alt="Saas"
                  className="soc-ico"
                />
                <img
                  src="/portfolio/img/skills/js.png"
                  alt="JavaScript"
                  className="soc-ico"
                />
                <img
                  src="/portfolio/img/skills/react.png"
                  alt="React"
                  className="soc-ico"
                />
                <img
                  src="/portfolio/img/skills/git.png"
                  alt="Git"
                  className="soc-ico"
                />
                <img
                  src="/portfolio/img/skills/wordpress.png"
                  alt="Wordpress"
                  className="soc-ico"
                />
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="profile-img-div">
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
              <p>Moj CV možete pogledati ovde:</p>
              <a href="/portfolio/img/BiljanaPavlovicCV1.pdf" download>
                <img
                  src="/portfolio/img/soc-ico/DownloadCV.png"
                  alt="Download CV"
                  className="cv-ico"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
