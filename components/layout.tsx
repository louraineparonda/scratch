// components/Layout.tsx
// import Navbar from './ui/Navbar';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen px-4 py-6 bg-gray-50">{children}</main>
//     </>
//   );
// }

// pages/_app.tsx
// components/layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <nav className="max-w-5xl mx-auto px-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-primary">
            memori
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-base text-primary hover:text-accent">
              Home
            </Link>
            <Link href="/about" className="text-base text-primary hover:text-accent">
              About
            </Link>
            <Link href="/contact" className="text-base text-primary hover:text-accent">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content area */}
      <main className="max-w-5xl mx-auto px-5 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-white py-4 mt-8 shadow-md">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-foreground">© 2025 memori. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}



