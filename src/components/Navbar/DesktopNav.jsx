import React from 'react';
import { Link } from 'react-router-dom';

function DesktopNav({ navItems, handleTriggerEnter, handleMouseLeave }) {
  return (
    <div className="hidden lg:block lg:ml-[1rem]">
      <ul className="flex flex-wrap justify-center gap-x-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => handleTriggerEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            className="py-[calc(83px/2-1rem)]" // You might pass height or calculate differently if needed
          >
            {item.path && (!item.dropdownItems || item.dropdownItems.length === 0) ? (
              <Link to={item.path} className="block cursor-pointer">
                <p className="text-[0.8rem] text-[var(--brand-color-dark)] font-var-extrabold select-none hover:underline decoration-[var(--brand-color-turquoise)] decoration-3 underline-offset-8">
                  {item.name}
                </p>
              </Link>
            ) : (
              <p className="text-[0.8rem] text-[var(--brand-color-dark)] font-var-extrabold select-none hover:underline decoration-[var(--brand-color-turquoise)] decoration-3 underline-offset-8 cursor-default">
                {item.name}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopNav;