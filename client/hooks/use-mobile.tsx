import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;
const SMALL_MOBILE_BREAKPOINT = 480;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(
    undefined,
  );
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean | undefined>(
    undefined,
  );
  const [screenSize, setScreenSize] = React.useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  React.useEffect(() => {
    const updateScreenInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      setIsMobile(width < MOBILE_BREAKPOINT);
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
      setIsSmallMobile(width < SMALL_MOBILE_BREAKPOINT);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = updateScreenInfo;
    
    mql.addEventListener("change", onChange);
    updateScreenInfo();
    
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return {
    isMobile: !!isMobile,
    isTablet: !!isTablet,
    isSmallMobile: !!isSmallMobile,
    screenSize,
    isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  };
}

// Hook for better mobile interactions
export function useMobileInteractions() {
  const [isPressed, setIsPressed] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
    setIsPressed(true);
  }, []);

  const handleTouchEnd = React.useCallback(() => {
    setIsPressed(false);
    setTouchStart(null);
  }, []);

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStart.x);
    const deltaY = Math.abs(touch.clientY - touchStart.y);
    
    // If user is scrolling, don't trigger press effects
    if (deltaX > 10 || deltaY > 10) {
      setIsPressed(false);
    }
  }, [touchStart]);

  return {
    isPressed,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
    },
  };
}

// Hook for responsive values
export function useResponsiveValue<T>(
  mobileValue: T,
  tabletValue: T,
  desktopValue: T
): T {
  const { isMobile, isTablet } = useIsMobile();
  
  if (isMobile) return mobileValue;
  if (isTablet) return tabletValue;
  return desktopValue;
}
