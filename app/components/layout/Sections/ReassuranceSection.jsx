import React from "react";
import Image from "next/image";

import Paragraph from "../../ui/Paragraph";
import ButtonPrimary from "../../ui/ButtonPrimary";
import PageHeading from "../../ui/PageHeading";

function ReassuranceSection() {
  return (
    <section className="grid grid-rows-[repeat(8, minmax(6vh, auto))] grid-cols-8 gap-[3vh] justify-items-start px-[5vw] py-[6vh] bg-surface-1">
      <div className="row-start-1 row-end-6 col-start-1 col-span-8  rounded-t-full overflow-hidden justify-self-center">
        <Image
          src="/images/image-7.jpg"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="row-start-4 row-span-2 col-start-5 col-end-7 aspect-square rounded-full justify-self-start overflow-hidden">
        <Image
          src="/images/image-8.jpg"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="row-start-6 row-span-1 col-start-1 col-span-8">
        <PageHeading>Hi, I&apos;m Lilac.</PageHeading>
      </div>
      <div className="row-start-7 row-end-8 col-start-1 col-span-8 ">
        <Paragraph>
          I&apos;m committed to providing a safe and supportive environment
          where we can explore your thoughts, feelings, and behaviors. With
          empathy and guidance, we&apos;ll work together to navigate the
          challenges life throws your way.
        </Paragraph>
      </div>
      <div className="row-start-8 row-span-1 col-start-1 col-span-8 justify-self-center">
        <ButtonPrimary>Let&apos;s chat</ButtonPrimary>
      </div>
    </section>
  );
}

export default ReassuranceSection;

