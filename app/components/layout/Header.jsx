import React from "react";

import Nav from "./Nav";

function Header() {
  return (
    <header className="flex justify-between items-center max-mobile-nav:flex-row-reverse  h-20 px-[5vw] bg-surface-0">
      <div className="w-fit text-nowrap">
        <a href="" className="border-none">
          Dr. Maya Reynolds, PsyD
        </a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;

