import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

const StaggeredMenu = ({ items, open, onOpen, onClose }) => {
  const panelRef = useRef(null);
  const layerRefs = useRef([]);
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    const layers = layerRefs.current.filter(Boolean);
    if (!panel) return undefined;

    const context = gsap.context(() => {
      gsap.set([panel, ...layers], { xPercent: 100 });
      gsap.set(itemRefs.current.filter(Boolean), { y: 24, autoAlpha: 0 });
    });
    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    const layers = layerRefs.current.filter(Boolean);
    if (!panel) return undefined;

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const itemsToAnimate = itemRefs.current.filter(Boolean);
    timelineRef.current?.kill();

    if (open) {
      gsap.set(itemsToAnimate, { y: 24, autoAlpha: 0 });
      if (reducedMotion) {
        gsap.set([panel, ...layers], { xPercent: 0 });
        gsap.set(itemsToAnimate, { y: 0, autoAlpha: 1 });
      } else {
        const timeline = gsap.timeline();
        layers.forEach((layer, index) => {
          timeline.to(layer, { xPercent: 0, duration: 0.48, ease: 'power3.out' }, index * 0.07);
        });
        timeline.to(panel, { xPercent: 0, duration: 0.58, ease: 'power3.out' }, layers.length * 0.07);
        timeline.to(itemsToAnimate, {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.075,
          ease: 'power3.out',
        }, '-=0.28');
        timelineRef.current = timeline;
      }
    } else if (reducedMotion) {
      gsap.set([panel, ...layers], { xPercent: 100 });
      gsap.set(itemsToAnimate, { y: 24, autoAlpha: 0 });
    } else {
      timelineRef.current = gsap.to([panel, ...layers], {
        xPercent: 100,
        duration: 0.32,
        ease: 'power2.in',
        stagger: 0.035,
      });
    }

    return () => {
      timelineRef.current?.kill();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = event => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        className={`mobile-menu-toggle${open ? ' is-open' : ''}`}
        onClick={open ? onClose : onOpen}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        <span className="sm-icon" aria-hidden="true">
          <span className="sm-icon-line sm-icon-line-top" />
          <span className="sm-icon-line sm-icon-line-middle" />
          <span className="sm-icon-line sm-icon-line-bottom" />
        </span>
      </button>
      <div className={`staggered-menu${open ? ' is-open' : ''}`} data-open={open || undefined}>
        <button className="sm-backdrop" type="button" aria-label="Close navigation" onClick={onClose} tabIndex={open ? 0 : -1} />
        <div className="sm-prelayers" aria-hidden="true">
          {[0, 1].map((layer, index) => (
            <span
              className={`sm-prelayer sm-prelayer-${index + 1}`}
              key={layer}
              ref={element => { layerRefs.current[index] = element; }}
            />
          ))}
        </div>
        <aside
          id="staggered-menu-panel"
          className="staggered-menu-panel"
          ref={panelRef}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="sm-panel-inner">
            <p className="sm-eyebrow">Fresh from our oven</p>
            <nav aria-label="Mobile navigation">
              <ul className="sm-panel-list">
                {items.map((item, index) => (
                  <li className="sm-panel-item-wrap" key={item.link}>
                    <Link
                      className="sm-panel-item"
                      to={item.link}
                      aria-label={item.ariaLabel}
                      aria-current={window.location.pathname === item.link ? 'page' : undefined}
                      onClick={onClose}
                      ref={element => { itemRefs.current[index] = element; }}
                    >
                      <span className="sm-panel-item-label">{item.label}</span>
                      <span className="sm-item-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="sm-panel-footer">
              <span>Hungry? Let’s make it a pizza night.</span>
              <a href="tel:+254743830555">+254 743 830 555</a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default StaggeredMenu;
