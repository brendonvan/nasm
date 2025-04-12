function Navbar() {

  function menuToggle() {
    console.log('MENU PRESSED')
  }

  function signInButton() {
    console.log('REDIRECT TO SIGN IN W/ DATA');
  }

  return (
    <>
      {/* Navbar */}
      <div className="h-[83px] px-4 flex items-center justify-between bg-[var(--ui-color-light)]">
        {/* Nav Left Side */}
        <div className="flex items-center justify-start">
          <img src="/images/nasm-logo-blue.svg" alt="NASM Logo" className="w-[5.5rem]"/>
          <img src="/images/nasm-menu.png" alt="Menu" onClick={menuToggle} className="w-[3rem] mx-4"/>
          <a href="tel:+18004606276">
            <img src="/images/nasm-mobile.png" alt="Phone" className="w-[2rem]"/>
          </a>
        </div>

        {/* Nav Right Side */}
        <div className="flex items-center justify-end">
          <button onClick={signInButton} className="px-4 pt-[9px] pb-[12px] text-[14px] rounded-[25px] bg-[var(--brand-color-dark)] leading-none">SIGN IN</button>
          <a href="https://shop.nasm.org/cart">
            <img src="/images/nasm-shopping-cart.png" alt="Cart" className="w-[2.5rem] ml-4 mb-2"/>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
