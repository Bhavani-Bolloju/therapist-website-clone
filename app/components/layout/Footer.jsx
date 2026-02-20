import React from "react";
import SectionHeading from "../ui/SectionHeading";
import PageHeading from "../ui/PageHeading";
import Paragraph from "../ui/Paragraph";

function Footer() {
  return (
    <footer className="grid grid-cols-3 justify-items-center gap-y-[5vh] text-center pt-[10vh]">
      <section className="col-start-1 col-span-3 flex flex-col gap-5  px-[5vh] ">
        <PageHeading>Lilac template</PageHeading>
        <div className="flex flex-col items-center">
          <Paragraph>123 Example Road</Paragraph>
          <Paragraph>Minneapolis, MN</Paragraph>
        </div>
        <div className="flex flex-col items-center">
          <Paragraph>email@example.come</Paragraph>
          <Paragraph>(555)555-5555</Paragraph>
        </div>
      </section>
      <section className="col-start-1 col-span-3 flex flex-col gap-5">
        <SectionHeading>hours</SectionHeading>
        <div className="flex flex-col items-center">
          <Paragraph>Monday – Friday</Paragraph>
          <Paragraph>10am – 6pm</Paragraph>
        </div>
      </section>
      <section className="col-start-1 col-span-3 flex flex-col gap-5">
        <SectionHeading>find</SectionHeading>
        <nav>
          <ul className="list-none flex flex-col items-center text-large">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="col-start-1 col-span-3 text-center flex flex-col bg-surface-1 px-[5vh] py-[2vh] gap-5 text-black">
        <div className="flex flex-row flex-wrap capitalize justify-center gap-x-3">
          <a href="">privacy & cookies policy</a>
          <a href="">good faith estimate</a>
          <a href="">website terms & conditions </a>
          <a href="">disclaimer</a>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <p className="text-text-primary">Website Template Credits:</p>
          <a href="">Go Bloom Creative</a>
        </div>
        <p className="text-text-primary">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </section>
    </footer>
  );
}

export default Footer;

