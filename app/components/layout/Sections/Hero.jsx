import React from "react";
import Image from "next/image";

import Paragraph from "../../ui/Paragraph";
import DisplayHeading from "../../ui/DisplayHeading";
import ButtonPrimary from "../../ui/ButtonPrimary";

function Hero() {
  return (
    <section className="grid grid-cols-(--grid-cols-mobile) grid-rows-(--grid-rows-mobile-hero) gap-y-[4vh]">
      <div className="w-45 h-68 rounded-t-full overflow-hidden row-start-2 row-span-3 col-start-1 col-span-8 justify-self-center">
        <Image
          src="/images/image-1.jpg"
          width={200}
          height={300}
          alt="therapy image"
          className="w-full h-full object-cover"
        ></Image>
      </div>
      <div className="row-start-5 row-span-2 col-start-2 col-end-8 text-center">
        <DisplayHeading>
          Ease Anxiety & Heal Trauma in Santa Monica
        </DisplayHeading>
      </div>
      <div className="row-start-7 row-span-1 col-start-2 col-end-8 text-center">
        <Paragraph>
          You can ease exhaustion from overthinking and tension in a safe space.
          In Santa Monica, I guide high-achievers like you to calm, clarity, and
          resilience.
        </Paragraph>
      </div>
      <div className="row-start-8 row-span-1 col-start-1 col-span-8 justify-self-center">
        <ButtonPrimary>
          <span>Ready to feel calmer? </span>
          <span>Let&apos;s talk.</span>
        </ButtonPrimary>
      </div>
    </section>
  );
}

export default Hero;

/*

12 rows - 2 on either side
12 cols - 1 on top and 2 bottom

middle would be??

1- row(8) - 5/8 | col - 2/4
2- row(8) - 5/8 | col - 5/8
3- row(8) - 5/8 | col - 9/10
*/

