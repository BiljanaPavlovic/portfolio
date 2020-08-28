import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Experience() {
  return (
    <div>
      <Image src="img/experience.jpg" fluid />
      <Container>
        <Row>
          <Col>
            <h3>Iskustvo</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <li>
              <a href="https://www.delfi.rs/" target="_blanck">
                {" "}
                Delfi knjižare - Knjižar/Prodavac (2019)
              </a>
              <p>
                U Delfi knjižari sam radila sa različitim ljudima kupcima
                knjiga, trudila sam se da im pronađem knjigu koja će odgovarati
                njihovom individualnom ukusu. Takođe, kada su kupovali knjige za
                poklon zajednički smo se trudili da pronađemo onu koja će
                najviše odgovarati. Osim rada sa kupcima posao je obuhvatao i
                vođenje evidencija o pazaru i različitim administrativnim
                procedurama, kao i slanje knjige kupcima koji su ih naručivali
                preko internet prodavnice, kao i fakturisanje tih porudžbina.{" "}
              </p>
            </li>
          </Col>
          <Col sm>
            {" "}
            <li>
              <a href="https://www.bgb.rs/" target="_blanck">
                Biblioteka grada Beograda - Bibliotekar{" "}
              </a>
            </li>
            <p>
              Bila sam Bibliotekar preko programa BGpraksa u organizaciji
              univerzitetskog Centra za razvoj karijere u trajanju od tri
              meseca. U biblioteci sam zaduživala i razduživala korisnike i
              pisala dnevne i mesečne izveštaje. Takođe sam imala veliki broj
              čitalaca različitih uzrasta sa kojima sam pronalazila knjige uz
              koje će uživati bilo da su to najmlađi čitaoci koji tek ulaze u
              svet književnosti ili najstariji koji žele da uz lepu priču
              prekrate vreme.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm>
            {" "}
            <li>
              <a href="https://svezasvadbu.com/" target="_blanck">
                svezasvadbu.com - Urednik sadržaja (2017)
              </a>
              <p>
                Sve za svadbu je sajt za koji sam radila kao urednik sadržaja,
                tom prilikom sam se prvi put upoznala sa radom na sajtu, mada na
                mnogo drugačiji način. Za ovaj sajt sam pisala tekstove o
                savetima, običajima i zanimljivostima vezanim za organizaciju
                svadbe. Takođe sam pronalazila odgovarajuće fotografije i sve to
                unosila na sajt preko CMS platforme Avokado. Na tom poslu sam se
                upoznala sa osnovama SEO optimizacije sajta.{" "}
              </p>
            </li>
          </Col>
          <Col>
            {" "}
            <li>
              <a href="https://www.abcprevodi.co.rs/" target="_blanck">
                Abc prevodi - Project manager (2017)
              </a>
              <p>
                Agencija “Abc prevodi” pruža usluge usmenog i pismenog
                prevođenja tekstova, sa i bez overe sudskog tumača. Radila sam
                na poziciji projekt menadžera i moja zaduženja su bila da
                organizujem i pratim izvođenje usluga prevođenja. Imala sam
                kontaka sa mnogim klijentima i fizičkim i pravnim licima, kao i
                sa prevodiovima i sudskim tumačima za različite jezike.
              </p>
            </li>
          </Col>
          <Col sm>
            {" "}
            <li>
              <a
                href="https://www.facebook.com/PrevodiociSudskiTumaci/"
                target="_blanck"
              >
                Hera consalting - Office manager (2017)
              </a>
              <p>
                Hera consulting je manja prevodilačka agencija gde sam radila na
                poziciji office managera i posao mi je bio da komuniciram sa
                klijentima, uglavnom fizičkim licima, kojima je prevod potreban
                i prevodiocima. Osim toga vodila sam sve evidencije za
                funkcionisanje agencije, pripremala fakture i prikupljala
                dokumenta za slanje knjigovodstvu.{" "}
              </p>
            </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
