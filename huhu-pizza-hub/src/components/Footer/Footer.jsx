import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: 'Home', href: '/' },
      { label: 'Signature Menu', href: '/menu' },
      { label: 'Weekly Deals', href: '/promotions' },
      { label: 'Catering & Events', href: '/contact' },
    ],
    info: [
      { label: 'Delivery Areas', href: '/contact' },
      { label: 'Operating Hours', href: '/contact' },
      { label: 'Loyalty Rewards', href: '/promotions' },
      { label: 'Customer Support', href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/254743830555', icon: <WhatsAppIcon /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )},
    { name: 'Facebook', href: 'https://facebook.com', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )},
  ];

  return (
    <footer className="footer-container" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo" aria-label="Huhus Pizza & Grill home">
              <img src="/Huhus_logo.png" alt="Huhus Pizza & Grill" className="footer-logo-image" />
            </Link>
            <p className="footer-tagline">Flame-Grilled Perfection, Handcrafted Pizzas.</p>
            <p className="footer-bio">
              Your favorite neighborhood spot for delicious, stone-baked artisan pizzas and smoky grilled chicken. Fired fresh daily in Nairobi.
            </p>
            <div className="footer-social-row">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <nav className="footer-nav-col" aria-label="Explore links">
            <h3 className="footer-col-title">Explore</h3>
            <ul className="footer-link-list">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Links Column 2 */}
          <nav className="footer-nav-col" aria-label="Information">
            <h3 className="footer-col-title">Information</h3>
            <ul className="footer-link-list">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details Column */}
          <div className="footer-contact-col">
            <h3 className="footer-col-title">Visit Us</h3>
            <div className="footer-contact-entries">
              <div className="contact-entry">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>TotalEnergies Kitisuru Place<br/>Getathuru Road, Nairobi, Kenya</p>
              </div>

              <div className="contact-entry">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <a href="tel:+254743830555">+254 743 830 555</a>
                  <a href="tel:+254725455758">+254 725 455 758</a>
                </div>
              </div>

              <div className="contact-entry">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <p>Mon–Sun: 8:00 AM &ndash; 11:00 PM<br/></p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {currentYear} Huhus Pizza &amp; Grill. All rights reserved.
          </p>
          <p className="footer-badge">
            <svg className="footer-heart-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>Crafted for Nairobi Food Lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
