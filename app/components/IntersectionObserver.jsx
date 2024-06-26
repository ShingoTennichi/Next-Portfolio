'use client'

import { useEffect, useState, useRef } from "react";

export default function IntersectionDetector({ children, selector = '', unobserve = false, threshold = 0, rootMargin = '0px 0px 0px 0px', root = null }) {
  const options = {
    threshold: threshold,
    root: root,
    rootMargin: rootMargin,
  }
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if(unobserve) observer.unobserve(entry.target);
          entry.target.classList.add('intersecting');
        } else {
          entry.target.classList.remove('intersecting');
        }
      })
    }, options);

    if(selector) {
      const targets = ref.current.querySelectorAll(selector);
      targets.forEach(target => {
        target.classList.add('hidden');
        observer.observe(target)
      });
    } else {
      ref.current.firstChild.classList.add('hidden');
      observer.observe(ref.current);
    }
  }, []);
  return (
    <div ref={ref} className="inherit-parent-width">
      {children}
    </div>
  )
}