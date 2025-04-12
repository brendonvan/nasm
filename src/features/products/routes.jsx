// Defines routes specific to the Products feature

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components for this feature
const ProductList = React.lazy(() => import('./pages/ProductList'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));

const ProductRoutes = () => {
  return (
    <Routes>
       {/* Path is relative to the base path defined in the central router (e.g., /products) */}
      <Route path="" element={<ProductList />} />
      <Route path=":productId" element={<ProductDetail />} />
    </Routes>
  );
};

export default ProductRoutes;