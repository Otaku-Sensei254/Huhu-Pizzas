import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import StaggeredMenu from './StaggeredMenu';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { getTotalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/promotions', label: 'Special Deals' },
    { path: '/contact', label: 'Contact & Delivery' },
  ];

  const cartCount = getTotalItems();

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-container container">
        <Link to="/" className="logo" aria-label="Huhus Pizza - Home">
          <img className="logo-image" src="/Huhus_logo.png" alt="" />
        </Link>

        <nav className="nav-desktop" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                  aria-current={location.pathname === path ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/menu" className="btn btn-primary btn-sm header-cta desktop-only">
            Order Now
          </Link>
          <button
            className="cart-button"
            onClick={openCart}
            aria-label={`Shopping cart${cartCount > 0 ? ` with ${cartCount} items` : ''}`}
          >
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="cart-count" aria-live="polite">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

          <StaggeredMenu
            items={navLinks.map(({ path, label }) => ({ label, ariaLabel: `Go to ${label}`, link: path }))}
            open={isMobileMenuOpen}
            onOpen={() => setIsMobileMenuOpen(true)}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>

    </header>
  );
};

export default Header;
