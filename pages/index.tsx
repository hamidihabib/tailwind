import React from "react";
import Button from "@/components/button";
import Icon from "@/icons";
import BreakPoint from "@/components/breakPoint";

export default function Home() {
  const b = BreakPoint()
  return (
    <div>
      Home
      <div style={{margin: 10, display: "flex", gap: 10}}>
        <Button color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
        <Button color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
        <Button disabled color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
      </div>
      <div style={{display: "flex", gap: 10, margin: 10}}>
        <Button size="md" color="error" >Button</Button>
        <Button size="md" color="error" >Button</Button>
        <Button size="md" color="error" >Button</Button>
      </div>
      <h1>
       BreakPoint: {b}
      </h1>
    </div>
  );
}
