import CookieBanner from "../CookieBanner/CookieBanner";
import ContinuityBar from "../ContinuityBar/ContinuityBar";

function Navbar() {
  return (
    <>
      <CookieBanner />
      <ContinuityBar />

      {/* Navbar */}
      <div className="">
        <p>Navbar</p>
      </div>
    </>
  );
}

export default Navbar;
