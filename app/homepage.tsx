// pages/homepage.tsx
import Navbar from '@/components/ui/navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to Memori</h1>
      </div>
    </div>
  );
};

export default Homepage;
