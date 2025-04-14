import React from 'react';
import { Link } from 'react-router-dom';

// Define your navigation items
const navItems = [
  { id: 1, name: 'PERSONAL TRAINING' },
  { id: 2, name: 'NUTRITION' },
  { id: 3, name: 'WELLNESS' },
  { id: 4, name: 'SPECIALIZATIONS' },
  { id: 5, name: 'ALL COURSES' },
  { id: 6, name: 'RESOURCES' },
  { id: 7, name: 'SPECIAL OFFERS' },
];

/**
 * @param {object} props
 * @param {string} props.currentPage
 */

function Navbar({ currentPage }) {
  function menuToggle() {
    console.log("MENU PRESSED");
  }

  function signInButton() {
    console.log("REDIRECT TO SIGN IN W/ DATA");
  }

  return (
    <>
      {/* Navbar */}
      <nav
        aria-label="Main Navigation"
        className="h-[83px] px-4 flex items-center justify-between bg-[var(--ui-color-light)]"
      >
        {/* Nav Left Side */}
        <div className="flex items-center justify-start">
          <img
            src="/images/nav/nasm-logo-blue.svg"
            alt="NASM Logo"
            className="w-[5.5rem]"
          />
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
          <div className="hidden lg:block lg:ml-[1rem]">
            <ul className="flex flex-wrap justify-center gap-x-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <p
                    className={"text-[0.8rem] text-[var(--brand-color-dark)] font-var-extrabold select-none hover:underline decoration-[var(--brand-color-turquoise)] decoration-3 underline-offset-8"}
                  >
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nav Right Side */}
        <div className="flex items-center justify-end">
          <button
            onClick={signInButton}
            className="w-[82px] h-[35px] px-4 pt-[9px] pb-[12px] text-[14px] rounded-[25px] bg-[var(--brand-color-dark)] whitespace-nowrap leading-none"
          >
            SIGN IN
          </button>
          <a href="https://shop.nasm.org/cart">
            <img
              src="/images/nav/nasm-shopping-cart.png"
              alt="Cart"
              className="w-[2.5rem] ml-4 mb-2"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
