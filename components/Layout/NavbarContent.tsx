import Link from "next/link";
import React from "react";

const NavbarContent = () => {
  return (
    <>
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-black text-xl">
          DeepAscension
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default NavbarContent;
