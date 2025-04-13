// components/ui/Navbar.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-jade-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          memori
        </Link>
        <nav className="space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/albums" className="hover:underline">
            Albums
          </Link>
          <Link href="/upload" className="hover:underline">
            Upload
          </Link>
        </nav>
      </div>
    </header>
  );
}
