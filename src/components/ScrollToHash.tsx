import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scroll-to-hash after any navigation.
 * - If the URL has a hash (e.g. /#servicios) → waits for the page to render,
 *   then smoothly scrolls to the matching element.
 * - If there is no hash → scrolls to the top of the page.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Give React time to mount the new page before querying the DOM.
      const id = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(id);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
