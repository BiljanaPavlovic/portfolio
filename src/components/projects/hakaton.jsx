import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hakaton() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="imgDiv">
              <a href="https://github.com/Tim8hakaton" target="_blanc">
                <img
                  src="/portfolio/img/team8.gif"
                  alt="project-img"
                  className="project-img"
                />
              </a>
            </div>
          </Col>
          <Col>
            <h5>Online.Female.Code.Hackathon.2020.Namics</h5>
            <p>
              2020. godine sam učestvovala na hakatonu, članice moga tima i ja
              se nismo ranije poznavale, nego je tim sastavljen od individualno
              prijavljenih devojaka. Uprkos tome smo se veoma brzo složile i
              zajednički osmislile ideju za aplikaciju i izradile prototip. Tema
              hakatona je bila korona virus, pa smo osmislile aplikaciju koja će
              pomagati humanitarnim organizacijama da oglase svoje aktivnosti
              kako bi oni kojima je pomoć potrebna došli do nje. U daljem
              razvoju aplikacije je zamišljeno da će ona u budućnosti služiti i
              kao mesto za pružanje psihološke pomoći korisnicima.
            </p>
            <p>
              S obzirom na to da poznajemo različite tehnologije, dogovorile smo
              se da koristimo osnovne web tehnologije na ovom projektu, tako da
              smo za front koristile HTML, CSS i JS. Za bek smo iskoristile JSON
              server.
            </p>
            <p>
              Moja uloga u timu je bila da postavim bek i povežem sa frontom
              kako bismo imale funkciju upisivanja akcija na sajtu.
            </p>
            <a href="https://github.com/Tim8hakaton" target="_blanc">
              <img
                src="/portfolio/img/soc-ico/code.png"
                alt="project-img"
                className="code-ico"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
