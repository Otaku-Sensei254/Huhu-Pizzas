import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './pages/Menu/Menu';
import Promotions from './pages/Promotions/Promotions';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import CartSidebar from './components/Cart/CartSidebar';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import PageLoader from './components/PageLoader/PageLoader';
import SeoManager from './components/SeoManager/SeoManager';
import CookieBanner from './components/CookieBanner/CookieBanner';
import WhatsAppIcon from './components/WhatsAppIcon/WhatsAppIcon';
import ReflectiveCard from './components/ReflectiveCard/ReflectiveCard';
import pizzaBg1 from './components/Images/pizza-bg1.avif';
import pizzaBg2 from './components/Images/pizza-bg2.jpg';
import pizzaBg3 from './components/Images/pizza-bg3.jpeg';
import pizzaNobg from './components/Images/pizza-nobg2.jpeg';
import './App.css';

const features = [
  {
    id: 1,
    title: 'Flame-Grilled Taste',
    badge: 'Artisan Flame',
    image: pizzaBg1,
    imageAlt: 'Fresh pizza prepared at Huhus Pizza & Grill',
    description: 'Every chicken piece and handcrafted pizza is cooked over open flames for that authentic smoky savor you cannot fake in an ordinary oven.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 1 11 12c0-1.38-.5-2.01-1-3-1.072 2.143-2 4-2 4"/>
        <path d="M10.5 17.5A2.5 2.5 0 0 0 13 15c0-1.38-.5-2.01-1-3"/>
        <path d="M7 17c.633-3.134 2.31-5.5 5-6"/>
        <path d="M17 17c-.633-3.134-2.31-5.5-5-6"/>
        <path d="M12 2v20"/>
        <path d="M12 22c4.97 0 9-4.03 9-9"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Unbeatable Value Deals',
    badge: 'Weekly Specials',
    image: pizzaBg2,
    imageAlt: 'Pepperoni pizza with basil and tomatoes against a dark background',
    description: 'Super Tuesday BOGO, Thunder Thursdaze 50% discounts, and family meal combos designed to feed your crew without breaking the bank.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: '25-Min Hot Delivery',
    badge: 'Thermal Speed',
    image: pizzaBg3,
    imageAlt: 'Handcrafted pizza with fresh toppings served on a dark slate',
    description: 'Fast delivery straight to Kihara, Kitisuru, Nyari, and Lower Kabete. Kept in thermal carriers so every slice arrives bubbling and crisp.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Instant WhatsApp Order',
    badge: 'Fast Checkout',
    image: pizzaNobg,
    imageAlt: 'Pizza topped with pepperoni, vegetables, and melted cheese',
    description: 'No apps to install, no passwords to memorize. Tap, choose your favorites, and order directly on WhatsApp in under 30 seconds.',
    icon: <WhatsAppIcon />,
  },
];

const Home = () => (
  <>
    <Hero />

    {/* Modern Bento Features Section with Reflective Cards */}
    <section className="features-section section" aria-labelledby="features-title">
      <div className="container">
        <div className="features-header" data-scroll-reveal>
          <span className="badge badge-new">The Huhus Standard</span>
          <h2 id="features-title" className="section-title">Why Nairobi Loves Huhus</h2>
          <p className="section-subtitle">
            We are passionate artisans of flame and dough. Every meal is prepared fresh to order with genuine care.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <ReflectiveCard
              key={feature.id}
              theme="light"
              tint="#FAF5EB"
              metalness={0.4}
              roughness={0.3}
              blurStrength={6}
              shine={1.2}
              glare={0.4}
              warp={0.5}
              warpScale={1}
              bevel={3}
              tiltStrength={12}
              radius={24}
              enableTilt
              className="feature-reflective-card reflective-card--flush"
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <article className="feature-card-inner" data-scroll-reveal>
                <div className="feature-image-wrapper">
                  <img src={feature.image} alt={feature.imageAlt} className="feature-card-img" loading="lazy" decoding="async" />
                  <span className="feature-badge-pill">{feature.badge}</span>
                </div>
                <div className="feature-card-content">
                  <div className="feature-icon-bubble" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </article>
            </ReflectiveCard>
          ))}
        </div>
      </div>
    </section>

    {/* Modern Curved Banner CTA with ReflectiveCard */}
    <section className="home-cta-section" aria-labelledby="home-cta-title" data-scroll-reveal>
      <div className="container">
        <ReflectiveCard
          theme="light"
          tint="#FAF5EB"
          metalness={0.35}
          roughness={0.28}
          blurStrength={8}
          shine={1.4}
          glare={0.45}
          warp={0.4}
          bevel={4}
          tiltStrength={8}
          radius={28}
          enableTilt
          className="home-cta-reflective-card reflective-card--flush"
        >
          <div className="home-cta-card">
            <div className="home-cta-content">
              <span className="cta-mini-pill">
                <svg viewBox="0 0 24 24" fill="currentColor" className="cta-pill-icon" aria-hidden="true">
                  <path d="M12 2C8 7 5 10 5 14a7 7 0 0 0 14 0c0-4-3-7-7-12z"/>
                </svg>
                <span>Craving Satisfied in Minutes</span>
              </span>
              <h2 id="home-cta-title" className="home-cta-title">
                Ready for Sizzling Flame-Grilled Goodness?
              </h2>
              <p className="home-cta-text">
                Skip the long queues. Order your favorite pizza, crispy flame-grilled chicken, and sides on WhatsApp now.
              </p>
              <div className="home-cta-actions">
                <a 
                  href="https://wa.me/254743830555?text=Hello%20Huhus%2C%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <WhatsAppIcon />
                  <span>Order on WhatsApp</span>
                </a>
                <Link to="/menu" className="btn btn-secondary btn-lg">
                  View Full Menu
                </Link>
              </div>
            </div>
          </div>
        </ReflectiveCard>
      </div>
    </section>
  </>
);

const RoutedPages = () => {
  const location = useLocation();

  return (
    <div className="route-enter" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <SmoothScroll />
          <ScrollReveal />
          <PageLoader />
          <SeoManager />
          <Header />
          <main className="main-content">
            <RoutedPages />
          </main>
          <Footer />
          <CartSidebar />
          <CookieBanner />
        </div>
      </Router>
    </CartProvider>
  );
}
