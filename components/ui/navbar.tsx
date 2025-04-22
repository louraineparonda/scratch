'use client';

import Link from 'next/link';
import { Button } from './button';
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import type { User } from '@supabase/auth-js';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // Scroll-based visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Supabase auth state
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

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
        <div className="space-x-4 flex items-center">
          <Link href="/about" className="text-base text-darkJade hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-base text-darkJade hover:text-white">
            Contact
          </Link>
          <Link href="/pricing" className="text-base text-darkJade hover:text-white">
            Pricing
          </Link>
          <Link href="/join_album">
            <Button variant="white">Join an Album</Button>
          </Link>

          {user ? (
            <>
              <Link href="/profile">
                <Button variant="white">Profile</Button>
              </Link>
              <Button variant="white" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="white">Login</Button>
              </Link>
              <Link href="/signup">
                <Button variant="white">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
