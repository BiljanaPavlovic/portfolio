import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Experience() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className="second-title">Iskustvo</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="/portfolio/img/exp/delfi.jpg"
              className="exp-img"
              alt="logo"
            />
            <br />
            <a href="https://www.delfi.rs/" target="_blanck">
              {" "}
              Delfi knjižare - Knjižar/Prodavac (2019)
            </a>
            <p>
              U Delfi knjižari sam radila sa različitim ljudima kupcima knjiga,
              trudila sam se da im pronađem knjigu koja će odgovarati njihovom
              individualnom ukusu. Takođe, kada su kupovali knjige za poklon
              zajednički smo se trudili da pronađemo onu koja će najviše
              odgovarati. Osim rada sa kupcima posao je obuhvatao i vođenje
              evidencija administrativnim i finansijskim tokovima, kao i slanje
              knjige kupcima koji su ih naručivali preko internet prodavnice,
              kao i fakturisanje tih porudžbina.{" "}
            </p>
          </Col>
          <Col sm>
            <img
              src="/portfolio/img/exp/bgb.jpg"
              className="exp-img"
              alt="logo"
            />
            <br />
            <a href="https://www.bgb.rs/" target="_blanck">
              Biblioteka grada Beograda - Bibliotekar{" "}
            </a>
            <p>
              Bila sam Bibliotekar preko programa BGpraksa u organizaciji
              univerzitetskog Centra za razvoj karijere u trajanju od tri
              meseca. U biblioteci sam brinula o bibliotičkom fondu i pisala
              dnevne i mesečne izveštaje. Biblioteku je posećivao veliki broj
              čitalaca različitih uzrasta sa kojima sam pronalazila knjige uz
              koje će uživati, bilo da su to najmlađi čitaoci koji tek ulaze u
              svet književnosti ili najstariji koji žele da uz lepu priču
              prekrate vreme.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <img
              src="/portfolio/img/exp/svezasvadbu.png"
              className="exp-img"
              alt="logo"
            />
            <br />
            <a href="https://svezasvadbu.com/" target="_blanck">
              svezasvadbu.com - Urednik sadržaja (2017)
            </a>
            <p>
              Sve za svadbu je sajt koji mlandencima pruža pomoć u organizaciji
              najlepšeg događaja njihovih života. Moja pozicija bila je urednik
              sadržaja, tu sam kreirala tekstualni i vizuelni identitet sajta.
              Za ovaj sajt sam pisala tekstove o savetima, običajima i
              zanimljivostima vezanim za organizaciju svadbe i optimizovala ih
              po principa SEO preporuka. Takođe sam pronalazila odgovarajuće
              fotografije i sve to unosila na sajt preko CMS platforme Avokado.
              Osim toga sam vodila i profile na društvenim mrežama organizacije.
            </p>
          </Col>
          <Col>
            <img
              src="/portfolio/img/exp/abc.png"
              className="exp-img-lg"
              alt="logo"
            />
            <br />
            <a href="https://www.abcprevodi.co.rs/" target="_blanck">
              Abc prevodi - Project manager (2017)
            </a>
            <p>
              Agencija “Abc prevodi” pruža usluge usmenog i pismenog prevođenja
              tekstova, sa i bez overe sudskog tumača. Radila sam na poziciji
              projekt menadžera i moja zaduženja su bila da organizujem i pratim
              izvođenje usluga prevođenja. Imala sam kontaka sa mnogim
              klijentima i fizičkim i pravnim licima, kao i sa prevodiocima i
              sudskim tumačima za različite jezike.
            </p>
          </Col>
          <Col sm>
            <img
              src="/portfolio/img/exp/heraconsulting.png"
              className="exp-img"
              alt="logo"
            />
            <br />
            <a
              href="https://www.facebook.com/PrevodiociSudskiTumaci/"
              target="_blanck"
            >
              Hera consalting - Office manager (2017)
            </a>
            <p>
              Hera consulting je manja prevodilačka agencija gde sam radila na
              poziciji office managera i posao mi je bio da komuniciram sa
              klijentima, uglavnom fizičkim licima, kojima je prevod potreban i
              prevodiocima. Osim toga vodila sam sve evidencije za
              funkcionisanje agencije, pripremala fakture i prikupljala
              dokumenta za slanje knjigovodstvu.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
