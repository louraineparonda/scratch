"use client";

import { useState } from 'react';

export default function JoinPage() {
  const [albumCode, setAlbumCode] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumCode(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-16"> {/* pt-16 ensures content is not hidden under the navbar */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Enter Album Code:</h1>
        <input
          type="text"
          value={albumCode}
          onChange={handleInputChange}
          placeholder="Album Code"
          className="mt-4 p-2 border rounded"
        />
        {/* If the album code is entered, display the password field */}
        {albumCode && (
          <div className="mt-4">
            <label htmlFor="password" className="block text-base">Enter Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-2 p-2 border rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}
