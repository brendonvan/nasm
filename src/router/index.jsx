import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Lazy loaded route groups
const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

// Dynamic pages
const Products = React.lazy(() => import("../pages/PDPs/PDPs"));
// const ProductDetails = React.lazy(() => import('../pages/ProductDetails/ProductDetails'));
const Blogs = React.lazy(() => import("../pages/Blogs/Blogs"));
// const BlogPost = React.lazy(() => import('../pages/BlogPost/BlogPost'));

const AppRoutes = () => {
  return (
    <>
      {/* Main site layout */}
      <Routes>
        <Route element={<MainLayout />}>
          {/* Top-level routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Products />} />

          {/* Blogs */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:blogId" element={<Blogs />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
