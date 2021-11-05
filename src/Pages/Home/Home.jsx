import React from "react";
import { About, Buttons, TeamMember } from "./index";
import { Nav, Footer } from "../../Component";

export function Home() {
  return (
    <>
      <Nav />
      <About />
      <Buttons />
      <TeamMember />
      <Footer />
    </>
  );
}
