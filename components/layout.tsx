// components/Layout.tsx
import Navbar from './ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6 bg-gray-50">{children}</main>
    </>
  );
}
