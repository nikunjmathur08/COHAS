import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 2,
      ease: 'power4.out',
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
