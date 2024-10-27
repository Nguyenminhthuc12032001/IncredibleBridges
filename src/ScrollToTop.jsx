import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Automatically scrolls to the top of the page when the URL or state changes
function ScrollToTop() {
  const { pathname, state } = useLocation();  // Get the current path and state

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page whenever path or state changes
  }, [pathname, state]);  // Effect triggers on `pathname` or `state` change

  return null;  // No visual output, just functionality
}

export default ScrollToTop;
