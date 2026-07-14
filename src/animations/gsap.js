import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin on browser side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set default configurations for smooth ScrollTrigger animations
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
  });
}

export { gsap, ScrollTrigger };
export default gsap;
