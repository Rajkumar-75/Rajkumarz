import { useEffect, useState } from 'react';

/**
 * Observes section IDs as they scroll into the viewport.
 * Works with either window scroll or a right-panel container ref.
 */
export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const { rootMargin = '-30% 0px -60% 0px', threshold = 0 } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids.join(',')]);

  return activeId;
}
