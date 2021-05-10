/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function IndependentReact() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="project-small">
              <h5>Music Box</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/Synth/"
                  target="_blanc"
                >
                  <video
                    src="/portfolio/img/musicbox.mp4"
                    autoPlay
                    muted
                    loop
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Music Box je single-page aplikacija napravljena kao zadatak za
                Mintbeans hakaton. Na ovoj stranici sam rekonstruisala dečiju
                igračku koju je moj bratanac imao kad je bio beba. Bila je jako
                glasna i iritantna, ali ju je on obožavao, pa sam odlučila da je
                napravim u ovom obliku.
              </p>
              <p>
                Sajt je napravljen u Reactu, za dizajn sam koristila CSS sa
                CSS-ovim animacijama, tonovi koji se mogu odsvirati uvedeni su
                iz tone.js biblioteke, zvuci vozila i životinja skinuti su sa
                Vikipedije.
              </p>
              <a
                href="https://github.com/BiljanaPavlovic/Synth"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/Synth/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/Live.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
            </div>
          </Col>

          <Col>
            <div className="project-small">
              <h5>Marvel API Challange</h5>

              <div className="imgDiv">
                <a
                  href="https://biljanapavlovic.github.io/MarvelApiChallenge/"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/18.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ova aplikacija povlači podatke Marvelovim junacima, omogućava
                pretragu po imenu junaka i njigovo čuvanje, kako bi korisnik
                mogao da vidi sačuvane i posle zatvaranje stranice, takodje može
                da očisti svoje skladište.
              </p>
              <p>Korišćene tehnologije: React, CSS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/MarvelApiChallenge"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
              <a
                href="https://biljanapavlovic.github.io/MarvelApiChallenge/"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/Live.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="project-small">
              <h5>RENT-A-CAR</h5>

              <div className="imgDiv">
                <a
                  href="https://github.com/BiljanaPavlovic/rent-a-car"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/20.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Ova aplikacija povlači podatke Marvelovim junacima, omogućava
                pretragu po imenu junaka i njigovo čuvanje, kako bi korisnik
                mogao da vidi sačuvane i posle zatvaranje stranice, takodje može
                da očisti svoje skladište.
              </p>
              <p>Korišćene tehnologije: React, CSS, API</p>
              <a
                href="https://github.com/BiljanaPavlovic/rent-a-car"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="project-small">
              <h5>Tic-tac-toe</h5>

              <div className="imgDiv">
                <a
                  href="https://github.com/BiljanaPavlovic/Tic-tac-toe-game"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/14.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                XO igrica sa dva igrača u realnom vremenu, napravljena je pomoću
                dobijenog API-ja i Socket-a, moj rad je front deo aplikacije.{" "}
              </p>
              <p>
                Korišćene tehnologije: React, CSS, React-Bootstrap, API, Socket
              </p>
              <a
                href="https://github.com/BiljanaPavlovic/Tic-tac-toe-game"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="project-small">
              <h5>BIRTIJE.COM</h5>

              <div className="imgDiv">
                <a
                  href="https://github.com/BiljanaPavlovic/BIRTIJE.COM"
                  target="_blanc"
                >
                  <img
                    src="/portfolio/img/4.png"
                    alt="project-img"
                    className="project-img-lp"
                  />
                </a>
              </div>
              <p>
                Birtije.com su moj samostalni projekat. Sajt se sastoji iz tri
                dela: O kafanama, gde je planirano da se prikazuju tekstovi o
                starim kafanama, unutar tog dela možete naći neke zabavne
                sadržaje kao što su citati o kafanama, pesme i zdravice. Drugi
                deo posvećen je predstavljanju beogradskih kafana i treći čini
                žiri koji će ocenjivati te kafane. Korisnici će moći da ostave
                svoj komentar i da ocene recenzije i komentare punom ili praznom
                kriglom.
              </p>
              <p>
                Sajt je napravljen u Reactu, za dizajn sam koristila
                React-Bootstrap i CSS.
              </p>
              <a
                href="https://github.com/BiljanaPavlovic/BIRTIJE.COM"
                target="_blanc"
              >
                <img
                  src="/portfolio/img/soc-ico/code.png"
                  alt="project-img"
                  className="code-ico"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
