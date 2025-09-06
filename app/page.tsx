import GlassNavigation from "@/components/GlassNavigation";
import TypingSection from "@/components/section/TypingSection";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="mx-auto flex h-full max-w-7xl flex-1 flex-col items-center gap-3">
        <div className="flex justify-center">
          <GlassNavigation />
        </div>
        <TypingSection />
      </div>
    </div>
  );
};

export default Page;
