import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Education() {
  return (
    <div>
      <Image src="/portfolio/img/education.jpg" fluid />
      <div className="sertifikati">
        <Container>
          <h3>Sertifikati</h3>
          <Row>
            <Col>
              <p>Uvod u programiranje.</p>

              <div className="imgDiv">
                <img
                  src="/portfolio/img/sertifikati/UuP.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </div>
            </Col>
            <Col>
              <p>Manuelno testiranje softvera.</p>

              <div className="imgDiv">
                <img
                  src="/portfolio/img/sertifikati/QA.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Python</p>

              <div className="imgDiv">
                <img
                  src="/portfolio/img/sertifikati/sertifikat pajton.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </div>
            </Col>
            <Col>
              <p>Python</p>

              <div className="imgDiv">
                <img
                  src="/portfolio/img/sertifikati/Python.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </div>
            </Col>
            <Col>
              <p>SEO</p>

              <div className="imgDiv">
                <img
                  src="/portfolio/img/sertifikati/SEO.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <h3 className="second-title">Obrazovanje</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="/portfolio/img/edu/bootcamp.png"
              className="exp-img-lg"
              alt="logo"
            />
            <br />
            <a
              href="https://itbootcamp.rs/course/razvoj-veb-stranica/"
              target="_blanck"
            >
              ITBootcamp - Razvoj web stranice
            </a>
            <p>
              Završila sam kurs za JavaScript u ITBootcampu-u. Na ovom kursu sam
              se prvi put susrela sa programiranjem i naučila jako puno, prošli
              smo kroz osnove JavaScript-a i uradili prvne projekte, zatim smo
              naučili React i izradili nekoliko projekata da bismo utvrdili
              funkcionisanje te biblioteke i izradili završne projekte u koje
              smo uložili puno truda i vremena.
            </p>
          </Col>
          <Col>
            <img
              src="/portfolio/img/edu/filfak.png"
              className="exp-img"
              alt="logo"
            />
            <br />
            <a href="http://www.fil.bg.ac.rs/ " target="_blanck">
              Filološki fakultet - Grupa za srpsku književnost i jezik sa
              komparatistikom
            </a>
            <p>
              Apsolvent sam srpske književnosti na Filološkom fakultetu, tokom
              studija sam proučavala književnost iz različitih umetničke perioda
              srpske i opšte književnosti. Takođe, veliki deo ispita se odnosio
              na metodiku odnosno pripremao nas je za pedagoški rad. Jedan od
              predmeta se bavio i internetom u nastavi književnosti. U sklopu
              ovih predmeta sam obavila i stručnu praksu u oš "Filip Filipović"
            </p>
          </Col>
          <Col>
            <img
              src="/portfolio/img/edu/drugaekonomska.jpg"
              className="exp-img"
              alt="logo"
            />
            <br />
            <a href="http://drugaekonomska.edu.rs" target="_blanck">
              Druga ekonomska škola - Poslovni administrator
            </a>
            <p>
              Završila sam ogledno odeljenje u Drugoj ekonomskoj školi gde su
              nas najviše učili preduzetničkom duhu i snalaženju u
              administrativnim procedurama. Imali smo mnogo časova posvećenih
              praktičnom radu. Takođe tokom školovanja sam učestvovala u
              osnivanju školskog časopisa "Stav" koji i dalje izlazi.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
