"use client";

import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { useState, useRef, useEffect } from "react";

function FAQ({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);

  const refEl = useRef(null);
  const refHeight = useRef(0);

  const handleCollapse = function () {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    refHeight.current = refEl.current.scrollHeight;
    setMaxHeight(refHeight.current);
  }, [refEl]);

  return (
    <li className="list-none py-4 flex flex-col gap-2 items-start border-b border-text-primary/50">
      <button
        className="flex gap-[4vw] items-center justify-start hover:cursor-pointer"
        onClick={handleCollapse}
      >
        <div className="relative w-7.5 h-7.5">
          <span className="w-full h-[1.5px] bg-text-primary/70 inline-block"></span>
          <span
            className={`w-full h-[1.2px]  inline-block absolute left-0 top-1/2  -translate-y-1/2 transition-all origin-center duration-200 ease-linear ${isCollapsed ? "rotate-90 bg-text-primary/70" : "rotate-0 bg-transparent"}`}
          ></span>
        </div>
        <SectionHeading>{title}</SectionHeading>
      </button>
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: isCollapsed ? 0 : maxHeight,
          opacity: isCollapsed ? 0 : 1
        }}
      >
        <p className="py-5 text-large" ref={refEl}>
          {content}
        </p>
      </div>
    </li>
  );
}

export default FAQ;

/*

sectionHeading -> title
answer -> text -> div -> p

design fully -> then add state


*/

