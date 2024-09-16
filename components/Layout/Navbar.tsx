"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Assuming you're using Next.js
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