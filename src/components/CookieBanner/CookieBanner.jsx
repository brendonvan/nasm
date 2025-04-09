import { useState } from "react";

function CookieBanner() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const hideCookieBanner = () => {
    setShowCookieBanner(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="right-0 w-full p-[15px] text-[var(--ui-color-light)] bg-[var(--brand-color-dark)] z-[1000] transition-all duration-300">
          <div className="flex items-center justify-between relative">
            <p>
              This website uses cookies to improve your experience.
              <button
                onClick={toggleDropdown}
                className="pl-[4px] underline text-[var(--brand-color-highlight)]"
              >
                View Policy
              </button>
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={hideCookieBanner}
                className="flex-none leading-[100%] flex items-center justify-center px-[7px] pt-[1px] pb-[4px] bg-[var(--brand-color-highlight)] text-[var(--brand-color-black)] rounded-[12px]"
              >
                <p>OK</p>
              </button>
              <button onClick={hideCookieBanner}>
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="240 240 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="currentColor" strokeWidth="2">
                    <path
                      d="M255.6 255.6l-11.2-11.2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M255.6 244.4l-11.2 11.2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showDropdown ? "max-h-[500px] mt-2" : "max-h-0"
            }`}
          >
            This site uses cookies to store information on your computer. Some are
            essential to make our site work; others help us improve the user
            experience or allow us to effectively communicate with you. By using the
            site, you consent to the placement of these cookies.&nbsp;
            <a
              className="text-[var(--brand-color-highlight)]"
              href="https://auth.nasm.org/policy.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our Cookie Policy to learn more.
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieBanner;
