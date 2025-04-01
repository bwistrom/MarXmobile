import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { navigationConfig } from '../config/navigation';
import './MobileRouter.css';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      {navigationConfig.map(({ path, label, icon }) => (
        <Link
          key={path}
          to={path}
          className={`nav-item ${location.pathname === path ? 'active' : ''}`}
          aria-label={label}
        >
          <i className={`fas ${icon}`} aria-hidden="true"></i>
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};

const MobileRouter = () => {
  return (
    <Router>
      <div className="mobile-container">
        <main className="mobile-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <MobileNav />
      </div>
    </Router>
  );
};

export default MobileRouter; 