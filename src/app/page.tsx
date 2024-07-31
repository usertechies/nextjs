"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [inputVal, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/prediction/${inputVal}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Predict Info</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputVal}
            placeholder="Enter a name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
