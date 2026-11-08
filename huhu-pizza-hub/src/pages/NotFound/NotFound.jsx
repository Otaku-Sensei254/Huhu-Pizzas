import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <section className="not-found-page" aria-labelledby="not-found-title">
    <div className="not-found-card">
      <span className="not-found-code">404</span>
      <p className="not-found-eyebrow">Looks like this slice is missing</p>
      <h1 id="not-found-title">We couldn’t find that page.</h1>
      <p className="not-found-copy">The link may be old, or the page may have moved. Head back home or browse the menu to find something delicious.</p>
      <div className="not-found-actions">
        <Link className="btn btn-primary btn-lg" to="/">Back to Home</Link>
        <Link className="btn btn-secondary btn-lg" to="/menu">Browse the Menu</Link>
      </div>
    </div>
  </section>
);

export default NotFound;
