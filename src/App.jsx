import "./App.css";
import React, { Suspense } from "react";
import AppRoutes from "./router";

import CookieBanner from "./components/CookieBanner/CookieBanner";
import ContinuityBar from "./components/ContinuityBar/ContinuityBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CookieBanner />
        <ContinuityBar />
        <Navbar />
        <AppRoutes />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
