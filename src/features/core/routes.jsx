// Defines routes specific to the Core feature

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components for this feature
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const CoreRoutes = () => {
    // Using nested Routes here makes sense as it groups core pages naturally
    return (
        <Routes>
             {/* Use index route for the exact root path */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
             {/* Catch-all within this feature's scope */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default CoreRoutes;