import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './pages/Menu/Menu';
import Promotions from './pages/Promotions/Promotions';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import CartSidebar from './components/Cart/CartSidebar';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import PageLoader from './components/PageLoader/PageLoader';
import SeoManager from './components/SeoManager/SeoManager';
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
    description: 'No apps to install, no passwords to memorize. Tap, choose your favorites, and order directly on WhatsApp in under 30 seconds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
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
                  <img src={feature.image} alt={feature.title} className="feature-card-img" />
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
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.466-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.369-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.377-.01-.57-.01-.198 0-.397.01-.597.01-.198 0-.42.01-.643.078-.418.137-.813.485-1.02.967-.242.547-.434.987-.57 1.41-.12.383-.279.737-.418 1.08-.148.383-.323.772-.465 1.124a30.06 30.06 0 0 0 1.107 3.307c.323.38.73.727 1.138 1.047.597.48 1.258.87 1.897 1.14.437.185.843.288 1.213.335.44.057.924.078 1.407.078.173 0 .347-.01.52-.038.198-.038.377-.137.554-.297.224-.2.42-.487.57-.87.149-.384.298-.784.397-1.174.099-.397.05-.797-.025-1.174-.124-.547-.42-.997-.71-1.437a1.86 1.86 0 0 0-.57-.669c-.173-.15-.377-.224-.606-.224h-.679c-.15 0-.298-.01-.447-.01-.15 0-.297 0-.446.01-.223.026-.547.15-.924.397-.433.287-.745.7-.997 1.287-.224.548-.37.998-.497 1.346a5.54 5.54 0 0 1-.174 1.41c0 .15.026.3.05.448.124.15.347.274.697.298.323.01.644-.01.94-.05.273-.05.607-.173.916-.373.324-.198.548-.446.746-.719.173-.274.288-.557.366-.848.075-.273.05-.557-.025-.812-.1-.35-.348-.668-.669-.958-.347-.312-.814-.57-1.368-.772-.547-.202-1.074-.324-1.59-.374-.243-.025-.668-.05-1.223-.05-.698 0-1.308.125-1.762.375-.524.275-.926.725-1.21 1.22-.173.324-.224.633-.242.924-.026.335.049.633.223.907.174.275.447.547.812.772.224.15.548.225.846.174.297-.05.548-.224.746-.448.198-.224.348-.472.448-.726.1-.25.15-.524.1-.8.026-.3.01-.6-.026-.875z"/>
                  </svg>
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
        </div>
      </Router>
    </CartProvider>
  );
}
