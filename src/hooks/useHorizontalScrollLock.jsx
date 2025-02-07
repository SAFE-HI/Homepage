// import { useRef, useEffect } from "react";

// export default function useHorizontalScrollLock() {
//   const containerRef = useRef(null);

//   // 터치 시작 좌표
//   const startX = useRef(0);
//   const startY = useRef(0);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // -------------------------
//     // 1) 데스크톱 마우스 휠 핸들러
//     // -------------------------
//     const handleWheel = (e) => {
//       const delta = e.deltaY;
//       // 가로 스크롤 끝 계산
//       const maxScroll = container.scrollWidth - container.clientWidth;
//       const scrollLeft = container.scrollLeft;

//       const atLeftEdge = scrollLeft <= 0;
//       const atRightEdge = scrollLeft >= maxScroll;

//       if ((atLeftEdge && delta < 0) || (atRightEdge && delta > 0)) {
//         // 세로 스크롤 기본 동작
//         document.body.style.overflow = "auto";
//       } else {
//         // 가로 이동
//         e.preventDefault();
//         container.scrollLeft += delta;
//         // 세로 스크롤 잠금
//         document.body.style.overflow = "hidden";
//       }
//     };

//     // -------------------------
//     // 2) 모바일 터치 이벤트
//     // -------------------------
//     const handleTouchStart = (e) => {
//       const touch = e.touches[0];
//       startX.current = touch.clientX;
//       startY.current = touch.clientY;
//     };

//     const handleTouchMove = (e) => {
//       const touch = e.touches[0];
//       const distX = touch.clientX - startX.current;
//       const distY = touch.clientY - startY.current;

//       // 가로/세로 중 어느 방향으로 더 많이 드래그했는지 판단
//       if (Math.abs(distX) > Math.abs(distY)) {
//         // ---- 수평 드래그 ----
//         e.preventDefault(); // 세로 스크롤 방지
//         document.body.style.overflow = "hidden";

//         // 가로 스크롤
//         const maxScroll = container.scrollWidth - container.clientWidth;
//         const scrollLeft = container.scrollLeft;

//         container.scrollLeft = scrollLeft - distX;
//         startX.current = touch.clientX; // 갱신(드래그 중 계속)

//         if (
//           (container.scrollLeft <= 0 && distX > 0) ||
//           (container.scrollLeft >= maxScroll && distX < 0)
//         ) {
//           document.body.style.overflow = "auto";
//         }
//       } else {
//         // ---- 수직 드래그 ----
//         // 세로 스크롤 기본 동작
//         document.body.style.overflow = "auto";
//       }
//     };

//     const handleTouchEnd = () => {
//       // 터치 종료 시 세로 스크롤 복원(원하는 로직에 따라 조정 가능)
//       document.body.style.overflow = "auto";
//     };

//     // -------------------------
//     // 3) 이벤트 등록
//     // -------------------------
//     container.addEventListener("wheel", handleWheel, { passive: false });
//     container.addEventListener("touchstart", handleTouchStart, {
//       passive: false,
//     });
//     container.addEventListener("touchmove", handleTouchMove, {
//       passive: false,
//     });
//     container.addEventListener("touchend", handleTouchEnd, { passive: false });

//     // cleanup
//     return () => {
//       container.removeEventListener("wheel", handleWheel, { passive: false });
//       container.removeEventListener("touchstart", handleTouchStart, {
//         passive: false,
//       });
//       container.removeEventListener("touchmove", handleTouchMove, {
//         passive: false,
//       });
//       container.removeEventListener("touchend", handleTouchEnd, {
//         passive: false,
//       });
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return containerRef;
// }

import { useRef, useEffect } from "react";

export default function useHorizontalScrollLock() {
  const containerRef = useRef(null);

  // 터치 이벤트에서 사용할 상태
  const startX = useRef(0);
  const startY = useRef(0);
  const startScrollLeft = useRef(0);
  const isHorizontal = useRef(false);
  // 수평/수직 어느 쪽으로 움직일지 결정된 플래그

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 가로 스크롤 한계
    const getMaxScroll = () => container.scrollWidth - container.clientWidth;

    // ---- PC: wheel event ----
    const handleWheel = (e) => {
      const delta = e.deltaY;
      const maxScroll = getMaxScroll();
      const scrollLeft = container.scrollLeft;

      const atLeftEdge = scrollLeft <= 0;
      const atRightEdge = scrollLeft >= maxScroll;

      // 만약 이미 왼쪽 끝 + 왼쪽 더 가려함(delta<0) or 오른쪽 끝 + 오른쪽 더 가려함(delta>0)
      if ((atLeftEdge && delta < 0) || (atRightEdge && delta > 0)) {
        // 세로 스크롤 허용
        document.body.style.overflow = "auto";
      } else {
        // 가로 스크롤
        e.preventDefault();
        container.scrollLeft += delta;
        document.body.style.overflow = "hidden";
      }
    };

    // ---- 모바일: touch event ----
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      startX.current = touch.clientX;
      startY.current = touch.clientY;
      startScrollLeft.current = container.scrollLeft;
      isHorizontal.current = false;
      // 아직 수평/수직 방향 결정 전
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const distX = touch.clientX - startX.current;
      const distY = touch.clientY - startY.current;

      // 만약 이미 수평 방향으로 결정했다면 => 계속 수평 드래그
      // 아직 결정 안 됐다면 => distX vs distY 비교해 "더 큰 방향"으로 결정
      if (!isHorizontal.current) {
        if (Math.abs(distX) > Math.abs(distY)) {
          // 수평으로 확정
          isHorizontal.current = true;
        } else {
          // 수직으로 확정
          // => 세로 스크롤 기본 허용하므로 그냥 리턴
          return;
        }
      }

      // 수평으로 결정된 경우 => 드래그 이동
      e.preventDefault();
      document.body.style.overflow = "hidden";

      // 스크롤 위치 = 터치 시작 시점의 scrollLeft - (현재 distX)
      // distX > 0이면 왼쪽으로 드래그 → scrollLeft는 줄어듦
      // distX < 0이면 오른쪽으로 드래그 → scrollLeft는 늘어남
      container.scrollLeft = startScrollLeft.current - distX;

      // 왼/오른쪽 끝 확인
      const maxScroll = getMaxScroll();
      const scrollLeft = container.scrollLeft;

      // 만약 끝에 도달했는데 계속 같은 방향으로 드래그 중이면 => 세로 스크롤 허용
      if (
        (scrollLeft <= 0 && distX > 0) ||
        (scrollLeft >= maxScroll && distX < 0)
      ) {
        document.body.style.overflow = "auto";
      }
    };

    const handleTouchEnd = () => {
      // 터치 끝나면 세로 스크롤 복원(원하는 로직에 따라 달리)
      document.body.style.overflow = "auto";
    };

    // 등록
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
