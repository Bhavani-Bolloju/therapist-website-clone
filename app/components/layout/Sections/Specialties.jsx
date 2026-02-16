import React from "react";
import SpecialtyCard from "../../shared/SpecialtyCard";

function Specialties() {
  return (
    <section className=" pt-[6.6vmax] pb-[6.6vmax]">
      <p className="text-fs-h2 font-medium capitalize text-center pb-12.5">
        my specialties
      </p>
      <ul className="pl-[3.75vw] pr-[3.75vw] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
        <SpecialtyCard
          image="/images/image-3.jpg"
          title="Self-Esteem"
          content="Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem."
        />
        <SpecialtyCard
          image="/images/image-4.jpg"
          title="Relationships"
          content="Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections."
        />
        <SpecialtyCard
          image="/images/image-5.jpg"
          title="Burnout"
          content="Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout."
        />
      </ul>
    </section>
  );
}

export default Specialties;

