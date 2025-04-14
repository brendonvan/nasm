import React from "react";
import { Link } from "react-router-dom";
import { useHoverIntent } from "./utilities/useHoverIntent";
import Dropdown from "./Dropdown";
import DesktopNav from "./DesktopNav"; // Import the new component
import { navItems } from './data/navigationData';

function Navbar({ currentPage }) {
  const {
    hoveredItemId,
    handleTriggerEnter,
    handleDropdownEnter,
    handleMouseLeave,
    setHoveredItemId,
  } = useHoverIntent();

  function menuToggle() {
    console.log("MENU PRESSED");
  }

  function signInButton() {
    console.log("REDIRECT TO SIGN IN W/ DATA");
  }

  return (
    <div className="relative">
      {/* Navbar */}
      <nav
        aria-label="Main Navigation"
        className="h-[83px] px-4 flex items-center justify-between bg-[var(--ui-color-light)] border-b border-gray-200"
      >
        {/* Left Side */}
        <div className="flex items-center justify-start">
          <img
            src="/images/nav/nasm-logo-blue.svg"
            alt="NASM Logo"
            className="w-[5.5rem] flex-shrink-0"
          />
          {/* Mobile Controls */}
          <img
            src="/images/nav/nasm-menu.png"
            alt="Menu"
            onClick={menuToggle}
            className="w-[3rem] mx-4 block lg:hidden"
          />
          <a href="tel:+18004606276" className="block lg:hidden">
            <img
              src="/images/nav/nasm-mobile.png"
              alt="Phone"
              className="w-[2rem]"
            />
          </a>
          {/* Desktop Navigation Links */}
          <DesktopNav
             navItems={navItems}
             handleTriggerEnter={handleTriggerEnter}
             handleMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end flex-shrink-0">
          <button
            onClick={signInButton}
            className="w-[82px] h-[35px] px-4 pt-[9px] pb-[12px] text-[14px] rounded-[25px] bg-[var(--brand-color-dark)] whitespace-nowrap leading-none text-white"
          >
            SIGN IN
          </button>
          <a href="https://shop.nasm.org/cart">
            <img
              src="/images/nav/nasm-shopping-cart.png"
              alt="Cart"
              className="w-[2rem] ml-2 mb-1"
            />
          </a>
        </div>
      </nav>

      <Dropdown
        navItems={navItems}
        hoveredItemId={hoveredItemId}
        handleDropdownEnter={handleDropdownEnter}
        handleMouseLeave={handleMouseLeave}
        setHoveredItemId={setHoveredItemId}
      />
    </div>
  );
}

export default Navbar;