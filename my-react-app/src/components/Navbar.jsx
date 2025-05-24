import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NotificationContext } from '../App';
import { AuthContext } from './context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { notification, setNotification } = useContext(NotificationContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
    setIsMobileOpen(false);
    navigate('/', { replace: true });
  };

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);

  const handleProfileClick = () => {
    setNotification(false);
    setIsMobileOpen(false);
    navigate('/profile');
  };

  return (
    <nav className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          MyApp
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/addtraveldetails" className="text-gray-700 hover:text-blue-600 font-medium">Travelling Customer</Link>
          <Link to="/actualcustomer" className="text-gray-700 hover:text-blue-600 font-medium">Actual Customer</Link>
          <Link to="/careers" className="text-gray-700 hover:text-blue-600 font-medium">Careers</Link>

          {currentUser ? (
            <>
              <button onClick={handleProfileClick} className="relative text-blue-700 font-semibold flex items-center gap-1">
                <User size={18} />
                {currentUser.name || 'User'}
                {notification && (
                  <>
                    <span className="absolute -top-1 -right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                    <span className="absolute -top-1 -right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  </>
                )}
              </button>
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
              <button
                onClick={() => navigate('/login', { state: { from: currentPath } })}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800">
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden px-4 pb-4 bg-gray-50 border-t overflow-hidden"
          >
            <div className="space-y-2">
              <Link to="/" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/addtraveldetails" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Travelling Customer</Link>
              <Link to="/actualcustomer" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Actual Customer</Link>
              <Link to="/careers" onClick={toggleMobileMenu} className="block text-gray-700 hover:text-blue-600">Careers</Link>

              {currentUser ? (
                <>
                  <button onClick={handleProfileClick} className="relative flex items-center text-gray-800 gap-1 font-medium">
                    <User size={18} />
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
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      navigate('/login', { state: { from: currentPath } });
                    }}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
