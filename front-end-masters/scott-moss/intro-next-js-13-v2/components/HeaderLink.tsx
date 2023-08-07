"use client";

// let's import server component Header into client component header link.

import { useState } from "react";
import { Header } from "./Header";

export const HeaderLink = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>u will see a header below</h3>
      <Header />
      <h1>LOGO link ServerComponent</h1>;
    </>
  );
};
