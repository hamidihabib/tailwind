import React, { useEffect, useRef } from "react";
import { ButtonTypes } from "@/types/ButtonTypes";
export default function Button({
  children,
  color = "primary",
  size = "md",
  disabled,
  endIcon,
  href,
  rounded = "rounded",
  shadow = "shadow",
  startIcon,
  variant,
}: ButtonTypes) {
  const style = {
    color: {
      secondary: "bg-secondary-500",
      primary: "bg-primary-500",
      success: "bg-success-500",
      info: "bg-info-500",
      warning: "bg-warning-500",
      error: "bg-error-500",
    }[color],
    size: {
      sm: "px-2 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
      "2xl": "px-10 py-5 text-2xl",
    }[size],
  };

  return (
    <button
      disabled={disabled}
      className={[
        "bg-" + color + "-500" + " text-white",
        style.size,
        rounded,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
