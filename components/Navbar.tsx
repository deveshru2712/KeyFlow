import Link from "next/link";
import React from "react";
import ModeToggle from "./Toggle";

const Navbar = () => {
  return (
    <div className="h-12 w-full bg-transparent px-12 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href={"/"} className="text-4xl font-medium text-slate-300">
          Key Flow
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
