import React from "react";

import Hero from "./Sections/Hero";
import EmpatheticIntro from "./Sections/EmpatheticIntro";
import Specialties from "./Sections/Specialties";
import SupportSection from "./Sections/SupportSection";
import ReassuranceSection from "./Sections/ReassuranceSection";

function Main() {
  return (
    <main>
      <Hero />
      <EmpatheticIntro />
      <Specialties />
      <SupportSection />
      <ReassuranceSection />
    </main>
  );
}

export default Main;

