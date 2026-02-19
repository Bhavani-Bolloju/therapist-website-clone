"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";

function ExpandableContent({ isCollapsed, content }) {
  const [maxHeight, setMaxHeight] = useState(0);

  const refEl = useRef(null);
  const refHeight = useRef(0);

  useEffect(() => {
    refHeight.current = refEl.current.scrollHeight;
    setMaxHeight(refHeight.current);
  }, [refEl]);

  return (
    <div
      className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
      style={{
        maxHeight: isCollapsed ? 0 : maxHeight,
        opacity: isCollapsed ? 0 : 1
      }}
    >
      <p className="py-3 text-large" ref={refEl}>
        {content}
      </p>
    </div>
  );
}

export default ExpandableContent;

