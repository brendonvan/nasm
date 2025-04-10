import { Outlet } from "react-router-dom";

import CookieBanner from "../components/CookieBanner/CookieBanner";
import ContinuityBar from "../components/ContinuityBar/ContinuityBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <CookieBanner />
      <ContinuityBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
