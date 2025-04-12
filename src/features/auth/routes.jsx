// Defines routes specific to the Authentication feature

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components for this feature
const Signup = React.lazy(() => import('./pages/Signup'));
const Login = React.lazy(() => import('./pages/Login'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));

const AuthRoutes = () => {
  return (
    // Note: No need for <Routes> here if we map directly in the central router
    //       However, using <Routes> allows for potential feature-specific layouts later.
    //       Let's keep it simple for now and define direct routes.
    //       If using <Routes>, paths below would be relative e.g., path="signup"
    //       and central router would use path="/auth/*" element={<AuthRoutes />}
    <>
        {/* These paths are relative to the base path defined in the central router (e.g., /auth) */}
        {/* For simplicity here, we assume direct mapping in central router */}
        {/* See central router file for how these might be nested */}
    </>
  );
};

// Exporting individual routes might be cleaner for direct mapping
export const SignupRoute = <Route path="/signup" element={<Signup />} />;
export const LoginRoute = <Route path="/login" element={<Login />} />;
export const ForgotPasswordRoute = <Route path="/forgotpassword" element={<ForgotPassword />} />;
