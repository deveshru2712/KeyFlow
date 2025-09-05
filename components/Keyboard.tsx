import React from "react";
import Keys, { KeysProps } from "./Keys";
import {
  ChevronsLeft,
  ChevronsRight,
  Command,
  Globe,
  Layout,
  Mic,
  Moon,
  Option,
  Play,
  Search,
  Sun,
  SunDim,
  Volume1,
  VolumeOff,
  VolumeX,
} from "lucide-react";

// interface KeyboardProps {
// }

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
  { icon: "!", text: "1" },
  { icon: "@", text: "2" },
  { icon: "#", text: "3" },
  { icon: "$", text: "4" },
  { icon: "%", text: "5" },
  { icon: "^", text: "6" },
  { icon: "&", text: "7" },
  { icon: "*", text: "8" },
  { icon: "(", text: "9" },
  { icon: ")", text: "0" },
  { icon: "_", text: "-" },
  { icon: "+", text: "=" },
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
  { icon: "", text: "Q" },
  { icon: "", text: "W" },
  { icon: "", text: "E" },
  { icon: "", text: "R" },
  { icon: "", text: "T" },
  { icon: "", text: "Y" },
  { icon: "", text: "U" },
  { icon: "", text: "I" },
  { icon: "", text: "O" },
  { icon: "", text: "P" },
  { icon: "{", text: "[" },
  { icon: "}", text: "}" },
  { icon: "|", text: "\\" },
];

const secondAlphaKeys: KeysProps[] = [
  {
    icon: "",
    text: "caps lock",
    variant: "no-icon",
    className: "min-w-[100px]",
    alignment: "justify-start",
  },
  { icon: "", text: "A" },
  { icon: "", text: "S" },
  { icon: "", text: "D" },
  { icon: "", text: "F" },
  { icon: "", text: "G" },
  { icon: "", text: "H" },
  { icon: "", text: "J" },
  { icon: "", text: "K" },
  { icon: "", text: "L" },
  { icon: ":", text: ";" },
  { icon: String.raw`"`, text: "'" },
  {
    icon: "",
    text: "return",
    variant: "no-icon",
    className: "min-w-[90px]",
    alignment: "justify-end",
  },
];

const thirdAlphaKeys: KeysProps[] = [
  {
    icon: "",
    text: "shift",
    variant: "no-icon",
    className: "min-w-[110px]",
    alignment: "justify-start",
  },
  { icon: "", text: "Z" },
  { icon: "", text: "X" },
  { icon: "", text: "C" },
  { icon: "", text: "V" },
  { icon: "", text: "B" },
  { icon: "", text: "N" },
  { icon: "", text: "M" },
  { icon: "<", text: "," },
  { icon: ">", text: "." },
  { icon: "?", text: "/" },
  {
    icon: "",
    text: "shift",
    variant: "no-icon",
    className: "min-w-[110px]",
    alignment: "justify-end",
  },
];

const lastKey: KeysProps[] = [
  {
    icon: <Globe size={11} />,
    text: "fn",
    variant: "special",
    alignment: "flex-col-reverse",
  },
  {
    icon: "^",
    text: "control",
    variant: "special",
  },
  {
    icon: <Option size={11} />,
    text: "option",
    variant: "special",
  },
  {
    icon: <Command size={11} />,
    text: "command",
    variant: "special",
  },
  {
    icon: "",
    text: "space",
    variant: "space",
  },
  {
    icon: <Command size={11} />,
    text: "command",
    variant: "special",
    className: "text-left w-full pl-2",
  },
  {
    icon: <Option size={11} />,
    text: "option",
    variant: "special",
    className: "text-left w-full pl-2",
  },
];

interface KeyboardProps {
  activeKeys?: Set<string>;
}

const Keyboard = ({ activeKeys = new Set() }: KeyboardProps) => {
  return (
    <div className="mx-auto h-fit w-full max-w-5xl rounded-2xl border bg-black p-3 dark:bg-neutral-200">
      <div className="flex">
        {FunctionKeys.map((key) => (
          <Keys
            key={key.text}
            icon={key.icon}
            text={key.text}
            variant={key.variant}
            className={key.className}
            alignment={key.alignment}
            isActive={activeKeys.has(key.text)}
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
            alignment={key.alignment}
            isActive={activeKeys.has(key.text)}
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
            className={key.className}
            alignment={key.alignment}
            isActive={activeKeys.has(key.text)}
          />
        ))}
      </div>
      <div className="flex">
        {secondAlphaKeys.map((key) => (
          <Keys
            key={key.text}
            icon={key.icon}
            text={key.text}
            variant={key.variant}
            className={key.className}
            alignment={key.alignment}
            isActive={activeKeys.has(key.text)}
          />
        ))}
      </div>
      <div className="flex">
        {thirdAlphaKeys.map((key, id) => (
          <Keys
            key={id}
            icon={key.icon}
            text={key.text}
            variant={key.variant}
            className={key.className}
            alignment={key.alignment}
            isActive={activeKeys.has(key.text)}
          />
        ))}
      </div>
      <div className="flex">
        {lastKey.map((key, id) => (
          <Keys
            key={id}
            icon={key.icon}
            text={key.text}
            variant={key.variant}
            className={key.className}
            alignment={key.alignment}
            isActive={activeKeys.has(key.text)}
          />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
