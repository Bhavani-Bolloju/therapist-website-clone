import React from "react";
import Image from "next/image";
import PageHeading from "../../ui/PageHeading";
import Paragraph from "../../ui/Paragraph";
import ButtonFullWidth from "../../ui/ButtonFullWidth";

function EmpatheticIntro() {
  return (
    <section className="grid grid-cols-(--grid-cols-mobile) grid-rows-(--grid-rows-mobile) w-full gap-y-5 gap-x-5 bg-surface-1">
      <div className="row-start-1 row-end-3 col-start-1 col-span-12">
        <Image
          src="/images/image-2.jpg"
          width={600}
          height={300}
          alt="therapy image"
          className="w-full max-h-70 object-cover"
        ></Image>
      </div>
      <div className="row-start-4 row-end-11 col-start-2 col-end-11">
        <PageHeading>Live a fulfilling life.</PageHeading>
        <Paragraph>
          Life can be challenging—especially when you&apos;re trying to balance
          your personal and professional life.{" "}
        </Paragraph>
        <Paragraph>
          It&apos;s easy to feel like you&apos;re alone in facing these
          challenges, but I want you to know that I&apos;m here to help.
        </Paragraph>
      </div>
      <div className="row-start-11 -row-end-1 col-start-1 col-end-12 text-center text-normal uppercase hover:bg-red-200 self-center h-full">
        <ButtonFullWidth>get in touch</ButtonFullWidth>
      </div>
    </section>
  );
}

export default EmpatheticIntro;

