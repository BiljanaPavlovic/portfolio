import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Education() {
  return (
    <div>
      <div className="sertifikati">
        <Container>
          <h3>Sertifikati</h3>
          <Row>
            <Col>
              <p>Uvod u programiranje</p>
              <p>
                Ovaj kurs mi je pomogao da teorijski razumem kako funkcionišu
                programski jezici i kako se oni prevode na jezik računara.
                Takođe, sadržao je i one pojmove koji se koriste u svim
                programskim jezicima.
              </p>
              <div className="imgDiv">
                <img
                  src="/portfolio/img/sertifikati/UuP.png"
                  alt="project-img"
                  className="project-img-lp"
                />
              </div>
            </Col>
            <Col>
              <p>Manuelno testiranje softvera</p>
              <p>
                Manuelno testiranje kurs mi je pomogao da utvrdim na šta je sve
                važno obraćati pažnju prilikom provera rada sajta, kao i bliže
                upoznavanje sa agilnim metodologijama koje se koriste u mnogim
                IT kompanijama.
              </p>
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
              <p>Python - ProCODING</p>
              <p>
                Na ovom kursu sam se upoznala sa osnovama Python programskog
                jezika, izradila prvi projektat. Saznala sam nove mogućnosti
                ovog jezika koji nije vezan samo za web tehnologije.
              </p>
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
              <p>
                Ovaj kurs mi je pružio više teorijski pregled funkcionalnosti i
                sintakse programskog jezika Python. Uočila sam sličnosti i
                razlike sa JavaScriptom koji sam ranije učila.
              </p>
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
              <p>
                Ovaj kurs mi je dao pregled i tehničkih principa za postizanje
                bolje pozicije na googlu za razliku od onih "kreativnih" vezanih
                za pisanje samog teksta koje sam ranije primenjivala u radu.
              </p>
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
              Završila sam kurs Web Developmenta na ITBootcampu-u u organizaciji
              Divac fondacije. Na ovom kursu sam se prvi put susrela sa
              programiranjem i naučila jako puno. U procesu selekcije sam
              naučila HTML i CSS samostalno uz izvore kojie su nam poslali kako
              bismo se kvalifikovali za učešće u programu. Na samom kursu smo
              počeli od osnova JavaScript-a, učili smo najviše kroz izradu
              različitih projekata, a zatim smo prešli na React i izradili
              nekoliko projekata da bismo utvrdili funkcionisanje te biblioteke.
              Na kraju kursa smo izradili završne projekte u koje smo uložili
              puno truda i vremena.
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
              predmeta se bavio i internetom u nastavi književnosti. Na ovom
              predmetu smo se najviše bavili procenjivanju validnih izvora na
              internetu kao i kako objasniti učenicima kako da procene pouzdane
              informacije na različitim sajtovima. Drugi prioritet je bio da
              osmislimo načine za uvođenje interneta u nastavu književnosti kao
              i prezentovanje srpske književnosti na internetu. U sklopu
              metodičkih predmeta sam obavila i stručnu praksu u oš "Filip
              Filipović"
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
              Završila sam ogledni smer u Drugoj ekonomskoj školi - Poslovni
              administrator, gde su nas najviše učili preduzetničkom duhu i
              snalaženju u administrativnim procedurama. Imali smo mnogo časova
              posvećenih praktičnom radu. Učestvovali smo u osnivanju i vođenju
              učeničkih kompanija. Pisali smo biznis planove za osnivanje
              preduzeća i proširenja preduzeća na neku novu delatnost.
              Sprovodili smo virtuelno reklamiranje preduzeća. Koristili smo
              dosta programa koji nam olakšavaju rad u kancelariji. Excel na
              srednje-naprednom nivou, pravili smo puno prezentacija u Power
              Pointu, kao i prve verzije sajtova u Publisher-u. Takođe, tokom
              školovanja sam učestvovala u osnivanju školskog časopisa "Stav"
              koji i dalje izlazi.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
