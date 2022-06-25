import { useState, useEffect } from "react";

const ServerSideRender = (props) => {
  return (
    <>
      <h1>Hello Sushi</h1>
      <h2>It is title tile {props.localTime}</h2>
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      localTime: new Date().toLocaleTimeString(),
    },
  };
};

export default ServerSideRender;
