import React from "react";
type TextProps = {
  children?: React.ReactNode;
  text?:
    | "sm"
    | "md"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
};

export default function Text({ children, text = "base", ...props }: TextProps) {
  return (
    <p className={`text-${text}`} {...props}>
      {children}
    </p>
  );
}
