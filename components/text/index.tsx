import React from "react";
import { TextTypes } from "@/types/TextTypes";

export default function Text({
  children,
  text = "text-base",
  font = "font-normal",
  classes,
  ...props
}: TextTypes) {
  return (
    <p className={[text, font, classes].join(" ")} {...props}>
      {children}
    </p>
  );
}
