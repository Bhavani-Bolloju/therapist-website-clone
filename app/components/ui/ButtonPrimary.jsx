import React from "react";

function ButtonPrimary({ children }) {
  return (
    <a className="text-small uppercase font-medium inline-flex items-center justify-center gap-2 border border-text-primary px-5 py-3 hover:bg-text-primary hover:text-text-inverse hover:cursor-pointer">
      <span>{children}</span>
      <span>
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
      </span>
    </a>
  );
}

export default ButtonPrimary;

