import './App.css';
import React, { Suspense } from 'react';
import AppRoutes from './Routes/Routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading page...</div>}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;