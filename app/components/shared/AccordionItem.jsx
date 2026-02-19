"use client";

import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { useState, useRef, useEffect } from "react";

function AccordionItem({ isCollapsed, content, children }) {
  const [maxHeight, setMaxHeight] = useState(0);

  const refEl = useRef(null);
  const refHeight = useRef(0);

  useEffect(() => {
    refHeight.current = refEl.current.scrollHeight;
    setMaxHeight(refHeight.current);
  }, [refEl]);

  return (
    <li className="list-none py-4 flex flex-col gap-2 items-start border-b border-text-primary/50">
      {children}
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

export default AccordionItem;

/*

sectionHeading -> title
answer -> text -> div -> p

design fully -> then add state


*/

