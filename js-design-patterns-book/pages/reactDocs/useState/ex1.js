// useState is a React Hook that lets u add a state variable to a react component.
// call usestate at the top of ur component to declare one or more state.

// useState returns an array with exactly two items:
// The current state of this state variable, initially set to the initial state you provided.
// The set function that lets you change it to any other value in response to interaction.

import { useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  const increment = (stuff) => {
    console.log("SyntehticEvent----", stuff);
    // so to increment state using the set function u can do 2 things
    // pass it a function, and then the function gets called every time the button is clicked on.
    // or just increate state right there  like
    // setCount(count + 1);
    console.log("before count---", count);
    setCount(() => count + 1);
    console.log(
      "Incremented count by 1, yet it remains the same does not increment, will increment on next render cycle.--",
      count
    );
  };

  return (
    <>
      Counter
      <button
        style={{
          margin: "10px",
          width: "100px",
          height: "50px",
          borderRadius: "10px",
        }}
        onClick={increment}
      >
        Increment me by 1
      </button>
      <p>Num of times button pressed {count}</p>
    </>
  );
};

export default Example1;
