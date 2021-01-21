/** @format */

import React from "react";
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

      <Link to="/projects">
        <li>Svi projekti</li>
      </Link>

      <Link to="/bigProjects">
        <li>Samostalni projekti</li>
      </Link>

      <Link to="/groupProjects">
        <li>Grupni projekti</li>
      </Link>

      <Link to="/react">
        <li>React</li>
      </Link>

      <Link to="/js">
        <li>JS</li>
      </Link>

      <Link to="/landingPages">
        <li>Landing pages</li>
      </Link>
      <Link to="/education">
        <li>Obrazovanje</li>
      </Link>
      <Link to="/experience">
        <li>Iskustvo</li>
      </Link>
    </div>
  );
}
