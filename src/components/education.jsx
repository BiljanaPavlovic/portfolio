import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Education() {
  return (
    <div>
      <Image src="img/education.jpg" fluid />
      <Container>
        <Row>
          <Col>
            <h3>Obrazovanje</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <p>ITBootcamp - Razvoj web stranice</p>
            <p>Završila sam kurs za JavaScript u </p>
            <a
              href="https://itbootcamp.rs/course/razvoj-veb-stranica/"
              target="_blanck"
            >
              ITBootcampu-u
            </a>
            <p>
              . Na ovom kursu sam se prvi put susrela sa programiranjem i
              naučila jako puno, prošli smo kroz osnove JavaScript-a i uradili
              prvne projekte, zatim smo naučili React i izradili nekoliko
              projekata da bismo utvrdili funkcionisanje te biblioteke i
              izradili završne projekte u koje smo uložili puno truda i vremena.
            </p>
          </Col>
          <Col>
            {" "}
            Filološki fakultet - Grupa za srpsku književnost i jezik sa
            komparatistikom
            <p>Apsolvent sam srpske književnosti na </p>
            <a href="http://www.fil.bg.ac.rs/ " target="_blanck">
              Filološkom fakultetu
            </a>
            <p>
              , tokom studija sam proučavala književnost iz različitih umetničke
              perioda srpske i opšte književnosti. Takođe, veliki deo ispita se
              odnosio na metodiku odnosno pripremao nas je za pedagoški rad.
              Jedan od predmeta se bavio i internetom u nastavi književnosti. U
              sklopu ovih predmeta sam obavila i stručnu praksu u oš "Filip
              Filipović"
            </p>
          </Col>
          <Col>
            {" "}
            <p>Druga ekonomska škola - Poslovni administrator</p>
            <p>Završila sam ogledno odeljenje u </p>
            <a href="http://drugaekonomska.edu.rs" target="_blanck">
              Drugoj ekonomskoj školi
            </a>
            <p>
              {" "}
              gde su nas najviše učili preduzetničkom dugu i snalaženju u
              administrativnim procedurama. Imali smo veoma mnogo časova
              posvećenih praktičnom radu. Takođe tokom školovanja sam
              učestvovala u osnivanju školskog časopisa "Stav" koji i dalje
              izlazi.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
