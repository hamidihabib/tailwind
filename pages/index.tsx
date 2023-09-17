import React from "react";
import Button from "@/components/button";

export default function Home() {
  return (
    <div>
      Home
      <div>
        <Button variant="text" color="error" size="sm">Button</Button>
        <Button variant="text" color="error" size="md">Button</Button>
        <Button variant="text" shadow="shadow-sm" disabled color="error" size="2xl">TEST BUTTON</Button>
      </div>
    </div>
  );
}
