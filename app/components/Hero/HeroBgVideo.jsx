'use client'

import { useEffect, useRef } from "react";

export default function HeroBgVideo({videoUrl}) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.playbackRate = 0.5;
  }, []);

  return (
    <video ref={ref} className="hero__bg" autoPlay muted loop playsInline>
      <source src={videoUrl} type="video/mp4" />
    </video>
  )
}