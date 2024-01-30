import { useState, useEffect } from 'react';

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  // Determine the current breakpoint based on window width
  const breakpoint = Object.entries(breakpoints).reduce((acc, [key, value]) => {
    if (width >= value) {
      return key;
    }
    return acc;
  }, 'xs');

  return { width, breakpoint };
}

export default useWidth;
