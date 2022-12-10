import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Some: NextPage = () => {
  return (
    <>
      <h1>hello</h1>
      {/* <img src="/vercel.svg" alt="Vercel Logo" /> */}
      <Image src="vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </>
  );
};

export default Some;
