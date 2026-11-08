import React from 'react';
import { Link } from 'react-router-dom';
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
    { name: 'WhatsApp', href: 'https://wa.me/254743830555', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.466-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.369-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.377-.01-.57-.01-.198 0-.397.01-.597.01-.198 0-.42.01-.643.078-.418.137-.813.485-1.02.967-.242.547-.434.987-.57 1.41-.12.383-.279.737-.418 1.08-.148.383-.323.772-.465 1.124a30.06 30.06 0 0 0 1.107 3.307c.323.38.73.727 1.138 1.047.597.48 1.258.87 1.897 1.14.437.185.843.288 1.213.335.44.057.924.078 1.407.078.173 0 .347-.01.52-.038.198-.038.377-.137.554-.297.224-.2.42-.487.57-.87.149-.384.298-.784.397-1.174.099-.397.05-.797-.025-1.174-.124-.547-.42-.997-.71-1.437a1.86 1.86 0 0 0-.57-.669c-.173-.15-.377-.224-.606-.224h-.679c-.15 0-.298-.01-.447-.01-.15 0-.297 0-.446.01-.223.026-.547.15-.924.397-.433.287-.745.7-.997 1.287-.224.548-.37.998-.497 1.346a5.54 5.54 0 0 1-.174 1.41c0 .15.026.3.05.448.124.15.347.274.697.298.323.01.644-.01.94-.05.273-.05.607-.173.916-.373.324-.198.548-.446.746-.719.173-.274.288-.557.366-.848.075-.273.05-.557-.025-.812-.1-.35-.348-.668-.669-.958-.347-.312-.814-.57-1.368-.772-.547-.202-1.074-.324-1.59-.374-.243-.025-.668-.05-1.223-.05-.698 0-1.308.125-1.762.375-.524.275-.926.725-1.21 1.22-.173.324-.224.633-.242.924-.026.335.049.633.223.907.174.275.447.547.812.772.224.15.548.225.846.174.297-.05.548-.224.746-.448.198-.224.348-.472.448-.726.1-.25.15-.524.1-.8.026-.3.01-.6-.026-.875z"/>
      </svg>
    )},
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
