import { useState } from 'react';
import './CookieBanner.css';

const DISMISS_KEY = 'huhus-storage-notice-dismissed';

const readDismissed = () => {
  try {
    return window.localStorage.getItem(DISMISS_KEY) === 'true';
  } catch {
    return false;
  }
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => !readDismissed());
  const [showDetails, setShowDetails] = useState(false);

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, 'true');
    } catch {
      // The notice can still be dismissed for this visit when storage is unavailable.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie and storage notice">
      <div className="cookie-banner-copy">
        <strong>Cookies &amp; browser storage</strong>
        <p>We use browser storage to remember your cart. The contact page also loads a Google Maps embed.</p>
        {showDetails && (
          <p className="cookie-banner-details">Cart items stay in this browser, while delivery details stay in this visit. The Google Maps embed may use its own cookies; Huhus does not currently use advertising or analytics cookies.</p>
        )}
      </div>
      <div className="cookie-banner-actions">
        <button
          type="button"
          className="cookie-details-button"
          aria-expanded={showDetails}
          onClick={() => setShowDetails(value => !value)}
        >
          {showDetails ? 'Less info' : 'More info'}
        </button>
        <button type="button" className="cookie-dismiss-button" onClick={dismiss}>Got it</button>
      </div>
    </aside>
  );
};

export default CookieBanner;
