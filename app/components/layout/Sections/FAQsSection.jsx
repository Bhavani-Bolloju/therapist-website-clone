import React from "react";
import Image from "next/image";
import PageHeading from "../../ui/PageHeading";
import FAQ from "../../shared/FAQ";

function FAQsSection() {
  return (
    // <section className="grid grid-cols-8 grid-rows-[repeat(8, minmax(6vh, auto))] justify-items-start px-[5vw] py-[6vh]">
    <section className="py-20">
      <div className="aspect-4/2">
        <Image
          src="/images/image-9.jpg"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <PageHeading>FAQs</PageHeading>
      </div>
      <div className="px-5">
        <ul>
          <FAQ
            title="Do you take insurance"
            content="Currently we are not government operated but soon we accept insurance and support customers "
          />
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    </section>
  );
}

export default FAQsSection;

