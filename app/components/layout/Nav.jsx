"use client";

import React, { useState } from "react";

function Nav() {
  const [collapsed, setCollapsed] = useState(true);

  const handleNav = function () {
    setCollapsed((prev) => !prev);
  };

  return (
    <nav className="w-full h-full flex items-center mobile-nav:justify-end">
      <button className="max-mobile-nav:flex hidden" onClick={handleNav}>
        Ham btn
      </button>
      <ul
        className={`flex max-mobile-nav:flex-col ${collapsed && "max-mobile-nav:hidden"}`}
      >
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </nav>
  );
}

export default Nav;

