import React from "react";
import Image from "next/image";
import PageHeading from "../../ui/PageHeading";
import Paragraph from "../../ui/Paragraph";
import ButtonFullWidth from "../../ui/ButtonFullWidth";

function SupportSection() {
  return (
    <div class="grid grid-cols-12 gap-6 bg-surface-2">
      <div className="col-span-12 aspect-5/3">
        <Image
          src="/images/image-6.jpg"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-start-2 col-end-12 flex flex-col gap-[2vh]">
        <PageHeading>You don’t have to do this all alone.</PageHeading>
        <Paragraph>If you are facing any of these, there’s hope:</Paragraph>
        <ul className="list-disc pl-8">
          <li>
            <Paragraph>
              Persistent feelings of sadness or hopelessness
            </Paragraph>
          </li>
          <li>
            <Paragraph>Trouble focusing or making decisions</Paragraph>
          </li>
          <li>
            <Paragraph>Difficulty maintaining relationships</Paragraph>
          </li>
          <li>
            <Paragraph>Feeling constantly exhausted or unmotivated</Paragraph>
          </li>
          <li>
            <Paragraph>A pervasive sense of being overwhelmed</Paragraph>
          </li>
        </ul>
        <Paragraph>
          With empathy and guidance, we&apos;ll work together to navigate the
          challenges life throws your way.
        </Paragraph>
      </div>
      <div className="col-span-12 h-full row-span-2">
        <ButtonFullWidth>work with me</ButtonFullWidth>
      </div>
    </div>
  );
}

export default SupportSection;

