"use client";

import Link from 'next/link';
import { Button } from './button';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  // Hide the navbar after scrolling a certain amount
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 100 to whatever value suits you
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-jade shadow-md py-4 sticky top-0 left-0 w-full z-10 transition-all ${
        showNavbar ? 'opacity-100' : 'opacity-0 animate-slide-up'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-white">
          memori
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-base text-darkJade hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-base text-darkJade hover:text-white">
            Contact
          </Link>
          <Link href="/pricing" className="text-base text-darkJade hover:text-white">
            Pricing
          </Link>
          <Button asChild variant="white">
            <Link href="/join_album">Join an Album</Link>
          </Button>
          <Button variant="darkButton">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
