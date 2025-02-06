import { useRef, useEffect } from "react";

export default function useHorizontalScrollLock() {
  const containerRef = useRef(null);

  // 터치 시작 좌표
  const startX = useRef(0);
  const startY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // -------------------------
    // 1) 데스크톱 마우스 휠 핸들러
    // -------------------------
    const handleWheel = (e) => {
      const delta = e.deltaY;
      // 가로 스크롤 끝 계산
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollLeft = container.scrollLeft;

      const atLeftEdge = scrollLeft <= 0;
      const atRightEdge = scrollLeft >= maxScroll;

      if ((atLeftEdge && delta < 0) || (atRightEdge && delta > 0)) {
        // 세로 스크롤 기본 동작
        document.body.style.overflow = "auto";
      } else {
        // 가로 이동
        e.preventDefault();
        container.scrollLeft += delta;
        // 세로 스크롤 잠금
        document.body.style.overflow = "hidden";
      }
    };

    // -------------------------
    // 2) 모바일 터치 이벤트
    // -------------------------
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      startX.current = touch.clientX;
      startY.current = touch.clientY;
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const distX = touch.clientX - startX.current;
      const distY = touch.clientY - startY.current;

      // 가로/세로 중 어느 방향으로 더 많이 드래그했는지 판단
      if (Math.abs(distX) > Math.abs(distY)) {
        // ---- 수평 드래그 ----
        e.preventDefault(); // 세로 스크롤 방지
        document.body.style.overflow = "hidden";

        // 가로 스크롤
        const maxScroll = container.scrollWidth - container.clientWidth;
        const scrollLeft = container.scrollLeft;

        container.scrollLeft = scrollLeft - distX;
        startX.current = touch.clientX; // 갱신(드래그 중 계속)

        if (
          (container.scrollLeft <= 0 && distX > 0) ||
          (container.scrollLeft >= maxScroll && distX < 0)
        ) {
          document.body.style.overflow = "auto";
        }
      } else {
        // ---- 수직 드래그 ----
        // 세로 스크롤 기본 동작
        document.body.style.overflow = "auto";
      }
    };

    const handleTouchEnd = () => {
      // 터치 종료 시 세로 스크롤 복원(원하는 로직에 따라 조정 가능)
      document.body.style.overflow = "auto";
    };

    // -------------------------
    // 3) 이벤트 등록
    // -------------------------
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });

    // cleanup
    return () => {
      container.removeEventListener("wheel", handleWheel, { passive: false });
      container.removeEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      container.removeEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
      document.body.style.overflow = "auto";
    };
  }, []);

  return containerRef;
}
