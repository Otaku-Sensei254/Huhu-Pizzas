import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { menuCategories } from '../../data/menuData';
import ReflectiveCard from '../../components/ReflectiveCard/ReflectiveCard';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [selectedSize, setSelectedSize] = useState({});
  const { addItem, openCart } = useCart();

  const category = menuCategories.find(c => c.id === activeCategory);
  const sizes = category?.items[0]?.prices ? Object.keys(category.items[0].prices) : ['Default'];

  const handleAddToCart = (item) => {
    const size = sizes.length > 1 && sizes[0] !== 'Default' 
      ? selectedSize[item.id] || sizes[0] 
      : null;
    const price = size ? item.prices[size] : item.prices.Default;
    const displayName = size ? `${item.name} (${size})` : item.name;
    
    addItem({
      id: item.id,
      name: displayName,
      baseName: item.name,
      price,
      size,
      category: category.name,
      quantity: 1,
    });
    openCart();
  };

  const renderCategoryIcon = (iconName) => {
    const icons = {
      pizza: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
        </svg>
      ),
      chicken: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      burger: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9z"/>
          <line x1="6" y1="13" x2="18" y2="13"/>
          <line x1="6" y1="17" x2="18" y2="17"/>
        </svg>
      ),
      snack: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      drink: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4"/>
          <path d="M12 3v18"/>
        </svg>
      ),
    };
    return icons[iconName] || icons.pizza;
  };

  const renderItemVisual = (type) => {
    switch (type) {
      case 'chicken':
        return (
          <svg className="item-svg-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 7v5l3 2"/>
          </svg>
        );
      case 'burger':
        return (
          <svg className="item-svg-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 10a7 7 0 0 1 14 0v2H5v-2z"/>
            <rect x="4" y="14" width="16" height="5" rx="2.5"/>
            <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2"/>
          </svg>
        );
      case 'fries':
        return (
          <svg className="item-svg-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 11l2 10h10l2-10H5z"/>
            <line x1="8" y1="3" x2="8" y2="11"/>
            <line x1="12" y1="2" x2="12" y2="11"/>
            <line x1="16" y1="4" x2="16" y2="11"/>
          </svg>
        );
      case 'drink':
        return (
          <svg className="item-svg-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 3h12l-2 18H8L6 3z"/>
            <line x1="6" y1="7" x2="18" y2="7"/>
          </svg>
        );
      case 'snack':
      case 'side':
        return (
          <svg className="item-svg-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        );
      case 'pizza':
      default:
        return (
          <svg className="item-svg-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        );
    }
  };

  const renderBadgeContent = (badge) => {
    switch (badge) {
      case 'hot':
        return (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-svg-icon" aria-hidden="true">
              <path d="M12 2C8 7 5 10 5 14a7 7 0 0 0 14 0c0-4-3-7-7-12z"/>
            </svg>
            <span>Hot Deal</span>
          </>
        );
      case 'new':
        return (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-svg-icon" aria-hidden="true">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
            </svg>
            <span>Chef Special</span>
          </>
        );
      case 'popular':
      default:
        return (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor" className="badge-svg-icon" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>Popular</span>
          </>
        );
    }
  };

  return (
    <div className="menu-page">
      {/* Menu Header */}
      <section className="menu-hero-section" aria-labelledby="menu-title">
        <div className="container">
          <div className="menu-hero-content" data-scroll-reveal>
            <span className="badge badge-hot">Fresh From The Grill</span>
            <h1 id="menu-title" className="section-title">Our Signature Menu</h1>
            <p className="section-subtitle">
              Made to order using hand-tossed dough, vine-ripened tomatoes, 100% real cheese, 
              and our secret flame-grilled marinades.
            </p>
          </div>

          {/* Category Tabs Pill Bar */}
          <nav className="category-pill-nav" role="tablist" aria-label="Menu categories" data-scroll-reveal>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="pill-icon" aria-hidden="true">{renderCategoryIcon(cat.icon)}</span>
                <span className="pill-label">{cat.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section className="menu-items-section" aria-labelledby="category-heading">
        <div className="container">
          <div 
            id={`panel-${activeCategory}`} 
            role="tabpanel" 
            aria-labelledby={`tab-${activeCategory}`}
          >
            <div className="category-meta-header" data-scroll-reveal>
              <h2 id="category-heading" className="category-meta-title">{category?.name}</h2>
              <p className="category-meta-desc">{category?.description}</p>
            </div>

            {/* Pizza Size Selector */}
            {sizes.length > 1 && sizes[0] !== 'Default' && (
              <div className="size-selector-pill-group" role="group" aria-label="Select Pizza Size">
                <span className="size-selector-label">Choose Size:</span>
                {sizes.map((size) => {
                  const currentSelected = selectedSize[category?.items[0]?.id] || sizes[0];
                  return (
                    <button
                      key={size}
                      className={`size-toggle-pill ${currentSelected === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(prev => ({ ...prev, [category.items[0].id]: size }))}
                      aria-pressed={currentSelected === size}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Item Cards Grid with ReflectiveCard */}
            <div className="menu-grid">
              {category?.items.map((item, index) => (
                <ReflectiveCard
                  key={item.id}
                  theme="light"
                  tint="#FAF5EB"
                  metalness={0.35}
                  roughness={0.32}
                  blurStrength={6}
                  shine={1.2}
                  glare={0.35}
                  bevel={3}
                  tiltStrength={10}
                  radius={22}
                  enableTilt
                  className="menu-reflective-card reflective-card--flush"
                  style={{ '--reveal-delay': `${(index % 3) * 80}ms` }}
                >
                  <article className="menu-card-inner" data-scroll-reveal>
                    <div className="menu-card-visual">
                      {item.image && (
                        <img
                          className="menu-item-image"
                          src={item.image}
                          alt={`${item.name} from Huhus Pizza & Grill`}
                          loading="lazy"
                          decoding="async"
                          onError={(event) => { event.currentTarget.style.display = 'none'; }}
                        />
                      )}
                      <div className="item-visual-bubble" aria-hidden="true">
                        {renderItemVisual(item.type)}
                      </div>
                      {item.badge && (
                        <span className={`card-ribbon badge-${item.badge}`}>
                          {renderBadgeContent(item.badge)}
                        </span>
                      )}
                    </div>

                    <div className="menu-card-body">
                      <h3 className="menu-card-title">{item.name}</h3>
                      <p className="menu-card-desc">{item.description}</p>

                      <div className="menu-card-footer">
                        <div className="menu-price-container">
                          {sizes.length > 1 && sizes[0] !== 'Default' ? (
                            <div className="price-stack">
                              <span className="price-currency">KES</span>
                              <span className="price-number">
                                {item.prices[selectedSize[category.items[0].id] || sizes[0]].toLocaleString()}
                              </span>
                            </div>
                          ) : (
                            <div className="price-stack">
                              <span className="price-currency">KES</span>
                              <span className="price-number">{item.prices.Default.toLocaleString()}</span>
                            </div>
                          )}
                        </div>

                        <button
                          className="btn btn-primary btn-sm card-add-btn"
                          onClick={() => handleAddToCart(item)}
                          aria-label={`Add ${item.name} to order`}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </article>
                </ReflectiveCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catering Banner with ReflectiveCard */}
      <section className="menu-catering-section">
        <div className="container">
          <ReflectiveCard
            theme="light"
            tint="#FAF5EB"
            metalness={0.3}
            roughness={0.3}
            radius={28}
            tiltStrength={6}
            className="catering-reflective-card reflective-card--flush"
          >
            <div className="catering-card">
              <div className="catering-content">
                <span className="badge badge-popular">Outside Catering</span>
                <h2 className="catering-title">Hosting an Office Party or Celebration?</h2>
                <p className="catering-text">
                  From 10 to 100 guests, let us fire up restaurant-quality pizzas, smoky flame-grilled chicken, 
                  and fresh party sides. Custom menus tailored for your budget.
                </p>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Request a Catering Quote
                </Link>
              </div>
            </div>
          </ReflectiveCard>
        </div>
      </section>
    </div>
  );
};

export default Menu;
