"use client";

import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";

import ExpandableContent from "./ExpandableContent";

function FAQItem({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = function () {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <li className="list-none py-4 flex flex-col gap-2 items-start border-b border-text-primary/50">
      <button
        className="flex gap-[4vw] flex-row items-center justify-start hover:cursor-pointer"
        onClick={handleCollapse}
      >
        <div className="relative w-7.5 h-7.5">
          <span className="w-full h-px bg-text-primary inline-block absolute left-1/2 -translate-x-1/2 top-1/2"></span>
          <span
            className={`w-px h-full  inline-block absolute left-1/2 top-1/2 -translate-1/2 transition-all bg-text-primary origin-center duration-200 ease-linear ${isCollapsed ? "rotate-0 opacity-100" : "rotate-90 opacity-50"}`}
          ></span>
        </div>
        <SectionHeading>{title}</SectionHeading>
      </button>
      <ExpandableContent content={content} isCollapsed={isCollapsed} />
    </li>
  );
}

export default FAQItem;

/*






*/

