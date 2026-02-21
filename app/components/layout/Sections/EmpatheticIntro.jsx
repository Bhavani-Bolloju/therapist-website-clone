import React from "react";
import Image from "next/image";
import PageHeading from "../../ui/PageHeading";
import Paragraph from "../../ui/Paragraph";
import ButtonFullWidth from "../../ui/ButtonFullWidth";

function EmpatheticIntro() {
  return (
    <section className="grid grid-cols-12 w-full  bg-surface-1 gap-y-[4vh]">
      <div className="row-start-1 row-span-1 col-start-1 col-span-12 aspect-5/3">
        <Image
          src="/images/image-2.jpg"
          width={600}
          height={300}
          alt="therapy image"
          className="w-full object-cover"
        ></Image>
      </div>
      <div className="col-start-2 col-end-11">
        <PageHeading>Live a fulfilling life.</PageHeading>
      </div>
      <div className="col-start-2 col-end-11">
        <Paragraph>
          Life can be challenging—especially when you&apos;re trying to balance
          your personal and professional life.{" "}
        </Paragraph>
        <Paragraph>
          It&apos;s easy to feel like you&apos;re alone in facing these
          challenges, but I want you to know that I&apos;m here to help.
        </Paragraph>
      </div>
      <div className="col-start-1 -col-end-1 text-center text-normal uppercase self-center h-full">
        <ButtonFullWidth>get in touch</ButtonFullWidth>
      </div>
    </section>
  );
}

export default EmpatheticIntro;

