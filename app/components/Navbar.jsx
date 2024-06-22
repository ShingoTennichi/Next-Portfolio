'use client'

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/" className="logo__text">Shingo Tennichi</Link>
      </div>
      <div>
        <button
          className="navbar__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>
      <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
        <ul className="nav__list" onClick={() => setIsOpen(false)}>
          <li className="nav__item">
            <Link className="nav__link" href="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/projects">Project Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}