import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StethoscopeIcon, UserCircle, Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <StethoscopeIcon className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">DentalCare</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500 px-3 py-2 text-sm font-medium`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500 px-3 py-2 text-sm font-medium`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={`${
                isActive('/blog') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500 px-3 py-2 text-sm font-medium`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500 px-3 py-2 text-sm font-medium`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Book Appointment
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <UserCircle className="w-6 h-6" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              >
                <UserCircle className="w-6 h-6" />
                <span className="text-sm font-medium">Sign In</span>
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-2 border-t border-gray-200">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 text-base font-medium ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 text-base font-medium ${
                isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 text-base font-medium ${
                isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 text-base font-medium ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Book Appointment
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
              >
                <div className="flex items-center space-x-2">
                  <UserCircle className="w-5 h-5" />
                  <span>Sign In</span>
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;