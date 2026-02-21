"use client";

import React, { useState } from "react";

function Nav() {
  const [collapsed, setCollapsed] = useState(true);

  const handleNav = function () {
    setCollapsed((prev) => !prev);
  };

  return (
    <nav className="w-full h-full flex items-center mobile-nav:justify-end">
      <button
        className="mobile-nav:hidden w-8 h-8 relative"
        onClick={handleNav}
      >
        <span
          className={`w-full h-px bg-text-primary/60 inline-block absolute top-2/6 left-1/2 -translate-1/2 ${!collapsed && " top-3/6 rotate-140"} transition-all ease-in duration-150 bg-text-primary`}
        ></span>
        <span
          className={`w-full h-px bg-text-primary/60 inline-block absolute bottom-2/6 left-1/2 -translate-1/2 ${!collapsed && "bottom-3/6 -rotate-140"} transition-all  ease-in duration-100 bg-text-primary`}
        ></span>
      </button>
      <ul className={`flex flex-row max-mobile-nav:hidden`}>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
      <ul
        className={`mobile-nav:hidden absolute left-0 top-20 w-full bg-surface-0 h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-8 text-fs-h3 transition-all duration-300 ease-in-out ${collapsed ? "scale-y-95 opacity-0 pointer-events-none" : "scale-y-100 opacity-100"} origin-bottom`}
      >
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </nav>
  );
}

export default Nav;


