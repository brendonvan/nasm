// Defines routes specific to the Blogs feature

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components for this feature
const BlogList = React.lazy(() => import('./pages/BlogList'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

const BlogRoutes = () => {
  return (
    <Routes>
      {/* Path is relative to the base path defined in the central router (e.g., /blogs) */}
      <Route path="" element={<BlogList />} />
      <Route path=":blogId" element={<BlogPost />} />
    </Routes>
  );
};

export default BlogRoutes;