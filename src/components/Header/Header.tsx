import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ROUTES } from '@utils/constants';
import Container from '@components/Container/Container';

/**
 * Header Component with responsive navigation
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'About Us', path: ROUTES.ABOUT },
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'Industries', path: ROUTES.INDUSTRIES },
    { name: 'Careers', path: ROUTES.CAREERS },
    { name: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Enterprise Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-primary-600 ${
                    isActive ? 'text-primary-600' : isScrolled ? 'text-gray-700' : 'text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-primary-600 ${
                      isActive ? 'text-primary-600' : 'text-gray-700'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
