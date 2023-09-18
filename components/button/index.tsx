import React from "react";
import { ButtonTypes } from "@/types/ButtonTypes";
import { useRouter } from "next/router";

export default function Button({
  children,
  color = "primary",
  disabled,
  endIcon,
  href,
  rounded = "rounded",
  shadow = "shadow",
  size = "md",
  font = "font-semibold",
  startIcon,
  variant = "contained",
}: ButtonTypes) {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    if (href !== undefined) {
      e.preventDefault();
      router.push(href);
    }
  };
  const Shadow = disabled || variant == "text" ? "shadow-none" : shadow;
  const Style = "capitalize inline-flex items-center align-middle";

  const style = {
    text: {
      global: "font-semibold shadow-none border border-2 border-transparent",
      color: {
        primary: "text-primary-500",
        secondary: "text-secondary-500",
        success: "text-success-500",
        info: "text-info-500",
        warning: "text-warning-500",
        error: "text-error-500",
      }[color],
      hover: {
        primary: "hover:bg-primary-transparent",
        secondary: "hover:bg-secondary-transparent",
        success: "hover:bg-success-transparent",
        info: "hover:bg-info-transparent",
        warning: "hover:bg-warning-transparent",
        error: "hover:bg-error-transparent",
      }[color],
      disabled: "border-transparent text-secondary-200 hover:bg-transparent",
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
        "2xl": "px-10 py-5 text-2xl",
      }[size],
    },
    outlined: {
      global: "font-semibold border border-2",
      color: {
        primary: "border-primary-500 text-primary-500",
        secondary: "border-secondary-500 text-secondary-500",
        success: "border-success-500 text-success-500",
        info: "border-info-500 text-info-500",
        warning: "border-warning-500 text-warning-500",
        error: "border-error-500 text-error-500",
      }[color],
      hover: {
        primary: "hover:bg-primary-transparent",
        secondary: "hover:bg-secondary-transparent",
        success: "hover:bg-success-transparent",
        info: "hover:bg-info-transparent",
        warning: "hover:bg-warning-transparent",
        error: "hover:bg-error-transparent",
      }[color],
      disabled: "border-secondary-200 text-secondary-200 hover:bg-transparent",
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
        "2xl": "px-10 py-5 text-2xl",
      }[size],
    },
    contained: {
      global: "text-white font-semibold border border-2 border-transparent",
      color: {
        primary: "bg-primary-500",
        secondary: "bg-secondary-500",
        success: "bg-success-500",
        info: "bg-info-500",
        warning: "bg-warning-500",
        error: "bg-error-500",
      }[color],
      hover: {
        primary: "hover:bg-primary-400",
        secondary: "hover:bg-secondary-400",
        success: "hover:bg-success-400",
        info: "hover:bg-info-400",
        warning: "hover:bg-warning-400",
        error: "hover:bg-error-400",
      }[color],
      disabled: "bg-secondary-100 text-secondary-200 hover:bg-secondary-100",
      size: {
        sm: "px-1 py-1 text-sm",
        md: "px-2 py-2 text-md",
        lg: "px-3 py-3 text-lg",
        xl: "px-4 py-4 text-xl",
        "2xl": "px-5 py-5 text-2xl",
      }[size],
    },
  }[variant];
  return (
    <button
      disabled={disabled}
      className={[
        style.global,
        style.color,
        style.size,
        style.hover,
        Style,
        Shadow,
        font,
        rounded,
        disabled && style.disabled,
      ].join(" ")}
      onClick={handleClick}
    >
      {startIcon && <span>{startIcon}</span>}
      {children && <span className="px-2">{children}</span>}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
}
