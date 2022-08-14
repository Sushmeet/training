// What is the difference between passing useState an updater function
// or just passing the next state directly

import { useState } from "react";

const Updater = () => {
  const [increment, setIncrement] = useState(42);
  const incrememntValue = () => {
    // setIncrement(increment + 1);
    // The above code won't work, because react doesn't update the value of the state
    // till the next render cycle.

    // So if u truly want this to work then send an updater function, which works on the previous
    // state right away.
    setIncrement((prevState) => prevState + 1);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>updatrer</h2>
      <button
        onClick={() => {
          incrememntValue();
          incrememntValue();
          incrememntValue();
        }}
      >
        Increment me by 3
      </button>
      <button onClick={() => setIncrement(increment + 1)}>
        Increment me by 1
      </button>
      <p>Your age is {increment}</p>
    </div>
  );
};

export default Updater;
