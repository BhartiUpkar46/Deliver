import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NotificationContext, AuthContext } from '../App';

const Navbar = () => {
  const { notification, setNotification } = useContext(NotificationContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
    setIsMobileOpen(false);
    navigate('/', { replace: true });
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    setNotification(false); // clear notification when profile is visited
    setIsMobileOpen(false);
    navigate('/profile');
  };

  return (
    <nav className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-blue-700">
            MyApp
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/verifytraveldetails" className="text-gray-700 hover:text-blue-600 font-medium">Travelling Customer</Link>
          <Link to="/actualcustomer" className="text-gray-700 hover:text-blue-600 font-medium">Actual Customer</Link>
          <Link to="/careers" className="text-gray-700 hover:text-blue-600 font-medium">Careers</Link>

          {currentUser ? (
            <>
              <span className="text-gray-800 relative">
                Welcome,{' '}
                <button onClick={handleProfileClick} className="font-semibold text-blue-700 relative inline-block">
                  {currentUser.name || 'User'}
                  {notification && (
                    <>
                      <span className="absolute -top-1 -right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                      <span className="absolute -top-1 -right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                    </>
                  )}
                </button>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-gray-800 focus:outline-none">
            {isMobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-50 border-t">
          <Link to="/" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/verifytraveldetails" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Travelling Customer</Link>
          <Link to="/actualcustomer" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Actual Customer</Link>
          <Link to="/careers" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Careers</Link>

          {currentUser ? (
            <>
              <button
                onClick={handleProfileClick}
                className="relative w-full text-left text-gray-800 font-medium"
              >
                Profile
                {notification && (
                  <>
                    <span className="absolute top-0 right-4 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                    <span className="absolute top-0 right-4 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  </>
                )}
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button onClick={toggleMobileMenu} className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
              </Link>
              <Link to="/login">
                <button onClick={toggleMobileMenu} className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
