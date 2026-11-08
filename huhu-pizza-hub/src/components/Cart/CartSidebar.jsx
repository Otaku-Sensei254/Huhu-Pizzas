import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import './CartSidebar.css';

const CartSidebar = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    clearCart,
    getSubtotal,
    getDeliveryFee,
    getTotal,
    whatsappUrl,
    deliveryInfo,
    setDeliveryInfo,
  } = useCart();

  const [localDeliveryInfo, setLocalDeliveryInfo] = useState(deliveryInfo);
  const [activeStep, setActiveStep] = useState(items.length > 0 ? 'cart' : 'empty');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryErrors, setDeliveryErrors] = useState({});

  useEffect(() => {
    setLocalDeliveryInfo(deliveryInfo);
  }, [deliveryInfo]);

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setLocalDeliveryInfo(prev => ({ ...prev, [name]: value }));
    setDeliveryInfo({ [name]: value });
    setDeliveryErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateDeliveryInfo = () => {
    const errors = {};
    if (!localDeliveryInfo.name.trim()) errors.name = 'Enter your name.';
    if (!localDeliveryInfo.phone.trim()) errors.phone = 'Enter a phone number.';
    else {
      const phoneDigits = localDeliveryInfo.phone.replace(/\D/g, '');
      if (phoneDigits.length < 9 || phoneDigits.length > 15) errors.phone = 'Enter a valid phone number.';
    }
    if (!localDeliveryInfo.location.trim()) errors.location = 'Enter your delivery area and address.';
    setDeliveryErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleDeliveryContinue = (event) => {
    event.preventDefault();
    if (validateDeliveryInfo()) setActiveStep('cart');
  };

  const handleWhatsAppOrder = () => {
    if (!validateDeliveryInfo()) {
      setActiveStep('delivery');
      return;
    }
    setIsSubmitting(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      closeCart();
    }, 1000);
  };

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const deliveryFee = getDeliveryFee();
  const total = getTotal();

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} aria-hidden="true"></div>
      <aside className="cart-sidebar" role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="cart-header">
          <div className="cart-title-row">
            <h2 className="cart-title">Your Order</h2>
            {items.length > 0 && (
              <span className="cart-count-pill">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
            )}
          </div>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-content" data-lenis-prevent>
          {items.length === 0 ? (
            <div className="cart-empty-view">
              <div className="cart-empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <h3 className="cart-empty-title">Your cart is feeling empty</h3>
              <p className="cart-empty-desc">Explore our hand-tossed pizzas and smoky flame-grilled specialties!</p>
              <button className="btn btn-primary" onClick={closeCart}>
                Browse Menu Now
              </button>
            </div>
          ) : activeStep === 'delivery' ? (
            <div className="cart-delivery-step">
              <div className="delivery-step-header">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3>Delivery Address</h3>
                <p>Where should we drop off your sizzling order?</p>
              </div>

              <form className="cart-address-form" onSubmit={handleDeliveryContinue} noValidate>
                <div className="cart-field">
                  <label htmlFor="cart-name">Full Name *</label>
                  <input
                    type="text"
                    id="cart-name"
                    name="name"
                    value={localDeliveryInfo.name}
                    onChange={handleDeliveryChange}
                    placeholder="e.g. John Doe"
                    required
                    aria-invalid={Boolean(deliveryErrors.name)}
                    aria-describedby={deliveryErrors.name ? 'cart-name-error' : undefined}
                    autoComplete="name"
                  />
                  {deliveryErrors.name && <span className="cart-field-error" id="cart-name-error">{deliveryErrors.name}</span>}
                </div>

                <div className="cart-field">
                  <label htmlFor="cart-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="cart-phone"
                    name="phone"
                    value={localDeliveryInfo.phone}
                    onChange={handleDeliveryChange}
                    placeholder="e.g. +254 7XX XXX XXX"
                    required
                    aria-invalid={Boolean(deliveryErrors.phone)}
                    aria-describedby={deliveryErrors.phone ? 'cart-phone-error' : undefined}
                    autoComplete="tel"
                  />
                  {deliveryErrors.phone && <span className="cart-field-error" id="cart-phone-error">{deliveryErrors.phone}</span>}
                </div>

                <div className="cart-field">
                  <label htmlFor="cart-location">Area &amp; House Number *</label>
                  <input
                    type="text"
                    id="cart-location"
                    name="location"
                    value={localDeliveryInfo.location}
                    onChange={handleDeliveryChange}
                    placeholder="e.g. Kihara, near Kihara Market, Flat 2"
                    required
                    aria-invalid={Boolean(deliveryErrors.location)}
                    aria-describedby={deliveryErrors.location ? 'cart-location-error' : undefined}
                    autoComplete="address-line1"
                  />
                  {deliveryErrors.location && <span className="cart-field-error" id="cart-location-error">{deliveryErrors.location}</span>}
                </div>

                <div className="cart-field">
                  <label htmlFor="cart-landmark">Landmark / Directions</label>
                  <input
                    type="text"
                    id="cart-landmark"
                    name="landmark"
                    value={localDeliveryInfo.landmark}
                    onChange={handleDeliveryChange}
                    placeholder="e.g. Blue gate opposite mall"
                    autoComplete="address-line2"
                  />
                </div>

                <div className="cart-field">
                  <label htmlFor="cart-notes">Kitchen Notes</label>
                  <textarea
                    id="cart-notes"
                    name="notes"
                    value={localDeliveryInfo.notes}
                    onChange={handleDeliveryChange}
                    placeholder="e.g. Extra chilli sauce, ring bell..."
                    rows="2"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-whatsapp btn-lg continue-checkout-btn">
                  <WhatsAppIcon />
                  Continue to WhatsApp Summary
                </button>
              </form>
            </div>
          ) : (
            <>
              <ul className="cart-items-list">
                {items.map((item) => (
                  <li key={`${item.id}-${item.size || 'default'}`} className="cart-item-row">
                    <div className="item-details">
                      <h4 className="item-title">{item.name}</h4>
                      <p className="item-meta">{item.category}</p>
                      <div className="item-unit-price">
                        KES {item.price.toLocaleString()} each
                      </div>
                    </div>

                    <div className="item-quantity-tools">
                      <div className="quantity-pill">
                        <button
                          className="qty-adjust-btn"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          &minus;
                        </button>
                        <span className="qty-number" aria-live="polite">{item.quantity}</span>
                        <button
                          className="qty-adjust-btn"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="item-remove-btn"
                        onClick={() => removeItem(item.id, item.size)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>

                    <div className="item-line-total">
                      KES {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-billing-card">
                <div className="billing-row">
                  <span>Subtotal</span>
                  <span>KES {subtotal.toLocaleString()}</span>
                </div>
                <div className="billing-row">
                  <span>Estimated Delivery</span>
                  <span>{deliveryFee > 0 ? `KES ${deliveryFee.toLocaleString()}` : <span className="free-badge">FREE</span>}</span>
                </div>
                {deliveryFee > 0 && (
                  <div className="delivery-free-prompt">
                    <span>Add KES {(2000 - subtotal).toLocaleString()} more for FREE delivery</span>
                  </div>
                )}
                <div className="billing-row grand-total">
                  <span>Total Amount</span>
                  <span className="total-number">KES {total.toLocaleString()}</span>
                </div>
              </div>

              <div className="cart-action-buttons">
                <button
                  className="btn btn-whatsapp btn-lg cart-order-btn"
                  onClick={handleWhatsAppOrder}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="cart-order-loading"><span className="cart-loading-spinner" aria-hidden="true" />Opening WhatsApp...</span>
                  ) : (
                    <>
                      <WhatsAppIcon />
                      <span>Order on WhatsApp</span>
                    </>
                  )}
                </button>
                <button className="btn btn-secondary btn-sm clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
