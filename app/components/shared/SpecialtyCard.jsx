import React from "react";
import Image from "next/image";

function SpecialtyCard({ title, content, image }) {
  return (
    <li className="list-none bg-surface-1 flex flex-col gap-[3vh] p-5 justify-between border border-text-primary rounded-sm">
      <h2 className="text-large font-medium">{title}</h2>
      <p className="text-normal">{content}</p>
      <div className="w-[70%] aspect-square rounded-full overflow-hidden self-center">
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </li>
  );
}

export default SpecialtyCard;

