import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCards from "../components/PricingCards";

function Projects() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my recent works" />
      <PricingCards />
      <Footer />
    </div>
  );
}

export default Projects;
