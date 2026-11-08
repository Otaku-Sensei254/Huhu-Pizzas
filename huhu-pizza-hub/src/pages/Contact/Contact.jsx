import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import './Contact.css';

const Contact = () => {
  const { deliveryInfo, setDeliveryInfo, closeCart } = useCart();
  const [formData, setFormData] = useState({
    name: deliveryInfo.name,
    phone: deliveryInfo.phone,
    location: deliveryInfo.location,
    landmark: deliveryInfo.landmark,
    notes: deliveryInfo.notes,
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    setFormData({
      name: deliveryInfo.name,
      phone: deliveryInfo.phone,
      location: deliveryInfo.location,
      landmark: deliveryInfo.landmark,
      notes: deliveryInfo.notes,
    });
  }, [deliveryInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setDeliveryInfo({ [name]: value });
    setSubmitStatus(null);
    setFieldErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Enter your name.';
    if (!formData.phone.trim()) errors.phone = 'Enter a phone number.';
    else {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 9 || phoneDigits.length > 15) errors.phone = 'Enter a valid phone number.';
    }
    if (!formData.location.trim()) errors.location = 'Enter your delivery area and street.';

    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setSubmitStatus({ type: 'error', message: 'Please check the highlighted delivery details.' });
      return;
    }
    setFieldErrors({});
    setSubmitStatus({ type: 'success', message: 'Delivery details saved successfully! Fast checkout ready on WhatsApp.' });
    setTimeout(() => closeCart(), 1500);
  };

  const contactInfo = {
    address: 'TotalEnergies Kitisuru Place, Getathuru Road, Nairobi, Kenya',
    hours: {
      weekdays: 'Monday – Saturday: 8:30 AM – 8:30 PM',
      sunday: 'Sunday: 11:00 AM – 8:30 PM',
    },
    phone: '+254 743 830 555',
    phone2: '+254 725 455 758',
    email: 'info@huhuspizza.co.ke',
  };

  const deliveryAreas = [
    'Kihara',
    'Kitisuru',
    'Nyari',
    'Lower Kabete',
    'Spring Valley',
    'Loresho',
    'Kangemi',
    'Mountain View',
    'Kyuna',
    'Rosslyn',
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero-section" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact-hero-content" data-scroll-reveal>
            <span className="badge badge-hot">Reach Out</span>
            <h1 id="contact-title" className="section-title">Contact &amp; Delivery</h1>
            <p className="section-subtitle">
              We are situated at TotalEnergies Kitisuru Place. Drop in for dine-in, takeaway, or have your meal delivered fresh to your door.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content-section" aria-labelledby="locations-heading">
        <div className="container">
          <h2 id="locations-heading" className="sr-only">Contact Details and Location</h2>
          
          <div className="contact-grid">
            {/* Info Card */}
            <div className="contact-card" data-scroll-reveal>
              <h3 className="card-section-title">Visit &amp; Connect</h3>

              <div className="contact-info-list">
                <div className="contact-info-row">
                  <div className="contact-icon-bubble">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <strong>Physical Location</strong>
                    <p>{contactInfo.address}</p>
                    <a 
                      href="https://maps.google.com/?q=TotalEnergies+Kitisuru+Place,+Getathuru+Road,+Nairobi,+Kenya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-accent-link"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-icon-bubble">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <strong>Operating Hours</strong>
                    <p>{contactInfo.hours.weekdays}</p>
                    <p>{contactInfo.hours.sunday}</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-icon-bubble">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <strong>Call &amp; WhatsApp</strong>
                    <p><a href="tel:+254743830555" className="phone-link">{contactInfo.phone}</a></p>
                    <p><a href="tel:+254725455758" className="phone-link">{contactInfo.phone2} <span className="support-tag">(Support)</span></a></p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-icon-bubble">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <strong>Email Inquiries</strong>
                    <p><a href="mailto:info@huhuspizza.co.ke" className="phone-link">{contactInfo.email}</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Delivery Areas Card */}
            <div className="contact-card" data-scroll-reveal style={{ '--reveal-delay': '100ms' }}>
              <h3 className="card-section-title">Delivery Coverage</h3>
              
              <div className="map-frame">
                <iframe
                  title="Huhus Pizza Location - TotalEnergies Kitisuru Place"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814531247658!2d36.76388887499999!3d-1.2456789999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173e2e4e4e4f%3A0x123456789abcdef!2sTotalEnergies%20Kitisuru%20Place!5e0!3m2!1sen!2ske!4v1234567890"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="delivery-coverage-info">
                <h4 className="coverage-subheading">Areas We Deliver To in 25 Mins:</h4>
                <div className="areas-pill-grid">
                  {deliveryAreas.map((area) => (
                    <span key={area} className="area-pill">
                      <span className="area-dot"></span>
                      {area}
                    </span>
                  ))}
                </div>
                <div className="delivery-rate-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Free delivery on orders over KES 2,000. Flat rate KES 150 otherwise.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Profile Form */}
          <div className="delivery-setup-card" data-scroll-reveal>
            <div className="form-header">
              <span className="badge badge-hot">Quick WhatsApp Checkout</span>
              <h3 className="form-title">Add Your Delivery Details</h3>
              <p className="form-subtitle">
                Add the details you want included in your WhatsApp order. They stay in this visit and are not saved in browser storage.
              </p>
            </div>

            <form className="delivery-setup-form" onSubmit={handleSubmit} noValidate>
              {submitStatus && (
                <div className={`form-feedback ${submitStatus.type}`} role={submitStatus.type === 'error' ? 'alert' : 'status'}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {submitStatus.type === 'success' ? (
                      <polyline points="20 6 9 17 4 12"/>
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </>
                    )}
                  </svg>
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <div className="form-split-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah M."
                    required
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                  {fieldErrors.name && <span className="form-field-error" id="name-error">{fieldErrors.name}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +254 7XX XXX XXX"
                    required
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                    autoComplete="tel"
                  />
                  {fieldErrors.phone && <span className="form-field-error" id="phone-error">{fieldErrors.phone}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="location">Delivery Area &amp; Street *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Kihara, near Kihara Market, House 4B"
                  required
                  aria-invalid={Boolean(fieldErrors.location)}
                  aria-describedby={fieldErrors.location ? 'location-error' : undefined}
                  autoComplete="address-line1"
                />
                {fieldErrors.location && <span className="form-field-error" id="location-error">{fieldErrors.location}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="landmark">Landmark / Gate Color (Optional)</label>
                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="e.g. Black gate opposite total station, 2nd floor"
                  autoComplete="address-line2"
                />
              </div>

              <div className="form-field">
                <label htmlFor="notes">Special Kitchen Instructions</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Extra chilli sauce, well done crust, call upon arrival..."
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-save-btn">
                Save Delivery Information
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
