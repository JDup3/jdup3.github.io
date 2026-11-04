import { useEffect, useRef, useState, type RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Reports once the element has scrolled into view, then stops observing.
 * Without IntersectionObserver (old browsers, tests) the element counts as
 * visible straight away.
 */
export function useInView<T extends Element>({
  threshold = 0.1,
  rootMargin = '0px',
}: InViewOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const element = ref.current;
    if (inView || !element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return [ref, inView];
}
