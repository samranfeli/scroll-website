import { useRef, useState, useEffect } from "react";

export function useAnimateOnScroll({ threshold, rootMargin, reapear }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState();

  const makeApear = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) setIsVisible(true);
  };

  const makeApearRepeating = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callback = reapear ? makeApearRepeating : makeApear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callback, {
      threshold: threshold,
      rootMargin: rootMargin ? rootMargin : "0px",
    });

    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) observer.unobserve(containerRefCurrent);
    };
  }, [callback, rootMargin, threshold]);

  return [containerRef, isVisible];
}
