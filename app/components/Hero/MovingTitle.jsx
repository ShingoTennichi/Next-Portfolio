'use client'

import { useEffect, useRef } from "react";

export default function MovingTitle({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.addEventListener('pointermove', (e) => {
      const [x, y] = calcDeg(e, ref);
      let X, Y, X2, Y2;
      X = calcPosition(x, 40);
      Y = calcPosition(y, 40);
      X2 = calcPosition(x, 5);
      Y2 = calcPosition(y, 5);
      ref.current.style.transform = `rotateY(${X}deg) rotateX(${Y}deg)`;
      ref.current.style.filter = `drop-shadow(${X2}px ${Y2}px 0px #888888)`;
    })

    ref.current.addEventListener('mouseleave', () => {
      ref.current.style.transform = 'var(--default-deg)';
      ref.current.style.filter = 'drop-shadow(0 2px 8px #ffffff)';
    })
  }, [])
  return (
    <div ref={ref} className="hero__title">
      {children}
    </div>
  )
}

function calcDeg(e, ref) {
  const { clientX, clientY } = e;
  const { left, top, width, height } = ref.current.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  const dx = clientX - x;
  const dy = clientY - y;

  return [dx, dy];
}

function calcPosition(axis, max) {
  if (axis >= 0) {
    return axis < max ? axis * -1 : max * -1;
  } else {
    return axis > max * -1 ? axis * -1 : max;
  }
}