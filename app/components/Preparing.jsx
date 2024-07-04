'use client'

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const message = "Sorry, this page is not ready yet.".split("");

export default function Preparing() {
  const ref = useRef(null);
  useEffect(() => {
    let index = 0;
    const animatedH2Tag = ref.current.getElementsByTagName('h4')[0];
    const hiddenH2Tag = ref.current.getElementsByTagName('h4')[1];
    const image = document.getElementById('hidden-img');
    const animation = setInterval(() => {
      animatedH2Tag.innerText = message[index];
      index++;
      if (index === message.length - 1) {
        clearInterval(animation);
        animatedH2Tag.remove();
        hiddenH2Tag.classList.add('preparing--show');
        image.classList.add('preparing--show');
      }
    }, 100);
  }, [])

  return (
    <div className="preparing">
      <div ref={ref} className="preparing__container">
        <h4 className="preparing__title"></h4>
        <h4 className="preparing__title preparing--hidden">Sorry, this page is not ready yet.</h4>
      </div>
      <div id="hidden-img" className="preparing--hidden" style={{ position: "relative", height: "300px", width: "400px", transition: "3s" }}>
        <Image src="/images/coding-guy.jpg" alt="a guy coding" fill={true} sizes="(100vw, 100vh)" style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '400px', maxHeight: '300px' }} quality={80} />
      </div>
      <Link className="preparing__link" href="/">Back to Home</Link>
      {/* <button onClick={() => refreshPage()}>See Again</button> */}
    </div>
  )
}


// ========================= ideas ===========================
// button to share this website by email, url, qr code or sns
// buy me coffee button
// graphs about my skills
// wetter api
// 

