import { useState } from "react";

const State = () => {
  const [greenColor, setGreenColor] = useState(true);
  return (
    <>
      <h1>Use State Hook</h1>
      <h2
        onClick={() => setGreenColor((currColor) => !currColor)}
        style={greenColor ? { color: "green" } : { color: "red" }}
      >
        Use State Example click
      </h2>
    </>
  );
};

export default State;
