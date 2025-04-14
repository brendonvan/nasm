import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

// Accept props passed from Navbar
function Dropdown({
  navItems,
  hoveredItemId,
  handleDropdownEnter,
  handleMouseLeave,
  setHoveredItemId
}) {

  // Calculate active dropdown items based on the hoveredItemId prop
  const activeDropdownItems = useMemo(() => {
    if (hoveredItemId === null) {
      return null;
    }
    const activeItem = navItems.find(item => item.id === hoveredItemId);
    // Ensure it exists and has items before returning
    return activeItem?.dropdownItems?.length > 0 ? activeItem.dropdownItems : null;
  }, [hoveredItemId, navItems]); // Recalculate if hoveredId or navItems change

  // Determine visibility based on whether we found active items
  const isDropdownVisible = activeDropdownItems !== null;

  // Don't render anything if not visible
  if (!isDropdownVisible) {
    return null;
  }

  return (
    <div
      className="absolute top-[82px] left-0 w-full bg-white z-40"
      onMouseEnter={handleDropdownEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Inner container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Render the links */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
          {activeDropdownItems.map((dropdownItem) => (
            <li key={dropdownItem.id}>
              <Link
                to={dropdownItem.path || '#'}
                className="block text-[0.85rem] text-gray-700 hover:text-[var(--brand-color-turquoise)] hover:underline font-semibold"
                onClick={() => setHoveredItemId(null)}
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