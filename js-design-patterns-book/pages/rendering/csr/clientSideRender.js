import { useState, useEffect } from "react";

const CLientSideRender = () => {
  const [localeTime, setLocaleTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setLocaleTime(new Date().toLocaleTimeString());
    }, 5000);
  }, []);

  return (
    <>
      <h1>Hello Sushi</h1>
      <h2>It is {localeTime}</h2>
    </>
  );
};

export default CLientSideRender;

// Page URL http://localhost:3000/csr/clientSideRender
