"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../utils/supabaseClient';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      console.error("SignUp Error:", error);  // Log the full error object
      setError(error.message);  // Set the error message
    } else {
      router.push('/login');  // Redirect to login after successful signup
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="p-8 bg-white shadow-md rounded-md w-96">
        <h2 className="text-center text-xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-jade text-white py-2 rounded hover:bg-darkJade"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
