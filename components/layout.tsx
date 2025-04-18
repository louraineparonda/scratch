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
import { ReactNode } from "react";
import Navbar from "./ui/navbar"; // Import your Navbar component

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground">
      <Navbar /> {/* Use the Navbar component */}

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




