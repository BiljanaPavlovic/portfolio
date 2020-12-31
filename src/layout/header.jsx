import React from "react";
import Profile from "../components/profile";
import Navigation from "./nav";

export default function Header() {
  return (
    <div>
      <Navigation />
      <h1 className="headline">Biljana Pavlović</h1>
      <Profile />
    </div>
  );
}
