import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = '[data-scroll-reveal]';
    let observer;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -32px 0px',
      });
    }

    const observeElement = (element) => {
      if (!observer) {
        element.classList.add('is-visible');
      } else {
        observer.observe(element);
      }
    };

    const observeTree = (root) => {
      if (!(root instanceof Element)) return;
      if (root.matches(selector) && !root.classList.contains('is-visible')) observeElement(root);
      root.querySelectorAll(`${selector}:not(.is-visible)`).forEach(observeElement);
    };

    observeTree(document.body);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach(observeTree));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
