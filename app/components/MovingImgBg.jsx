'use client'

import { useRef, useEffect } from "react";
import Image from "next/image"

export default function MovingImgBg() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.addEventListener('pointermove', (e) => {
      // console.log('ref.current.style.top', `${parseInt(ref.current.style.top.replace('px', '')) + 1}px`);
      // ref.current.style.top = `${parseInt(ref.current.style.top.replace('px', '')) + 1}px`;
    })
  }, [])
  return (
    <div className="moving-img-bg">
      <div ref={ref} className="moving-img-bg__container">
        <Image
          className="moving-img-bg__image"
          alt="moving image"
          src="/images/futuristic-city.jpg"
          fill={true}
          quality={80}
        />
      </div>
    </div>
  )
}