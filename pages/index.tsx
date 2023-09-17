import React from "react";
import Button from "@/components/button";

export default function Home() {
  return (
    <div>
      Home
      <div>
        <Button variant="contained" color="error" size="sm">Button</Button>
        <Button variant="contained" color="error" size="md">Button</Button>
        <Button variant="contained" disabled shadow="shadow-sm" color="error" size="lg">TEST BUTTON</Button>
      </div>
    </div>
  );
}
