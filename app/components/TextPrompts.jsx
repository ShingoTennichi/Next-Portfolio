'use client'

import { useState, useEffect } from "react";

export default function TextPrompts() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const text = document.querySelector('.text');
    const textContent = text.textContent;
    text.textContent = '';
    let index = 0;
    // const interval = setInterval(() => {
    //   text.textContent += textContent[index];
    //   index++;
    //   if (index === textContent.length) {
    //     clearInterval(interval);
    //   }
    // }, 100);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}