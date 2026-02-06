// components/Header.tsx
'use client'; // ← very important — we need client-side state for the mobile menu

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
            Pay4MeApp
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link href="/" className="text-base font-medium hover:text-lime-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium hover:text-lime-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-base font-medium hover:text-lime-400 transition-colors">
              Blog
            </Link>
            <Link href="/support" className="text-base font-medium hover:text-lime-400 transition-colors">
              Support
            </Link>
          </nav>

          {/* Download Button – always visible */}
          <div className="hidden md:block">
            <button className="rounded-full bg-lime-400 px-5 py-2.5 text-sm md:text-base font-semibold text-black hover:bg-lime-300 transition-colors">
              Download App ▶
            </button>
          </div>

          {/* Hamburger Button – mobile only */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu – slides down or full-screen overlay */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-black px-4 py-6 space-y-6 border-t border-gray-800">
          <Link
            href="/"
            className="block text-lg font-medium hover:text-lime-400"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg font-medium hover:text-lime-400"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block text-lg font-medium hover:text-lime-400"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            href="/support"
            className="block text-lg font-medium hover:text-lime-400"
            onClick={closeMenu}
          >
            Support
          </Link>

          {/* Mobile Download Button */}
          <button className="mt-4 w-full rounded-full bg-lime-400 px-6 py-3.5 text-base font-semibold text-black hover:bg-lime-300 transition-colors">
            Download App ▶
          </button>
        </div>
      </div>
    </header>
  );
}