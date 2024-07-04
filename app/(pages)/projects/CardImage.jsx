'use client'

import { useRef, useEffect } from "react";
export default function CardImage({ children, previewUrl = '' }) {
  const ref = useRef();
  useEffect(() => {
    const isMobile = window.innerWidth < 760;
    if (!isMobile) {
      ref.current.addEventListener('mouseenter', () => {
        ref.current.firstChild.classList.remove('card__preview--hidden');
        if (previewUrl !== '') {
          ref.current.firstChild.firstChild.play();
        }
      })
      ref.current.addEventListener('mouseleave', () => {
        ref.current.firstChild.classList.add('card__preview--hidden');
        if (previewUrl !== '') {
          ref.current.firstChild.firstChild.pause();
          ref.current.firstChild.firstChild.currentTime = 0;
        }
      })
    }
  }, []);

  return (
    <div ref={ref} className="card__image-container">
      {previewUrl
        ?
        <div className="card__preview card__preview--hidden">
          <video className="card__preview__video" loop muted>
            <source src={previewUrl} type="video/mp4" />
          </video>
        </div>
        :
        <div className="card__preview card__preview--hidden card__preview--no-preview">
          <span className="">No Preview</span>
        </div>
      }
      {children}
    </div>
  )
}

