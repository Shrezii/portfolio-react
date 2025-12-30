import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    function onScroll() {
      let current = sectionIds[0];

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const top = section.getBoundingClientRect().top;

        if (top - offset <= 0) {
          current = section.id;
        }
      }

      setActiveId(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on load

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}