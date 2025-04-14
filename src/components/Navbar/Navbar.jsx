import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    name: "PERSONAL TRAINING",
    dropdownItems: [
      { id: 101, name: "Certified Personal Trainer (CPT)", path: "/cpt" },
      {
        id: 102,
        name: "Corrective Exercise Specialization (CES)",
        path: "/ces",
      },
      { id: 103, name: "Virtual Coaching Specialization (VCS)", path: "/vcs" },
      {
        id: 104,
        name: "Strength and Conditioning Coach (CSCS Prep)",
        path: "/cscs-prep",
      },
      { id: 105, name: "Group Personal Training", path: "/gpt" },
    ],
  },
  {
    id: 2,
    name: "NUTRITION",
    dropdownItems: [
      { id: 201, name: "Certified Nutrition Coach (CNC)", path: "/cnc" },
      {
        id: 202,
        name: "Certified Sports Nutrition Coach (CSNC)",
        path: "/csnc",
      },
      { id: 203, name: "Weight Loss Specialization (WLS)", path: "/wls" },
    ],
  },
  {
    id: 3,
    name: "WELLNESS",
    dropdownItems: [
      { id: 301, name: "Certified Wellness Coach (CWC)", path: "/cwc" },
      { id: 302, name: "Mental Toughness", path: "/mental-toughness" },
      { id: 303, name: "Behavior Change Specialization (BCS)", path: "/bcs" },
    ],
  },
  {
    id: 4,
    name: "SPECIALIZATIONS",
    dropdownItems: [
      { id: 401, name: "View All Specializations", path: "/specializations" },
      { id: 402, name: "Performance Enhancement (PES)", path: "/pes" },
      { id: 403, name: "Group Fitness Instructor (GFI)", path: "/gfi" },
      { id: 404, name: "Senior Fitness Specialization", path: "/sfs" },
      { id: 405, name: "Youth Exercise Specialization", path: "/yes" },
    ],
  },
  { id: 5, name: "ALL COURSES", dropdownItems: [], path: "/all-courses" },
  {
    id: 6,
    name: "RESOURCES",
    dropdownItems: [
      { id: 601, name: "Blog", path: "/blog" },
      { id: 602, name: "Free Resources & Tools", path: "/free-resources" },
      { id: 603, name: "Career Center & Job Board", path: "/career-center" },
      { id: 604, name: "Podcasts", path: "/podcasts" },
      { id: 605, name: "Webinars", path: "/webinars" },
    ],
  },
  { id: 7, name: "SPECIAL OFFERS", dropdownItems: [], path: "/special-offers" },
];

/**
 * @param {object} props
 * @param {string} props.currentPage
 */
function Navbar({ currentPage }) {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const leaveTimeoutId = useRef(null);

  function menuToggle() {
    console.log("MENU PRESSED");
  }

  function signInButton() {
    console.log("REDIRECT TO SIGN IN W/ DATA");
  }

  const handleMouseEnter = (itemId) => {
    // Clear any pending timeout to hide the menu
    if (leaveTimeoutId.current) {
      clearTimeout(leaveTimeoutId.current);
      leaveTimeoutId.current = null;
    }
    // Set the item being hovered
    const itemHasDropdown =
      navItems.find((item) => item.id === itemId)?.dropdownItems?.length > 0;
    if (itemHasDropdown || hoveredItemId === null) {
      setHoveredItemId(itemId);
    } else {
      // If moving from an item with a dropdown to one without,
      // immediately start the leave process for the old item
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    // Clear any existing timeout (safety measure)
    if (leaveTimeoutId.current) {
      clearTimeout(leaveTimeoutId.current);
    }
    // Start a new timer to hide the menu after a short delay
    leaveTimeoutId.current = setTimeout(() => {
      setHoveredItemId(null);
    }, 200);
  };

  // Calculate active dropdown items (no changes needed here)
  const activeDropdownItems = useMemo(() => {
    if (hoveredItemId === null) {
      return null;
    }
    const activeItem = navItems.find((item) => item.id === hoveredItemId);
    return activeItem?.dropdownItems?.length > 0
      ? activeItem.dropdownItems
      : null;
  }, [hoveredItemId]);

  const isDropdownVisible = activeDropdownItems !== null;

  // Clear timeout on component unmount (good practice)
  useEffect(() => {
    return () => {
      if (leaveTimeoutId.current) {
        clearTimeout(leaveTimeoutId.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav
        aria-label="Main Navigation"
        className="h-[83px] px-4 flex items-center justify-between bg-[var(--ui-color-light)] border-b border-gray-200"
      >
        {/* Nav Left Side */}
        <div className="flex items-center justify-start">
          <img
            src="/images/nav/nasm-logo-blue.svg"
            alt="NASM Logo"
            className="w-[5.5rem] flex-shrink-0"
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

          {/* Desktop Navigation Items */}
          <div className="hidden lg:block lg:ml-[1rem]">
            <ul className="flex flex-wrap justify-center gap-x-4">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  className="py-[calc(83px/2-1rem)]"
                >
                  <Link to={item.path} className="block cursor-pointer">
                    <p
                      className={
                        "text-[0.8rem] text-[var(--brand-color-dark)] font-var-extrabold select-none hover:underline decoration-[var(--brand-color-turquoise)] decoration-3 underline-offset-8"
                      }
                    >
                      {item.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nav Right Side */}
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

      {/* Dropdown */}
      {isDropdownVisible && (
        <div
          className="w-full absolute top-[82px] left-0 bg-white z-40"
          onMouseEnter={() => handleMouseEnter(hoveredItemId)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Inner container for content layout */}
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
              {activeDropdownItems.map((dropdownItem) => (
                <li key={dropdownItem.id}>
                  <Link
                    to={dropdownItem.path || "#"}
                    className="block text-[0.85rem] text-gray-700 hover:text-[var(--brand-color-turquoise)] hover:underline font-semibold"
                    onClick={() => {
                      // Clear timeout and hide menu immediately on click
                      if (leaveTimeoutId.current)
                        clearTimeout(leaveTimeoutId.current);
                      setHoveredItemId(null);
                    }}
                  >
                    {dropdownItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
