import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaSearch } from 'react-icons/fa';
import Container from '@components/Container/Container';
import { navigationConfig } from '@config/megaMenuData';
import { MegaMenuConfig } from '@types/megaMenu.types';

/**
 * Enterprise Header Component with Mega Menu
 * Layout: Logo (Left) | Navigation (Center) | Search (Right)
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle mega menu hover with delay
  const handleMegaMenuEnter = (label: string) => {
    if (megaMenuTimeout.current) {
      clearTimeout(megaMenuTimeout.current);
    }
    setActiveMegaMenu(label);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const handleMegaMenuHover = () => {
    if (megaMenuTimeout.current) {
      clearTimeout(megaMenuTimeout.current);
    }
  };

  // Toggle mobile submenu
  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  // Close all menus
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setActiveMobileSubmenu(null);
    setIsSearchOpen(false);
  };

  // Flatten all items from categories for horizontal layout
  const getAllMenuItems = (item: MegaMenuConfig) => {
    const allItems: Array<{
      id: string;
      label: string;
      path?: string;
      image?: string;
      description?: string;
      categoryTitle?: string;
    }> = [];

    item.categories?.forEach((category) => {
      category.items.forEach((menuItem) => {
        allItems.push({
          ...menuItem,
          categoryTitle: category.title,
        });
      });
    });

    return allItems;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <Container maxWidth="full">
          {/* Main Header Row - 3 Column Layout */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-8">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center z-50" onClick={closeAllMenus}>
              <img
                src="/images/logo.jpeg"
                alt="Company Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2">
              {navigationConfig.mainNav.map((item: MegaMenuConfig) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && handleMegaMenuEnter(item.label)}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  {item.path && !item.hasMegaMenu ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md relative group ${
                          isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                        }`
                      }
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  ) : (
                    <button
                      className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md relative group flex items-center space-x-1 ${
                        activeMegaMenu === item.label
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasMegaMenu && (
                        <FaChevronDown
                          className={`text-xs transition-transform duration-200 ${
                            activeMegaMenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${
                          activeMegaMenu === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </button>
                  )}

                  {/* Mega Menu Dropdown */}
                  {item.hasMegaMenu && activeMegaMenu === item.label && (
                    <div
                      className="fixed left-0 right-0 top-20 pt-2 flex justify-center"
                      onMouseEnter={handleMegaMenuHover}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="bg-white rounded-lg shadow-2xl border border-gray-100 p-8 animate-slide-down w-full max-w-7xl mx-4">
                        <div className="flex flex-wrap gap-6 justify-start">
                          {getAllMenuItems(item).map((menuItem) => (
                            <Link
                              key={menuItem.id}
                              to={menuItem.path || '#'}
                              onClick={closeAllMenus}
                              className="block group w-[200px]"
                            >
                              <div className="relative overflow-hidden rounded-lg bg-gray-50 mb-2 aspect-[4/3] transition-transform duration-300 group-hover:scale-105">
                                <img
                                  src={menuItem.image}
                                  alt={menuItem.label}
                                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide group-hover:text-primary-600 transition-colors duration-200">
                                {menuItem.label}
                              </h4>
                              {menuItem.description && (
                                <p className="text-xs text-gray-600 mt-1">{menuItem.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: Search + Mobile Menu */}
            <div className="flex items-center justify-end space-x-2 z-50">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Search"
              >
                <FaSearch className="text-xl" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-2xl text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Search Bar (Expandable) */}
          {isSearchOpen && (
            <div className="py-4 border-t border-gray-200 animate-slide-down">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  autoFocus
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
            onClick={closeAllMenus}
          ></div>

          {/* Mobile Menu Panel */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto animate-slide-down">
            <Container>
              <nav className="py-6">
                {navigationConfig.mainNav.map((item: MegaMenuConfig) => (
                  <div key={item.label} className="border-b border-gray-200">
                    {item.hasMegaMenu ? (
                      <div>
                        <button
                          onClick={() => toggleMobileSubmenu(item.label)}
                          className="w-full flex items-center justify-between py-4 text-gray-900 font-medium hover:text-primary-600 transition-colors"
                        >
                          <span>{item.label}</span>
                          <FaChevronRight
                            className={`text-sm transition-transform duration-200 ${
                              activeMobileSubmenu === item.label ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile Submenu */}
                        {activeMobileSubmenu === item.label && (
                          <div className="pb-4 pl-4 animate-slide-down">
                            <div className="flex flex-wrap gap-3">
                              {getAllMenuItems(item).map((menuItem) => (
                                <Link
                                  key={menuItem.id}
                                  to={menuItem.path || '#'}
                                  onClick={closeAllMenus}
                                  className="flex flex-col w-[calc(50%-6px)] group"
                                >
                                  {menuItem.image && (
                                    <div className="w-full h-24 rounded overflow-hidden mb-2">
                                      <img
                                        src={menuItem.image}
                                        alt={menuItem.label}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  )}
                                  <div className="text-xs font-medium text-gray-900 group-hover:text-primary-600 transition-colors uppercase">
                                    {menuItem.label}
                                  </div>
                                  {menuItem.description && (
                                    <div className="text-xs text-gray-600 mt-0.5">
                                      {menuItem.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={item.path || '#'}
                        onClick={closeAllMenus}
                        className={({ isActive }) =>
                          `block py-4 font-medium transition-colors ${
                            isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
