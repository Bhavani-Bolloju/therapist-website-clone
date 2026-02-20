import React from "react";

import Hero from "./Sections/Hero";
import EmpatheticIntro from "./Sections/EmpatheticIntro";
import Specialties from "./Sections/Specialties";
import SupportSection from "./Sections/SupportSection";
import ReassuranceSection from "./Sections/ReassuranceSection";
import FAQsSection from "./Sections/FAQsSection";
import ProfessionalBackground from "./Sections/ProfessionalBackground";
import BookingCTASection from "./Sections/BookingCTASection";
import Footer from "./Footer";

function Main() {
  return (
    <main>
      <Hero />
      <EmpatheticIntro />
      <Specialties />
      <SupportSection />
      <ReassuranceSection />
      <FAQsSection />
      <ProfessionalBackground />
      <BookingCTASection />
      <Footer />
    </main>
  );
}

export default Main;

