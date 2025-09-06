import { Timer, Type } from "lucide-react";
import React from "react";

const GlassNavigation = () => {
  return (
    <div className="max-w-96 rounded-xl border border-white/20 bg-white/10 px-3 py-2 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-center gap-3 text-base">
        <div className="flex items-center gap-3">
          <button className="flex cursor-pointer items-center gap-1 text-red-400 transition-colors duration-300 hover:text-red-300">
            <Timer size={12} /> Time
          </button>
          <button className="flex cursor-pointer items-center gap-1 text-slate-500 transition-colors duration-300 hover:text-red-300 dark:text-slate-50/50 dark:hover:text-slate-300">
            <Type size={12} /> Text
          </button>
        </div>
        <div className="h-5 w-0.5 rounded-2xl bg-white/30" />
        <div>
          <ul className="flex items-center gap-2">
            <li className="cursor-pointer font-medium text-red-400 duration-300 hover:text-red-300">
              10
            </li>
            <li className="cursor-pointer text-slate-500 transition-colors duration-300 hover:text-red-300 dark:text-slate-50/50 dark:hover:text-slate-300">
              25
            </li>
            <li className="cursor-pointer text-slate-500 transition-colors duration-300 hover:text-red-300 dark:text-slate-50/50 dark:hover:text-slate-300">
              50
            </li>
            <li className="cursor-pointer text-slate-500 transition-colors duration-300 hover:text-red-300 dark:text-slate-50/50 dark:hover:text-slate-300">
              100
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlassNavigation;
