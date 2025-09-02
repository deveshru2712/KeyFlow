import React from "react";
import Keys, { KeysProps } from "./Keys";
import {
  ChevronsLeft,
  ChevronsRight,
  Layout,
  Mic,
  Moon,
  Play,
  Search,
  Sun,
  SunDim,
  Volume1,
  VolumeOff,
  VolumeX,
} from "lucide-react";

const FunctionKeys: KeysProps[] = [
  { icon: null, text: "esc", variant: "no-icon" },
  { icon: <SunDim size={11} />, text: "F1" },
  { icon: <Sun size={11} />, text: "F2" },
  { icon: <Layout size={11} />, text: "F3" },
  { icon: <Search size={11} />, text: "F4" },
  { icon: <Mic size={11} />, text: "F5" },
  { icon: <Moon size={11} />, text: "F6" },
  { icon: <ChevronsLeft size={11} />, text: "F7" },
  { icon: <Play size={11} />, text: "F8" },
  { icon: <ChevronsRight size={11} />, text: "F9" },
  { icon: <Volume1 size={11} />, text: "F10" },
  { icon: <VolumeOff size={11} />, text: "F11" },
  { icon: <VolumeX size={11} />, text: "F12" },
  { icon: null, text: "", variant: "circle" },
];

const Keyboard = () => {
  return (
    <div className="mx-auto h-80 w-full max-w-5xl rounded-lg border bg-neutral-900 p-3">
      <div className="flex">
        {FunctionKeys.map((key) => (
          <Keys
            key={key.text}
            icon={key.icon}
            text={key.text}
            variant={key.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
