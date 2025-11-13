import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { ShopContext } from "../context/ShopContext";
import { AppContext } from "../context/AppContext";
import { useRef } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const { token, setToken, userData } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        document.getElementById("profile-dropdown")?.classList.add("hidden");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-[#9e2a2c] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 sm:py-1 md:py-2">
     <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

          {/* Logo and mobile toggle */}
          <div className="flex items-center justify-between w-full md:w-auto space-x-2 sm:space-x-4">

            <button
              className="md:hidden p-1.5 sm:p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#9e2a2c] focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {showMenu ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
            
<NavLink
  to="/"
  className="flex items-center justify-center md:justify-start flex-shrink-0 w-full md:w-auto"
>
  <div className="text-center md:text-left mb-0 sm:mb-1 md:mb-0">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      LashedBy
    </h3>
    <div className="w-12 sm:w-16 md:w-20 h-1 bg-gray-900 rounded-full"></div>
  </div>
</NavLink>


          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 lg:space-x-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold bg-[#9e2a2c]-sm"
                      : "text-gray-300 hover:text-white hover:bg-[#9e2a2c]"
                  }`
                }
              >
                HOME
              </NavLink>

              {["ABOUT", "SERVICES", "TRAINING"].map((item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white font-semibold bg-gray-900 -sm"
                        : "text-gray-300 hover:text-white hover:bg-[#9e2a2c]"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
       

            {/* Profile Section */}
            {token && userData ? (
              <div ref={dropdownRef} className="relative">
                <button 
                  className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-lg hover:bg-[#9e2a2c] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  onClick={() => {
                    const dropdown = document.getElementById('profile-dropdown');
                    dropdown?.classList.toggle('hidden');
                  }}
                >
                  <img
                    src={userData.image}
                    alt="Profile"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-gray-600 object-cover hover:border-gray-400 hover:scale-105 transition-all duration-200"
                  />
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </button>
                
                <div 
                  id="profile-dropdown"
                  className="absolute top-full right-0 mt-2 w-44 sm:w-48 bg-white text-gray-700 rounded-lg shadow-lg border border-gray-200 py-2 z-50 hidden"
                >
                  <div className="px-3 sm:px-4 py-2 border-b border-gray-100">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">My Account</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      document.getElementById('profile-dropdown')?.classList.add('hidden');
                    }}
                    className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    My Profile
                  </button>
                  
                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      document.getElementById('profile-dropdown')?.classList.add('hidden');
                    }}
                    className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    My Appointments
                  </button>
                  
                  
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button
                      onClick={() => {
                        logout();
                        document.getElementById('profile-dropdown')?.classList.add('hidden');
                      }}
                      className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-white text-red-600 px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full font-light hover:bg-primary-dark transition-all duration-300 text-xs sm:text-sm md:text-base shadow-sm"
              >
                <span className="hidden sm:inline">Create Account</span>
                <span className="sm:hidden">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMenu}
          />

          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#9e2a2c] shadow-xl z-50 md:hidden">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 border-b border-pink-800">
           
              <button
                className="p-1.5 sm:p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#9e2a2c] transition-colors"
                onClick={toggleMenu}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-3 sm:px-4 py-4 sm:py-6">
              <nav className="space-y-1 sm:space-y-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gray-900 text-white shadow-sm"
                        : "text-gray-300 hover:text-white hover:bg-gray-900"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  HOME
                </NavLink>

                {["ABOUT", "SERVICES", "TRAINING"].map((item, index) => (
                  <NavLink
                    key={index}
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gray-900 text-white shadow-sm"
                          : "text-gray-300 hover:text-white hover:bg-gray-900"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {item}
                  </NavLink>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-800">
                  <NavLink
                    to="/services"
                    className="w-full flex items-center justify-center px-4 py-2.5 sm:py-3 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    Book now
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;