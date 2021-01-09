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
                Zdravo! Ja sam Biljana, front-end developer. Već godinu dana se
                bavim web developmentom, iza sebe imam projekte koje možete
                pogledati u nastavku. Stalno se usavršavam gledajući tutorijale
                i pohađajući kurseve. Izdvojila bih kurs Razvoj Web stranice na
                ITBootcamp-u, u organizaciji Divac fondacije, koji sam završila
                u decembru 2019. godine.
              </p>
              <p>
                Radoznala sam i volim da učim i stičem nove veštine.
                Organizovana sam i posvećeno obavljam zadatke koji su mi
                dodeljeni i trudim se da ih uvek uradim najbolje što mogu i
                ispoštujem sve zadate rokove.
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
                  className="skill-icon"
                />
                <img
                  src="/portfolio/img/skills/css.png"
                  alt="CSS"
                  className="skill-icon"
                />
                <img
                  src="/portfolio/img/skills/bootstrap.png"
                  alt="Bootstrap"
                  className="skill-icon"
                />
                <img
                  src="/portfolio/img/skills/sass.png"
                  alt="Saas"
                  className="skill-icon"
                />
                <img
                  src="/portfolio/img/skills/js.png"
                  alt="JavaScript"
                  className="skill-icon"
                />
                <img
                  src="/portfolio/img/skills/react.png"
                  alt="React"
                  className="skill-icon"
                />
                <img
                  src="/portfolio/img/skills/git.png"
                  alt="Git"
                  className="skill-icon"
                />
                <img
                  src="/portfolio/img/skills/wordpress.png"
                  alt="Wordpress"
                  className="skill-icon"
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
