import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import pizzaBg from '../Images/pizza-bg3.jpeg';
import pizzaHeroRight from '../Images/pizza-removebg.png';
import './Hero.css';

const Hero = () => {
  const { openCart } = useCart();

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    openCart();
    const url = 'https://wa.me/254743830555?text=Hello%20Huhus%2C%20I%20would%20like%20to%20place%20an%20order.%20Please%20assist.';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="hero-section" 
      aria-labelledby="hero-title"
      style={{ backgroundImage: `url(${pizzaBg})` }}
    >
      {/* Cream Overlay Wash for seamless readability and texture */}
      <div className="hero-overlay-wash" aria-hidden="true" />

      {/* Free delivery announcement pill */}
      <div className="container hero-banner-wrapper" data-scroll-reveal>
        <div className="hero-alert-pill" role="status" aria-live="polite">
          <svg className="alert-sparkle-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
          </svg>
          <span className="hero-alert-message">Free delivery to Kihara, Kitisuru &amp; surrounding environs on orders over KES 2,000</span>
          <Link to="/menu" className="alert-pill-link">Order Now &rarr;</Link>
        </div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Hero Typography & CTAs */}
        <div className="hero-content" data-scroll-reveal>
          <div className="hero-badge-row">
            <span className="hero-pill-tag">
              <span className="tag-dot"></span>
              Open Daily &bull; 8:00 AM &ndash; 11:00 PM
            </span>
          </div>

          <h1 id="hero-title" className="hero-heading">
            Flame-Grilled Flavor.
            <br />
            <span className="hero-heading-accent">Handcrafted Pizzas.</span>
          </h1>

          <p className="hero-copy">
            Nairobi's favorite neighborhood grill serving mouthwatering flame-grilled chicken, 
            stone-baked artisan pizzas, and unbeatable daily deals. Delivered hot in 25 minutes.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-whatsapp btn-lg hero-btn-main"
              onClick={handleWhatsAppOrder}
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon />
              <span>Order on WhatsApp</span>
            </button>
            <Link to="/menu" className="btn btn-secondary btn-lg hero-btn-alt">
              Explore Menu
            </Link>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>25-Min Delivery</span>
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span>4.9 Customer Rating</span>
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Fresh Daily Dough</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Pizza Image */}
        <div className="hero-pizza-showcase" data-scroll-reveal style={{ '--reveal-delay': '140ms' }}>
          <div className="hero-pizza-art-wrapper">
            <img 
              src={pizzaHeroRight} 
              alt="Freshly baked flame-grilled artisan pizza from Huhus" 
              className="hero-art-pizza-image"
            />
            <div className="hero-floating-pill-tag">
              <svg className="pill-flame-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8 7 5 10 5 14a7 7 0 0 0 14 0c0-4-3-7-7-12z"/>
              </svg>
              <span>Stone-Baked to Order</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
