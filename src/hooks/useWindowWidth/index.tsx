import { useEffect, useState } from 'react';

export const useWindowWidth = (initialWidth?: number) => {
  const [width, setWidth] = useState(initialWidth || 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth !== width) {
        setWidth(window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return { width, isLg: width >= 1024, isXl: width >= 1280 };
};



export default useWindowWidth;
