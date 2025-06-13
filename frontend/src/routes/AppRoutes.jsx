import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from '../auth/Login';
import SignUp from '../auth/Signin';
import ForgotPassword from '../auth/Fpassword';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Dashboard from '../pages/Dashboard'; 
import CV_Build from '../pages/CV_Build';  
import Interview from '../pages/Interviews';
import Settings from '../pages/Settings/Settings';  
import Home from '../pages/Home';  
import Profile from '../pages/Settings/Profile';

const AppRoutes = () => {
  const location = useLocation();
  const hideNavAndFooter = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavAndFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />  
          <Route path="/home" element={<Home />} />  
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cv-builder" element={<CV_Build />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    
    </div>
  );
};

export default AppRoutes;
