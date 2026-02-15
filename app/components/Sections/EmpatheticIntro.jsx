import React from "react";
import Image from "next/image";

function EmpatheticIntro() {
  return (
    <section className="grid grid-cols-(--grid-cols-mobile) grid-rows-(--grid-rows-mobile) w-full gap-y-5 gap-x-5 bg-light-Accent">
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
        <h2>Live a fulfilling life.</h2>
        <p className="text-large leading-body">
          Life can be challenging—especially when you're trying to balance your
          personal and professional life.{" "}
        </p>
        <p className="text-large leading-body">
          It's easy to feel like you're alone in facing these challenges, but I
          want you to know that I'm here to help.
        </p>
      </div>
      <a
        href=""
        className="row-start-11 -row-end-1 col-start-1 col-end-12 text-center text-normal uppercase hover:bg-red-200 self-center h-full"
      >
        get in touch
      </a>
    </section>
  );
}

export default EmpatheticIntro;

