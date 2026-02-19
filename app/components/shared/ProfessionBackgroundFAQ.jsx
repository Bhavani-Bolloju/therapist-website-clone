import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function ProfessionBackgroundFAQ() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = function () {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <AccordionItem content={content} isCollapsed={isCollapsed}>
      <button
        className="flex gap-[4vw] flex-row items-center justify-start hover:cursor-pointer"
        onClick={handleCollapse}
      >
        <p>{title}</p>
        <div className="relative w-6.5 h-6.5">
          <span className="w-full h-[1.5px] bg-text-primary/70 inline-block"></span>
          <span
            className={`w-full h-[1.2px]  inline-block absolute left-0 top-1/2  -translate-y-1/2 transition-all origin-center duration-200 ease-linear ${isCollapsed ? "rotate-90 bg-text-primary/70" : "rotate-0 bg-transparent"}`}
          ></span>
        </div>
      </button>
    </AccordionItem>
  );
}

export default ProfessionBackgroundFAQ;

