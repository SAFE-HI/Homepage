import { useRef, useState, useEffect } from "react";

/**
 * @param {IntersectionObserverInit} [options] - IntersectionObserver 옵션
 * @returns {[React.RefObject<HTMLDivElement>, boolean]}
 *  - ref: 감시할 요소에 연결할 ref
 *  - isIntersecting: 해당 요소가 화면에 보이는지 여부
 */
function useOnScreen(options) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}

export default useOnScreen;
