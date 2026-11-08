import React from 'react';
import { Link } from 'react-router-dom';
import { menuCategories } from '../../data/menuData';
import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';
import './Promotions.css';

const pizzaMenu = menuCategories.find((category) => category.id === 'pizzas')?.items || [];
const pizzaPhoto = (name) => {
  const item = pizzaMenu.find((pizza) => pizza.name === name);
  return item ? { src: item.image, alt: `${item.name} from Huhus Pizza & Grill` } : null;
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
                      <WhatsAppIcon />
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
                className="btn btn-whatsapp btn-lg"
                onClick={() => {
                  const message = encodeURIComponent(
                    'Hello Huhus, I would like to join your loyalty program and start earning points!'
                  );
                  window.open(`https://wa.me/254743830555?text=${message}`, '_blank', 'noopener,noreferrer');
                }}
              >
                <WhatsAppIcon />
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
