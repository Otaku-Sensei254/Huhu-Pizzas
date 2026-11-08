import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
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
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.466-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.369-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.377-.01-.57-.01-.198 0-.397.01-.597.01-.198 0-.42.01-.643.078-.418.137-.813.485-1.02.967-.242.547-.434.987-.57 1.41-.12.383-.279.737-.418 1.08-.148.383-.323.772-.465 1.124a30.06 30.06 0 0 0 1.107 3.307c.323.38.73.727 1.138 1.047.597.48 1.258.87 1.897 1.14.437.185.843.288 1.213.335.44.057.924.078 1.407.078.173 0 .347-.01.52-.038.198-.038.377-.137.554-.297.224-.2.42-.487.57-.87.149-.384.298-.784.397-1.174.099-.397.05-.797-.025-1.174-.124-.547-.42-.997-.71-1.437a1.86 1.86 0 0 0-.57-.669c-.173-.15-.377-.224-.606-.224h-.679c-.15 0-.298-.01-.447-.01-.15 0-.297 0-.446.01-.223.026-.547.15-.924.397-.433.287-.745.7-.997 1.287-.224.548-.37.998-.497 1.346a5.54 5.54 0 0 1-.174 1.41c0 .15.026.3.05.448.124.15.347.274.697.298.323.01.644-.01.94-.05.273-.05.607-.173.916-.373.324-.198.548-.446.746-.719.173-.274.288-.557.366-.848.075-.273.05-.557-.025-.812-.1-.35-.348-.668-.669-.958-.347-.312-.814-.57-1.368-.772-.547-.202-1.074-.324-1.59-.374-.243-.025-.668-.05-1.223-.05-.698 0-1.308.125-1.762.375-.524.275-.926.725-1.21 1.22-.173.324-.224.633-.242.924-.026.335.049.633.223.907.174.275.447.547.812.772.224.15.548.225.846.174.297-.05.548-.224.746-.448.198-.224.348-.472.448-.726.1-.25.15-.524.1-.8.026-.3.01-.6-.026-.875z"/>
              </svg>
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
