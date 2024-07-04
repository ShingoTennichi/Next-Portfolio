'use client'

import { useEffect, useRef } from "react";

const MAX_X_DEG = 50;
const MAX_Y_DEG = 50;
const SHADOW_COEF = -8

export default function MovingTitle({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    // const isMobile = navigator.userAgentData.mobile ?? true;
    // if (!isMobile) {
    // }
    ref.current.addEventListener('pointermove', (e) => {
      const [xRatio, yRatio] = calcRatio(e, ref);
      const yRotate = MAX_Y_DEG * xRatio;
      const xRotate = MAX_X_DEG * yRatio * -1; // -1 for reversing
      const shadowX = SHADOW_COEF * xRatio;
      const shadowY = SHADOW_COEF * yRatio;
      ref.current.firstChild.style.transform = `rotateY(${yRotate}deg) rotateX(${xRotate}deg)`;
      ref.current.firstChild.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 0px #3d3d3d)`;
    })

    ref.current.addEventListener('mouseleave', () => {
      ref.current.firstChild.style.transform = 'var(--default-deg)';
      ref.current.firstChild.style.filter = 'var(--default-filter)';
    })
    // if (!navigator.userAgentData.mobile) {
    // }
  }, [])
  return (
    <div ref={ref} className="hero__title">
      <div className="hero__title--move">
        {children}
      </div>
    </div>
  )
}

function calcRatio(e, ref) {
  const { left, top, width, height } = ref.current.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  const { clientX, clientY } = e;
  const xRatio = (clientX - x) / x;
  const yRatio = (clientY - y) / (y - top);
  return [xRatio, yRatio];
}