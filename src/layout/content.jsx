import React from "react";
import Projects from "../components/projects";
import Education from "../components/education";
import Experience from "../components/experience";
import Button from "react-bootstrap/Button";
import { Switch, Route, Link } from "react-router-dom";
import App from "../App";

export default function Content() {
  return (
    <div>
      <Projects />
      <Link to="/education">
        <Button variant="secondary" size="lg">
          Obrazovanje
        </Button>
      </Link>
      <Link to="/experience">
        <Button variant="secondary" size="lg">
          Iskustvo
        </Button>
      </Link>

      <Switch>
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </div>
  );
}
