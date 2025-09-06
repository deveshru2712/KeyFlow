"use client";
import { keyMapping } from "@/constant";
import Keyboard from "@/components/keyboard/Keyboard";
import React, { useEffect, useRef, useState } from "react";

const TypingSection = () => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());

  const keyTimeouts = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const MIN_HIGHLIGHT_DURATION = 150;

  const addActiveKey = (mappedKey: string) => {
    const existingTimeout = keyTimeouts.current.get(mappedKey);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    setActiveKeys((prev) => new Set(prev).add(mappedKey));
  };

  const removeActiveKey = (mappedKey: string) => {
    const timeoutId = setTimeout(() => {
      setActiveKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(mappedKey);
        return newSet;
      });

      keyTimeouts.current.delete(mappedKey);
    }, MIN_HIGHLIGHT_DURATION);

    keyTimeouts.current.set(mappedKey, timeoutId);
  };

  const handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.repeat) return;

    const mappedKey = keyMapping[event.key];
    if (mappedKey) {
      addActiveKey(mappedKey);
    }
  };

  const handleInputKeyUp = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    const mappedKey = keyMapping[event.key];
    if (mappedKey) {
      removeActiveKey(mappedKey);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      // Ignore repeat events
      if (event.repeat) return;

      const mappedKey = keyMapping[event.key];
      if (mappedKey) {
        addActiveKey(mappedKey);
      }
    };

    const handleGlobalKeyUp = (event: KeyboardEvent) => {
      const mappedKey = keyMapping[event.key];
      if (mappedKey) {
        removeActiveKey(mappedKey);
      }
    };

    // Add event listeners
    window.addEventListener("keydown", handleGlobalKeyDown);
    window.addEventListener("keyup", handleGlobalKeyUp);

    const currentKeyTimeouts = keyTimeouts.current;

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
      window.removeEventListener("keyup", handleGlobalKeyUp);

      currentKeyTimeouts.forEach((timeout) => clearTimeout(timeout));
      currentKeyTimeouts.clear();
    };
  }, []);

  const handleInputBlur = () => {
    keyTimeouts.current.forEach((timeout) => clearTimeout(timeout));
    keyTimeouts.current.clear();
    setActiveKeys(new Set());
  };

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-5 overflow-hidden">
      <div className="w-5xl px-6">
        <textarea
          className="h-48 w-full resize-none rounded px-4 py-2 text-4xl leading-relaxed text-slate-600 outline-none placeholder:text-slate-700 dark:text-slate-50/30 dark:placeholder:text-slate-50/50"
          placeholder="type here"
          ref={inputRef}
          onKeyDown={handleInputKeyDown}
          onKeyUp={handleInputKeyUp}
          onBlur={handleInputBlur}
        />
      </div>

      {/* Pass activeKeys to Keyboard component for visual feedback */}
      <div className="overflow-hidden">
        <Keyboard activeKeys={activeKeys} />
      </div>
    </div>
  );
};

export default TypingSection;
