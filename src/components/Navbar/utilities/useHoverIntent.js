import { useState, useRef, useEffect, useCallback } from 'react';

// Default delay in milliseconds before closing the dropdown on mouse leave
const DEFAULT_DELAY = 200;

/**
 * Custom Hook to manage hover state with a delay for dropdown menus.
 * @param {number} [delay=DEFAULT_DELAY] - The delay in ms before closing on leave.
 * @returns {{
 * hoveredItemId: string | number | null,
 * handleTriggerEnter: (itemId: string | number) => void,
 * handleDropdownEnter: () => void,
 * handleLeave: () => void,
 * setHoveredItemId: React.Dispatch<React.SetStateAction<string | number | null>>
 * }} - Object containing state and event handlers.
 */
export function useHoverIntent(delay = DEFAULT_DELAY) {
  // State: Which item ID is currently hovered/active
  const [hoveredItemId, setHoveredItemId] = useState(null);
  // Ref: To store the timeout ID for the delayed leave
  const leaveTimeoutId = useRef(null);

  // --- Utility Function ---
  // useCallback ensures this function reference is stable unless delay changes
  const clearLeaveTimeout = useCallback(() => {
    if (leaveTimeoutId.current) {
      clearTimeout(leaveTimeoutId.current);
      leaveTimeoutId.current = null;
    }
  }, []);

  // --- Event Handlers ---

  // Call when mouse enters a trigger element
  const handleTriggerEnter = useCallback((itemId) => {
    clearLeaveTimeout(); // Clear any pending leave timeout
    setHoveredItemId(itemId);
  }, [clearLeaveTimeout]);

  // Call when mouse enters the dropdown container itself
  const handleDropdownEnter = useCallback(() => {
    // When entering the dropdown, just clear the leave timeout.
    clearLeaveTimeout();
  }, [clearLeaveTimeout]);

  // Call when mouse leaves a trigger element OR the dropdown container
  const handleLeave = useCallback(() => {
    clearLeaveTimeout(); // Clear previous timeout just in case
    // Start a new timeout to set the hovered item to null after a delay
    leaveTimeoutId.current = setTimeout(() => {
      setHoveredItemId(null);
    }, delay);
  }, [delay, clearLeaveTimeout]); // Recreate if delay or clearLeaveTimeout changes

  // --- Effect for Cleanup ---
  // Ensure the timeout is cleared if the component using the hook unmounts
  useEffect(() => {
    // The returned function is the cleanup function
    return () => {
      clearLeaveTimeout();
    };
  }, [clearLeaveTimeout]); // Run effect/cleanup only if clearLeaveTimeout changes (it won't)

  // --- Return Values ---
  // Expose the state and the handlers needed by the components
  return {
    hoveredItemId,       // The ID of the item currently hovered (or null)
    handleTriggerEnter,  // Attach to onMouseEnter of trigger items (li)
    handleDropdownEnter, // Attach to onMouseEnter of dropdown container
    handleLeave,         // Attach to onMouseLeave of BOTH triggers and dropdown
    setHoveredItemId,    // Allow direct setting (e.g., to close on click)
  };
}