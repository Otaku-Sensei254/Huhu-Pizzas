import React from 'react';
import { Link } from 'react-router-dom';
import { menuCategories } from '../../data/menuData';
import './Promotions.css';

const pizzaMenu = menuCategories.find((category) => category.id === 'pizzas')?.items || [];
const pizzaPhoto = (name) => {
  const item = pizzaMenu.find((pizza) => pizza.name === name);
  return item ? { src: item.image, alt: `${item.name} pizza` } : null;
};

const Promotions = () => {
  const promotions = [
    {
      id: 'super-tuesday',
      name: 'Super Tuesday BOGO',
      tagline: 'Buy 1 Large Pizza, Get 1 FREE',
      description: 'Every Tuesday, buy any large pizza and get a second one completely FREE! Choose from Chicken Peri-Peri, BBQ Chicken, Beef Pepperoni, and more.',
      badge: 'bogo',
      badgeText: '🔥 2-For-1 Deal',
      images: [pizzaPhoto('Chicken Peri-Peri'), pizzaPhoto('BBQ Chicken')].filter(Boolean),
      featuredItems: ['Chicken Peri-Peri', 'BBQ Chicken', 'Beef Pepperoni', 'Meat Lovers'],
      terms: 'Valid every Tuesday. Free pizza must be of equal or lesser value. Cannot combine with other offers.'
    },
    {
      id: 'thunder-thursdaze',
      name: 'Thunder Thursdaze',
      tagline: '50% OFF Select Pizzas & Combos',
      description: 'Thunder into the weekend with massive 50% savings on select pizza sizes and combo platters every Thursday. Perfect for family dinners and gatherings.',
      badge: 'hot',
      badgeText: ' 50% Off',
      images: [pizzaPhoto('Beef Pepperoni'), pizzaPhoto('Margherita Classic')].filter(Boolean),
      featuredItems: ['Large Pizza + 2 Sides', 'Family Chicken Pack', 'Double Burger Meal', 'Party Platter'],
      terms: 'Valid every Thursday on select items. While stocks last. Dine-in, takeaway, or delivery.'
    },
    {
      id: 'catering',
      name: 'Outside Catering & Events',
      tagline: 'Tailored for 10 to 100 Guests',
      description: 'Hosting a crowd or celebration? Let us bring the fire with stone-baked pizzas, flame-grilled chicken, fresh salads, and delicious finger foods.',
      badge: 'popular',
      badgeText: 'Group Catering',
      images: [pizzaPhoto('BBQ Chicken'), pizzaPhoto('Veggie Supreme'), pizzaPhoto('Seafood Special')].filter(Boolean),
      featuredItems: ['Custom Pizza Platters', 'Chicken & Sides Buffet', 'Salad Station', 'Beverage Bar', 'Dessert Packs'],
      terms: 'Minimum 10 guests. 48-hour advance notice recommended. Delivery across Nairobi environs.',
      ctaText: 'Get Catering Quote',
      ctaLink: '/contact'
    }
  ];

  const handleWhatsAppPromo = (promo) => {
    const message = encodeURIComponent(
      `Hello Huhus, I'd like to order your ${promo.name} offer! Please confirm availability.`
    );
    window.open(`https://wa.me/254743830555?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="promotions-page">
      <section className="promo-hero-section" aria-labelledby="promo-title">
        <div className="container">
          <div className="promo-hero-content" data-scroll-reveal>
            <span className="badge badge-hot">Weekly Specials</span>
            <h1 id="promo-title" className="section-title">Deals That Hit The Spot</h1>
            <p className="section-subtitle">
              Enjoy generous portions and unbeatable value every single week. Tap any deal to redeem instantly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="promo-cards-section" aria-labelledby="deals-heading">
        <div className="container">
          <h2 id="deals-heading" className="sr-only">Active Promotions</h2>
          <div className="promo-grid">
            {promotions.map((promo, index) => (
              <article
                key={promo.id}
                className="promo-card"
                data-scroll-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <div className={`promo-card-image promo-card-image--${promo.id}`}>
                  <div className="promo-image-grid">
                    {promo.images.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => { event.currentTarget.style.display = 'none'; }}
                      />
                    ))}
                  </div>
                  <div className="promo-image-shade" aria-hidden="true" />
                  <div className="promo-card-header">
                    <span className="promo-deal-pill">{promo.badgeText}</span>
                  </div>
                </div>

                <div className="promo-card-body">
                  <h3 className="promo-title">{promo.name}</h3>
                  <p className="promo-tagline">{promo.tagline}</p>
                  <p className="promo-desc">{promo.description}</p>

                  <div className="promo-perks">
                    <h4 className="perks-title">What's Included:</h4>
                    <ul className="perks-list">
                      {promo.featuredItems.map((item, i) => (
                        <li key={i} className="perk-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <details className="promo-terms-details">
                    <summary className="terms-summary">Terms &amp; conditions</summary>
                    <p className="terms-body">{promo.terms}</p>
                  </details>
                </div>

                <div className="promo-card-footer">
                  {promo.id === 'catering' ? (
                    <Link to={promo.ctaLink} className="btn btn-primary btn-lg promo-cta-btn">
                      {promo.ctaText}
                    </Link>
                  ) : (
                    <button
                      className="btn btn-whatsapp btn-lg promo-cta-btn"
                      onClick={() => handleWhatsAppPromo(promo)}
                      aria-label={`Claim ${promo.name} deal on WhatsApp`}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.466-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.369-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.377-.01-.57-.01-.198 0-.397.01-.597.01-.198 0-.42.01-.643.078-.418.137-.813.485-1.02.967-.242.547-.434.987-.57 1.41-.12.383-.279.737-.418 1.08-.148.383-.323.772-.465 1.124a30.06 30.06 0 0 0 1.107 3.307c.323.38.73.727 1.138 1.047.597.48 1.258.87 1.897 1.14.437.185.843.288 1.213.335.44.057.924.078 1.407.078.173 0 .347-.01.52-.038.198-.038.377-.137.554-.297.224-.2.42-.487.57-.87.149-.384.298-.784.397-1.174.099-.397.05-.797-.025-1.174-.124-.547-.42-.997-.71-1.437a1.86 1.86 0 0 0-.57-.669c-.173-.15-.377-.224-.606-.224h-.679c-.15 0-.298-.01-.447-.01-.15 0-.297 0-.446.01-.223.026-.547.15-.924.397-.433.287-.745.7-.997 1.287-.224.548-.37.998-.497 1.346a5.54 5.54 0 0 1-.174 1.41c0 .15.026.3.05.448.124.15.347.274.697.298.323.01.644-.01.94-.05.273-.05.607-.173.916-.373.324-.198.548-.446.746-.719.173-.274.288-.557.366-.848.075-.273.05-.557-.025-.812-.1-.35-.348-.668-.669-.958-.347-.312-.814-.57-1.368-.772-.547-.202-1.074-.324-1.59-.374-.243-.025-.668-.05-1.223-.05-.698 0-1.308.125-1.762.375-.524.275-.926.725-1.21 1.22-.173.324-.224.633-.242.924-.026.335.049.633.223.907.174.275.447.547.812.772.224.15.548.225.846.174.297-.05.548-.224.746-.448.198-.224.348-.472.448-.726.1-.25.15-.524.1-.8.026-.3.01-.6-.026-.875z"/>
                      </svg>
                      <span>Claim Deal on WhatsApp</span>
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Card */}
      <section className="promo-loyalty-section">
        <div className="container">
          <div className="loyalty-banner" data-scroll-reveal>
            <div className="loyalty-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div className="loyalty-details">
              <h2 className="loyalty-title">Join The Huhus Loyalty Circle</h2>
              <p className="loyalty-text">
                Earn points on every pizza and flame-grilled order! Enjoy free birthday treats, 
                secret menu specials, and member-only discounts.
              </p>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => {
                  const message = encodeURIComponent(
                    'Hello Huhus, I would like to join your loyalty program and start earning points!'
                  );
                  window.open(`https://wa.me/254743830555?text=${message}`, '_blank', 'noopener,noreferrer');
                }}
              >
                Join Free on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
