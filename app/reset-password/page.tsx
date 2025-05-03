'use client'

import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/update-password`,
    });
    if (error) {
      setMessage('Error sending reset link.');
    } else {
      setMessage('Password reset link sent! Check your email.');
    }
  };

  return (
    <form onSubmit={handleReset} className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      />
      <button type="submit" className="bg-jade text-white px-4 py-2 rounded">
        Send Reset Link
      </button>
      {message && <p className="text-sm text-center mt-2">{message}</p>}
    </form>
  );
}
