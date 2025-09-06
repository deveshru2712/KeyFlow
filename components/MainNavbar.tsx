import Link from "next/link";
import React from "react";
import ModeToggle from "./Toggle";

export default function MainNavbar() {
  return (
    <div className="w-full bg-transparent px-12 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href={"/"} className="text-4xl font-semibold tracking-normal">
          Key Flow
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
}
