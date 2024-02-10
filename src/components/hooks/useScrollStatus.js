import { useState, useEffect, useCallback } from 'react'

const useScrollStatus = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const getDocHeight = useCallback(() => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }, []);

  const calculateScrollDistance = useCallback(() => {
    const scrollTop = window.scrollY; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;
    const scrollValue = Math.floor(scrollTop / totalDocScrollLength * 100);

    setScrollPosition(scrollValue);
  }, [getDocHeight]);

  useEffect(() => {
    const listenToScrollEvent = () => {
      document.addEventListener("scroll", () => {
        requestAnimationFrame(calculateScrollDistance);
      });
    }
    listenToScrollEvent();

    return () => {
      // Cleanup: remove the event listener
      document.removeEventListener("scroll", listenToScrollEvent);
    }
  }, [calculateScrollDistance]);

  return scrollPosition;
}

export default useScrollStatus;