import { useEffect, useState } from 'react';
import './PageLoader.css';

const MINIMUM_DISPLAY_MS = 480;
const MAXIMUM_DISPLAY_MS = 1600;
const EXIT_ANIMATION_MS = 320;

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    let hideTimer;
    let removeTimer;
    let hasStartedHiding = false;

    const hideLoader = () => {
      if (hasStartedHiding) return;
      hasStartedHiding = true;
      const remainingMinimum = Math.max(0, MINIMUM_DISPLAY_MS - (Date.now() - startedAt));
      hideTimer = window.setTimeout(() => {
        setIsHiding(true);
        removeTimer = window.setTimeout(() => setIsVisible(false), EXIT_ANIMATION_MS);
      }, remainingMinimum);
    };

    window.addEventListener('load', hideLoader, { once: true });
    const maximumTimer = window.setTimeout(hideLoader, MAXIMUM_DISPLAY_MS);
    if (document.readyState === 'complete') hideLoader();

    return () => {
      window.removeEventListener('load', hideLoader);
      window.clearTimeout(maximumTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`page-loader${isHiding ? ' is-hiding' : ''}`}
      role="status"
      aria-label="Loading Huhus Pizza and Grill"
    >
      <div className="page-loader-brand">
        <img className="page-loader-logo" src="/Huhus_logo.png" alt="" width="180" height="88" />
      </div>
      <p className="page-loader-caption">Fresh from the grill</p>
      <div className="page-loader-track" aria-hidden="true"><span /></div>
    </div>
  );
};

export default PageLoader;
