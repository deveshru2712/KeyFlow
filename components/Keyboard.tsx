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
  { icon: null, text: "esc", variant: "no-icon", alignment: "justify-start" },
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

const macNumberKeys: KeysProps[] = [
  {
    icon: "!",
    text: "1 ",
  },
  {
    icon: "@",
    text: "2",
  },
  {
    icon: "#",
    text: "3",
  },
  {
    icon: "$",
    text: "4",
  },
  {
    icon: "%",
    text: "5",
  },
  {
    icon: "^",
    text: "6",
  },
  {
    icon: "&",
    text: "7",
  },
  {
    icon: "*",
    text: "8",
  },
  {
    icon: "(",
    text: "9",
  },
  {
    icon: ")",
    text: "0",
  },
  {
    icon: "_",
    text: "-",
  },
  {
    icon: "+",
    text: "=",
  },
  {
    icon: "",
    text: "delete",
    variant: "no-icon",
    alignment: "justify-end",
    className: "min-w-[90px]",
  },
];

const firstAlphaKeys: KeysProps[] = [
  {
    icon: "",
    text: "tab",
    variant: "no-icon",
    alignment: "justify-start",
  },
  {
    icon: "",
    text: "Q",
  },
  {
    icon: "",
    text: "W",
  },
  {
    icon: "",
    text: "E",
  },
  {
    icon: "",
    text: "R",
  },
  {
    icon: "",
    text: "T",
  },
  {
    icon: "",
    text: "Y",
  },
  {
    icon: "",
    text: "U",
  },
  {
    icon: "",
    text: "I",
  },
  {
    icon: "",
    text: "O",
  },
  {
    icon: "",
    text: "P",
  },
  {
    icon: "{",
    text: "[",
  },
  {
    icon: "}",
    text: "}",
  },
  {
    icon: "|",
    text: "\\",
  },
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
      <div className="flex">
        {macNumberKeys.map((key) => (
          <Keys
            key={key.text}
            icon={key.icon}
            text={key.text}
            variant={key.variant}
            className={key.className}
          />
        ))}
      </div>
      <div className="flex">
        {firstAlphaKeys.map((key) => (
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
