import React from "react";
import Button from "@/components/button";
import Icon from "@/icons";
import BreakPoint from "@/components/breakPoint";

export default function Home() {
  const b = BreakPoint()
  return (
    <div>
      Home
      <div>
        <Button size="sm" color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
        <Button size="md" color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
        <Button size="lg" color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
        <Button size="xl" color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
        <Button size="2xl" color="error" endIcon={<Icon name="moon"/>} startIcon={<Icon name="chevronLeft"/>}>Button</Button>
      </div>
      <div>
        <Button size="sm" color="info" variant="outlined" >Button</Button>
        <Button size="md" color="info" variant="outlined" >Button</Button>
        <Button size="lg" color="info" variant="outlined" >Button</Button>
        <Button size="xl" color="info" variant="outlined" >Button</Button>
        <Button size="2xl" color="info" variant="outlined" >Button</Button>
      </div>
      <h1>
       BreakPoint: {b}
      </h1>
    </div>
  );
}
