import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-cols-(--grid-cols-mobile) grid-rows-(--grid-rows-mobile) h-168 w-full bg-purple-100 gap-y-5 gap-x-5 justify-items-center text-center">
      <div className="w-45 h-68 rounded-t-full bg-amber-300 overflow-hidden row-start-2 row-end-4 col-start-4 col-end-10">
        <Image
          src="/images/image-1.jpg"
          width={200}
          height={300}
          alt="therapy image"
          className="w-full h-full object-cover"
        ></Image>
      </div>
      <div className="row-start-4 row-end-7 col-start-4 col-end-10">
        <h1 className="mb-5">Live your life in full bloom</h1>
        <p className="text-large">Therapy for Adults in Minneapolis, MN.</p>
      </div>
      <a className="row-start-7 row-end-8 col-start-4 col-end-10 text-small uppercase border p-2">
        connect with me
      </a>
    </div>
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

