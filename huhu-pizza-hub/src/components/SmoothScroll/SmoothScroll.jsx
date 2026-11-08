import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.12,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      prevent: (node) => node instanceof HTMLElement && node.closest('[data-lenis-prevent]') !== null,
    });

    return () => lenis.destroy();
  }, []);

  return null;
};

export default SmoothScroll;
