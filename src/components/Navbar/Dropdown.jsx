import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Accept props passed from Navbar
function Dropdown({
  navItems,
  hoveredItemId,
  handleDropdownEnter, // Keep for parent logic if needed
  handleMouseLeave,   // Keep for parent logic if needed
  setHoveredItemId
}) {

  // --- State for Animation Control ---
  // Determines if the component should be rendered at all (allows exit animation)
  const [shouldRender, setShouldRender] = useState(false);
  // Controls the animation classes (visible/hidden state for CSS transition)
  const [isVisibleClass, setIsVisibleClass] = useState(false);
  // Define the animation duration (must match Tailwind duration class)
  const animationDuration = 300; // e.g., 300ms for duration-300

  // Calculate active dropdown items based on the hoveredItemId prop
  const activeDropdownItems = useMemo(() => {
    if (hoveredItemId === null) {
      return null;
    }
    const activeItem = navItems.find(item => item.id === hoveredItemId);
    return activeItem?.dropdownItems?.length > 0 ? activeItem.dropdownItems : null;
  }, [hoveredItemId, navItems]);

  // Determine the *target* visibility based on hover state and items
  const isTargetVisible = activeDropdownItems !== null;

  // --- Effect to manage rendering and animation classes ---
  useEffect(() => {
    let timeoutId;

    if (isTargetVisible) {
      // --- Animate In ---
      // 1. Make sure the component is rendered
      setShouldRender(true);
      // 2. Slightly delay applying 'visible' class to ensure transition triggers
      //    Using requestAnimationFrame ensures the element is painted first
      requestAnimationFrame(() => {
        setIsVisibleClass(true);
      });

    } else {
      // --- Animate Out ---
      // 1. Apply 'hidden' class to start the animation
      setIsVisibleClass(false);
      // 2. Wait for animation duration to complete
      timeoutId = setTimeout(() => {
        // 3. Unmount the component after animation finishes
        setShouldRender(false);
      }, animationDuration);
    }

    // --- Cleanup ---
    // Clear the timeout if the component unmounts or visibility changes
    // before the timeout completes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isTargetVisible, animationDuration]); // Rerun effect if target visibility changes

  // --- Conditional Rendering ---
  // Don't render anything if shouldRender is false
  if (!shouldRender) {
    return null;
  }

  // --- Render Dropdown with Animation Classes ---
  return (
    <div
      className={`
        absolute top-[82px] left-0 w-full bg-white z-50 shadow-lg
        transition-all ease-in-out
        duration-${animationDuration}
        ${isVisibleClass
          ? 'opacity-100 translate-y-0' // Visible state: fully opaque, no translation
          : 'opacity-0 -translate-y-16 pointer-events-none' // Hidden state: transparent, slightly moved up, ignore clicks
        }
      `}
      onMouseEnter={handleDropdownEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Inner container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Render the links */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
          {/* Make sure activeDropdownItems is available before mapping */}
          {activeDropdownItems && activeDropdownItems.map((dropdownItem) => (
            <li key={dropdownItem.id}>
              <Link
                to={dropdownItem.path || '#'}
                className="block text-[0.85rem] text-gray-700 hover:text-[var(--brand-color-turquoise)] hover:underline font-semibold"
                onClick={() => setHoveredItemId(null)} // Close dropdown on click
              >
                {dropdownItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;