// components/navbar.tsx
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-blue-500">
//       <div className="text-white font-bold text-lg">
//         <Link href="/">memori</Link>
//       </div>
//       <div className="flex space-x-4 md:flex-row flex-col md:space-x-4">
//         <Link href="/" className="text-white">Home</Link>
//         <Link href="/about" className="text-white">About</Link>
//         <Link href="/contact" className="text-white">Contact</Link>
//         <Link href="/auth" className="bg-yellow-500 text-black px-4 py-2 rounded mt-2 md:mt-0">
//           Get Started
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import Link from 'next/link';
import { Button } from './button';

export default function Navbar() {
  return (
    <header className="bg-jade shadow-md py-4">
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
          <Button variant="white">
            Login
          </Button>
          <Button variant="darkButton">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}

