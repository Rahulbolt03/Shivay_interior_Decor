import { useState, useEffect } from "react";
import "./Loader.css";

/**
 * Loader Component
 * 
 * Full-screen preloader with "Loading" text and smooth transitions.
 * 
 * Customization:
 * - FADE_OUT_DURATION: Duration of fade-out animation (default: 600ms)
 * - MIN_LOAD_TIME: Minimum time to show loader (default: 1000ms)
 * - Change text, colors, or animation in the CSS file
 */
interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // MIN_LOAD_TIME: 2000ms - Minimum time to show loader (2 seconds)
    const MIN_LOAD_TIME = 2000;

    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsed);

      setTimeout(() => {
        // Start fade-out animation
        setIsVisible(false);
        
        // Remove from DOM after fade-out completes
        // FADE_OUT_DURATION: 600ms - adjust in Loader.css
        setTimeout(() => {
          setShouldRender(false);
          onComplete();
        }, 600);
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      
      // Fallback: Show content after max wait time
      const maxWaitTimeout = setTimeout(() => {
        handleLoad();
      }, 2000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(maxWaitTimeout);
      };
    }
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div className={`loader-overlay ${isVisible ? '' : 'fade-out'}`}>
      <div className="loader-content">
        {/* Horizontal loading line */}
        <div className="loading-line-container">
          <div className="loading-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

