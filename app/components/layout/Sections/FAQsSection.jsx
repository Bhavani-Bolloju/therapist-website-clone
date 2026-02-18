import React from "react";
import Image from "next/image";
import PageHeading from "../../ui/PageHeading";
import FAQAccordion from "../../shared/FAQAccordion";

function FAQsSection() {
  return (
    <section className="grid grid-cols-8 grid-rows-[repeat(8, minmax(6vh, auto))] justify-items-start px-[5vw] pt-[6vh] pb-[10vh] gap-y-[5vh]">
      <div className="row-start-1 row-span-4 col-start-1 col-span-8 justify-self-center rounded-t-full overflow-hidden aspect-3/5">
        <Image
          src="/images/image-9.jpg"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="row-start-5 row-span-1 col-start-1 col-span-8">
        <PageHeading>FAQs</PageHeading>
      </div>
      <div className="row-start-6 col-start-1 col-span-8">
        <ul className="border-t border-text-primary/50">
          <FAQAccordion
            title="Do you take insurance?"
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          />

          <FAQAccordion
            title="What are your rates?"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          />

          <FAQAccordion
            title="Do you have any openings?"
            content="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32"
          />
        </ul>
      </div>
    </section>
  );
}

export default FAQsSection;

