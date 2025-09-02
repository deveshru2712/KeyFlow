import React from "react";

export interface KeysProps {
  icon: React.ReactNode | string;
  text: string;
  variant?: "default" | "no-icon" | "circle" | "special";
  className?: string;
}

export interface VariantClass {
  circle: string;
  noIcon: string;
  special: string;
}

const ClassBasedOnVariant: VariantClass = {
  circle:
    "h-7 w-7 rounded-full border border-slate-50/20 group-hover:border-slate-50/10 flex items-center justify-center",
  noIcon: "flex items-end px-2 pb-2",
  special:
    "bg-gradient-to-b from-slate-600 to-slate-800 border border-slate-400/30 flex flex-col items-center justify-center",
};

const Keys = ({ icon, text, className, variant = "default" }: KeysProps) => {
  const getClassBasedOnVariant = (currentVariant: string) => {
    switch (currentVariant) {
      case "circle":
        return ClassBasedOnVariant.circle;
      case "no-icon":
        return ClassBasedOnVariant.noIcon;
      case "special":
        return ClassBasedOnVariant.special;
      default:
        return "flex flex-col items-center justify-center";
    }
  };

  const variantClasses = getClassBasedOnVariant(variant);

  if (variant === "no-icon") {
    return (
      <div className="group relative mx-1.5 my-1 h-12 w-fit min-w-[75px] rounded-md p-[0.5px] text-white shadow-[1px_4px_6px_rgb(225,225,225,0.6)] transition-all duration-300 hover:shadow-[1px_4px_6px_rgb(0,0,0,0.1)]">
        <div
          className={`absolute inset-0.5 z-10 rounded-md text-[10px] shadow-[1px_4px_6px_rgb(225,225,225,0.6)] hover:scale-95 ${variantClasses} `}
        >
          <div className={`${className} flex w-full`}>{text}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative mx-1.5 my-1 h-12 w-full rounded-md p-[0.5px] text-white shadow-[1px_4px_6px_rgb(225,225,225,0.6)] transition-all duration-300 hover:shadow-[1px_4px_6px_rgb(0,0,0,0.1)]">
      <div
        className={`absolute inset-0.5 z-10 rounded-md text-[10px] shadow-[1px_4px_6px_rgb(225,225,225,0.6)] hover:scale-95 ${variant !== "circle" ? variantClasses : "flex items-center justify-center"}`}
      >
        {variant === "circle" ? (
          <div className={`${variantClasses}`} />
        ) : (
          <>
            <div>{icon}</div>
            <div>{text}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Keys;
