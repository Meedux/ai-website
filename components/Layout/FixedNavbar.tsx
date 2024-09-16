"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Assuming you're using Next.js
import NavbarContent from "./NavbarContent";

const FixedNavbar = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // At the top of the page, hide the fixed navbar
        setShowFixedNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up and not at the top
        setShowFixedNavbar(true);
      } else {
        // Scrolling down
        setShowFixedNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Fixed Navbar, shown only when scrolling up */}
      <div
        className={`navbar bg-white fixed top-0 z-10 transition-transform duration-300 ${
          showFixedNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavbarContent />
      </div>
    </>
  )
}

export default FixedNavbar