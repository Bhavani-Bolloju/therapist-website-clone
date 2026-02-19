"use client";

import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";

import ExpandableContent from "./ExpandableContent";

function ProfessionBackgroundFAQ({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = function () {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <li className="list-none py-3 flex flex-col gap-2 items-between border-b border-text-primary/50 w-full">
      <button
        className="flex gap-[3vw] flex-row items-center justify-between hover:cursor-pointer"
        onClick={handleCollapse}
      >
        <p className="capitalize text-fs-h4">{title}</p>
        <div className="relative w-6 h-6">
          <span className="w-full h-px bg-text-primary inline-block absolute left-1/2 -translate-x-1/2 top-1/2"></span>
          <span
            className={`w-px h-full inline-block absolute left-1/2 -translate-1/2 top-1/2 transition-all duration-200 ease-linear bg-text-primary ${isCollapsed ? "rotate-0 opacity-100" : "rotate-90 opacity-50"}`}
          ></span>
        </div>
      </button>
      <ExpandableContent content={content} isCollapsed={isCollapsed} />
      
    </li>
  );
}

export default ProfessionBackgroundFAQ;

/*






*/

