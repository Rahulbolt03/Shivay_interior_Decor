import { ReactNode } from "react";
import "./ContentWrapper.css";

/**
 * ContentWrapper Component
 * 
 * Wraps main content with smooth fade-in and slide-up animation.
 * 
 * Customization:
 * - FADE_IN_DURATION: Duration of fade-in animation (default: 800ms)
 * - SLIDE_DISTANCE: Distance to slide up in pixels (default: 20px)
 * - EASING: Animation easing (default: ease-out)
 */
interface ContentWrapperProps {
  children: ReactNode;
  isVisible: boolean;
}

const ContentWrapper = ({ children, isVisible }: ContentWrapperProps) => {
  return (
    <div className={`content-wrapper ${isVisible ? 'animate-in' : ''}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;

