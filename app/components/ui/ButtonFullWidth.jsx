import React from "react";

function ButtonFullWidth({ children }) {
  return (
    <a className="text-small font-medium w-full h-12 border-t border-text-primary inline-flex justify-center items-center uppercase hover:text-text-inverse hover:bg-text-primary hover:cursor-pointer gap-2 transition-all duration-200 ease-in">
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-5 text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </a>
  );
}

export default ButtonFullWidth;

