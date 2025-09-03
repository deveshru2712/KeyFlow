"use client";
import Keyboard from "@/components/Keyboard";
import React, { useRef, useState, useEffect } from "react";
import { keyMapping } from "@/constant";

const Page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const mappedKey = keyMapping[event.key];
    if (mappedKey) {
      setActiveKeys((prev) => new Set(prev).add(mappedKey));
    }
    console.log("Key pressed:", event.key, "Mapped to:", mappedKey);
  };

  const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const mappedKey = keyMapping[event.key];
    if (mappedKey) {
      setActiveKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(mappedKey);
        return newSet;
      });
    }
    console.log("Key released:", event.key, "Mapped to:", mappedKey);
  };

  // Handle global key events for better responsiveness
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const mappedKey = keyMapping[event.key];
      if (mappedKey) {
        setActiveKeys((prev) => new Set(prev).add(mappedKey));
      }
    };

    const handleGlobalKeyUp = (event: KeyboardEvent) => {
      const mappedKey = keyMapping[event.key];
      if (mappedKey) {
        setActiveKeys((prev) => {
          const newSet = new Set(prev);
          newSet.delete(mappedKey);
          return newSet;
        });
      }
    };

    // Add global event listeners
    window.addEventListener("keydown", handleGlobalKeyDown);
    window.addEventListener("keyup", handleGlobalKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
      window.removeEventListener("keyup", handleGlobalKeyUp);
    };
  }, []);

  // Clear all active keys when input loses focus (optional)
  const handleInputBlur = () => {
    setActiveKeys(new Set());
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-white">
      <input
        type="text"
        className="rounded bg-red-300 px-4 py-2 placeholder:text-slate-700"
        placeholder="type here"
        ref={inputRef}
        onKeyDown={handleInputKeyDown}
        onKeyUp={handleInputKeyUp}
        onBlur={handleInputBlur}
      />

      <div className="max-w-md text-center text-sm text-gray-600">
        Active keys: {Array.from(activeKeys).join(", ") || "None"}
      </div>

      {/* Pass activeKeys to Keyboard component for visual feedback */}
      <Keyboard activeKeys={activeKeys} />
    </div>
  );
};

export default Page;
