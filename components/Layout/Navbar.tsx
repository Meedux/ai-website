"use client";

import FixedNavbar from "./FixedNavbar";
import BaseNavbar from "./BaseNavbar";

const Navbar = () => {
  

  return (
    <>
      {/* Base Navbar */}
      <BaseNavbar />
      <FixedNavbar />
    </>
  );
};

export default Navbar;