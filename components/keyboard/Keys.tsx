import React from "react";

export interface KeysProps {
  icon: React.ReactNode | string;
  text: string;
  variant?: "default" | "no-icon" | "circle" | "special" | "space";
  alignment?: string;
  className?: string;
  isActive?: boolean;
}

export interface VariantClass {
  circle: string;
  noIcon: string;
  special: string;
  space: string;
}

const ClassBasedOnVariant: VariantClass = {
  circle:
    "h-7 w-7 rounded-full border border-slate-50/20 group-hover:border-slate-50/10 flex items-center justify-center",
  noIcon: "flex items-end px-2 pb-2 w-full",
  special: "flex items-center justify-center",
  space: "flex items-center justify-center",
};

const Keys = ({
  icon,
  text,
  className,
  alignment,
  variant = "default",
  isActive = false,
}: KeysProps) => {
  const getClassBasedOnVariant = (currentVariant: string) => {
    switch (currentVariant) {
      case "circle":
        return ClassBasedOnVariant.circle;
      case "no-icon":
        return ClassBasedOnVariant.noIcon;
      case "special":
        return ClassBasedOnVariant.special;
      case "space":
        return ClassBasedOnVariant.space;
      default:
        return "flex flex-col items-center justify-center";
    }
  };

  const variantClasses = getClassBasedOnVariant(variant);

  // Add blue ring when active
  const activeRingClasses = isActive
    ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-neutral-900 dark:ring-offset-neutral-100"
    : "";

  if (variant === "no-icon") {
    return (
      <div
        className={`relative mx-1.5 my-1 h-12 flex-1 rounded-md p-[1px] text-white shadow-[1px_4px_6px_rgb(225,225,225,0.6)] transition-all duration-300 ease-in-out hover:shadow-[1px_4px_6px_rgb(0,0,0,0.1)] dark:shadow-[1px_4px_6px_rgb(0,0,0,0.4)] dark:hover:shadow-[1px_4px_6px_rgb(0,0,0,0.6)] ${activeRingClasses} ${className || ""}`}
      >
        <div className={`absolute inset-0.5`}>
          <div className="${variantClasses} absolute inset-0 z-10 rounded-md bg-neutral-800 text-[10px] shadow-[1px_4px_6px_rgb(225,225,225,0.6)] hover:scale-95 dark:bg-slate-50 dark:text-slate-900 dark:shadow-[1px_4px_6px_rgb(0,0,0,0.4)]">
            <div
              className={`${alignment} flex h-full w-full items-end px-1.5 py-1`}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "space") {
    return (
      <div
        className={`relative mx-1.5 my-1 h-12 w-full rounded-md p-[0.5px] text-white shadow-[1px_4px_6px_rgb(225,225,225,0.6)] hover:shadow-none dark:shadow-[1px_4px_6px_rgb(0,0,0,0.4)] ${activeRingClasses} ${className || ""}`}
      >
        <div
          className={`ease--out absolute inset-0.5 z-10 rounded-md text-[10px] shadow-[1px_4px_6px_rgb(225,225,225,0.6)] transition-all duration-75 hover:scale-95 dark:shadow-[1px_4px_6px_rgb(0,0,0,0.4)] ${variantClasses} bg-neutral-800 dark:bg-slate-50`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative mx-1.5 my-1 h-12 w-14 shrink-0 rounded-md p-[0.5px] text-white shadow-[1px_4px_6px_rgb(225,225,225,0.6)] transition-all duration-300 ease-in-out hover:shadow-[1px_4px_6px_rgb(0,0,0,0.1)] dark:shadow-[1px_4px_6px_rgb(0,0,0,0.4)] dark:hover:shadow-[1px_4px_6px_rgb(0,0,0,0.6)] ${activeRingClasses}`}
    >
      <div
        className={`absolute inset-0.5 z-10 rounded-md text-[10px] shadow-[1px_4px_6px_rgb(225,225,225,0.6)] transition-transform duration-200 ease-in-out hover:scale-95 dark:shadow-[1px_4px_6px_rgb(0,0,0,0.4)] ${variant !== "circle" ? variantClasses : "flex items-center justify-center"} ${alignment ? alignment : "flex-col"} bg-neutral-800 dark:bg-slate-50 dark:text-slate-900`}
      >
        {variant === "circle" ? (
          <div
            className={`${variantClasses} transition-colors duration-200 ease-in-out`}
          />
        ) : (
          <>
            <div
              className={`${alignment ? "w-full pl-2" : ""} ${variant === "special" && !alignment && !className && "flex w-full justify-end pr-2"} ${className} transition-colors duration-200 ease-in-out`}
            >
              {icon}
            </div>
            <div
              className={`${alignment ? "w-full pr-2 text-right" : ""} transition-colors duration-200 ease-in-out`}
            >
              {text}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Keys;
