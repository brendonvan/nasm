// Central router configuration - Assembles routes from all features

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Import Layouts
import MainLayout from "../layouts/MainLayout";

// Import individual routes if not using nested <Routes> in feature file
import {
  SignupRoute,
  LoginRoute,
  ForgotPasswordRoute,
} from "../features/auth/routes";

// Import Feature Routes Components (using default export for nested <Routes>)
import CoreRoutes from "../features/core/routes";
import BlogRoutes from "../features/blogs/routes";
import ProductRoutes from "../features/products/routes";

// Fallback component for React.lazy
const LoadingFallback = () => <div>Loading...</div>;

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Group routes using the MainLayout */}
        <Route element={<MainLayout />}>
          {/* Auth routes */}
          {SignupRoute}
          {LoginRoute}
          {ForgotPasswordRoute}

          {/* Core routes */}
          <Route path="/*" element={<CoreRoutes />} />

          {/* Blog routes */}
          <Route path="/blogs/*" element={<BlogRoutes />} />

          {/* Product routes */}
          <Route path="/products/*" element={<ProductRoutes />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
