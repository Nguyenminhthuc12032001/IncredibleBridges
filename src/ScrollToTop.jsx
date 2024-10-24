import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Automatically scrolls to the top of the page when the URL changes
function ScrollToTop() {
  const { pathname } = useLocation();  // Get the current URL path

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page whenever the path changes
  }, [pathname]);  // Effect triggers whenever `pathname` changes

  return null;  // No visual output, just functionality
}

export default ScrollToTop;
