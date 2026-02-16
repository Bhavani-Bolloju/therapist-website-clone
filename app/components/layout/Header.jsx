import React from "react";

import Nav from "./Nav";

function Header() {
  return (
    <header className="flex justify-between items-center max-mobile-nav:flex-row-reverse  h-20 bg-red-100">
      <div className="w-fit text-nowrap">
        <a href="">Lilac Template</a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;

