import { useEffect, useRef, useCallback } from "react";

type UseScrollObserverResult = {
  setTargetRef: (ref: HTMLElement | null) => void;
};

export const useScrollObserver = (): UseScrollObserverResult => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const currentTarget = useRef<HTMLElement | null>(null);
  const lastScrolledRef = useRef<HTMLElement | null>(null);
  const cooldownRef = useRef(false);

  const scrollToElement = useCallback((el: HTMLElement) => {
    el.scrollIntoView({ behavior: "smooth"});
  }, []);

  const handleIntersection: IntersectionObserverCallback = useCallback(
    (entries) => {
      const entry = entries[0];
      const target = entry.target as HTMLElement;

      if (
        entry.isIntersecting &&
        target !== lastScrolledRef.current &&
        !cooldownRef.current
      ) {
        // Start cooldown
        cooldownRef.current = true;

        // Scroll to current
        scrollToElement(target);

        // Track last scrolled element
        lastScrolledRef.current = target;

        // Update next target
        const nextTargetId = target.getAttribute("data-next");
        if (nextTargetId) {
          const nextEl = document.getElementById(nextTargetId);
          if (nextEl) {
            setTimeout(() => {
              setTargetRef(nextEl);
              cooldownRef.current = false;
            }, 800); // Delay to allow current scroll to settle
          } else {
            cooldownRef.current = false;
          }
        } else {
          cooldownRef.current = false;
        }
      }
    },
    [scrollToElement]
  );

  const setTargetRef = useCallback((element: HTMLElement | null) => {
    observerRef.current?.disconnect();

    if (element) {
      currentTarget.current = element;
      observerRef.current = new IntersectionObserver(handleIntersection);
      observerRef.current.observe(element);
    }
  }, [handleIntersection]);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { setTargetRef };
};
