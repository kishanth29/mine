"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNavbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Handlers
  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <div>
      {/* Main Navigation */}
      <Nav openNav={openMobileNav} />

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <MobileNav showNav={isMobileNavOpen} closeNav={closeMobileNav} />
      )}
    </div>
  );
};

export default ResponsiveNavbar;
// 48:22
