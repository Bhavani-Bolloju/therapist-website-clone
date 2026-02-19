import React from "react";
import PageHeading from "../../ui/PageHeading";
import ProfessionBackgroundFAQ from "../../shared/ProfessionBackgroundFAQ";

function ProfessionalBackground() {
  return (
    <section className="bg-surface-1 py-[10vh] px-[10vw] flex flex-col justify-center items-center">
      <PageHeading>Professional background</PageHeading>
      <ul className="border-t border-text-primary/50 mt-[5vh]">
        <ProfessionBackgroundFAQ
          title="education"
          content="he generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        />
        <ProfessionBackgroundFAQ
          title="licensure"
          content="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        />
        <ProfessionBackgroundFAQ
          title="licensure"
          content="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
        />
      </ul>
    </section>
  );
}

export default ProfessionalBackground;

