"use client";

import { useState, useEffect } from "react";
import { readSomething } from "./lib/readMessage";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    async function fetchMessage() {
      try {
        const result = await readSomething();
        setMessage(result as string);
      } catch (err) {
        console.error("Error reading message:", err);
        setMessage("Error fetching message");
      }
    }

    fetchMessage();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">StringStore DApp</h1>
      <p className="text-lg">
        <strong>Contract Message:</strong> {message}
      </p>
    </main>
  );
}
