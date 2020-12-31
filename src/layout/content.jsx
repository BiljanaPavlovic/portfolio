import React from "react";
import Projects from "../components/projects";
import Education from "../components/education";
import Experience from "../components/experience";
import Button from "react-bootstrap/Button";
import { Switch, Route, Link } from "react-router-dom";
import GroupProjects from "../components/groupProjects";
import ReactProjects from "../components/projects/reactProjects";
import JsProjects from "../components/projects/jsProjects";
import LandingPages from "../components/projects/landingPages";

export default function Content() {
  return (
    <div>
      <Link to="/projects">
        <Button className="btn" variant="secondary" size="lg">
          Projekti
        </Button>
      </Link>
      <Link to="/education">
        <Button className="btn" variant="secondary" size="lg">
          Obrazovanje
        </Button>
      </Link>
      <Link to="/experience">
        <Button className="btn" variant="secondary" size="lg">
          Iskustvo
        </Button>
      </Link>

      <Switch>
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/groupProjects" component={GroupProjects} />
        <Route path="/react" component={ReactProjects} />
        <Route path="/js" component={JsProjects} />
        <Route path="/landingPages" component={LandingPages} />
      </Switch>
    </div>
  );
}
