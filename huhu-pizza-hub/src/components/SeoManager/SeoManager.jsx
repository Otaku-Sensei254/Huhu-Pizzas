import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://huhuspizza.co.ke';

const PAGE_METADATA = {
  '/': {
    title: 'Huhus Pizza & Grill | Pizza in Kitisuru, Nairobi',
    description: 'Order fresh pizza and flame-grilled chicken from Huhus Pizza & Grill in Kitisuru, Nairobi. Browse our menu, weekly deals, and delivery information.',
  },
  '/menu': {
    title: 'Pizza & Grill Menu | Huhus Pizza & Grill, Nairobi',
    description: 'Explore Huhus Pizza & Grill’s menu of handcrafted pizzas, flame-grilled chicken, burgers, sides, and drinks in Kitisuru, Nairobi.',
  },
  '/promotions': {
    title: 'Pizza Deals & Weekly Offers | Huhus Pizza & Grill, Nairobi',
    description: 'See this week’s pizza offers, Super Tuesday BOGO, Thunder Thursdaze deals, and outside catering from Huhus Pizza & Grill in Nairobi.',
  },
  '/contact': {
    title: 'Contact & Delivery | Huhus Pizza & Grill, Kitisuru',
    description: 'Find Huhus Pizza & Grill at Kitisuru Place, Nairobi. Check delivery areas, opening information, and ways to contact the team.',
  },
};

const setMetaContent = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

const SeoManager = () => {
  const { pathname } = useLocation();
  const routePath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  useEffect(() => {
    const page = PAGE_METADATA[routePath];
    if (!page) {
      document.title = 'Page not found | Huhus Pizza & Grill';
      setMetaContent('meta[name="robots"]', 'content', 'noindex, follow');
      document.head.querySelector('link[rel="canonical"]')?.remove();
      return;
    }

    const pageUrl = `${SITE_URL}${routePath === '/' ? '/' : routePath}`;
    document.title = page.title;
    setMetaContent('meta[name="description"]', 'content', page.description);
    setMetaContent('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large');
    setMetaContent('meta[property="og:title"]', 'content', page.title);
    setMetaContent('meta[property="og:description"]', 'content', page.description);
    setMetaContent('meta[property="og:url"]', 'content', pageUrl);
    setMetaContent('meta[name="twitter:title"]', 'content', page.title);
    setMetaContent('meta[name="twitter:description"]', 'content', page.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [routePath]);

  return null;
};

export default SeoManager;
