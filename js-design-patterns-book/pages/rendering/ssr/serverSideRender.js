import { useState, useEffect } from "react";

const ServerSideRender = ({ localTime }) => {
  return (
    <>
      <h1>Hello Sushi</h1>
      <h2>It is title {localTime}</h2>
    </>
  );
};

/*
The Next.js framework also supports SSR. 
This pre-renders a page on the server on every request. 
It can be accomplished by exporting an async function called getServerSideProps() 
from a page as follows.
*/
export const getServerSideProps = (ctx) => {
  return {
    props: {
      localTime: new Date().toLocaleTimeString(),
    },
  };
};

export default ServerSideRender;
