import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <img
          alt=""
          src="/portfolio/img/b.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Biljana Pavlović
      </Link>
      <NavDropdown title="Projekti" id="nav-dropdown">
        <NavDropdown.Item className="dropdownItem" eventKey="4.1">
          <Link to="/projects">
            <li>Svi projekti</li>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item className="dropdownItem" eventKey="4.1">
          <Link to="/bigProjects">
            <li>Samostalni projekti</li>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="dropdownItem" eventKey="4.1">
          <Link to="/groupProjects">
            <li>Grupni projekti</li>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="dropdownItem" eventKey="4.2">
          {" "}
          <Link to="/react">
            <li>React</li>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="dropdownItem" eventKey="4.3">
          {" "}
          <Link to="/js">
            <li>JS</li>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="dropdownItem" eventKey="4.4">
          <Link to="/landingPages">
            <li>Landing pages</li>
          </Link>
        </NavDropdown.Item>
      </NavDropdown>

      <Link to="/education">
        <li>Obrazovanje</li>
      </Link>
      <Link to="/experience">
        <li>Iskukstvo</li>
      </Link>
    </div>
  );
}
